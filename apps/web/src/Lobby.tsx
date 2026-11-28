import { useEffect, useState } from 'react';
import { SKINS, type GameMode, type HistoryEntry, type LeaderboardEntry, type PresencePlayer, type PublicUser, type RoomListItem, type RoomState, type SkinId } from '@gog/shared';
import type { GameClient } from './network';
import { api } from './api';

interface Props {
  client: GameClient;
  user: PublicUser;
  connected: boolean;
  online: number;
  players: PresencePlayer[];
  rooms: RoomListItem[];
  room: RoomState | null;
  onLogout(): void;
  onUser(user: PublicUser): void;
}

type Tab = 'play' | 'ranking' | 'history' | 'profile';
const modes: Array<{ id: GameMode; name: string; detail: string }> = [
  { id: 'solo', name: 'SOLO', detail: '8 jogadores · cada um por si' },
  { id: 'duo', name: 'DUO', detail: '4 duplas · sem fogo amigo' },
  { id: 'squad', name: 'ESQUADRÃO', detail: '2 esquadrões de 4' },
];
const modeName = (mode: GameMode) => mode === 'solo' ? 'Solo' : mode === 'duo' ? 'Duo' : 'Esquadrão';
const skinNames: Record<SkinId, string> = { scout: 'Batedor', forest: 'Floresta', ocean: 'Oceano', ember: 'Brasa' };

