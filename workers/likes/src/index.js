// Like counts for blog posts on yutoabe.com. GET /?ids=a,b -> { counts }, POST / { id, on } -> { count }.
const SITE = 'https://yutoabe.com'
const ORIGINS = new Set([SITE, 'http://localhost:5173', 'http://localhost:4173'])
const ID = /^[a-z0-9][a-z0-9-]*(\/[a-z0-9][a-z0-9-]*)?$/
const DAY = 86400
const MAX_VOTES_PER_DAY = 60

function cors(origin) {
  return {
    'access-control-allow-origin': ORIGINS.has(origin) ? origin : SITE,
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'origin',
  }
}

function json(body, status, origin, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...cors(origin), ...extra },
  })
}

async function voterHash(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || ''
  const data = new TextEncoder().encode(`${env.SALT}|${ip}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(buf)].slice(0, 16).map((b) => b.toString(16).padStart(2, '0')).join('')
}

// A post id is its path on the site. A new id is accepted only when that page really exists.
async function pageExists(id) {
  const res = await fetch(`${SITE}/${id}`, { method: 'HEAD', redirect: 'follow' })
  return res.status === 200
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('origin') || ''
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) })

    if (request.method === 'GET') {
      const ids = (new URL(request.url).searchParams.get('ids') || '')
        .split(',')
        .filter((id) => id.length <= 100 && ID.test(id))
        .slice(0, 50)
      const counts = Object.fromEntries(ids.map((id) => [id, 0]))
      if (ids.length) {
        const marks = ids.map(() => '?').join(',')
        const { results } = await env.DB.prepare(`SELECT id, count FROM likes WHERE id IN (${marks})`).bind(...ids).all()
        for (const r of results) counts[r.id] = r.count
      }
      return json({ counts }, 200, origin, { 'cache-control': 'public, max-age=20' })
    }

    if (request.method !== 'POST') return json({ error: 'method' }, 405, origin)
    if (!ORIGINS.has(origin)) return json({ error: 'origin' }, 403, origin)

    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: 'body' }, 400, origin)
    }
    const id = typeof body?.id === 'string' ? body.id : ''
    if (id.length > 100 || !ID.test(id)) return json({ error: 'id' }, 400, origin)
    const on = body.on !== false

    const now = Math.floor(Date.now() / 1000)
    const voter = await voterHash(request, env)
    await env.DB.prepare('DELETE FROM votes WHERE ts < ?').bind(now - DAY).run()

    if (on) {
      const known = await env.DB.prepare('SELECT 1 FROM likes WHERE id = ?').bind(id).first()
      if (!known && !(await pageExists(id))) return json({ error: 'unknown' }, 404, origin)
      const used = await env.DB.prepare('SELECT COUNT(*) AS n FROM votes WHERE voter = ?').bind(voter).first()
      if (used.n >= MAX_VOTES_PER_DAY) return json({ error: 'rate' }, 429, origin)
      const ins = await env.DB.prepare('INSERT OR IGNORE INTO votes (id, voter, ts) VALUES (?, ?, ?)').bind(id, voter, now).run()
      if (ins.meta.changes > 0) {
        await env.DB.prepare('INSERT INTO likes (id, count) VALUES (?, 1) ON CONFLICT(id) DO UPDATE SET count = count + 1').bind(id).run()
      }
    } else {
      const del = await env.DB.prepare('DELETE FROM votes WHERE id = ? AND voter = ?').bind(id, voter).run()
      if (del.meta.changes > 0) {
        await env.DB.prepare('UPDATE likes SET count = MAX(count - 1, 0) WHERE id = ?').bind(id).run()
      }
    }
    const row = await env.DB.prepare('SELECT count FROM likes WHERE id = ?').bind(id).first()
    return json({ count: row?.count ?? 0 }, 200, origin)
  },
}
