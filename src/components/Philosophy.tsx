import { useState } from 'react'
import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type PhilosophyKey = keyof typeof import('../i18n/translations').default.philosophy

type Block = {
  titleKey: PhilosophyKey
  bodyKey: PhilosophyKey
  articleKey: PhilosophyKey
  image?: { src: string; altKey: PhilosophyKey; captionKey: PhilosophyKey }
}

const blocks: Block[] = [
  { titleKey: 'visionTitle', bodyKey: 'visionBody', articleKey: 'visionArticle' },
  { titleKey: 'worldviewTitle', bodyKey: 'worldviewBody', articleKey: 'worldviewArticle' },
  {
    titleKey: 'dreamTitle',
    bodyKey: 'dreamBody',
    articleKey: 'dreamArticle',
    image: {
      src: `${import.meta.env.BASE_URL}philosophy-dream.jpg`,
      altKey: 'dreamImageAlt',
      captionKey: 'dreamImageCaption',
    },
  },
  { titleKey: 'observationTitle', bodyKey: 'observationBody', articleKey: 'observationArticle' },
]

export default function Philosophy() {
  const { ref, inView } = useInView()
  const t = useT()
  const [selected, setSelected] = useState<{ block: Block; index: number } | null>(null)

  return (
    <section className="bg-slate-800 text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('philosophy', 'sectionTitle')}</h2>
        <p className="text-white/60 mb-10 max-w-2xl">{t('philosophy', 'sectionLead')}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <button
              key={b.titleKey}
              onClick={() => setSelected({ block: b, index: i })}
              className="relative text-left p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold mb-3 text-purple-300">
                {t('philosophy', b.titleKey)}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line mb-3">
                {t('philosophy', b.bodyKey)}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-purple-300/70 group-hover:text-purple-300 transition-colors">
                {t('philosophy', 'readMore')}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-slate-800 text-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 pt-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {selected.index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-purple-300">
                  {t('philosophy', selected.block.titleKey)}
                </h3>
              </div>

              {selected.block.image && (
                <figure className="mb-6 -mx-2">
                  <img
                    src={selected.block.image.src}
                    alt={t('philosophy', selected.block.image.altKey)}
                    loading="lazy"
                    className="w-full rounded-lg border border-white/10"
                  />
                  <figcaption className="mt-2 text-xs text-white/50 text-center">
                    {t('philosophy', selected.block.image.captionKey)}
                  </figcaption>
                </figure>
              )}

              <p className="text-sm md:text-base text-white/85 leading-[1.9] whitespace-pre-line">
                {t('philosophy', selected.block.articleKey)}
              </p>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {t('philosophy', 'close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
