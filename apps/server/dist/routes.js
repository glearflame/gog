import { z } from 'zod';
import { SKINS } from '@gog/shared';
import { SESSION_COOKIE, cleanName, toPublicUser } from './auth.js';
import { config } from './config.js';
const credentials = z.object({ credential: z.string().min(20).max(8192) });
const devLogin = z.object({ name: z.string().max(40).optional() });
const profileUpdate = z.object({
    name: z.string().min(2).max(24).optional(),
    skin: z.enum(SKINS).optional(),
}).refine((value) => value.name !== undefined || value.skin !== undefined);
export async function registerRoutes(app, db, auth, onProfileUpdated = () => { }) {
    const cookie = (reply, token) => reply.setCookie(SESSION_COOKIE, token, {
        path: '/', httpOnly: true, sameSite: 'lax', secure: config.production, maxAge: Math.floor(config.sessionTtlMs / 1000),
    });
    const currentUser = async (request) => auth.userFromToken(request.cookies[SESSION_COOKIE]);
    const requireUser = async (request, reply) => {
        const user = await currentUser(request);
        if (!user)
            await reply.code(401).send({ error: 'Faça login para continuar.' });
        return user;
    };
    app.get('/api/health', async () => ({ ok: true, database: db.persistent ? 'postgresql' : 'memory', time: Date.now() }));
    app.get('/api/config', async () => ({ googleClientId: config.googleClientId, devAuth: config.allowDevAuth, production: config.production }));
    app.post('/api/auth/google', async (request, reply) => {
        const body = credentials.safeParse(request.body);
        if (!body.success)
            return reply.code(400).send({ error: 'Credencial Google inválida.' });
        try {
            const user = await auth.googleLogin(body.data.credential);
            cookie(reply, await auth.openSession(user.id));
            return { user: toPublicUser(user) };
        }
        catch (error) {
            request.log.warn({ error }, 'Falha no login Google');
            return reply.code(401).send({ error: error instanceof Error ? error.message : 'Falha no login Google.' });
        }
    });
    app.post('/api/auth/dev', async (request, reply) => {
        if (!config.allowDevAuth)
            return reply.code(404).send({ error: 'Não encontrado.' });
        const body = devLogin.safeParse(request.body);
        if (!body.success)
            return reply.code(400).send({ error: 'Nome inválido.' });
        const user = await auth.devLogin(body.data.name);
        cookie(reply, await auth.openSession(user.id));
        return { user: toPublicUser(user) };
    });
    app.post('/api/auth/logout', async (request, reply) => {
        await auth.closeSession(request.cookies[SESSION_COOKIE]);
        reply.clearCookie(SESSION_COOKIE, { path: '/' });
        return { ok: true };
    });
    app.get('/api/me', async (request, reply) => {
        const user = await requireUser(request, reply);
        if (user)
            return { user: toPublicUser(user) };
    });
    app.patch('/api/me', async (request, reply) => {
        const user = await requireUser(request, reply);
        if (!user)
            return;
        const body = profileUpdate.safeParse(request.body);
        if (!body.success)
            return reply.code(400).send({ error: 'Escolha um nome de 2 a 24 caracteres e uma skin válida.' });
        const updated = await db.updateProfile(user.id, {
            ...(body.data.name !== undefined ? { name: cleanName(body.data.name) } : {}),
            ...(body.data.skin !== undefined ? { skin: body.data.skin } : {}),
        });
        if (!updated)
            return reply.code(404).send({ error: 'Perfil não encontrado.' });
        onProfileUpdated(updated);
        return { user: toPublicUser(updated) };
    });
    app.get('/api/history', async (request, reply) => {
        const user = await requireUser(request, reply);
        if (user)
            return { history: await db.getHistory(user.id) };
    });
    app.get('/api/leaderboard', async (request, reply) => {
        const user = await requireUser(request, reply);
        if (user)
            return { leaderboard: await db.getLeaderboard() };
    });
}
//# sourceMappingURL=routes.js.map