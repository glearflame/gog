import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import type { MatchStart, PlayerSnapshot, ActiveWeapon, GunId, SkinId } from '@gog/shared';
import type { GameClient } from '../network';

export interface HudState {
  hp: number;
  ammo: number;
  reserve: number;
  weapon: string;
  kits: number;
  walls: number;
  alive: number;
  zone: number;
  zoneText: string;
  kills: number;
  phase: 'drop' | 'ground';
  connected: boolean;
}

const MAP_LIMIT = 79;
const PLAYER_HEIGHT = 1.8;
const CAMERA_HEIGHT = 1.6;
const INPUT_HZ = 20;

const WEAPON_LABELS: Record<ActiveWeapon, string> = {
  fists: 'Punhos',
  carbine: 'Carabina',
  shotgun: 'Escopeta',
  smg: 'Submetralhadora',
  sniper: 'Rifle de precisão',
};

const SKIN_COLORS: Record<SkinId, number> = {
  scout: 0x7fb069,
  forest: 0x2d5a27,
  ocean: 0x2d7a9a,
  ember: 0xb05a3d,
};

interface RemotePlayer {
  mesh: THREE.Group;
  nameMesh: THREE.Sprite;
  target: { x: number; y: number; z: number; yaw: number; pitch: number };
  receivedAt: number;
}

export class VoxelGame {
  private container: HTMLDivElement;
  private client: GameClient;
  private userId: string;
  private setHud: (state: HudState) => void;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: PointerLockControls;
  private raycaster: THREE.Raycaster;

  private readonly keys = new Set<string>();
  private touchMove = { x: 0, y: 0 };
  private pointerLocked = false;
  private inputSequence = 0;
  private lastInputTime = 0;
  private animationFrame: number | null = null;
  private lastFrameTime = 0;

  private obstacles: THREE.InstancedMesh[] = [];
  private remotePlayers = new Map<string, RemotePlayer>();
  private localMesh: THREE.Group | null = null;
  private localWeapon: THREE.Mesh | null = null;
  private localName: THREE.Sprite | null = null;
  private lootMeshes = new Map<number, THREE.Mesh>();
  private buildMeshes = new Map<number, THREE.Mesh>();

  private mySnapshot: PlayerSnapshot | null = null;
  private matchStarted = false;

  constructor(
    container: HTMLDivElement,
    client: GameClient,
    match: MatchStart,
    userId: string,
    setHud: (state: HudState) => void,
  ) {
    this.container = container;
    this.client = client;
    this.userId = userId;
    this.setHud = setHud;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x141c1a);
    this.scene.fog = new THREE.FogExp2(0x141c1a, 0.018);

