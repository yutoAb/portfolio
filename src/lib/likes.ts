// Like counts for blog posts, kept by the small Worker in workers/likes.
// A post id is its path on the site without the leading slash (e.g. "essays/foo", "manga").
import { useEffect, useState } from 'react'

const API = 'https://likes.yutoabe.com/'

const counts = new Map<string, number>()
const listeners = new Set<() => void>()
let pending = new Set<string>()
let timer: ReturnType<typeof setTimeout> | undefined

const notify = () => listeners.forEach((fn) => fn())

// Ids asked for in the same tick go out as one request.
function request(id: string) {
  if (counts.has(id) || pending.has(id)) return
  pending.add(id)
  if (timer) return
  timer = setTimeout(async () => {
    const ids = [...pending]
    pending = new Set()
    timer = undefined
    try {
      const res = await fetch(`${API}?ids=${encodeURIComponent(ids.join(','))}`)
      if (!res.ok) return
      const data = (await res.json()) as { counts: Record<string, number> }
      for (const [k, v] of Object.entries(data.counts)) counts.set(k, v)
      notify()
    } catch {
      /* the count simply stays hidden */
    }
  }, 0)
}

const key = (id: string) => `liked:${id}`

function readLiked(id: string) {
  try {
    return localStorage.getItem(key(id)) === '1'
  } catch {
    return false
  }
}

function writeLiked(id: string, on: boolean) {
  try {
    if (on) localStorage.setItem(key(id), '1')
    else localStorage.removeItem(key(id))
  } catch {
    /* no-op */
  }
}

export function useLike(id: string) {
  const [, tick] = useState(0)
  const [liked, setLiked] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const fn = () => tick((n) => n + 1)
    listeners.add(fn)
    setLiked(readLiked(id))
    request(id)
    return () => {
      listeners.delete(fn)
    }
  }, [id])

  const toggle = async () => {
    if (busy) return
    const next = !liked
    const before = counts.get(id)
    setBusy(true)
    setLiked(next)
    if (before !== undefined) counts.set(id, Math.max(0, before + (next ? 1 : -1)))
    notify()
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id, on: next }),
      })
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as { count: number }
      counts.set(id, data.count)
      writeLiked(id, next)
    } catch {
      setLiked(!next)
      if (before !== undefined) counts.set(id, before)
    } finally {
      setBusy(false)
      notify()
    }
  }

  return { count: counts.get(id), liked, toggle }
}
