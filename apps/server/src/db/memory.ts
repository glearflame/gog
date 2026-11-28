import type { HistoryEntry, LeaderboardEntry, MatchResult, PublicUser, SkinId } from '@gog/shared';
import { emptyStats, type Database, type SessionRecord, type UserIdentity, type UserRecord } from './types.js';

export class MemoryDatabase implements Database {
  readonly persistent = false;
  private users = new Map<string, UserRecord>();
  private sessions = new Map<string, SessionRecord & { tokenHash: string }>();
  private matches = new Map<string, MatchResult>();

  async findOrCreateUser(identity: UserIdentity, id: string, publicId: string): Promise<UserRecord> {
    if (identity.googleSub) {
      const existing = [...this.users.values()].find((user) => user.googleSub === identity.googleSub);
      if (existing) {
        existing.name = identity.name;
        existing.avatarUrl = identity.avatarUrl;
        existing.email = identity.email;
        return { ...existing, stats: { ...existing.stats } };
      }
    }
    const user: UserRecord = {
      id, publicId, googleSub: identity.googleSub, email: identity.email,
      name: identity.name, avatarUrl: identity.avatarUrl, skin: 'scout', role: 'player', stats: emptyStats(),
    };
    this.users.set(id, user);
    return { ...user, stats: { ...user.stats } };
  }

  async getUserById(id: string): Promise<UserRecord | null> {
    const user = this.users.get(id);
    return user ? { ...user, stats: { ...user.stats } } : null;
  }

  async updateProfile(userId: string, values: { name?: string; skin?: SkinId }): Promise<UserRecord | null> {
    const user = this.users.get(userId);
    if (!user) return null;
    if (values.name !== undefined) user.name = values.name;
    if (values.skin !== undefined) user.skin = values.skin;
    return { ...user, stats: { ...user.stats } };
  }

  async createSession(id: string, tokenHash: string, userId: string, expiresAt: number): Promise<void> {
    this.sessions.set(tokenHash, { id, tokenHash, userId, expiresAt });
  }

  async getSessionUser(tokenHash: string, now: number): Promise<UserRecord | null> {
    const session = this.sessions.get(tokenHash);
    if (!session) return null;
    if (session.expiresAt <= now) {
      this.sessions.delete(tokenHash);
      return null;
    }
    return this.getUserById(session.userId);
  }

  async deleteSession(tokenHash: string): Promise<void> {
    this.sessions.delete(tokenHash);
  }

  async recordMatch(result: MatchResult): Promise<void> {
    if (this.matches.has(result.matchId)) return;
    this.matches.set(result.matchId, result);
    for (const player of result.players) {
      const user = this.users.get(player.userId);
      if (!user) continue;
      user.stats.matches++;
      user.stats.wins += Number(player.won);
      user.stats.kills += player.kills;
      user.stats.damage += Math.round(player.damage);
      if (result.ranked) user.stats.rp = Math.max(0, user.stats.rp + player.rpDelta);
    }
  }

  async getHistory(userId: string, limit = 20): Promise<HistoryEntry[]> {
    const entries: HistoryEntry[] = [];
    for (const match of this.matches.values()) {
      const player = match.players.find((entry) => entry.userId === userId);
      if (player) entries.push({
        matchId: match.matchId, mode: match.mode, ranked: match.ranked, endedAt: match.endedAt,
        kills: player.kills, damage: player.damage, placement: player.placement, won: player.won, rpDelta: player.rpDelta,
      });
    }
    return entries.sort((a, b) => b.endedAt - a.endedAt).slice(0, limit);
  }

  async getLeaderboard(limit = 50): Promise<LeaderboardEntry[]> {
    return [...this.users.values()]
      .sort((a, b) => b.stats.rp - a.stats.rp || b.stats.wins - a.stats.wins || b.stats.kills - a.stats.kills)
      .slice(0, limit)
      .map((user) => ({
        publicId: user.publicId, name: user.name, avatarUrl: user.avatarUrl,
        rp: user.stats.rp, wins: user.stats.wins, kills: user.stats.kills, matches: user.stats.matches,
      }));
  }

  async close(): Promise<void> {}
}
