import type { GameMode, GunId, SkinId, ZoneSnapshot } from './types.js';
export declare const MAX_PLAYERS = 8;
export declare const TICK_RATE = 20;
export declare const SNAPSHOT_RATE = 20;
export declare const MAP_SIZE = 160;
export declare const MAP_LIMIT: number;
export declare const PLAYER_RADIUS = 0.34;
export declare const PLAYER_HEIGHT = 1.8;
export declare const MAX_HP = 100;
export declare const SKINS: SkinId[];
export interface WeaponSpec {
    name: string;
    damage: number;
    delay: number;
    range: number;
    cap: number;
    reserve: number;
}
export declare const WEAPONS: Record<'fists' | GunId, WeaponSpec>;
export declare const GUN_IDS: GunId[];
export interface Vec3 {
    x: number;
    y: number;
    z: number;
}
export interface MapObstacle {
    id: string;
    kind: 'rock' | 'wall' | 'tree' | 'house';
    x: number;
    y: number;
    z: number;
    w: number;
    h: number;
    d: number;
}
export declare const MAP_OBSTACLES: MapObstacle[];
export declare const LOOT_SPOTS: Array<{
    x: number;
    z: number;
}>;
export declare const clamp: (value: number, min: number, max: number) => number;
export declare const finite: (value: unknown, fallback?: number) => number;
export declare function directionFromAngles(yaw: number, pitch: number): Vec3;
export declare function moveWithCollisions(position: Vec3, dx: number, dz: number, radius: number, height: number, solids: MapObstacle[]): {
    x: number;
    z: number;
};
export declare function rayBox(origin: Vec3, direction: Vec3, box: MapObstacle, maxDistance: number): number | null;
export declare function zoneAt(elapsed: number): ZoneSnapshot;
export declare function teamSize(mode: GameMode): number;
export declare function mulberry32(seed: number): () => number;
//# sourceMappingURL=game.d.ts.map