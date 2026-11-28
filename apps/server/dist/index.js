import path from 'node:path';
import { existsSync } from 'node:fs';
import Fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import fastifyStatic from '@fastify/static';
import { config } from './config.js';
import { createDatabase } from './db/index.js';
import { AuthService } from './auth.js';
import { registerRoutes } from './routes.js';
import { NetworkHub } from './network.js';
const app = Fastify({ logger: { level: process.env.LOG_LEVEL || 'info' }, trustProxy: true });
const db = await createDatabase();
const auth = new AuthService(db);
const hub = new NetworkHub(db, auth);
await app.register(fastifyCookie);
await registerRoutes(app, db, auth, (user) => hub.profileUpdated(user));
if (existsSync(config.webDist)) {
    await app.register(fastifyStatic, { root: path.resolve(config.webDist), prefix: '/' });
    app.setNotFoundHandler((request, reply) => {
        if (request.method === 'GET' && !request.url.startsWith('/api/') && !request.url.startsWith('/ws')) {
            return reply.sendFile('index.html');
        }
        return reply.code(404).send({ error: 'Não encontrado.' });
    });
}
hub.attach(app.server);
const shutdown = async () => {
    hub.close();
    await app.close();
    await db.close();
    process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
try {
    await app.listen({ host: config.host, port: config.port });
    if (!db.persistent)
        app.log.warn('Banco em memória: contas e resultados serão perdidos ao reiniciar. Configure DATABASE_URL para persistir.');
    if (!config.googleClientId)
        app.log.warn('GOOGLE_CLIENT_ID não configurado. Somente o acesso de teste local está disponível.');
}
catch (error) {
    app.log.error(error);
    await db.close();
    process.exit(1);
}
//# sourceMappingURL=index.js.map