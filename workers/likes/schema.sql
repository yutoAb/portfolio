CREATE TABLE IF NOT EXISTS likes (id TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0);
-- One row per (post, visitor) for a day, so the same visitor cannot count twice. `voter` is a salted hash, never an IP.
CREATE TABLE IF NOT EXISTS votes (id TEXT NOT NULL, voter TEXT NOT NULL, ts INTEGER NOT NULL, PRIMARY KEY (id, voter));
CREATE INDEX IF NOT EXISTS votes_ts ON votes (ts);
CREATE INDEX IF NOT EXISTS votes_voter ON votes (voter);
