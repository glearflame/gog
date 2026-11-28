import { useCallback, useEffect, useRef, useState } from 'react';
import type { MatchResult, MatchStart, PresencePlayer, PublicUser, RoomListItem, RoomState, ServerMessage } from '@gog/shared';
import { api } from './api';
import { GameClient } from './network';
import Login from './Login';
import Lobby from './Lobby';
import GameView from './game/GameView';

export default function App() {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState<GameClient | null>(null);
  const [connected, setConnected] = useState(false);
  const [online, setOnline] = useState(0);
  const [players, setPlayers] = useState<PresencePlayer[]>([]);
  const [rooms, setRooms] = useState<RoomListItem[]>([]);
  const [room, setRoom] = useState<RoomState | null>(null);
  const [match, setMatch] = useState<MatchStart | null>(null);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [toast, setToast] = useState<{ message: string; level: string } | null>(null);
  const [invite, setInvite] = useState<Extract<ServerMessage, { type: 'room.invite' }> | null>(null);
  const joinedInviteLink = useRef(false);

  useEffect(() => {
    api<{ user: PublicUser }>('/api/me').then((response) => setUser(response.user)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4200);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!user) return;
    const connection = new GameClient();
    setClient(connection);
    const offStatus = connection.onStatus((isConnected) => {
      setConnected(isConnected);
      if (isConnected && !joinedInviteLink.current) {
        const found = location.pathname.match(/^\/convite\/([A-Z0-9]{4,8})$/i);
        if (found?.[1]) {
          joinedInviteLink.current = true;
          connection.send('room.join', { code: found[1] });
          history.replaceState({}, '', '/');
        }
      }
    });
    const offMessages = connection.subscribe((message) => {
      switch (message.type) {
        case 'hello': setUser(message.user); break;
        case 'presence': setOnline(message.online); setPlayers(message.players); break;
        case 'room.list': setRooms(message.rooms); break;
        case 'room.state': setRoom(message.room); break;
        case 'room.invite': setInvite(message); break;
        case 'match.start': setResult(null); setMatch(message.match); break;
        case 'match.end': setMatch(null); setResult(message.result); break;
        case 'notice': setToast({ message: message.message, level: message.level }); break;
        case 'match.notice': setToast({ message: message.message, level: 'info' }); break;
      }
    });
    connection.connect();
    return () => {
      offStatus(); offMessages(); connection.close();
      setClient(null); setConnected(false); setMatch(null); setRoom(null);
    };
  }, [user?.id]);

  const onLogin = useCallback((loggedUser: PublicUser) => setUser(loggedUser), []);
  const logout = async () => {
    client?.close();
    await api('/api/auth/logout', { method: 'POST' }).catch(() => {});
    setUser(null); setRoom(null); setMatch(null); setResult(null); setPlayers([]); setOnline(0);
  };

  if (loading) return <div className="loading-screen"><div className="brand-mark"><span>G</span></div><p>Carregando a arena…</p></div>;
  if (!user) return <Login onLogin={onLogin} />;

  return <>
    {match && client ? <GameView client={client} match={match} userId={user.id} /> : client && <Lobby
      client={client} user={user} connected={connected} online={online} players={players} rooms={rooms} room={room}
      onLogout={logout} onUser={setUser}
    />}
    {invite && client && !match && <div className="invite-card" role="alertdialog" aria-label="Convite para sala">
      <p className="eyebrow">CONVITE RECEBIDO</p>
      <h3>{invite.from.name} chamou você!</h3>
      <p>{invite.roomName} · {invite.mode.toUpperCase()}</p>
      <div className="button-row">
        <button className="button primary" onClick={() => { client.send('room.join', { code: invite.code }); setInvite(null); }}>Aceitar</button>
        <button className="button ghost" onClick={() => setInvite(null)}>Agora não</button>
      </div>
    </div>}
    {result && !match && <div className="modal-backdrop"><section className="result-card">
      <p className="eyebrow">PARTIDA ENCERRADA · {result.mode.toUpperCase()}</p>
      <h2>{result.players.find((player) => player.userId === user.id)?.won ? 'VITÓRIA!' : 'FIM DE JOGO'}</h2>
      <div className="result-list">{result.players.map((player) => <div key={player.userId} className={player.userId === user.id ? 'mine' : ''}>
        <span>#{player.placement}</span><b>{player.name}{player.userId === user.id ? ' (você)' : ''}</b>
        <span>{player.kills} elim.</span>{result.ranked && <span>{player.rpDelta >= 0 ? '+' : ''}{player.rpDelta} PR</span>}
      </div>)}</div>
      <p>{result.ranked ? 'Resultado ranqueado validado pelo servidor.' : 'Partida personalizada: estatísticas salvas, sem alteração de PR.'}</p>
      <button className="button primary" onClick={() => setResult(null)}>Voltar ao lobby</button>
    </section></div>}
    {toast && <div className={`toast ${toast.level}`} role="status">{toast.message}</div>}
  </>;
}
