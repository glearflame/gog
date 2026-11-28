import { createHmac, randomBytes, randomUUID } from 'node:crypto';
import { OAuth2Client } from 'google-auth-library';
import type { PublicUser } from '@gog/shared';
import { config } from './config.js';
import type { Database, UserRecord } from './db/types.js';

export const SESSION_COOKIE = 'gog_session';

export const cleanName = (value: unknown, fallback = 'Jogador') => {
  const name = String(value ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 24);
  return name.length >= 2 ? name : fallback;
};

export const toPublicUser = (user: UserRecord): PublicUser => ({
  id: user.id, publicId: user.publicId, name: user.name, avatarUrl: user.avatarUrl,
  skin: user.skin, role: user.role, stats: user.stats,
});

export class AuthService {
  private google = new OAuth2Client(config.googleClientId || undefined);

  constructor(private db: Database) {}

  hashToken(token: string): string {
    return createHmac('sha256', config.sessionSecret).update(token).digest('hex');
  }

  async googleLogin(credential: string): Promise<UserRecord> {
    if (!config.googleClientId) throw new Error('Login Google ainda não foi configurado.');
    const ticket = await this.google.verifyIdToken({ idToken: credential, audience: config.googleClientId });
    const payload = ticket.getPayload();
    if (!payload?.sub || payload.email_verified === false) throw new Error('Não foi possível validar sua conta Google.');
    return this.db.findOrCreateUser({
      googleSub: payload.sub,
      email: payload.email || null,
      name: cleanName(payload.name, payload.email?.split('@')[0] || 'Jogador'),
      avatarUrl: typeof payload.picture === 'string' && /^https:\/\//.test(payload.picture) ? payload.picture.slice(0, 2048) : '',
    }, randomUUID(), `GOG-${randomBytes(4).toString('hex').toUpperCase()}`);
  }

  async devLogin(name: unknown): Promise<UserRecord> {
    if (!config.allowDevAuth) throw new Error('Acesso de teste desativado.');
    return this.db.findOrCreateUser({
      googleSub: null, email: null, name: cleanName(name, `Jogador ${randomBytes(2).toString('hex').toUpperCase()}`), avatarUrl: '',
    }, randomUUID(), `GOG-${randomBytes(4).toString('hex').toUpperCase()}`);
  }

  async openSession(userId: string): Promise<string> {
    const token = randomBytes(32).toString('base64url');
    await this.db.createSession(randomUUID(), this.hashToken(token), userId, Date.now() + config.sessionTtlMs);
    return token;
  }

  async userFromToken(token: string | undefined): Promise<UserRecord | null> {
    if (!token || token.length > 128) return null;
    return this.db.getSessionUser(this.hashToken(token), Date.now());
  }

  async closeSession(token: string | undefined): Promise<void> {
    if (token) await this.db.deleteSession(this.hashToken(token));
  }
}

export function cookieToken(header: string | undefined): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(';')) {
    const [key, ...value] = part.trim().split('=');
    if (key === SESSION_COOKIE) return decodeURIComponent(value.join('='));
  }
  return undefined;
}
