import Breadcrumbs from './Breadcrumbs'
import SiteNav from './SiteNav'
import { useT } from '../i18n/useT'

type MangaKey = keyof typeof import('../i18n/translations').default.manga

type Item = {
  titleKey: MangaKey
  metaKey: MangaKey
  leadKey: MangaKey
  takeawayKey: MangaKey
  image: string
}

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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteNav active="blog" />

      <main className="pt-16">
        <header className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <Breadcrumbs current={t('manga', 'pageTitle')} />
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

      </main>
    </div>
  )
}
