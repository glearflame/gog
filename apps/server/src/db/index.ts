import { config } from '../config.js';
import { MemoryDatabase } from './memory.js';
import { PostgresDatabase } from './postgres.js';
import { lookup as dnsLookup } from 'node:dns';
import { promisify } from 'node:util';
import type { Database } from './types.js';

const lookup = promisify(dnsLookup);

export async function createDatabase(): Promise<Database> {
  if (!config.databaseUrl) return new MemoryDatabase();

  // Força resolução IPv4 para evitar ENETUNREACH em redes sem IPv6
  let resolvedUrl = config.databaseUrl;
  try {
    const parsed = new URL(config.databaseUrl);
    const addr = await lookup(parsed.hostname, { family: 4 });
    if (addr.address) {
      parsed.hostname = addr.address;
      resolvedUrl = parsed.toString();
      console.log(`DNS resolvido: ${parsed.hostname} -> ${addr.address}`);
    }
  } catch (error) {
    console.warn(`DNS lookup falhou, usando URL original: ${error}`);
  }

  const database = new PostgresDatabase(resolvedUrl, config.production);
  try {
    await database.migrate();
  } catch (error) {
    console.error('Falha ao executar migrate (continuando sem schema):', error);
  }
  return database;
}

export * from './types.js';
