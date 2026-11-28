import { existsSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

for (const candidate of [path.resolve(rootDir, '.env'), path.resolve(rootDir, '.env.example')]) {
  if (existsSync(candidate)) {
    try { process.loadEnvFile(candidate); } catch { /* ambiente já configurado */ }
    break;
  }
}

const production = process.env.NODE_ENV === 'production';
const databaseUrl = process.env.SUPABASE_DB_URL?.trim() || process.env.DATABASE_URL?.trim() || '';
const googleClientId = process.env.GOOGLE_CLIENT_ID?.trim() || '';
const sessionSecret = process.env.SESSION_SECRET || 'desenvolvimento-local-gog-battle-royale';

if (production && !databaseUrl) throw new Error('DATABASE_URL é obrigatória em produção.');
if (production && !googleClientId) throw new Error('GOOGLE_CLIENT_ID é obrigatória em produção.');
if (production && sessionSecret.length < 32) throw new Error('SESSION_SECRET deve ter ao menos 32 caracteres.');

export const config = {
  production,
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT) || 3001,
  publicUrl: process.env.PUBLIC_URL || 'http://localhost:5173',
  googleClientId,
  sessionSecret,
  databaseUrl,
  allowDevAuth: !production && process.env.ALLOW_DEV_AUTH !== 'false',
  webDist: process.env.WEB_DIST || path.resolve(rootDir, 'apps/web/dist'),
  sessionTtlMs: 30 * 24 * 60 * 60 * 1000,
};
