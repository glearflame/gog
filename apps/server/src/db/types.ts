import type { HistoryEntry, LeaderboardEntry, MatchResult, PublicUser, SkinId, UserStats } from '@gog/shared';

export interface UserRecord extends PublicUser {
  googleSub: string | null;
  email: string | null;
}

export interface UserIdentity {
  googleSub: string | null;
  email: string | null;
  name: string;
  avatarUrl: string;
}

export interface SessionRecord {
  id: string;
  userId: string;
  expiresAt: number;
}

export interface Database {
  readonly persistent: boolean;
  findOrCreateUser(identity: UserIdentity, id: string, publicId: string): Promise<UserRecord>;
  getUserById(id: string): Promise<UserRecord | null>;
  updateProfile(userId: string, values: { name?: string; skin?: SkinId }): Promise<UserRecord | null>;
  createSession(id: string, tokenHash: string, userId: string, expiresAt: number): Promise<void>;
  getSessionUser(tokenHash: string, now: number): Promise<UserRecord | null>;
  deleteSession(tokenHash: string): Promise<void>;
  recordMatch(result: MatchResult): Promise<void>;
  getHistory(userId: string, limit?: number): Promise<HistoryEntry[]>;
  getLeaderboard(limit?: number): Promise<LeaderboardEntry[]>;
  close(): Promise<void>;
}

export const emptyStats = (): UserStats => ({ matches: 0, wins: 0, kills: 0, damage: 0, rp: 0 });
