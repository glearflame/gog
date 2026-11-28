import { readFile } from 'node:fs/promises';
import pg from 'pg';
import type { HistoryEntry, LeaderboardEntry, MatchResult, SkinId } from '@gog/shared';
import type { Database, UserIdentity, UserRecord } from './types.js';

const { Pool } = pg;
type Row = Record<string, unknown>;

const publicUser = (row: Row): UserRecord => ({
  id: String(row.id), publicId: String(row.public_id), googleSub: row.google_sub ? String(row.google_sub) : null,
  email: row.email ? String(row.email) : null, name: String(row.name), avatarUrl: String(row.avatar_url),
  skin: String(row.skin) as SkinId, role: row.role === 'admin' ? 'admin' : 'player',
  stats: { matches: Number(row.matches), wins: Number(row.wins), kills: Number(row.kills), damage: Number(row.damage), rp: Number(row.rp) },
});

export class PostgresDatabase implements Database {
  readonly persistent = true;
  private pool: pg.Pool;

  constructor(url: string, production: boolean) {
    this.pool = new Pool({
      connectionString: url,
      ssl: production && !url.includes('localhost') ? { rejectUnauthorized: process.env.DATABASE_SSL_REJECT_UNAUTHORIZED !== 'false' } : undefined,
      max: 5,
      connectionTimeoutMillis: 10_000,
      idleTimeoutMillis: 30_000,
      keepAlive: true,
    });
  }

  async migrate(): Promise<void> {
    const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8');
    await this.pool.query(schema);
  }

  async findOrCreateUser(identity: UserIdentity, id: string, publicId: string): Promise<UserRecord> {
    const result = await this.pool.query(
      `INSERT INTO users (id, public_id, google_sub, email, name, avatar_url)
       VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email, name=EXCLUDED.name, avatar_url=EXCLUDED.avatar_url, updated_at=now()
       RETURNING *`,
      [id, publicId, identity.googleSub, identity.email, identity.name, identity.avatarUrl],
    );
    return publicUser(result.rows[0] as Row);
  }

  async getUserById(id: string): Promise<UserRecord | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE id=$1', [id]);
    return result.rows[0] ? publicUser(result.rows[0] as Row) : null;
  }

  async updateProfile(userId: string, values: { name?: string; skin?: SkinId }): Promise<UserRecord | null> {
    const result = await this.pool.query(
      'UPDATE users SET name=COALESCE($2,name), skin=COALESCE($3,skin), updated_at=now() WHERE id=$1 RETURNING *',
      [userId, values.name ?? null, values.skin ?? null],
    );
    return result.rows[0] ? publicUser(result.rows[0] as Row) : null;
  }

  async createSession(id: string, tokenHash: string, userId: string, expiresAt: number): Promise<void> {
    await this.pool.query('INSERT INTO sessions (id,token_hash,user_id,expires_at) VALUES ($1,$2,$3,$4)', [id, tokenHash, userId, new Date(expiresAt)]);
    await this.pool.query('DELETE FROM sessions WHERE expires_at <= now()');
  }

  async getSessionUser(tokenHash: string, now: number): Promise<UserRecord | null> {
    const result = await this.pool.query(
      'SELECT u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>$2',
      [tokenHash, new Date(now)],
    );
    return result.rows[0] ? publicUser(result.rows[0] as Row) : null;
  }

  async deleteSession(tokenHash: string): Promise<void> {
    await this.pool.query('DELETE FROM sessions WHERE token_hash=$1', [tokenHash]);
  }

  async recordMatch(result: MatchResult): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      const inserted = await client.query(
        'INSERT INTO matches (id,room_code,mode,ranked,started_at,ended_at) VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING',
        [result.matchId, result.roomCode, result.mode, result.ranked, new Date(result.startedAt), new Date(result.endedAt)],
      );
      if (inserted.rowCount) {
        for (const player of result.players) {
          await client.query(
            `INSERT INTO match_players (match_id,user_id,name,team,kills,damage,placement,won,rp_delta)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
            [result.matchId, player.userId, player.name, player.team, player.kills, Math.round(player.damage), player.placement, player.won, player.rpDelta],
          );
          await client.query(
            `UPDATE users SET matches=matches+1, wins=wins+$2, kills=kills+$3, damage=damage+$4,
             rp=CASE WHEN $6 THEN greatest(0,rp+$5) ELSE rp END, updated_at=now() WHERE id=$1`,
            [player.userId, Number(player.won), player.kills, Math.round(player.damage), player.rpDelta, result.ranked],
          );
        }
      }
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async getHistory(userId: string, limit = 20): Promise<HistoryEntry[]> {
    const result = await this.pool.query(
      `SELECT m.id,m.mode,m.ranked,extract(epoch from m.ended_at)*1000 AS ended_at,
       p.kills,p.damage,p.placement,p.won,p.rp_delta FROM match_players p
       JOIN matches m ON m.id=p.match_id WHERE p.user_id=$1 ORDER BY m.ended_at DESC LIMIT $2`,
      [userId, limit],
    );
    return result.rows.map((row) => ({
      matchId: String(row.id), mode: row.mode, ranked: Boolean(row.ranked), endedAt: Number(row.ended_at),
      kills: Number(row.kills), damage: Number(row.damage), placement: Number(row.placement), won: Boolean(row.won), rpDelta: Number(row.rp_delta),
    }));
  }

  async getLeaderboard(limit = 50): Promise<LeaderboardEntry[]> {
    const result = await this.pool.query(
      'SELECT public_id,name,avatar_url,rp,wins,kills,matches FROM users ORDER BY rp DESC,wins DESC,kills DESC LIMIT $1', [limit],
    );
    return result.rows.map((row) => ({
      publicId: String(row.public_id), name: String(row.name), avatarUrl: String(row.avatar_url),
      rp: Number(row.rp), wins: Number(row.wins), kills: Number(row.kills), matches: Number(row.matches),
    }));
  }

  async close(): Promise<void> { await this.pool.end(); }
}
