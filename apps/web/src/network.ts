import type { ServerMessage } from '@gog/shared';

type Listener = (message: ServerMessage) => void;
type StatusListener = (connected: boolean) => void;

export class GameClient {
  private socket: WebSocket | null = null;
  private listeners = new Set<Listener>();
  private statusListeners = new Set<StatusListener>();
  private closed = false;
  private retry: ReturnType<typeof setTimeout> | null = null;

  connect(): void {
    if (this.closed || this.socket?.readyState === WebSocket.OPEN || this.socket?.readyState === WebSocket.CONNECTING) return;
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    const socket = new WebSocket(`${protocol}://${location.host}/ws`);
    this.socket = socket;
    socket.onopen = () => this.statusListeners.forEach((listener) => listener(true));
    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as ServerMessage;
        if (message.type === 'ping') this.send('pong', { at: message.at });
        this.listeners.forEach((listener) => listener(message));
      } catch { /* mensagem inválida ignorada */ }
    };
    socket.onclose = () => {
      if (this.socket === socket) this.socket = null;
      this.statusListeners.forEach((listener) => listener(false));
      if (!this.closed) this.retry = setTimeout(() => this.connect(), 2000);
    };
    socket.onerror = () => socket.close();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  onStatus(listener: StatusListener): () => void {
    this.statusListeners.add(listener);
    return () => this.statusListeners.delete(listener);
  }

  send(type: string, payload: Record<string, unknown> = {}): boolean {
    if (this.socket?.readyState !== WebSocket.OPEN) return false;
    this.socket.send(JSON.stringify({ type, payload }));
    return true;
  }

  close(): void {
    this.closed = true;
    if (this.retry) clearTimeout(this.retry);
    this.socket?.close();
    this.socket = null;
    this.listeners.clear();
    this.statusListeners.clear();
  }
}
