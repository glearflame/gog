import { useCallback, useEffect, useRef, useState } from 'react';
import type { MatchResult, PublicUser } from '@gog/shared';

interface Props {
  result: MatchResult;
  userId: string;
  user: PublicUser;
  onBack(): void;
}

const skinNames: Record<string, string> = { scout: 'Batedor', forest: 'Floresta', ocean: 'Oceano', ember: 'Brasa' };

export default function ResultScreen({ result, userId, user, onBack }: Props) {
  const me = result.players.find((p) => p.userId === userId);
  const won = !!me?.won;
  const placement = me?.placement ?? 0;
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 100);
    return () => clearTimeout(t);
  }, []);

  const totalDamage = result.players.reduce((sum, p) => sum + p.damage, 0);
  const totalKills = result.players.reduce((sum, p) => sum + p.kills, 0);

  const mvp = result.players.reduce((best, p) =>
    (p.kills > best.kills || (p.kills === best.kills && p.damage > best.damage)) ? p : best
  );

  const rankLabel = placement === 1 ? '1º lugar' : placement === 2 ? '2º lugar' : placement === 3 ? '3º lugar' : `#${placement}`;

  return (
    <div className="modal-backdrop" style={{ animation: 'fadeIn 250ms ease-out' }}>
      <section className="result-card" style={{ animation: reveal ? 'slideUp 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards' : 'none', opacity: reveal ? 1 : 0, transform: reveal ? 'none' : 'translateY(24px)' }}>
        <div className="result-header">
          <p className="eyebrow" style={{ color: won ? '#8fd694' : '#6ea8fe' }}>
            PARTIDA ENCERRADA · {result.mode.toUpperCase()}
          </p>
          <h2 className={won ? 'victory' : 'defeat'}>
            {won ? 'VITÓRIA!' : 'DERROTA'}
          </h2>
          <div className="placement-badge">{rankLabel}</div>
        </div>

        <div className="result-stats-row">
          <div className="result-stat">
            <div className="stat-value">{me?.kills ?? 0}</div>
            <div className="stat-label">Eliminações</div>
          </div>
          <div className="result-stat">
            <div className="stat-value">{Math.round(me?.damage ?? 0)}</div>
            <div className="stat-label">Dano</div>
          </div>
          <div className="result-stat">
            <div className="stat-value">{me?.placement ?? 0}</div>
            <div className="stat-label">Colocação</div>
          </div>
          {result.ranked && (
            <div className="result-stat rp">
              <div className="stat-value" style={{ color: (me?.rpDelta ?? 0) >= 0 ? '#8fd694' : '#ff6b6b' }}>
                {(me?.rpDelta ?? 0) >= 0 ? '+' : ''}{me?.rpDelta ?? 0}
              </div>
              <div className="stat-label">Pontos de Ranking</div>
            </div>
          )}
        </div>

        <div className="result-table-wrap">
          <table className="result-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Jogador</th>
                <th>Equipe</th>
                <th>Elim.</th>
                <th>Dano</th>
                {result.ranked && <th>PR</th>}
              </tr>
            </thead>
            <tbody>
              {result.players.map((player) => {
                const isMe = player.userId === userId;
                const isMvp = player.userId === mvp.userId;
                return (
                  <tr key={player.userId} className={`result-row ${isMe ? 'mine' : ''} ${isMvp ? 'mvp' : ''}`}>
                    <td>{player.placement}</td>
                    <td>
                      <div className="result-player-cell">
                        <b>{player.name}</b>{isMe && <span className="me-tag">(você)</span>}
                        {isMvp && <span className="mvp-tag">MVP</span>}
                      </div>
                    </td>
                    <td>Equipe {player.team + 1}</td>
                    <td>{player.kills}</td>
                    <td>{player.damage}</td>
                    {result.ranked && <td style={{ color: player.rpDelta >= 0 ? '#8fd694' : '#ff6b6b' }}>{player.rpDelta >= 0 ? '+' : ''}{player.rpDelta}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {result.ranked && (
          <div className="result-note">
            <b>Resultado ranqueado validado pelo servidor.</b>
          </div>
        )}
        {!result.ranked && (
          <div className="result-note">
            Partida personalizada: estatísticas salvas, sem alteração de PR.
          </div>
        )}

        <div className="result-actions">
          <button className="button primary large" onClick={onBack}>
            Voltar ao lobby
          </button>
        </div>
      </section>
    </div>
  );
}
