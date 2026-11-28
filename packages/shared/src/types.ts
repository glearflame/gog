export type GameMode = 'solo' | 'duo' | 'squad';
export type RoomVisibility = 'public' | 'private';
export type RoomStatus = 'waiting' | 'countdown' | 'playing';
export type SkinId = 'scout' | 'forest' | 'ocean' | 'ember';
export type GunId = 'carbine' | 'shotgun' | 'smg' | 'sniper';
export type ActiveWeapon = 'fists' | GunId;

export interface UserStats {
  matches: number;
  wins: number;
  kills: number;
  damage: number;
  rp: number;
}

export interface PublicUser {
  id: string;
  publicId: string;
  name: string;
  avatarUrl: string;
  skin: SkinId;
  role: 'player' | 'admin';
  stats: UserStats;
}

export interface RoomMember {
  id: string;
  publicId: string;
  name: string;
  avatarUrl: string;
  skin: SkinId;
}

export interface RoomState {
  code: string;
  name: string;
  visibility: RoomVisibility;
  mode: GameMode;
  status: RoomStatus;
  hostId: string;
  members: RoomMember[];
  maxPlayers: 8;
  matchmaking: boolean;
  ranked: boolean;
  countdownEndsAt: number | null;
  createdAt: number;
}

export interface RoomListItem {
  code: string;
  name: string;
  mode: GameMode;
  players: number;
  maxPlayers: 8;
  matchmaking: boolean;
}

export interface PresencePlayer {
  id: string;
  publicId: string;
  name: string;
  avatarUrl: string;
  status: 'lobby' | 'room' | 'playing';
}

export interface PlayerSnapshot {
  id: string;
  name: string;
  skin: SkinId;
  team: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  hp: number;
  alive: boolean;
  connected: boolean;
  phase: 'drop' | 'ground';
  activeWeapon: ActiveWeapon;
  gun: GunId | null;
  ammo: number;
  reserve: number;
  kits: number;
  walls: number;
  crouched: boolean;
  kills: number;
  inputSeq: number;
}

export interface ZoneSnapshot {
  radius: number;
  phase: 'waiting' | 'shrinking' | 'closed';
  timeLeft: number;
}

export interface LootSnapshot {
  id: number;
  kind: 'weapon' | 'medkit' | 'ammo';
  gun: GunId | null;
  x: number;
  y: number;
  z: number;
  active: boolean;
}

export interface BuildSnapshot {
  id: number;
  ownerId: string;
  x: number;
  z: number;
  w: number;
  h: number;
  d: number;
  hp: number;
}

export interface MatchStart {
  matchId: string;
  roomCode: string;
  mode: GameMode;
  ranked: boolean;
  seed: number;
  tickRate: number;
  startedAt: number;
  players: PlayerSnapshot[];
}

export interface MatchSnapshot {
  tick: number;
  serverTime: number;
  elapsed: number;
  players: PlayerSnapshot[];
  zone: ZoneSnapshot;
  loot: LootSnapshot[];
  builds: BuildSnapshot[];
}

export interface ShotEvent {
  shooterId: string;
  origin: [number, number, number];
  end: [number, number, number];
  targetId: string | null;
  damage: number;
  killed: boolean;
  headshot: boolean;
}

export interface MatchResultPlayer {
  userId: string;
  name: string;
  team: number;
  kills: number;
  damage: number;
  placement: number;
  won: boolean;
  rpDelta: number;
}

export interface MatchResult {
  matchId: string;
  roomCode: string;
  mode: GameMode;
  ranked: boolean;
  startedAt: number;
  endedAt: number;
  players: MatchResultPlayer[];
}

export interface HistoryEntry {
  matchId: string;
  mode: GameMode;
  ranked: boolean;
  endedAt: number;
  kills: number;
  damage: number;
  placement: number;
  won: boolean;
  rpDelta: number;
}

export interface LeaderboardEntry {
  publicId: string;
  name: string;
  avatarUrl: string;
  rp: number;
  wins: number;
  kills: number;
  matches: number;
}

export type ServerMessage =
  | { type: 'hello'; user: PublicUser; serverTime: number }
  | { type: 'presence'; online: number; players: PresencePlayer[] }
  | { type: 'room.list'; rooms: RoomListItem[] }
  | { type: 'room.state'; room: RoomState | null }
  | { type: 'room.invite'; from: { name: string; publicId: string }; code: string; roomName: string; mode: GameMode }
  | { type: 'match.start'; match: MatchStart }
  | { type: 'match.snapshot'; snapshot: MatchSnapshot }
  | { type: 'match.shot'; shot: ShotEvent }
  | { type: 'match.end'; result: MatchResult }
  | { type: 'match.notice'; message: string }
  | { type: 'notice'; level: 'info' | 'success' | 'error'; message: string }
  | { type: 'ping'; at: number };
