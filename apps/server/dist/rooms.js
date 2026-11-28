import { randomBytes } from 'node:crypto';
import { MAX_PLAYERS } from '@gog/shared';
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const makeCode = () => Array.from(randomBytes(6), (byte) => CODE_ALPHABET[byte % CODE_ALPHABET.length]).join('');
const cleanRoomName = (name) => String(name || 'Sala de blocos').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 28) || 'Sala de blocos';
export class RoomManager {
    listener;
    rooms = new Map();
    byUser = new Map();
    constructor(listener) {
        this.listener = listener;
    }
    get roomList() {
        return [...this.rooms.values()]
            .filter((room) => room.visibility === 'public' && room.status !== 'playing')
            .sort((a, b) => b.members.size - a.members.size || a.createdAt - b.createdAt)
            .slice(0, 50)
            .map((room) => ({ code: room.code, name: room.name, mode: room.mode, players: room.members.size, maxPlayers: MAX_PLAYERS, matchmaking: room.matchmaking }));
    }
    getRoom(code) { return code ? this.rooms.get(code) : undefined; }
    getUserRoom(userId) { return this.rooms.get(this.byUser.get(userId) || ''); }
    getUserRoomCode(userId) { return this.byUser.get(userId); }
    snapshot(room) {
        return {
            code: room.code, name: room.name, visibility: room.visibility, mode: room.mode, status: room.status,
            hostId: room.hostId, members: [...room.members.values()].map((user) => ({
                id: user.id, publicId: user.publicId, name: user.name, avatarUrl: user.avatarUrl, skin: user.skin,
            })),
            maxPlayers: MAX_PLAYERS, matchmaking: room.matchmaking, ranked: room.ranked,
            countdownEndsAt: room.countdownEndsAt, createdAt: room.createdAt,
        };
    }
    create(user, values, matchmaking = false) {
        this.ensureCanLeaveMatch(user.id);
        this.leave(user.id, false);
        let code = makeCode();
        while (this.rooms.has(code))
            code = makeCode();
        const mode = values.mode === 'duo' || values.mode === 'squad' ? values.mode : 'solo';
        const room = {
            code, name: matchmaking ? `Partida rápida · ${mode}` : cleanRoomName(values.name),
            visibility: matchmaking || values.visibility === 'public' ? 'public' : 'private', mode,
            status: 'waiting', hostId: user.id, members: new Map([[user.id, user]]), matchmaking,
            ranked: matchmaking, countdownEndsAt: null, readySince: null, createdAt: Date.now(),
        };
        this.rooms.set(code, room);
        this.byUser.set(user.id, code);
        this.listener.roomUpdated(room);
        this.listener.roomListUpdated();
        return room;
    }
    join(user, rawCode) {
        this.ensureCanLeaveMatch(user.id);
        const code = String(rawCode || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
        const room = this.rooms.get(code);
        if (!room)
            throw new Error('Sala não encontrada. Confira o código do convite.');
        if (room.status === 'playing')
            throw new Error('Esta partida já começou.');
        if (room.members.size >= MAX_PLAYERS && !room.members.has(user.id))
            throw new Error('A sala está cheia.');
        const previous = this.getUserRoom(user.id);
        if (previous?.code === room.code)
            return room;
        this.leave(user.id, false);
        room.members.set(user.id, user);
        this.byUser.set(user.id, room.code);
        if (room.matchmaking && room.members.size >= 2 && !room.readySince)
            room.readySince = Date.now();
        this.listener.roomUpdated(room);
        this.listener.roomListUpdated();
        return room;
    }
    leave(userId, notify = true) {
        const room = this.getUserRoom(userId);
        if (!room)
            return;
        if (room.status === 'playing')
            throw new Error('Você não pode sair da sala durante a partida.');
        room.members.delete(userId);
        this.byUser.delete(userId);
        if (notify)
            this.listener.roomUpdated(room);
        if (!room.members.size) {
            this.rooms.delete(room.code);
        }
        else {
            if (room.hostId === userId)
                room.hostId = room.members.keys().next().value || '';
            if (room.members.size < 2) {
                room.readySince = null;
                room.countdownEndsAt = null;
                if (room.status === 'countdown')
                    room.status = 'waiting';
            }
            this.listener.roomUpdated(room);
        }
        this.listener.roomListUpdated();
    }
    update(user, values) {
        const room = this.getUserRoom(user.id);
        if (!room || room.hostId !== user.id)
            throw new Error('Somente o dono pode alterar a sala.');
        if (room.matchmaking)
            throw new Error('A fila rápida é configurada automaticamente.');
        if (room.status !== 'waiting')
            throw new Error('A sala não pode ser alterada agora.');
        if (values.name !== undefined)
            room.name = cleanRoomName(values.name);
        if (values.visibility !== undefined)
            room.visibility = values.visibility === 'public' ? 'public' : 'private';
        if (values.mode === 'solo' || values.mode === 'duo' || values.mode === 'squad')
            room.mode = values.mode;
        this.listener.roomUpdated(room);
        this.listener.roomListUpdated();
    }
    start(user) {
        const room = this.getUserRoom(user.id);
        if (!room || room.hostId !== user.id)
            throw new Error('Somente o dono pode iniciar.');
        if (room.matchmaking)
            throw new Error('A partida rápida inicia automaticamente.');
        if (room.status !== 'waiting')
            throw new Error('A partida já foi iniciada.');
        if (room.members.size < 2)
            throw new Error('Convide pelo menos mais um jogador.');
        this.begin(room);
    }
    quickplay(user, rawMode) {
        const mode = rawMode === 'duo' || rawMode === 'squad' ? rawMode : 'solo';
        const current = this.getUserRoom(user.id);
        if (current?.status === 'playing')
            throw new Error('Você já está em uma partida.');
        if (current && current.members.size > 1)
            throw new Error('Saia da sala atual para entrar na fila rápida individual.');
        const room = [...this.rooms.values()].find((candidate) => candidate.matchmaking && candidate.mode === mode && candidate.status !== 'playing' && candidate.members.size < MAX_PLAYERS);
        return room ? this.join(user, room.code) : this.create(user, { mode, visibility: 'public' }, true);
    }
    tick(now = Date.now()) {
        for (const room of this.rooms.values()) {
            if (!room.matchmaking || room.status === 'playing')
                continue;
            if (room.members.size < 2) {
                room.readySince = null;
                room.countdownEndsAt = null;
                room.status = 'waiting';
                continue;
            }
            if (!room.readySince)
                room.readySince = now;
            if (room.members.size === MAX_PLAYERS && !room.countdownEndsAt) {
                room.countdownEndsAt = now + 5000;
                room.status = 'countdown';
                this.listener.roomUpdated(room);
            }
            const shouldStart = room.countdownEndsAt ? now >= room.countdownEndsAt : now - room.readySince >= 20_000;
            if (shouldStart)
                this.begin(room);
        }
    }
    finish(roomCode) {
        const room = this.rooms.get(roomCode);
        if (!room)
            return;
        if (room.matchmaking) {
            for (const userId of room.members.keys())
                this.byUser.delete(userId);
            this.rooms.delete(room.code);
            this.listener.roomRemoved(room);
            this.listener.roomListUpdated();
            return;
        }
        room.status = 'waiting';
        room.countdownEndsAt = null;
        room.readySince = null;
        this.listener.roomUpdated(room);
        this.listener.roomListUpdated();
    }
    profileUpdated(user) {
        for (const room of this.rooms.values()) {
            if (room.members.has(user.id)) {
                room.members.set(user.id, user);
                this.listener.roomUpdated(room);
            }
        }
    }
    begin(room) {
        if (room.status === 'playing' || room.members.size < 2)
            return;
        room.status = 'playing';
        room.countdownEndsAt = null;
        this.listener.roomListUpdated();
        this.listener.startMatch(room);
    }
    ensureCanLeaveMatch(userId) {
        if (this.getUserRoom(userId)?.status === 'playing')
            throw new Error('A partida atual ainda não terminou.');
    }
}
//# sourceMappingURL=rooms.js.map