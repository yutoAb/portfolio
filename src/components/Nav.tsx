import { useState, useEffect, useRef, type RefObject } from 'react'
import { useLang } from '../i18n/LangContext'

type NavSection = { kind: 'section'; label: string; ref: RefObject<HTMLDivElement | null> }
type NavLink = { kind: 'link'; label: string; href: string }
type NavGroup = { kind: 'group'; label: string; children: (NavSection | NavLink)[] }
export type NavEntry = NavSection | NavLink | NavGroup

function collectSections(entries: NavEntry[]): NavSection[] {
  return entries.flatMap((e) => {
    if (e.kind === 'section') return [e]
    if (e.kind === 'group') return e.children.filter((c): c is NavSection => c.kind === 'section')
    return []
  })
}

export default function Nav({ entries }: { entries: NavEntry[] }) {
  const sections = collectSections(entries)
  const [activeRef, setActiveRef] = useState<RefObject<HTMLDivElement | null> | null>(null)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [theme, setTheme] = useState<'vivid' | 'simple'>(() => {
    if (typeof document === 'undefined') return 'vivid'
    return document.documentElement.classList.contains('simple') ? 'simple' : 'vivid'
  })
  const { lang, toggleLang } = useLang()
  const navRef = useRef<HTMLElement>(null)

  const toggleTheme = () => {
    const next = theme === 'vivid' ? 'simple' : 'vivid'
    setTheme(next)
    if (next === 'simple') {
      document.documentElement.classList.add('simple')
    } else {
      document.documentElement.classList.remove('simple')
    }
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* no-op */
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let bestRef: RefObject<HTMLDivElement | null> | null = null
      let bestTop = -Infinity
      for (const s of sections) {
        const el = s.ref.current
        if (!el) continue
        const top = el.offsetTop - 120
        if (top <= scrollY && top >= bestTop) {
          bestTop = top
          bestRef = s.ref
        }
      }
      if (bestRef) setActiveRef(bestRef)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  useEffect(() => {
    if (!openGroup) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [openGroup])

  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setOpenGroup(null)
  }

  const isSectionActive = (s: NavSection) => s.ref === activeRef
  const isGroupActive = (g: NavGroup) =>
    g.children.some((c) => c.kind === 'section' && c.ref === activeRef)

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-purple/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-white font-bold text-lg">yutoAb</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {entries.map((e) => {
            if (e.kind === 'section') {
              return (
                <li key={e.label}>
                  <button
                    onClick={() => scrollTo(e.ref)}
                    className={`text-sm transition-colors cursor-pointer ${
                      isSectionActive(e)
                        ? 'text-white font-semibold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {e.label}
                  </button>
                </li>
              )
            }
            if (e.kind === 'link') {
              return (
                <li key={e.label}>
                  <a
                    href={e.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {e.label}
                  </a>
                </li>
              )
            }
            const isOpen = openGroup === e.label
            const groupActive = isGroupActive(e)
            return (
              <li
                key={e.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(e.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  onClick={() => setOpenGroup(isOpen ? null : e.label)}
                  className={`text-sm transition-colors cursor-pointer flex items-center gap-1 ${
                    groupActive
                      ? 'text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {e.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="absolute top-full left-0 pt-2 min-w-[160px]">
                    <div className="rounded-lg bg-[rgb(74,52,140)] shadow-xl border border-white/10 py-2">
                      {e.children.map((c) => {
                        if (c.kind === 'section') {
                          return (
                            <li key={c.label}>
                              <button
                                onClick={() => scrollTo(c.ref)}
                                className={`w-full text-left px-4 py-1.5 text-sm cursor-pointer hover:bg-white/10 transition-colors ${
                                  isSectionActive(c)
                                    ? 'text-white font-semibold'
                                    : 'text-white/70'
                                }`}
                              >
                                {c.label}
                              </button>
                            </li>
                          )
                        }
                        return (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              className="block px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {c.label}
                            </a>
                          </li>
                        )
                      })}
                    </div>
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'vivid' ? 'Switch to simple theme' : 'Switch to vivid theme'}
            title={theme === 'vivid' ? 'シンプル配色に切替' : 'カラフル配色に戻す'}
            className="text-xs w-7 h-7 rounded-full border border-white/30 hover:border-white/50 transition-colors cursor-pointer flex items-center justify-center"
          >
            {theme === 'vivid' ? (
              /* moon-ish = go simple */
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
              </svg>
            ) : (
              /* sparkle = go vivid */
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.09 5.26L20 8.27l-4 3.9.94 5.83L12 15.9 7.06 18l.94-5.83-4-3.9 5.91-1.01L12 2z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLang}
            className="text-xs px-2.5 py-1 rounded-full border border-white/30 hover:border-white/50 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span className={lang === 'ja' ? 'text-white font-bold' : 'text-white/40'}>JA</span>
            <span className="text-white/30">/</span>
            <span className={lang === 'en' ? 'text-white font-bold' : 'text-white/40'}>EN</span>
          </button>

          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-purple px-6 pb-4 space-y-1">
          {entries.map((e) => {
            if (e.kind === 'section') {
              return (
                <li key={e.label}>
                  <button
                    onClick={() => scrollTo(e.ref)}
                    className={`block w-full text-left text-sm py-1.5 cursor-pointer ${
                      isSectionActive(e) ? 'text-white font-semibold' : 'text-white/60'
                    }`}
                  >
                    {e.label}
                  </button>
                </li>
              )
            }
            if (e.kind === 'link') {
              return (
                <li key={e.label}>
                  <a
                    href={e.href}
                    className="block w-full text-left text-sm py-1.5 text-white/60"
                    onClick={() => setOpen(false)}
                  >
                    {e.label}
                  </a>
                </li>
              )
            }
            return (
              <li key={e.label}>
                <p className="text-[11px] uppercase text-white/40 mt-3 mb-0.5 tracking-widest">
                  {e.label}
                </p>
                <ul className="pl-3 space-y-0.5">
                  {e.children.map((c) => {
                    if (c.kind === 'section') {
                      return (
                        <li key={c.label}>
                          <button
                            onClick={() => scrollTo(c.ref)}
                            className={`block w-full text-left text-sm py-1 cursor-pointer ${
                              isSectionActive(c) ? 'text-white font-semibold' : 'text-white/60'
                            }`}
                          >
                            {c.label}
                          </button>
                        </li>
                      )
                    }
                    return (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block w-full text-left text-sm py-1 text-white/60"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
