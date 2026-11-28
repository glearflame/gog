import { config } from '../config.js';
import { MemoryDatabase } from './memory.js';
import { PostgresDatabase } from './postgres.js';
export async function createDatabase() {
    if (!config.databaseUrl)
        return new MemoryDatabase();
    const database = new PostgresDatabase(config.databaseUrl, config.production);
    await database.migrate();
    return database;
}
export * from './types.js';
//# sourceMappingURL=index.js.map