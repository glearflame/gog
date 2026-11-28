import { randomUUID } from 'node:crypto';
import { GUN_IDS, LOOT_SPOTS, MAP_LIMIT, MAP_OBSTACLES, MAX_HP, PLAYER_HEIGHT, PLAYER_RADIUS, SNAPSHOT_RATE, TICK_RATE, WEAPONS, clamp, directionFromAngles, finite, moveWithCollisions, mulberry32, rayBox, teamSize, zoneAt, } from '@gog/shared';
export class Match {
    room;
    callbacks;
    id = randomUUID();
    startedAt = Date.now();
    players = new Map();
    random;
    loot = [];
    builds = new Map();
    nextBuildId = 1;
    timer = null;
    lastStep = this.startedAt;
    tickCount = 0;
    elapsed = 0;
    ended = false;
    teamPlacements = new Map();
    constructor(room, callbacks) {
        this.room = room;
        this.callbacks = callbacks;
        const seed = (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0;
        this.seed = seed;
        this.random = mulberry32(seed);
        const size = teamSize(room.mode);
        [...room.members.values()].forEach((user, index) => {
            const angle = (index / room.members.size) * Math.PI * 2 + this.random() * 0.35;
            const radius = 58 + this.random() * 8;
            this.players.set(user.id, {
                id: user.id, name: user.name, skin: user.skin, team: Math.floor(index / size),
                position: { x: Math.cos(angle) * radius, y: 38 + this.random() * 8, z: Math.sin(angle) * radius },
                velocityY: 0, yaw: -angle - Math.PI / 2, pitch: -0.15, hp: MAX_HP, alive: true, connected: true,
                disconnectedAt: null, phase: 'drop', gun: null, activeWeapon: 'fists', ammo: 0, reserve: 0,
                kits: 0, walls: 8, crouched: false, kills: 0, damage: 0,
                input: { moveX: 0, moveZ: 0, yaw: -angle - Math.PI / 2, pitch: -0.15, sprint: false, crouch: false, jump: false, sequence: 0 },
                inputSeq: 0, nextFire: 0, reloadFinish: 0, healFinish: 0, latencyMs: 0, history: [],
            });
        });
        this.createLoot();
    }
    seed;
    startTimer() {
        if (this.timer || this.ended)
            return;
        this.lastStep = Date.now();
        this.timer = setInterval(() => this.step(), 1000 / TICK_RATE);
        this.timer.unref();
    }
    getStart() {
        return {
            matchId: this.id, roomCode: this.room.code, mode: this.room.mode, ranked: this.room.ranked,
            seed: this.seed, tickRate: TICK_RATE, startedAt: this.startedAt, players: this.playerSnapshots(),
        };
    }
    has(userId) { return this.players.has(userId); }
    setInput(userId, raw) {
        const player = this.players.get(userId);
        if (!player || !player.alive || this.ended)
            return;
        const sequence = Math.floor(finite(raw.sequence));
        if (sequence <= player.inputSeq || sequence > player.inputSeq + 1000)
            return;
        player.inputSeq = sequence;
        player.input = {
            moveX: clamp(finite(raw.moveX), -1, 1), moveZ: clamp(finite(raw.moveZ), -1, 1),
            yaw: clamp(finite(raw.yaw, player.yaw), -Math.PI * 4, Math.PI * 4),
            pitch: clamp(finite(raw.pitch, player.pitch), -1.45, 1.45),
            sprint: raw.sprint === true, crouch: raw.crouch === true, jump: raw.jump === true || player.input.jump,
            sequence,
        };
    }
    setConnected(userId, connected) {
        const player = this.players.get(userId);
        if (!player || this.ended)
            return;
        player.connected = connected;
        player.disconnectedAt = connected ? null : Date.now();
        if (!connected)
            player.input.moveX = player.input.moveZ = 0;
    }
    setLatency(userId, rtt) {
        const player = this.players.get(userId);
        if (player)
            player.latencyMs = clamp(rtt, 0, 300);
    }
    fire(userId, raw, now = Date.now()) {
        const shooter = this.players.get(userId);
        if (!shooter || !shooter.alive || !shooter.connected || shooter.phase !== 'ground' || this.ended)
            return;
        if (this.elapsed < shooter.nextFire || shooter.reloadFinish || shooter.healFinish)
            return;
        const weaponId = shooter.activeWeapon;
        const spec = WEAPONS[weaponId];
        if (weaponId !== 'fists') {
            if (shooter.gun !== weaponId || shooter.ammo <= 0) {
                this.callbacks.notice(userId, shooter.ammo <= 0 ? 'Sem munição. Pressione R para recarregar.' : 'Arma indisponível.');
                return;
            }
            shooter.ammo--;
        }
        shooter.nextFire = this.elapsed + spec.delay;
        shooter.yaw = clamp(finite(raw.yaw, shooter.yaw), -Math.PI * 4, Math.PI * 4);
        shooter.pitch = clamp(finite(raw.pitch, shooter.pitch), -1.45, 1.45);
        const origin = { x: shooter.position.x, y: shooter.position.y + (shooter.crouched ? 1.25 : 1.62), z: shooter.position.z };
        const direction = directionFromAngles(shooter.yaw, shooter.pitch);
        let nearest = spec.range;
        let target = null;
        let targetPosition = null;
        let targetBuild = null;
        for (const obstacle of [...MAP_OBSTACLES, ...this.buildObstacles()]) {
            const distance = rayBox(origin, direction, obstacle, nearest);
            if (distance !== null && distance < nearest) {
                nearest = distance;
                target = null;
                targetBuild = this.builds.get(Number(obstacle.id.replace('build-', ''))) || null;
            }
        }
        for (const candidate of this.players.values()) {
            if (candidate.id === shooter.id || !candidate.alive || candidate.phase !== 'ground' || candidate.team === shooter.team)
                continue;
            const position = this.historicalPosition(candidate, now - Math.min(150, shooter.latencyMs / 2));
            const body = { id: candidate.id, kind: 'wall', x: position.x, y: position.y, z: position.z, w: 0.85, h: candidate.crouched ? 1.35 : PLAYER_HEIGHT, d: 0.75 };
            const distance = rayBox(origin, direction, body, nearest);
            if (distance !== null && distance < nearest) {
                nearest = distance;
                target = candidate;
                targetPosition = position;
                targetBuild = null;
            }
        }
        let damage = 0;
        let killed = false;
        let headshot = false;
        if (target && targetPosition) {
            headshot = origin.y + direction.y * nearest > targetPosition.y + (target.crouched ? 1.12 : 1.48);
            damage = Math.round(spec.damage * (headshot ? 1.4 : 1));
            killed = this.applyDamage(shooter, target, damage);
        }
        else if (targetBuild) {
            targetBuild.hp = Math.max(0, targetBuild.hp - spec.damage);
            if (!targetBuild.hp)
                this.builds.delete(targetBuild.id);
        }
        this.callbacks.shot({
            shooterId: shooter.id, origin: [origin.x, origin.y, origin.z],
            end: [origin.x + direction.x * nearest, origin.y + direction.y * nearest, origin.z + direction.z * nearest],
            targetId: target?.id || null, damage, killed, headshot,
        });
    }
    reload(userId) {
        const player = this.players.get(userId);
        if (!player?.alive || player.phase !== 'ground' || !player.gun || player.activeWeapon === 'fists' || player.reloadFinish || this.ended)
            return;
        const spec = WEAPONS[player.gun];
        if (player.ammo >= spec.cap || player.reserve <= 0)
            return;
        player.healFinish = 0;
        player.reloadFinish = this.elapsed + 1.2;
        this.callbacks.notice(userId, 'Recarregando…');
    }
    heal(userId) {
        const player = this.players.get(userId);
        if (!player?.alive || player.phase !== 'ground' || player.healFinish || player.reloadFinish || player.kits <= 0 || player.hp >= MAX_HP || this.ended)
            return;
        player.healFinish = this.elapsed + 2;
        this.callbacks.notice(userId, 'Usando kit médico…');
    }
    select(userId, raw) {
        const player = this.players.get(userId);
        if (!player?.alive || this.ended)
            return;
        if (raw.weapon === 'fists') {
            player.activeWeapon = 'fists';
            player.reloadFinish = 0;
        }
        else if (player.gun && raw.weapon === player.gun) {
            player.activeWeapon = player.gun;
        }
    }
    build(userId) {
        const player = this.players.get(userId);
        if (!player?.alive || player.phase !== 'ground' || player.walls <= 0 || this.ended)
            return;
        const alongX = Math.abs(Math.cos(player.yaw)) >= Math.abs(Math.sin(player.yaw));
        const wall = {
            id: this.nextBuildId++, ownerId: player.id,
            x: clamp(player.position.x - Math.sin(player.yaw) * 2.5, -MAP_LIMIT + 2, MAP_LIMIT - 2),
            z: clamp(player.position.z - Math.cos(player.yaw) * 2.5, -MAP_LIMIT + 2, MAP_LIMIT - 2),
            y: 0, w: alongX ? 3.4 : 0.55, h: 2.15, d: alongX ? 0.55 : 3.4, hp: 100,
        };
        const obstacles = [...MAP_OBSTACLES, ...this.buildObstacles()];
        const blocked = obstacles.some((s) => Math.abs(wall.x - s.x) < (wall.w + s.w) / 2 && Math.abs(wall.z - s.z) < (wall.d + s.d) / 2 && s.y < wall.h);
        const hitsPlayer = [...this.players.values()].some((other) => other.alive && Math.abs(other.position.x - wall.x) < wall.w / 2 + PLAYER_RADIUS && Math.abs(other.position.z - wall.z) < wall.d / 2 + PLAYER_RADIUS && other.position.y < wall.h);
        if (blocked || hitsPlayer) {
            this.callbacks.notice(userId, 'Não há espaço para construir aqui.');
            return;
        }
        this.builds.set(wall.id, wall);
        player.walls--;
    }
    step(now = Date.now()) {
        if (this.ended)
            return;
        const dt = clamp((now - this.lastStep) / 1000, 0.001, 0.1);
        this.lastStep = now;
        this.elapsed = Math.max(0, (now - this.startedAt) / 1000);
        this.tickCount++;
        const solids = [...MAP_OBSTACLES, ...this.buildObstacles()];
        const zone = zoneAt(this.elapsed);
        for (const player of this.players.values()) {
            if (!player.alive)
                continue;
            if (!player.connected && player.disconnectedAt && now - player.disconnectedAt > 30_000) {
                this.eliminate(player, null);
                continue;
            }
            this.finishTimers(player);
            this.movePlayer(player, dt, solids);
            this.collectLoot(player);
            if (Math.hypot(player.position.x, player.position.z) > zone.radius) {
                player.hp = Math.max(0, player.hp - 9 * dt);
                if (player.hp <= 0)
                    this.eliminate(player, null);
            }
            player.history.push({ at: now, x: player.position.x, y: player.position.y, z: player.position.z });
            if (player.history.length > 40)
                player.history.shift();
        }
        this.checkEnd();
        if (!this.ended && this.tickCount % Math.max(1, Math.round(TICK_RATE / SNAPSHOT_RATE)) === 0) {
            this.callbacks.snapshot(this.snapshot(now));
        }
    }
    snapshot(now = Date.now()) {
        return { tick: this.tickCount, serverTime: now, elapsed: this.elapsed, players: this.playerSnapshots(), zone: zoneAt(this.elapsed), loot: this.loot.map(({ amount: _amount, ...item }) => ({ ...item })), builds: [...this.builds.values()].map((build) => ({ ...build })) };
    }
    close() {
        if (this.timer)
            clearInterval(this.timer);
        this.timer = null;
        this.ended = true;
    }
    movePlayer(player, dt, solids) {
        const input = player.input;
        player.yaw = input.yaw;
        player.pitch = input.pitch;
        player.crouched = player.phase === 'ground' && input.crouch;
        const length = Math.max(1, Math.hypot(input.moveX, input.moveZ));
        const x = input.moveX / length;
        const z = input.moveZ / length;
        const speed = player.phase === 'drop' ? 8 : player.crouched ? 3.2 : input.sprint ? 9 : 6;
        const distance = speed * dt;
        const moved = moveWithCollisions(player.position, (x * Math.cos(player.yaw) + z * Math.sin(player.yaw)) * distance, (z * Math.cos(player.yaw) - x * Math.sin(player.yaw)) * distance, PLAYER_RADIUS, player.crouched ? 1.35 : PLAYER_HEIGHT, player.phase === 'drop' ? [] : solids);
        player.position.x = moved.x;
        player.position.z = moved.z;
        const oldY = player.position.y;
        if (player.phase === 'drop') {
            player.position.y = Math.max(0, player.position.y - 9 * dt);
            if (player.position.y <= this.floorAt(player, oldY, solids)) {
                player.position.y = this.floorAt(player, oldY, solids);
                player.phase = 'ground';
                player.velocityY = 0;
            }
            return;
        }
        const floorBefore = this.floorAt(player, oldY + 0.25, solids);
        if (input.jump && player.velocityY === 0 && oldY <= floorBefore + 0.03) {
            player.velocityY = 6.6;
            player.crouched = false;
        }
        input.jump = false;
        player.velocityY -= 17 * dt;
        player.position.y += player.velocityY * dt;
        const floor = this.floorAt(player, oldY, solids);
        if (player.position.y <= floor) {
            player.position.y = floor;
            player.velocityY = 0;
        }
    }
    floorAt(player, oldY, solids) {
        let floor = 0;
        for (const solid of solids) {
            const top = solid.y + solid.h;
            if (oldY >= top - 0.03 && Math.abs(player.position.x - solid.x) < solid.w / 2 + PLAYER_RADIUS * 0.7 && Math.abs(player.position.z - solid.z) < solid.d / 2 + PLAYER_RADIUS * 0.7) {
                floor = Math.max(floor, top);
            }
        }
        return floor;
    }
    finishTimers(player) {
        if (player.reloadFinish && this.elapsed >= player.reloadFinish) {
            if (player.gun) {
                const spec = WEAPONS[player.gun];
                const amount = Math.min(spec.cap - player.ammo, player.reserve);
                player.ammo += amount;
                player.reserve -= amount;
            }
            player.reloadFinish = 0;
        }
        if (player.healFinish && this.elapsed >= player.healFinish) {
            const recovered = Math.min(50, MAX_HP - player.hp);
            player.hp += recovered;
            player.kits--;
            player.healFinish = 0;
            this.callbacks.notice(player.id, `Kit utilizado: +${Math.round(recovered)} HP.`);
        }
    }
    createLoot() {
        const spots = [...LOOT_SPOTS];
        for (let i = spots.length - 1; i > 0; i--) {
            const j = Math.floor(this.random() * (i + 1));
            [spots[i], spots[j]] = [spots[j], spots[i]];
        }
        this.loot = spots.slice(0, 20).map((spot, id) => {
            const kind = id % 7 === 5 ? 'medkit' : id % 7 === 6 ? 'ammo' : 'weapon';
            const gun = kind === 'weapon' ? GUN_IDS[(id + Math.floor(this.random() * GUN_IDS.length)) % GUN_IDS.length] : null;
            return { id, kind, gun, x: spot.x, y: 0.35, z: spot.z, active: true, amount: kind === 'ammo' ? 36 : 1 };
        });
    }
    collectLoot(player) {
        if (player.phase !== 'ground')
            return;
        for (const item of this.loot) {
            if (!item.active || Math.hypot(player.position.x - item.x, player.position.z - item.z) > 1.35)
                continue;
            if (item.kind === 'weapon') {
                if (player.gun || !item.gun)
                    continue;
                player.gun = item.gun;
                player.activeWeapon = item.gun;
                player.ammo = WEAPONS[item.gun].cap;
                player.reserve = WEAPONS[item.gun].reserve;
                this.callbacks.notice(player.id, `${WEAPONS[item.gun].name} equipada.`);
            }
            else if (item.kind === 'medkit') {
                if (player.kits >= 3)
                    continue;
                player.kits++;
            }
            else {
                if (!player.gun)
                    continue;
                player.reserve += item.amount;
            }
            item.active = false;
        }
    }
    applyDamage(shooter, target, amount) {
        if (!target.alive || target.team === shooter.team)
            return false;
        target.healFinish = 0;
        const actual = Math.min(target.hp, amount);
        target.hp = Math.max(0, target.hp - amount);
        shooter.damage += actual;
        if (target.hp <= 0) {
            shooter.kills++;
            this.eliminate(target, shooter.id);
            return true;
        }
        return false;
    }
    eliminate(player, _killerId) {
        if (!player.alive)
            return;
        player.alive = false;
        player.hp = 0;
        player.input.moveX = player.input.moveZ = 0;
        const teamAlive = [...this.players.values()].some((other) => other.alive && other.team === player.team);
        if (!teamAlive && !this.teamPlacements.has(player.team)) {
            const remainingTeams = new Set([...this.players.values()].filter((other) => other.alive).map((other) => other.team)).size;
            this.teamPlacements.set(player.team, remainingTeams + 1);
        }
    }
    checkEnd() {
        if (this.ended || this.elapsed < 2)
            return;
        const alive = [...this.players.values()].filter((player) => player.alive);
        const teams = new Set(alive.map((player) => player.team));
        if (teams.size > 1)
            return;
        const winningTeam = teams.values().next().value;
        for (const team of teams)
            this.teamPlacements.set(team, 1);
        const result = {
            matchId: this.id, roomCode: this.room.code, mode: this.room.mode, ranked: this.room.ranked,
            startedAt: this.startedAt, endedAt: Date.now(),
            players: [...this.players.values()].map((player) => {
                const placement = this.teamPlacements.get(player.team) || 1;
                return {
                    userId: player.id, name: player.name, team: player.team, kills: player.kills,
                    damage: Math.round(player.damage), placement, won: winningTeam === player.team,
                    rpDelta: this.room.ranked ? Math.max(-20, (placement === 1 ? 30 : placement === 2 ? 18 : placement <= 4 ? 8 : 0) + player.kills * 5 - 6) : 0,
                };
            }).sort((a, b) => a.placement - b.placement || b.kills - a.kills),
        };
        this.ended = true;
        if (this.timer)
            clearInterval(this.timer);
        this.timer = null;
        this.callbacks.end(result);
    }
    historicalPosition(player, at) {
        if (!player.history.length)
            return player.position;
        let selected = player.history[0];
        for (const point of player.history) {
            if (point.at > at)
                break;
            selected = point;
        }
        return selected;
    }
    buildObstacles() {
        return [...this.builds.values()].map((build) => ({ id: `build-${build.id}`, kind: 'wall', x: build.x, y: 0, z: build.z, w: build.w, h: build.h, d: build.d }));
    }
    playerSnapshots() {
        return [...this.players.values()].map((player) => ({
            id: player.id, name: player.name, skin: player.skin, team: player.team,
            x: player.position.x, y: player.position.y, z: player.position.z,
            yaw: player.yaw, pitch: player.pitch, hp: Math.ceil(player.hp), alive: player.alive, connected: player.connected,
            phase: player.phase, activeWeapon: player.activeWeapon, gun: player.gun, ammo: player.ammo, reserve: player.reserve,
            kits: player.kits, walls: player.walls, crouched: player.crouched, kills: player.kills, inputSeq: player.inputSeq,
        }));
    }
}
//# sourceMappingURL=match.js.map