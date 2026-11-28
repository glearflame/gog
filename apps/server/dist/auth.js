import { createHmac, randomBytes, randomUUID } from 'node:crypto';
import { OAuth2Client } from 'google-auth-library';
import { config } from './config.js';
export const SESSION_COOKIE = 'gog_session';
export const cleanName = (value, fallback = 'Jogador') => {
    const name = String(value ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 24);
    return name.length >= 2 ? name : fallback;
};
export const toPublicUser = (user) => ({
    id: user.id, publicId: user.publicId, name: user.name, avatarUrl: user.avatarUrl,
    skin: user.skin, role: user.role, stats: user.stats,
});
export class AuthService {
    db;
    google = new OAuth2Client(config.googleClientId || undefined);
    constructor(db) {
        this.db = db;
    }
    hashToken(token) {
        return createHmac('sha256', config.sessionSecret).update(token).digest('hex');
    }
    async googleLogin(credential) {
        if (!config.googleClientId)
            throw new Error('Login Google ainda não foi configurado.');
        const ticket = await this.google.verifyIdToken({ idToken: credential, audience: config.googleClientId });
        const payload = ticket.getPayload();
        if (!payload?.sub || payload.email_verified === false)
            throw new Error('Não foi possível validar sua conta Google.');
        return this.db.findOrCreateUser({
            googleSub: payload.sub,
            email: payload.email || null,
            name: cleanName(payload.name, payload.email?.split('@')[0] || 'Jogador'),
            avatarUrl: typeof payload.picture === 'string' && /^https:\/\//.test(payload.picture) ? payload.picture.slice(0, 2048) : '',
        }, randomUUID(), `GOG-${randomBytes(4).toString('hex').toUpperCase()}`);
    }
    async devLogin(name) {
        if (!config.allowDevAuth)
            throw new Error('Acesso de teste desativado.');
        return this.db.findOrCreateUser({
            googleSub: null, email: null, name: cleanName(name, `Jogador ${randomBytes(2).toString('hex').toUpperCase()}`), avatarUrl: '',
        }, randomUUID(), `GOG-${randomBytes(4).toString('hex').toUpperCase()}`);
    }
    async openSession(userId) {
        const token = randomBytes(32).toString('base64url');
        await this.db.createSession(randomUUID(), this.hashToken(token), userId, Date.now() + config.sessionTtlMs);
        return token;
    }
    async userFromToken(token) {
        if (!token || token.length > 128)
            return null;
        return this.db.getSessionUser(this.hashToken(token), Date.now());
    }
    async closeSession(token) {
        if (token)
            await this.db.deleteSession(this.hashToken(token));
    }
}
export function cookieToken(header) {
    if (!header)
        return undefined;
    for (const part of header.split(';')) {
        const [key, ...value] = part.trim().split('=');
        if (key === SESSION_COOKIE)
            return decodeURIComponent(value.join('='));
    }
    return undefined;
}
//# sourceMappingURL=auth.js.map