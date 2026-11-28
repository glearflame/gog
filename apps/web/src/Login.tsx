import { useEffect, useRef, useState } from 'react';
import type { PublicUser } from '@gog/shared';
import { api } from './api';

interface Props {
  onLogin(user: PublicUser): void;
}

export default function Login({ onLogin }: Props) {
  const googleButton = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<{ googleClientId: string; devAuth: boolean } | null>(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api<{ googleClientId: string; devAuth: boolean }>('/api/config').then(setConfig).catch((reason) => setError(reason.message));
  }, []);

  useEffect(() => {
    if (!config?.googleClientId || !googleButton.current) return;
    let cancelled = false;
    const initialize = () => {
      if (cancelled || !window.google || !googleButton.current) return;
      window.google.accounts.id.initialize({
        client_id: config.googleClientId,
        callback: async ({ credential }) => {
          setBusy(true); setError('');
          try {
            const result = await api<{ user: PublicUser }>('/api/auth/google', { method: 'POST', body: JSON.stringify({ credential }) });
            onLogin(result.user);
          } catch (reason) { setError(reason instanceof Error ? reason.message : 'Falha no login.'); }
          finally { setBusy(false); }
        },
      });
      googleButton.current.replaceChildren();
      window.google.accounts.id.renderButton(googleButton.current, { theme: 'filled_black', size: 'large', text: 'continue_with', shape: 'rectangular', locale: 'pt-BR', width: 320 });
    };
    if (window.google) initialize();
    else {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = initialize;
      script.onerror = () => setError('Não foi possível carregar o login Google.');
      document.head.append(script);
    }
    return () => { cancelled = true; };
  }, [config, onLogin]);

  const devLogin = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const result = await api<{ user: PublicUser }>('/api/auth/dev', { method: 'POST', body: JSON.stringify({ name }) });
      onLogin(result.user);
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Falha no login.'); }
    finally { setBusy(false); }
  };

  return <main className="login-screen">
    <div className="login-sky" aria-hidden="true"><i /><i /><i /><i /></div>
    <section className="login-hero">
      <div className="brand-mark" aria-hidden="true"><span>G</span></div>
      <p className="eyebrow">OITO ENTRAM. UM SOBREVIVE.</p>
      <h1><span>GoG</span> BATTLE<br />ROYALE</h1>
      <p className="login-copy">Explore a arena voxel, encontre armas, construa barreiras e fique dentro da zona. Agora com partidas online de verdade.</p>
      <div className="feature-pills"><span>PC + CELULAR</span><span>SALAS PRIVADAS</span><span>SERVIDOR AUTORITATIVO</span></div>
    </section>
    <section className="login-card">
      <p className="eyebrow">SUA PRÓXIMA PARTIDA</p>
      <h2>Entre na arena</h2>
      <p>Use sua conta Google para salvar perfil, estatísticas e histórico.</p>
      {config?.googleClientId ? <div ref={googleButton} className="google-button" /> : <div className="config-note">Login Google aguardando configuração do <code>GOOGLE_CLIENT_ID</code>.</div>}
      {config?.devAuth && <>
        <div className="divider"><span>AMBIENTE DE TESTE</span></div>
        <form onSubmit={devLogin} className="dev-login">
          <label htmlFor="dev-name">Nome de jogador local</label>
          <input id="dev-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ex.: BlocoMiner" maxLength={24} />
          <button className="button secondary" disabled={busy}>Entrar como teste</button>
        </form>
        <small>Esta opção não existe em produção e o banco em memória não preserva dados.</small>
      </>}
      {busy && <p role="status">Validando acesso…</p>}
      {error && <p className="error" role="alert">{error}</p>}
    </section>
  </main>;
}