    this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight || 16 / 9, 0.1, 200);
    this.camera.position.set(0, CAMERA_HEIGHT, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new PointerLockControls(this.camera, document.body);

    this.raycaster = new THREE.Raycaster();

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(50, 80, 40);
    sun.castShadow = true;
    sun.shadow.camera.left = -90;
    sun.shadow.camera.right = 90;
    sun.shadow.camera.top = 90;
    sun.shadow.camera.bottom = -90;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    this.scene.add(sun);

    const grid = new THREE.GridHelper(160, 40, 0x2a4a40, 0x141c1a);
    grid.position.y = 0.01;
    this.scene.add(grid);

    this.addGroundDecoration();

    window.addEventListener('resize', this.onResize);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
    document.addEventListener('pointerlockerror', () => this.requestPointerLock());
    document.addEventListener('mousemove', this.onMouseMove);

    this.renderer.domElement.addEventListener('click', () => this.requestPointerLock());
    this.renderer.domElement.addEventListener('mousedown', (event: MouseEvent) => {
      if (this.pointerLocked && event.button === 0) this.fire();
    });
    this.renderer.domElement.addEventListener('contextmenu', (event: MouseEvent) => event.preventDefault());

    this.client.subscribe((message) => this.onMessage(message));
    this.client.onStatus((connected) => this.setHud({ ...this.hud(), connected }));

    this.matchStarted = true;
    this.applyStart(match);

    this.animate();
  }

  private hud(): HudState {
    const snap = this.mySnapshot;
    return {
      hp: snap ? snap.hp : 100,
      ammo: snap ? snap.ammo : 0,
      reserve: snap ? snap.reserve : 0,
      weapon: snap ? WEAPON_LABELS[snap.activeWeapon] : 'Punhos',
      kits: snap ? snap.kits : 0,
      walls: snap ? snap.walls : 0,
      alive: this.mySnapshot ? (this.mySnapshot.alive ? 1 : 0) : 0,
      zone: 78,
      zoneText: '45 s',
      kills: snap ? snap.kills : 0,
      phase: snap ? snap.phase : 'drop',
      connected: true,
    };
  }

  private onMessage(message: any): void {
    if (message.type === 'match.snapshot') this.applySnapshot(message.snapshot);
    else if (message.type === 'match.shot') this.playShot(message.shot);
    else if (message.type === 'match.end') this.matchStarted = false;
    else if (message.type === 'match.notice') this.showNotice(message.message);
  }

  private applyStart(match: MatchStart): void {
    this.scene.userData = { roomCode: match.roomCode, mode: match.mode, ranked: match.ranked, seed: match.seed };
    this.clearWorld();
    match.players.forEach((player) => this.addPlayerMesh(player, player.id === this.userId));
  }

  private applySnapshot(snapshot: any): void {
    const own = snapshot.players.find((p: PlayerSnapshot) => p.id === this.userId);
    if (own) {
      this.mySnapshot = own;
      this.syncLocalMesh(own);
      this.setHud({ ...this.hud(), zone: snapshot.zone.radius, zoneText: String(Math.max(0, snapshot.zone.timeLeft || 0)), connected: true });
    }

    snapshot.players.forEach((player: PlayerSnapshot) => {
      if (player.id === this.userId) return;
      this.addOrUpdateRemote(player);
    });

    this.cleanupPlayers(snapshot.players.map((p: PlayerSnapshot) => p.id));
    this.updateLoot(snapshot.loot);
    this.updateBuilds(snapshot.builds);
  }

  private addPlayerMesh(player: PlayerSnapshot, isLocal: boolean): void {
    const group = new THREE.Group();
    group.position.set(player.x, player.y, player.z);
    group.rotation.y = player.yaw;

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, PLAYER_HEIGHT, 0.68),
      new THREE.MeshStandardMaterial({ color: SKIN_COLORS[player.skin], roughness: 0.8 }),
    );
    body.position.y = PLAYER_HEIGHT / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshStandardMaterial({ color: 0xead4c1, roughness: 0.6 }),
    );
    head.position.y = PLAYER_HEIGHT - 0.28;
    group.add(head);

    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(20, 28, 26, 0.75)';
    ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(player.name, 128, 44);
    const tex = new THREE.CanvasTexture(canvas);
    const nameSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
    nameSprite.scale.set(2.6, 0.65, 1);
    nameSprite.position.set(0, PLAYER_HEIGHT + 0.5, 0);
    group.add(nameSprite);

    if (isLocal) {
      this.localMesh = group;
      this.localName = nameSprite;
      const weapon = this.createWeaponMesh(player.activeWeapon, player.gun);
      if (weapon) {
        weapon.position.set(0.45, PLAYER_HEIGHT - 0.55, -0.75);
        weapon.rotation.set(-0.3, 0.2, 0);
        this.camera.add(weapon);
        this.localWeapon = weapon;
      }
    } else {
      this.remotePlayers.set(player.id, {
        mesh: group,
        nameMesh: nameSprite,
        target: { x: player.x, y: player.y, z: player.z, yaw: player.yaw, pitch: player.pitch },
        receivedAt: Date.now(),
      });
    }
    this.scene.add(group);
  }

  private createWeaponMesh(active: ActiveWeapon, gun: GunId | null): THREE.Mesh | null {
    if (active === 'fists' || !gun) return null;
    const geo = new THREE.BoxGeometry(0.14, 0.14, 0.55);
    const mat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.4, roughness: 0.4 });
    return new THREE.Mesh(geo, mat);
  }

  private addOrUpdateRemote(player: PlayerSnapshot): void {
    let entry = this.remotePlayers.get(player.id);
    if (!entry) {
      this.addPlayerMesh(player, false);
      entry = this.remotePlayers.get(player.id)!;
    }
    entry.target = { x: player.x, y: player.y, z: player.z, yaw: player.yaw, pitch: player.pitch };
    entry.receivedAt = Date.now();
    entry.mesh.visible = player.alive && player.connected;
  }

  private cleanupPlayers(aliveIds: string[]): void {
    for (const [id, entry] of this.remotePlayers) {
      if (!aliveIds.includes(id)) {
        this.scene.remove(entry.mesh);
        this.remotePlayers.delete(id);
      }
    }
  }

  private syncLocalMesh(player: PlayerSnapshot): void {
    if (!this.localMesh) return;
    this.localMesh.position.set(player.x, player.y, player.z);
    this.localMesh.rotation.y = player.yaw;
    this.camera.position.set(player.x, player.y + CAMERA_HEIGHT, player.z);
    this.camera.rotation.set(player.pitch, player.yaw, 0, 'YXZ');
    if (this.localWeapon && player.activeWeapon !== 'fists' && player.gun) {
      this.localWeapon.visible = true;
    } else if (this.localWeapon) {
      this.localWeapon.visible = false;
    }
    this.controls.object.position.copy(this.camera.position);
    this.controls.object.rotation.copy(this.camera.rotation);
  }

  private updateLoot(loot: any[]): void {
    const ids = new Set<number>();
    loot.forEach((item) => {
      ids.add(item.id);
      let mesh = this.lootMeshes.get(item.id);
      if (!mesh) {
        const geo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        const mat = new THREE.MeshStandardMaterial({
          color: item.kind === 'weapon' ? 0x6ea8fe : item.kind === 'medkit' ? 0xff6b6b : 0xfeca57,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(item.x, item.y, item.z);
        this.scene.add(mesh);
        this.lootMeshes.set(item.id, mesh);
      }
      mesh.visible = item.active;
      mesh.position.set(item.x, item.y, item.z);
    });
    for (const [id, mesh] of this.lootMeshes) {
      if (!ids.has(id)) { this.scene.remove(mesh); this.lootMeshes.delete(id); }
    }
  }

  private updateBuilds(builds: any[]): void {
    const ids = new Set<number>();
    builds.forEach((build) => {
      ids.add(build.id);
      let mesh = this.buildMeshes.get(build.id);
      if (!mesh) {
        const geo = new THREE.BoxGeometry(build.w, build.h, build.d);
        const mat = new THREE.MeshStandardMaterial({ color: 0x8f9ea6, roughness: 0.9 });
        mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(build.x, build.h / 2, build.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        this.buildMeshes.set(build.id, mesh);
      }
      mesh.position.set(build.x, build.h / 2, build.z);
      mesh.scale.set(build.w, build.h, build.d);
    });
    for (const [id, mesh] of this.buildMeshes) {
      if (!ids.has(id)) { this.scene.remove(mesh); this.buildMeshes.delete(id); }
    }
  }

  private playShot(shot: any): void {
    const start = new THREE.Vector3(...shot.origin);
    const end = new THREE.Vector3(...shot.end);
    const material = new THREE.LineBasicMaterial({ color: 0xff4444, linewidth: 2 });
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([start, end]), material);
    this.scene.add(line);
    setTimeout(() => { this.scene.remove(line); }, 120);
  }

  private showNotice(message: string): void {
    const el = document.createElement('div');
    el.textContent = message;
    el.style.position = 'fixed';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.color = '#fff';
    el.style.background = 'rgba(0,0,0,0.7)';
    el.style.padding = '10px 18px';
    el.style.borderRadius = '8px';
    el.style.pointerEvents = 'none';
    el.style.fontFamily = 'system-ui, sans-serif';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }

  private clearWorld(): void {
    this.remotePlayers.forEach((entry) => this.scene.remove(entry.mesh));
    this.remotePlayers.clear();
    this.lootMeshes.forEach((mesh) => this.scene.remove(mesh));
    this.lootMeshes.clear();
    this.buildMeshes.forEach((mesh) => this.scene.remove(mesh));
    this.buildMeshes.clear();
  }

  private addGroundDecoration(): void {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshStandardMaterial({ color: 0x1f3a33 });
    const inst = new THREE.InstancedMesh(geo, mat, 40);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 150;
      dummy.position.set(x, 0.5, z);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    this.obstacles.push(inst);
    this.scene.add(inst);
  }

  private onResize = () => {
    const width = this.container.clientWidth || 400;
    const height = this.container.clientHeight || 300;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    if (this.renderer instanceof THREE.WebGLRenderer) this.renderer.setSize(width, height);
  };

  private pointerEuler = new THREE.Euler(0, 0, 0, 'YXZ');

  private requestPointerLock = () => { this.renderer.domElement.requestPointerLock(); };

  private exitPointerLock = () => { document.exitPointerLock(); };

  private onPointerLockChange = () => {
    this.pointerLocked = !!document.pointerLockElement;
  };

  private onMouseMove = (event: MouseEvent) => {
    if (!this.pointerLocked) return;
    this.pointerEuler.setFromRotationMatrix(this.camera.rotation as unknown as THREE.Matrix4);
    this.pointerEuler.y -= event.movementX * 0.002;
    this.pointerEuler.x -= event.movementY * 0.002;
    this.pointerEuler.x = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, this.pointerEuler.x));
    this.camera.rotation.set(this.pointerEuler.x, this.pointerEuler.y, 0, 'YXZ');
  };

  private onKeyDown = (event: KeyboardEvent) => {
    this.keys.add(event.code);
    if (event.code === 'KeyR') this.reload();
    if (event.code === 'KeyQ') this.heal();
    if (event.code === 'KeyB') this.build();
    if (event.code === 'Digit1') this.client.send('match.select', { weapon: 'fists' });
    if (event.code === 'Digit2') {
      const gun = this.mySnapshot?.gun;
      if (gun) this.client.send('match.select', { weapon: gun });
    }
    if (event.code === 'Space') this.jump();
    if (event.code === 'KeyV') this.cycleCamera();
  };

  private onKeyUp = (event: KeyboardEvent) => { this.keys.delete(event.code); };

  private cycleCamera = () => {};

  setTouchMove(x: number, y: number): void { this.touchMove = { x, y }; }

  jump(): void {
    this.keys.add('Space');
    setTimeout(() => this.keys.delete('Space'), 120);
  }

  reload(): void { this.client.send('match.reload', {}); }
  heal(): void { this.client.send('match.heal', {}); }
  build(): void { this.client.send('match.build', {}); }
  fire(): void { this.client.send('match.fire', { yaw: this.camera.rotation.y, pitch: this.camera.rotation.x }); }
  cycleWeapon(): void { this.client.send('match.select', { weapon: 'fists' }); }

  dispose(): void {
    this.matchStarted = false;
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('pointerlockchange', this.onPointerLockChange);
    document.removeEventListener('mousemove', this.onMouseMove);
    if (this.pointerLocked) this.exitPointerLock();
    this.client.subscribe(() => {});
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
  }

  private sendInput(): void {
    const now = Date.now();
    if (now - this.lastInputTime < 1000 / INPUT_HZ) return;
    this.lastInputTime = now;
    const moveX = (this.keys.has('KeyA') ? -1 : 0) + (this.keys.has('KeyD') ? 1 : 0);
    const moveZ = (this.keys.has('KeyW') ? -1 : 0) + (this.keys.has('KeyS') ? 1 : 0);
    this.inputSequence++;
    this.client.send('match.input', {
      moveX, moveZ,
      yaw: this.camera.rotation.y,
      pitch: this.camera.rotation.x,
      sprint: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'),
      crouch: this.keys.has('ControlLeft') || this.keys.has('ControlRight'),
      jump: this.keys.has('Space'),
      sequence: this.inputSequence,
    });
  }

  private interpolateRemotes(dt: number): void {
    for (const entry of this.remotePlayers.values()) {
      const age = Date.now() - entry.receivedAt;
      const mesh = entry.mesh;
      mesh.position.x += (entry.target.x - mesh.position.x) * Math.min(1, dt * 12);
      mesh.position.z += (entry.target.z - mesh.position.z) * Math.min(1, dt * 12);
      mesh.position.y += (entry.target.y - mesh.position.y) * Math.min(1, dt * 12);
      mesh.rotation.y += (entry.target.yaw - mesh.rotation.y) * Math.min(1, dt * 10);
      entry.mesh.visible = age < 2000;
    }
  }

  private animate = () => {
    this.animationFrame = requestAnimationFrame(this.animate);
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastFrameTime) / 1000 || 0.016);
    this.lastFrameTime = now;

    if (this.pointerLocked && this.matchStarted && this.mySnapshot?.alive) {
      this.controls.moveRight((this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0));
      this.controls.moveForward((this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0));
      this.sendInput();
    } else if (this.touchMove.x !== 0 || this.touchMove.y !== 0) {
      const speed = 6 * dt;
      const forward = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(0, this.camera.rotation.y, 0, 'YXZ'));
      const right = new THREE.Vector3(1, 0, 0).applyEuler(new THREE.Euler(0, this.camera.rotation.y, 0, 'YXZ'));
      this.camera.position.addScaledVector(forward, this.touchMove.y * speed);
      this.camera.position.addScaledVector(right, this.touchMove.x * speed);
      this.camera.position.y = CAMERA_HEIGHT;
      this.controls.object.position.copy(this.camera.position);
      this.sendTouchInput();
    }

    this.interpolateRemotes(dt);
    this.renderer.render(this.scene, this.camera);
  };

  private sendTouchInput(): void {
    const now = Date.now();
    if (now - this.lastInputTime < 1000 / INPUT_HZ) return;
    this.lastInputTime = now;
    this.inputSequence++;
    this.client.send('match.input', {
      moveX: this.touchMove.x, moveZ: -this.touchMove.y,
      yaw: this.camera.rotation.y, pitch: this.camera.rotation.x,
      sprint: false, crouch: false, jump: false, sequence: this.inputSequence,
    });
  }
}
