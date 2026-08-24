import { lazy, Suspense, useEffect, useState } from 'react'
import SnsLinks from './SnsLinks'
import profileImg from '../assets/2024_阿部雄斗.png'
import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'

const HeroBackground = lazy(() => import('./HeroBackground'))

type Chunk = { direct: string } | { ime: string; kana: string }

const JA_SEQUENCE: Chunk[] = [
  { direct: 'DS ' },
  { ime: 'wo', kana: 'を' },
  { direct: ' ' },
  { ime: 'bakkuguraundo', kana: 'バックグラウンド' },
  { ime: 'toshita', kana: 'とした' },
  { direct: ' SWE (MLOps ' },
  { ime: 'enjinia', kana: 'エンジニア' },
  { direct: ') ' },
  { ime: 'wo', kana: 'を' },
  { direct: ' ' },
  { ime: 'mezashite', kana: '目指して' },
  { ime: 'gakushuuchuu', kana: '学習中' },
]

type Frame = { confirmed: string; romaji: string; delay: number }

function buildFrames(chunks: Chunk[]): Frame[] {
  const frames: Frame[] = []
  let confirmed = ''
  for (const c of chunks) {
    if ('direct' in c) {
      for (const ch of c.direct) {
        confirmed += ch
        frames.push({ confirmed, romaji: '', delay: ch === ' ' ? 70 : 95 })
      }
    } else {
      let romaji = ''
      for (const ch of c.ime) {
        romaji += ch
        frames.push({ confirmed, romaji, delay: 70 })
      }
      frames.push({ confirmed, romaji, delay: 180 })
      confirmed += c.kana
      frames.push({ confirmed, romaji: '', delay: 110 })
    }
  }
  return frames
}

function useTypewriter(lang: 'ja' | 'en', finalText: string) {
  const [state, setState] = useState<{ confirmed: string; romaji: string }>({ confirmed: '', romaji: '' })

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState({ confirmed: finalText, romaji: '' })
      return
    }

    const chunks: Chunk[] = lang === 'ja' ? JA_SEQUENCE : [{ direct: finalText }]
    const frames = buildFrames(chunks)
    const finalConfirmed = frames[frames.length - 1]?.confirmed ?? finalText

    let cancelled = false
    let timer: number | undefined
    let phase: 'typing' | 'hold' | 'erasing' | 'pause' = 'typing'
    let idx = 0
    let eraseLen = 0

    const schedule = (ms: number) => {
      timer = window.setTimeout(loop, ms)
    }

    function loop() {
      if (cancelled) return

      if (phase === 'typing') {
        if (idx >= frames.length) {
          phase = 'hold'
          schedule(7000)
          return
        }
        const f = frames[idx]
        setState({ confirmed: f.confirmed, romaji: f.romaji })
        idx++
        schedule(f.delay)
      } else if (phase === 'hold') {
        phase = 'erasing'
        eraseLen = finalConfirmed.length
        schedule(0)
      } else if (phase === 'erasing') {
        if (eraseLen <= 0) {
          phase = 'pause'
          setState({ confirmed: '', romaji: '' })
          schedule(1500)
          return
        }
        eraseLen--
        setState({ confirmed: finalConfirmed.slice(0, eraseLen), romaji: '' })
        schedule(35)
      } else {
        phase = 'typing'
        idx = 0
        schedule(0)
      }
    }

    schedule(1200)

    return () => {
      cancelled = true
      if (timer !== undefined) clearTimeout(timer)
    }
  }, [lang, finalText])

  return state
}

export default function Hero() {
  const t = useT()
  const { lang } = useLang()
  const [enableBg, setEnableBg] = useState(false)
  const status = t('hero', 'status')
  const typed = useTypewriter(lang, status)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const isNarrow = window.matchMedia('(max-width: 640px)').matches
    setEnableBg(!reduceMotion && !(isCoarse && isNarrow))
  }, [])

  return (
    <section className="relative min-h-screen bg-purple text-white flex items-center pt-16 overflow-hidden">
      {enableBg && (
        <Suspense fallback={null}>
          <HeroBackground />
        </Suspense>
      )}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <img
          src={profileImg}
          alt="阿部 雄斗"
          className="w-48 md:w-72 rounded-lg shadow-lg object-contain"
        />
        <div className="animate-[slide-fade-in_1s_ease-out]">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Yuto Abe / 阿部 雄斗
          </h1>
          <p className="text-lg text-white/70 mb-6">{t('hero', 'subtitle')}</p>
          <div className="mb-6 flex items-center gap-4">
            <SnsLinks />
            <a
              href="cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              CV
            </a>
          </div>
          <div className="space-y-3 leading-relaxed text-white/90">
            <p>{t('hero', 'bio1')}</p>
            <p>
              {t('hero', 'bio2_prefix')}{' '}
              <a href="https://llm-jp.github.io/llm-jp-moshi/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-white">LLM-jp-Moshi-v1</a>
              {t('hero', 'bio2_mid')}{' '}
              <a href="https://aclanthology.org/2026.iwsds-1.10/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">IWSDS 2026</a>
              {t('hero', 'bio2_suffix')}
            </p>
            <p>{t('hero', 'bio3')}</p>
            <p>{t('hero', 'bio4')}</p>
          </div>

          <div
            className="hero-bubble mt-8 opacity-0 flex md:justify-end"
            style={{ animation: 'hero-bubble-rise 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both, hero-bubble-idle 5.5s ease-in-out 3.6s infinite' }}
            aria-label={status}
          >
            <div
              className="relative inline-block px-4 py-2.5 text-sm text-white"
              style={{
                background: 'linear-gradient(135deg, rgb(120,100,220) 0%, rgb(94,66,166) 100%)',
                borderRadius: '20px 20px 4px 20px',
                boxShadow: '0 12px 24px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.14)',
                maxWidth: 'min(92vw, 44em)',
                minHeight: '1lh',
              }}
            >
              <span>{typed.confirmed}</span>
              {typed.romaji && (
                <span style={{ borderBottom: '1px dashed rgba(255,255,255,0.55)' }}>{typed.romaji}</span>
              )}
              <span
                className="hero-bubble-caret inline-block bg-white ml-0.5"
                style={{
                  width: '2px',
                  height: '0.95em',
                  verticalAlign: '-0.1em',
                  animation: 'hero-caret-blink 0.9s steps(1) 1.1s infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
