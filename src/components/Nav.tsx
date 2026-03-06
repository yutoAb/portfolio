import { useState, useEffect, type RefObject } from 'react'

type Section = {
  label: string
  ref: RefObject<HTMLDivElement | null>
}

export default function Nav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].ref.current
        if (el && scrollY >= el.offsetTop - 120) {
          setActive(i)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollTo = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-white font-bold text-lg">yutoAb</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {sections.map((s, i) => (
            <li key={s.label}>
              <button
                onClick={() => scrollTo(s.ref)}
                className={`text-sm transition-colors cursor-pointer ${
                  active === i ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-purple px-6 pb-4 space-y-2">
          {sections.map((s, i) => (
            <li key={s.label}>
              <button
                onClick={() => scrollTo(s.ref)}
                className={`block w-full text-left text-sm py-1 cursor-pointer ${
                  active === i ? 'text-white font-semibold' : 'text-white/60'
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
