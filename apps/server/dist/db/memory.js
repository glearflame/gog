import { emptyStats } from './types.js';
export class MemoryDatabase {
    persistent = false;
    users = new Map();
    sessions = new Map();
    matches = new Map();
    async findOrCreateUser(identity, id, publicId) {
        if (identity.googleSub) {
            const existing = [...this.users.values()].find((user) => user.googleSub === identity.googleSub);
            if (existing) {
                existing.name = identity.name;
                existing.avatarUrl = identity.avatarUrl;
                existing.email = identity.email;
                return { ...existing, stats: { ...existing.stats } };
            }
        }
        const user = {
            id, publicId, googleSub: identity.googleSub, email: identity.email,
            name: identity.name, avatarUrl: identity.avatarUrl, skin: 'scout', role: 'player', stats: emptyStats(),
        };
        this.users.set(id, user);
        return { ...user, stats: { ...user.stats } };
    }
    async getUserById(id) {
        const user = this.users.get(id);
        return user ? { ...user, stats: { ...user.stats } } : null;
    }
    async updateProfile(userId, values) {
        const user = this.users.get(userId);
        if (!user)
            return null;
        if (values.name !== undefined)
            user.name = values.name;
        if (values.skin !== undefined)
            user.skin = values.skin;
        return { ...user, stats: { ...user.stats } };
    }
    async createSession(id, tokenHash, userId, expiresAt) {
        this.sessions.set(tokenHash, { id, tokenHash, userId, expiresAt });
    }
    async getSessionUser(tokenHash, now) {
        const session = this.sessions.get(tokenHash);
        if (!session)
            return null;
        if (session.expiresAt <= now) {
            this.sessions.delete(tokenHash);
            return null;
        }
        return this.getUserById(session.userId);
    }
    async deleteSession(tokenHash) {
        this.sessions.delete(tokenHash);
    }
    async recordMatch(result) {
        if (this.matches.has(result.matchId))
            return;
        this.matches.set(result.matchId, result);
        for (const player of result.players) {
            const user = this.users.get(player.userId);
            if (!user)
                continue;
            user.stats.matches++;
            user.stats.wins += Number(player.won);
            user.stats.kills += player.kills;
            user.stats.damage += Math.round(player.damage);
            if (result.ranked)
                user.stats.rp = Math.max(0, user.stats.rp + player.rpDelta);
        }
    }
    async getHistory(userId, limit = 20) {
        const entries = [];
        for (const match of this.matches.values()) {
            const player = match.players.find((entry) => entry.userId === userId);
            if (player)
                entries.push({
                    matchId: match.matchId, mode: match.mode, ranked: match.ranked, endedAt: match.endedAt,
                    kills: player.kills, damage: player.damage, placement: player.placement, won: player.won, rpDelta: player.rpDelta,
                });
        }
        return entries.sort((a, b) => b.endedAt - a.endedAt).slice(0, limit);
    }
    async getLeaderboard(limit = 50) {
        return [...this.users.values()]
            .sort((a, b) => b.stats.rp - a.stats.rp || b.stats.wins - a.stats.wins || b.stats.kills - a.stats.kills)
            .slice(0, limit)
            .map((user) => ({
            publicId: user.publicId, name: user.name, avatarUrl: user.avatarUrl,
            rp: user.stats.rp, wins: user.stats.wins, kills: user.stats.kills, matches: user.stats.matches,
        }));
    }
    async close() { }
}
//# sourceMappingURL=memory.js.map