CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  public_id varchar(16) UNIQUE NOT NULL,
  google_sub text UNIQUE,
  email text,
  name varchar(24) NOT NULL,
  avatar_url text NOT NULL DEFAULT '',
  skin varchar(20) NOT NULL DEFAULT 'scout',
  role varchar(10) NOT NULL DEFAULT 'player',
  matches integer NOT NULL DEFAULT 0,
  wins integer NOT NULL DEFAULT 0,
  kills integer NOT NULL DEFAULT 0,
  damage integer NOT NULL DEFAULT 0,
  rp integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS users_leaderboard_idx ON users(rp DESC, wins DESC, kills DESC);

CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY,
  token_hash text UNIQUE NOT NULL,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS sessions_expires_idx ON sessions(expires_at);

CREATE TABLE IF NOT EXISTS matches (
  id uuid PRIMARY KEY,
  room_code varchar(12) NOT NULL,
  mode varchar(10) NOT NULL,
  ranked boolean NOT NULL,
  started_at timestamptz NOT NULL,
  ended_at timestamptz NOT NULL
);
CREATE INDEX IF NOT EXISTS matches_ended_idx ON matches(ended_at DESC);

CREATE TABLE IF NOT EXISTS match_players (
  match_id uuid NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name varchar(24) NOT NULL,
  team integer NOT NULL,
  kills integer NOT NULL,
  damage integer NOT NULL,
  placement integer NOT NULL,
  won boolean NOT NULL,
  rp_delta integer NOT NULL,
  PRIMARY KEY (match_id, user_id)
);
CREATE INDEX IF NOT EXISTS match_players_user_idx ON match_players(user_id, match_id);

-- O servidor acessa o Postgres diretamente. As APIs anon/authenticated do
-- Supabase não recebem políticas: os dados não ficam expostos pelo PostgREST.
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_players ENABLE ROW LEVEL SECURITY;
