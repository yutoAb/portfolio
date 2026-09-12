import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'

type MangaKey = keyof typeof import('../i18n/translations').default.manga

type Item = {
  titleKey: MangaKey
  metaKey: MangaKey
  leadKey: MangaKey
  takeawayKey: MangaKey
  image: string
}

const SLIDES_BASE = 'https://docs.google.com/presentation/d/1KSNXdhyXnUMRCfX_UZiUDMWcDih9wkvo-f69GzzJWbg'

const items: Item[] = [
  {
    titleKey: 'kingdomTitle',
    metaKey: 'kingdomMeta',
    leadKey: 'kingdomLead',
    takeawayKey: 'kingdomTakeaway',
    image: `${import.meta.env.BASE_URL}manga/p24.png`,
  },
  {
    titleKey: 'hiroakaTitle',
    metaKey: 'hiroakaMeta',
    leadKey: 'hiroakaLead',
    takeawayKey: 'hiroakaTakeaway',
    image: `${import.meta.env.BASE_URL}manga/p25.png`,
  },
  {
    titleKey: 'wtriggerTitle',
    metaKey: 'wtriggerMeta',
    leadKey: 'wtriggerLead',
    takeawayKey: 'wtriggerTakeaway',
    image: `${import.meta.env.BASE_URL}manga/p26.png`,
  },
]

export default function Manga() {
  const t = useT()
  const { lang, toggleLang } = useLang()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/85 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="/" className="text-white font-bold text-lg hover:text-white/80 transition-colors">
            yutoAb
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:inline text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('manga', 'backToPortfolio')}
            </a>
            <button
              onClick={toggleLang}
              className="text-xs px-2.5 py-1 rounded-full border border-white/30 hover:border-white/50 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className={lang === 'ja' ? 'text-white font-bold' : 'text-white/40'}>JA</span>
              <span className="text-white/30">/</span>
              <span className={lang === 'en' ? 'text-white font-bold' : 'text-white/40'}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <header className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <p className="text-sm text-purple-300/80 font-mono mb-3">/ manga</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
            style={{
              background: 'linear-gradient(120deg, rgb(240,171,252) 0%, rgb(167,139,250) 45%, rgb(120,140,255) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('manga', 'pageTitle')}
          </h1>
          <p className="text-white/70 leading-relaxed max-w-2xl">{t('manga', 'pageLead')}</p>
          <a
            href="/"
            className="sm:hidden inline-block mt-6 text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('manga', 'backToPortfolio')}
          </a>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-20">
          {items.map((item, i) => (
            <article key={i} className="space-y-5">
              <div>
                <span className="text-xs text-purple-300/80 font-mono">#{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">{t('manga', item.titleKey)}</h2>
                <p className="text-white/60 text-sm mt-1">{t('manga', item.metaKey)}</p>
              </div>
              <img
                src={item.image}
                alt={t('manga', 'imageAlt')}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full rounded-lg border border-white/10 shadow-xl"
              />
              <p className="text-purple-200 leading-relaxed italic border-l-2 border-purple-300/40 pl-4">
                {t('manga', item.leadKey)}
              </p>
              <p className="text-white/85 leading-[1.9]">{t('manga', item.takeawayKey)}</p>
            </article>
          ))}
        </div>

        <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">
          <p className="text-sm text-white/50 mb-3 leading-relaxed">{t('manga', 'credit')}</p>
          <a
            href={`${SLIDES_BASE}/edit`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-300 hover:text-purple-200 inline-flex items-center gap-1 transition-colors"
          >
            {t('manga', 'viewSlides')} →
          </a>
        </footer>
      </main>
    </div>
  )
}