export default function Lobby({ client, user, connected, online, players, rooms, room, onLogout, onUser }: Props) {
  const [tab, setTab] = useState<Tab>('play');
  const [name, setName] = useState('Arena dos amigos');
  const [mode, setMode] = useState<GameMode>('solo');
  const [visibility, setVisibility] = useState<'public' | 'private'>('private');
  const [joinCode, setJoinCode] = useState('');
  const [inviteId, setInviteId] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [profileName, setProfileName] = useState(user.name);
  const [message, setMessage] = useState('');
  const isHost = room?.hostId === user.id;

  useEffect(() => {
    if (tab === 'ranking') api<{ leaderboard: LeaderboardEntry[] }>('/api/leaderboard').then((response) => setLeaderboard(response.leaderboard)).catch((error) => setMessage(error.message));
    if (tab === 'history') api<{ history: HistoryEntry[] }>('/api/history').then((response) => setHistory(response.history)).catch((error) => setMessage(error.message));
  }, [tab]);

  const copyInvite = async () => {
    if (!room) return;
    const link = `${location.origin}/convite/${room.code}`;
    try { await navigator.clipboard.writeText(link); setMessage('Link de convite copiado.'); }
    catch { setMessage(link); }
  };
  const saveProfile = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api<{ user: PublicUser }>('/api/me', { method: 'PATCH', body: JSON.stringify({ name: profileName }) });
      onUser(response.user); setMessage('Perfil atualizado.');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Não foi possível salvar.'); }
  };
  const equip = async (skin: SkinId) => {
    try {
      const response = await api<{ user: PublicUser }>('/api/me', { method: 'PATCH', body: JSON.stringify({ skin }) });
      onUser(response.user); setMessage(`${skinNames[skin]} equipada.`);
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Não foi possível equipar.'); }
  };

  return <div className="app-shell">
    <header className="topbar">
      <button className="wordmark" onClick={() => setTab('play')}><span>GoG</span><small>BATTLE ROYALE</small></button>
      <div className="top-stats"><span><i className={`status-dot ${connected ? 'online' : ''}`} />{connected ? `${online} online` : 'Reconectando…'}</span><span>{user.stats.rp} PR</span><span>{user.stats.wins} vitórias</span></div>
      <button className="profile-chip" onClick={() => setTab('profile')}>
        <UserAvatar user={user} /><span><b>{user.name}</b><small>{user.publicId}</small></span>
      </button>
    </header>
    <nav className="main-nav" aria-label="Menu principal">
      <button aria-pressed={tab === 'play'} onClick={() => setTab('play')}>Jogar</button>
      <button aria-pressed={tab === 'ranking'} onClick={() => setTab('ranking')}>Ranking</button>
      <button aria-pressed={tab === 'history'} onClick={() => setTab('history')}>Histórico</button>
      <button aria-pressed={tab === 'profile'} onClick={() => setTab('profile')}>Cofre & perfil</button>
    </nav>
    <main className="lobby-content">
      {tab === 'play' && (room ? <section className="room-layout">
        <div className="room-main panel">
          <div className="room-heading"><div><p className="eyebrow">{room.matchmaking ? 'PARTIDA RÁPIDA RANQUEADA' : room.visibility === 'private' ? 'SALA PRIVADA' : 'SALA PÚBLICA'}</p><h1>{room.name}</h1></div><span className="room-code">{room.code}</span></div>
          <div className="room-progress"><span>{room.members.length}/8 jogadores</span><div><i style={{ width: `${room.members.length / 8 * 100}%` }} /></div></div>
          <div className="member-grid">{room.members.map((member) => <article key={member.id} className="member-card">
            <UserAvatar user={member} /><div><b>{member.name}</b><small>{member.publicId}</small></div>{member.id === room.hostId && <span title="Dono da sala">👑</span>}<i className={`skin-dot ${member.skin}`} />
          </article>)}</div>
          {room.status === 'countdown' && <p className="queue-status">Sala cheia! A partida começa em instantes…</p>}
          {room.matchmaking && room.status === 'waiting' && <p className="queue-status">Na fila: entrada automática após 20 s com 2+ jogadores, ou 5 s com sala cheia.</p>}
          <div className="room-actions">
            {!room.matchmaking && isHost && <button className="button primary large" disabled={room.members.length < 2} onClick={() => client.send('room.start')}>Iniciar partida</button>}
            {!room.matchmaking && <button className="button secondary" onClick={copyInvite}>Copiar link de convite</button>}
            <button className="button ghost" onClick={() => client.send('room.leave')}>{room.matchmaking ? 'Sair da fila' : 'Sair da sala'}</button>
          </div>
        </div>
        <aside className="room-settings panel">
          <p className="eyebrow">CONFIGURAÇÃO DA SALA</p>
          <h2>{modeName(room.mode)}</h2>
          {isHost && !room.matchmaking ? <>
            <label>Modo<select value={room.mode} onChange={(event) => client.send('room.update', { mode: event.target.value })}>{modes.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
            <label>Visibilidade<select value={room.visibility} onChange={(event) => client.send('room.update', { visibility: event.target.value })}><option value="private">Privada · por convite</option><option value="public">Pública · aparece na lista</option></select></label>
            <label>Convidar por ID público<div className="inline-field"><input value={inviteId} onChange={(event) => setInviteId(event.target.value.toUpperCase())} placeholder="GOG-XXXXXXXX" /><button className="button secondary" onClick={() => { client.send('room.invite', { publicId: inviteId }); setInviteId(''); }}>Enviar</button></div></label>
          </> : <p>{room.matchmaking ? 'O servidor organiza as equipes e valida o resultado para o ranking.' : 'Aguarde o dono configurar e iniciar a partida.'}</p>}
          <div className="rules-note"><b>Regras competitivas</b><span>Dano, tiro, loot, zona e vitória calculados no servidor.</span><span>Salas personalizadas não concedem PR.</span></div>
        </aside>
      </section> : <>
        <section className="play-column">
          <div className="hero-banner"><div><p className="eyebrow">TEMPORADA BLOCOS · 8 JOGADORES</p><h1>Entre. Equipe.<br /><span>Sobreviva.</span></h1><p>Partidas rápidas, arena voxel e nenhuma vantagem comprada.</p></div><VoxelCharacter skin={user.skin} /></div>
          <div className="quick-grid">{modes.map((item) => <button key={item.id} className="mode-card" disabled={!connected} onClick={() => client.send('queue.join', { mode: item.id })}><span className="mode-icon">{item.id === 'solo' ? '◆' : item.id === 'duo' ? '◆◆' : '◆◆◆◆'}</span><b>{item.name}</b><small>{item.detail}</small><em>PARTIDA RÁPIDA · RANQUEADA</em></button>)}</div>
          <div className="custom-grid">
            <form className="panel custom-form" onSubmit={(event) => { event.preventDefault(); client.send('room.create', { name, mode, visibility }); }}><p className="eyebrow">JOGUE COM SEUS AMIGOS</p><h2>Criar sala personalizada</h2>
              <label>Nome da sala<input value={name} onChange={(event) => setName(event.target.value)} maxLength={28} required /></label>
              <div className="two-fields"><label>Modo<select value={mode} onChange={(event) => setMode(event.target.value as GameMode)}>{modes.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label><label>Acesso<select value={visibility} onChange={(event) => setVisibility(event.target.value as 'public' | 'private')}><option value="private">Privada</option><option value="public">Pública</option></select></label></div>
              <button className="button primary" disabled={!connected}>Criar sala</button>
            </form>
            <form className="panel custom-form" onSubmit={(event) => { event.preventDefault(); client.send('room.join', { code: joinCode }); }}><p className="eyebrow">TEM UM CONVITE?</p><h2>Entrar com código</h2><p>Use o código de seis caracteres enviado pelo seu amigo.</p><label>Código da sala<input className="code-input" value={joinCode} onChange={(event) => setJoinCode(event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))} placeholder="ABC234" required minLength={6} /></label><button className="button secondary" disabled={!connected}>Entrar na sala</button></form>
          </div>
        </section>
        <aside className="sidebar-column">
          <section className="panel online-panel"><div className="section-heading"><h2>Jogadores online</h2><span>{online}</span></div><div className="online-list">{players.map((player) => <div key={player.id}><UserAvatar user={player} /><span><b>{player.name}</b><small>{player.publicId}</small></span><i className={`status-dot ${player.status === 'playing' ? 'busy' : 'online'}`} title={player.status} /></div>)}{!players.length && <p>Nenhum jogador conectado.</p>}</div></section>
          <section className="panel public-panel"><div className="section-heading"><h2>Salas públicas</h2><span>{rooms.length}</span></div>{rooms.map((item) => <button className="public-room" key={item.code} onClick={() => client.send('room.join', { code: item.code })}><span><b>{item.name}</b><small>{modeName(item.mode)} · {item.players}/{item.maxPlayers}</small></span><em>Entrar</em></button>)}{!rooms.length && <p>Nenhuma sala pública aguardando.</p>}</section>
        </aside>
      </>)}
      {tab === 'ranking' && <section className="panel data-panel"><p className="eyebrow">CLASSIFICAÇÃO GLOBAL</p><h1>Os melhores da arena</h1><p>Somente partidas rápidas validadas pelo servidor alteram os Pontos de Ranking.</p><div className="table-wrap"><table><thead><tr><th>#</th><th>Jogador</th><th>PR</th><th>Vitórias</th><th>Eliminações</th><th>Partidas</th></tr></thead><tbody>{leaderboard.map((entry, index) => <tr key={entry.publicId}><td>{index + 1}</td><td><b>{entry.name}</b><small>{entry.publicId}</small></td><td>{entry.rp}</td><td>{entry.wins}</td><td>{entry.kills}</td><td>{entry.matches}</td></tr>)}</tbody></table>{!leaderboard.length && <p className="empty-state">O ranking aparecerá após as primeiras partidas.</p>}</div></section>}
      {tab === 'history' && <section className="panel data-panel"><p className="eyebrow">SEU HISTÓRICO</p><h1>Partidas recentes</h1><div className="history-list">{history.map((entry) => <article key={entry.matchId}><span className={entry.won ? 'victory' : ''}>#{entry.placement}</span><div><b>{entry.won ? 'Vitória' : 'Partida encerrada'} · {modeName(entry.mode)}</b><small>{new Date(entry.endedAt).toLocaleString('pt-BR')} · {entry.ranked ? 'Ranqueada' : 'Personalizada'}</small></div><span>{entry.kills} elim.</span><span>{entry.damage} dano</span>{entry.ranked && <span>{entry.rpDelta >= 0 ? '+' : ''}{entry.rpDelta} PR</span>}</article>)}{!history.length && <p className="empty-state">Você ainda não concluiu uma partida online.</p>}</div></section>}
      {tab === 'profile' && <div className="profile-layout"><section className="panel profile-preview"><p className="eyebrow">SEU PERSONAGEM</p><VoxelCharacter skin={user.skin} large /><h1>{user.name}</h1><p>{user.publicId}</p><div className="profile-numbers"><span><b>{user.stats.matches}</b> partidas</span><span><b>{user.stats.wins}</b> vitórias</span><span><b>{user.stats.kills}</b> eliminações</span><span><b>{Math.round(user.stats.damage)}</b> dano</span></div></section><section className="panel profile-settings"><p className="eyebrow">COFRE & PERFIL</p><h2>Personalização</h2><p>As skins são apenas visuais e não alteram os atributos das armas.</p><div className="skin-grid">{SKINS.map((skin) => <button key={skin} aria-pressed={user.skin === skin} onClick={() => equip(skin)}><i className={`skin-preview ${skin}`} /><b>{skinNames[skin]}</b><small>{user.skin === skin ? 'Equipada' : 'Disponível'}</small></button>)}</div><form onSubmit={saveProfile}><label>Nome de jogador<input value={profileName} onChange={(event) => setProfileName(event.target.value)} minLength={2} maxLength={24} required /></label><button className="button primary">Salvar nome</button></form><button className="button ghost" onClick={onLogout}>Sair da conta</button></section></div>}
    </main>
    {message && <button className="inline-notice" onClick={() => setMessage('')}>{message} <span>×</span></button>}
    <footer>GoG Battle Royale · pré-alpha online · resultados e progressão controlados pelo servidor</footer>
  </div>;
}

function UserAvatar({ user }: { user: { name: string; avatarUrl: string; publicId?: string } }) {
  return user.avatarUrl ? <img className="avatar" src={user.avatarUrl} alt="" referrerPolicy="no-referrer" /> : <span className="avatar fallback">{user.name.slice(0, 1).toUpperCase()}</span>;
}

function VoxelCharacter({ skin, large = false }: { skin: SkinId; large?: boolean }) {
  return <div className={`voxel-character ${skin} ${large ? 'large' : ''}`} aria-label={`Personagem voxel ${skinNames[skin]}`}><div className="voxel-head"><i /><i /></div><div className="voxel-body" /><div className="voxel-arm left" /><div className="voxel-arm right" /><div className="voxel-leg left" /><div className="voxel-leg right" /><div className="character-shadow" /></div>;
}
