import { useEffect, useRef, useState } from 'react';
import type { MatchStart } from '@gog/shared';
import type { GameClient } from '../network';
import { VoxelGame, type HudState } from './VoxelGame';

interface Props { client: GameClient; match: MatchStart; userId: string }

export default function GameView({ client, match, userId }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const game = useRef<VoxelGame | null>(null);
  const joystick = useRef<{ id: number; x: number; y: number } | null>(null);
  const [hud, setHud] = useState<HudState>({ hp: 100, ammo: 0, reserve: 0, weapon: 'Punhos', kits: 0, walls: 8, alive: match.players.length, zone: 78, zoneText: '45 s', kills: 0, phase: 'drop', connected: true });
  const [pad, setPad] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!container.current) return;
    const instance = new VoxelGame(container.current, client, match, userId, setHud);
    game.current = instance;
    return () => { instance.dispose(); game.current = null; };
  }, [client, match, userId]);

  const moveStick = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!joystick.current || joystick.current.id !== event.pointerId) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const length = Math.max(1, Math.hypot(dx, dy));
    const radius = rect.width * 0.32;
    const scale = Math.min(radius, length) / length;
    const x = dx * scale / radius;
    const y = dy * scale / radius;
    setPad({ x, y });
    game.current?.setTouchMove(x, y);
  };
  const stopStick = (event: React.PointerEvent<HTMLDivElement>) => {
    if (joystick.current?.id !== event.pointerId) return;
    joystick.current = null; setPad({ x: 0, y: 0 }); game.current?.setTouchMove(0, 0);
  };

  return <div className="game-shell">
    <div ref={container} className="game-canvas" />
    <div className="game-top"><span className="game-brand">GoG <small>BR</small></span><span>{hud.alive} VIVOS</span><span>ZONA {Math.ceil(hud.zone)} m · {hud.zoneText}</span><span>{hud.kills} ELIM.</span></div>
    <div className="crosshair" aria-hidden="true">+</div>
    <div className="game-status">{!hud.connected && 'CONEEXÃO PERDIDA · RECONECTANDO'}{hud.phase === 'drop' && hud.connected && 'QUEDA LIVRE · Mova-se para escolher o pouso'}</div>
    <div className="game-bottom"><div className="hp-block"><span>HP <b>{hud.hp}</b></span><progress max={100} value={hud.hp} /></div><div className="weapon-block"><b>{hud.weapon}</b><span>{hud.ammo} / {hud.reserve}</span><small>Q kit ×{hud.kits} · B parede ×{hud.walls}</small></div></div>
    <div className="desktop-help">WASD mover · Mouse mirar · Clique atirar · Espaço pular · R recarregar · Q kit · B parede · 1/2 armas · V câmera</div>
    <div className="touch-controls">
      <div className="touch-pad" onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); joystick.current = { id: event.pointerId, x: 0, y: 0 }; moveStick(event); }} onPointerMove={moveStick} onPointerUp={stopStick} onPointerCancel={stopStick}><i style={{ transform: `translate(${pad.x * 30}px,${pad.y * 30}px)` }} /></div>
      <div className="touch-actions"><button onPointerDown={() => game.current?.jump()}>PULAR</button><button onPointerDown={() => game.current?.reload()}>R</button><button className="fire-button" onPointerDown={() => game.current?.fire()}>ATIRAR</button><button onPointerDown={() => game.current?.heal()}>KIT</button><button onPointerDown={() => game.current?.build()}>PAREDE</button><button onPointerDown={() => game.current?.cycleWeapon()}>TROCAR</button></div>
    </div>
  </div>;
}
