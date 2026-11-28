export const MAX_PLAYERS = 8;
export const TICK_RATE = 20;
export const SNAPSHOT_RATE = 20;
export const MAP_SIZE = 160;
export const MAP_LIMIT = MAP_SIZE / 2 - 1;
export const PLAYER_RADIUS = 0.34;
export const PLAYER_HEIGHT = 1.8;
export const MAX_HP = 100;
export const SKINS = ['scout', 'forest', 'ocean', 'ember'];
export const WEAPONS = {
    fists: { name: 'Punhos', damage: 20, delay: 0.45, range: 2.2, cap: 0, reserve: 0 },
    carbine: { name: 'Carabina', damage: 22, delay: 0.24, range: 65, cap: 18, reserve: 90 },
    shotgun: { name: 'Escopeta', damage: 42, delay: 0.8, range: 22, cap: 6, reserve: 36 },
    smg: { name: 'Submetralhadora', damage: 14, delay: 0.1, range: 38, cap: 30, reserve: 120 },
    sniper: { name: 'Rifle de precisão', damage: 65, delay: 1.1, range: 110, cap: 4, reserve: 20 },
};
export const GUN_IDS = ['carbine', 'shotgun', 'smg', 'sniper'];
const obstacles = [];
const add = (kind, x, z, w, h, d, y = 0) => {
    obstacles.push({ id: `${kind}-${obstacles.length}`, kind, x, y, z, w, h, d });
};
for (const [x, z] of [[-48, -44], [-18, -51], [19, -48], [49, -38], [-51, 6], [50, 12], [-44, 47], [-9, 51], [28, 48], [52, 49]]) {
    add('tree', x, z, 1.3, 5, 1.3);
}
for (const [x, z, w, h, d] of [[-25, -25, 5, 2.2, 3], [7, -28, 3, 1.5, 5], [29, -18, 5, 2.6, 2], [-32, 19, 4, 1.8, 4], [4, 22, 6, 1.4, 2], [31, 28, 3, 2.3, 4], [-8, -2, 4, 2.1, 4], [17, 2, 2.5, 3, 5]]) {
    add('rock', x, z, w, h, d);
}
for (const [x, z] of [[-35, -5], [36, 4], [2, -49], [-2, 43]]) {
    add('house', x, z - 3, 8, 3.4, 0.5);
    add('house', x - 3.75, z, 0.5, 3.4, 6);
    add('house', x + 3.75, z, 0.5, 3.4, 6);
    add('house', x - 2.7, z + 3, 2.6, 3.4, 0.5);
    add('house', x + 2.7, z + 3, 2.6, 3.4, 0.5);
    add('house', x, z, 8, 0.4, 6.5, 3.4);
}
export const MAP_OBSTACLES = obstacles;
export const LOOT_SPOTS = [
    { x: -34, z: -5 }, { x: 36, z: 4 }, { x: 2, z: -48 }, { x: -2, z: 42 },
    { x: -22, z: -20 }, { x: 9, z: -23 }, { x: 26, z: -14 }, { x: -29, z: 22 },
    { x: 7, z: 25 }, { x: 29, z: 31 }, { x: -48, z: -39 }, { x: 46, z: -33 },
    { x: -48, z: 43 }, { x: 46, z: 45 }, { x: 0, z: 0 }, { x: 15, z: 14 },
    { x: -15, z: 13 }, { x: 15, z: -12 }, { x: -15, z: -13 }, { x: 55, z: 0 },
    { x: -55, z: 0 }, { x: 0, z: 56 }, { x: 0, z: -56 }, { x: 38, z: 54 },
];
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const finite = (value, fallback = 0) => typeof value === 'number' && Number.isFinite(value) ? value : fallback;
export function directionFromAngles(yaw, pitch) {
    const cp = Math.cos(pitch);
    return { x: -Math.sin(yaw) * cp, y: Math.sin(pitch), z: -Math.cos(yaw) * cp };
}
export function moveWithCollisions(position, dx, dz, radius, height, solids) {
    let x = clamp(position.x + dx, -MAP_LIMIT, MAP_LIMIT);
    let z = position.z;
    const collides = (px, pz) => solids.some((s) => Math.abs(px - s.x) < s.w / 2 + radius &&
        Math.abs(pz - s.z) < s.d / 2 + radius &&
        position.y < s.y + s.h - 0.02 &&
        position.y + height > s.y + 0.02);
    if (collides(x, z))
        x = position.x;
    z = clamp(position.z + dz, -MAP_LIMIT, MAP_LIMIT);
    if (collides(x, z))
        z = position.z;
    return { x, z };
}
export function rayBox(origin, direction, box, maxDistance) {
    let near = 0;
    let far = maxDistance;
    for (const axis of ['x', 'y', 'z']) {
        const min = box[axis] - (axis === 'y' ? 0 : box[axis === 'x' ? 'w' : 'd'] / 2);
        const max = axis === 'y' ? box.y + box.h : box[axis] + box[axis === 'x' ? 'w' : 'd'] / 2;
        const o = origin[axis];
        const d = direction[axis];
        if (Math.abs(d) < 1e-8) {
            if (o < min || o > max)
                return null;
            continue;
        }
        let a = (min - o) / d;
        let b = (max - o) / d;
        if (a > b)
            [a, b] = [b, a];
        near = Math.max(near, a);
        far = Math.min(far, b);
        if (near > far)
            return null;
    }
    return near >= 0 && near <= maxDistance ? near : null;
}
export function zoneAt(elapsed) {
    const wait = 45;
    const duration = 240;
    if (elapsed < wait)
        return { radius: 78, phase: 'waiting', timeLeft: Math.ceil(wait - elapsed) };
    if (elapsed < wait + duration) {
        const progress = (elapsed - wait) / duration;
        return { radius: 78 - progress * 70, phase: 'shrinking', timeLeft: Math.ceil(wait + duration - elapsed) };
    }
    return { radius: 8, phase: 'closed', timeLeft: 0 };
}
export function teamSize(mode) {
    return mode === 'squad' ? 4 : mode === 'duo' ? 2 : 1;
}
export function mulberry32(seed) {
    let value = seed >>> 0;
    return () => {
        value = (value + 0x6d2b79f5) | 0;
        let t = Math.imul(value ^ (value >>> 15), 1 | value);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
//# sourceMappingURL=game.js.map