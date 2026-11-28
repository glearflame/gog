import type { Server } from 'node:http';
import { WebSocket, WebSocketServer } from 'ws';
import { z } from 'zod';
import type { MatchResult, ServerMessage } from '@gog/shared';
import { AuthService, cookieToken, toPublicUser } from './auth.js';
import type { Database, UserRecord } from './db/types.js';
import { Match } from './match.js';
import { RoomManager, type Room, type RoomListener } from './rooms.js';

interface Client {
  socket: WebSocket;
  user: UserRecord;
  window: number;
  count: number;
  inputWindow: number;
  inputCount: number;
  rtt: number;
}

const envelope = z.object({
  type: z.string().min(1).max(40),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export class NetworkHub implements RoomListener {
  private wss = new WebSocketServer({ noServer: true, maxPayload: 16 * 1024 });
  private clients = new Set<Client>();
  private byUser = new Map<string, Client>();
  private matches = new Map<string, Match>();
  private matchByUser = new Map<string, Match>();
  private rooms: RoomManager;
  private roomTicker: NodeJS.Timeout;
  private pingTicker: NodeJS.Timeout;

  constructor(private db: Database, private auth: AuthService) {
    this.rooms = new RoomManager(this);
    this.roomTicker = setInterval(() => this.rooms.tick(), 1000);
    this.roomTicker.unref();
    this.pingTicker = setInterval(() => {
      for (const client of this.clients) this.send(client, { type: 'ping', at: Date.now() });
    }, 5000);
    this.pingTicker.unref();
  }

  attach(server: Server): void {
    server.on('upgrade', async (request, socket, head) => {
      if (!request.url?.startsWith('/ws')) return;
      try {
        const user = await this.auth.userFromToken(cookieToken(request.headers.cookie));
        if (!user) {
          socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
          socket.destroy();
          return;
        }
        this.wss.handleUpgrade(request, socket, head, (ws) => this.connected(ws, user));
      } catch {
        socket.destroy();
      }
    });
  }

  roomUpdated(room: Room): void {
    const message: ServerMessage = { type: 'room.state', room: this.rooms.snapshot(room) };
    for (const userId of room.members.keys()) this.sendToUser(userId, message);
  }

  roomRemoved(room: Room): void {
    for (const userId of room.members.keys()) this.sendToUser(userId, { type: 'room.state', room: null });
  }

  roomListUpdated(): void {
    this.broadcast({ type: 'room.list', rooms: this.rooms.roomList });
  }

  notice(userId: string, message: string, level: 'info' | 'success' | 'error' = 'info'): void {
    this.sendToUser(userId, { type: 'notice', level, message });
  }

  startMatch(room: Room): void {
    let match: Match;
    match = new Match(room, {
      snapshot: (snapshot) => this.sendToMatch(match, { type: 'match.snapshot', snapshot }),
      shot: (shot) => this.sendToMatch(match, { type: 'match.shot', shot }),
      notice: (userId, message) => this.sendToUser(userId, { type: 'match.notice', message }),
      end: (result) => { void this.finishMatch(match, result); },
    });
    this.matches.set(room.code, match);
    for (const userId of match.players.keys()) this.matchByUser.set(userId, match);
    this.sendToMatch(match, { type: 'match.start', match: match.getStart() });
    match.startTimer();
    this.broadcastPresence();
  }

  profileUpdated(user: UserRecord): void {
    const client = this.byUser.get(user.id);
    if (client) {
      client.user = user;
      this.send(client, { type: 'hello', user: toPublicUser(user), serverTime: Date.now() });
    }
    this.rooms.profileUpdated(user);
    this.broadcastPresence();
  }

  close(): void {
    clearInterval(this.roomTicker);
    clearInterval(this.pingTicker);
    for (const match of this.matches.values()) match.close();
    for (const client of this.clients) client.socket.terminate();
    this.wss.close();
  }

  private connected(socket: WebSocket, user: UserRecord): void {
    const previous = this.byUser.get(user.id);
    if (previous) {
      previous.socket.close(4001, 'Sessão substituída por outra conexão.');
      this.clients.delete(previous);
    }
    const client: Client = { socket, user, window: Date.now(), count: 0, inputWindow: Date.now(), inputCount: 0, rtt: 0 };
    this.clients.add(client);
    this.byUser.set(user.id, client);
    this.send(client, { type: 'hello', user: toPublicUser(user), serverTime: Date.now() });
    this.send(client, { type: 'room.list', rooms: this.rooms.roomList });
    const room = this.rooms.getUserRoom(user.id);
    if (room) this.send(client, { type: 'room.state', room: this.rooms.snapshot(room) });
    const match = this.matchByUser.get(user.id);
    if (match) {
      match.setConnected(user.id, true);
      this.send(client, { type: 'match.start', match: match.getStart() });
      this.send(client, { type: 'match.snapshot', snapshot: match.snapshot() });
    }
    this.broadcastPresence();

    socket.on('message', (data) => {
      const now = Date.now();
      if (now - client.window > 1000) { client.window = now; client.count = 0; }
      if (++client.count > 240) return;
      let message: unknown;
      try { message = JSON.parse(data.toString()); } catch { return; }
      const parsed = envelope.safeParse(message);
      if (!parsed.success) return;
      this.handle(client, parsed.data.type, parsed.data.payload || {}, now);
    });
    socket.on('close', () => this.disconnected(client));
    socket.on('error', () => this.disconnected(client));
  }

  private handle(client: Client, type: string, payload: Record<string, unknown>, now: number): void {
    try {
      switch (type) {
        case 'pong': {
          const at = Number(payload.at);
          if (Number.isFinite(at) && Math.abs(now - at) < 30_000) {
            client.rtt = Math.max(0, now - at);
            this.matchByUser.get(client.user.id)?.setLatency(client.user.id, client.rtt);
          }
          break;
        }
        case 'room.create':
          this.rooms.create(client.user, payload);
          this.broadcastPresence();
          break;
        case 'room.join':
          this.rooms.join(client.user, payload.code);
          this.broadcastPresence();
          break;
        case 'room.leave':
          this.rooms.leave(client.user.id);
          this.send(client, { type: 'room.state', room: null });
          this.broadcastPresence();
          break;
        case 'room.update':
          this.rooms.update(client.user, payload);
          break;
        case 'room.start':
          this.rooms.start(client.user);
          break;
        case 'room.invite': {
          const room = this.rooms.getUserRoom(client.user.id);
          if (!room || room.hostId !== client.user.id) throw new Error('Somente o dono pode enviar convites.');
          const publicId = String(payload.publicId || '').toUpperCase().trim();
          const target = [...this.clients.values()].find((entry) => entry.user.publicId === publicId);
          if (!target) throw new Error('Jogador não encontrado ou offline.');
          if (target.user.id === client.user.id) throw new Error('Você já está nesta sala.');
          this.send(target, { type: 'room.invite', from: { name: client.user.name, publicId: client.user.publicId }, code: room.code, roomName: room.name, mode: room.mode });
          this.notice(client.user.id, `Convite enviado para ${target.user.name}.`, 'success');
          break;
        }
        case 'queue.join':
          this.rooms.quickplay(client.user, payload.mode);
          this.notice(client.user.id, 'Você entrou na fila. A partida começará automaticamente.', 'success');
          this.broadcastPresence();
          break;
        case 'match.input': {
          const match = this.matchByUser.get(client.user.id);
          if (now - client.inputWindow > 1000) { client.inputWindow = now; client.inputCount = 0; }
          if (++client.inputCount > 45) return;
          match?.setInput(client.user.id, payload);
          break;
        }
        case 'match.fire': this.matchByUser.get(client.user.id)?.fire(client.user.id, payload); break;
        case 'match.reload': this.matchByUser.get(client.user.id)?.reload(client.user.id); break;
        case 'match.heal': this.matchByUser.get(client.user.id)?.heal(client.user.id); break;
        case 'match.build': this.matchByUser.get(client.user.id)?.build(client.user.id); break;
        case 'match.select': this.matchByUser.get(client.user.id)?.select(client.user.id, payload); break;
      }
    } catch (error) {
      this.notice(client.user.id, error instanceof Error ? error.message : 'Não foi possível concluir a ação.', 'error');
    }
  }

  private disconnected(client: Client): void {
    if (this.byUser.get(client.user.id) !== client) return;
    this.byUser.delete(client.user.id);
    this.clients.delete(client);
    const match = this.matchByUser.get(client.user.id);
    if (match) match.setConnected(client.user.id, false);
    else {
      try { this.rooms.leave(client.user.id, false); } catch { /* partida já encerrando */ }
    }
    this.broadcastPresence();
  }

  private async finishMatch(match: Match, result: MatchResult): Promise<void> {
    try {
      await this.db.recordMatch(result);
    } catch (error) {
      console.error('Falha ao persistir partida:', error);
      this.sendToMatch(match, { type: 'notice', level: 'error', message: 'A partida terminou, mas o resultado não pôde ser salvo.' });
    }
    this.sendToMatch(match, { type: 'match.end', result });
    for (const userId of match.players.keys()) this.matchByUser.delete(userId);
    this.matches.delete(match.room.code);
    this.rooms.finish(match.room.code);
    this.broadcastPresence();
  }

  private broadcastPresence(): void {
    const players = [...this.byUser.values()].map((client) => ({
      id: client.user.id, publicId: client.user.publicId, name: client.user.name, avatarUrl: client.user.avatarUrl,
      status: this.matchByUser.has(client.user.id) ? 'playing' as const : this.rooms.getUserRoom(client.user.id) ? 'room' as const : 'lobby' as const,
    }));
    this.broadcast({ type: 'presence', online: players.length, players });
  }

  private sendToMatch(match: Match, message: ServerMessage): void {
    for (const userId of match.players.keys()) this.sendToUser(userId, message);
  }

  private sendToUser(userId: string, message: ServerMessage): void {
    const client = this.byUser.get(userId);
    if (client) this.send(client, message);
  }

  private broadcast(message: ServerMessage): void {
    for (const client of this.clients) this.send(client, message);
  }

  private send(client: Client, message: ServerMessage): void {
    if (client.socket.readyState === WebSocket.OPEN) client.socket.send(JSON.stringify(message));
  }
}
