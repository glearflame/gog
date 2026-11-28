import { config } from '../config.js';
import { MemoryDatabase } from './memory.js';
import { PostgresDatabase } from './postgres.js';
import { lookup as dnsLookup } from 'node:dns';
import { promisify } from 'node:util';
import type { Database } from './types.js';

const lookup = promisify(dnsLookup);

/**
 * Resolve o hostname da connection string para IPv4, evitando ENETUNREACH
 * em redes sem IPv6. Retorna os componentes da URL com o IP resolvido.
 */
async function resolveDatabaseUrl(url: string): Promise<string> {
  try {
    const parsed = new URL(url);
    const { address } = await lookup(parsed.hostname, { family: 4 });
    if (address) {
      parsed.hostname = address;
      return parsed.toString();
    }
  } catch {
    /* se falhar o lookup, usa a URL original */
  }
  return url;
}

export async function createDatabase(): Promise<Database> {
  if (!config.databaseUrl) return new MemoryDatabase();

  const resolvedUrl = await resolveDatabaseUrl(config.databaseUrl);
  const database = new PostgresDatabase(resolvedUrl, config.production);
  try {
    await database.migrate();
  } catch (error) {
    console.error('Falha ao executar migrate (continuando sem schema):', error);
  }
  return database;
}

export * from './types.js';
