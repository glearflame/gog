import { config } from '../config.js';
import { MemoryDatabase } from './memory.js';
import { PostgresDatabase } from './postgres.js';
import type { Database } from './types.js';

export async function createDatabase(): Promise<Database> {
  if (!config.databaseUrl) return new MemoryDatabase();
  const database = new PostgresDatabase(config.databaseUrl, config.production);
  try {
    await database.migrate();
  } catch (error) {
    console.error('Falha ao executar migrate (continuando sem schema):', error);
  }
  return database;
}

export * from './types.js';
