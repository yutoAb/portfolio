import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type Block = {
  titleKey: keyof typeof import('../i18n/translations').default.philosophy
  bodyKey: keyof typeof import('../i18n/translations').default.philosophy
}

const blocks: Block[] = [
  { titleKey: 'visionTitle', bodyKey: 'visionBody' },
  { titleKey: 'worldviewTitle', bodyKey: 'worldviewBody' },
  { titleKey: 'dreamTitle', bodyKey: 'dreamBody' },
  { titleKey: 'observationTitle', bodyKey: 'observationBody' },
]

export default function Philosophy() {
  const { ref, inView } = useInView()
  const t = useT()

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
            <div
              key={b.titleKey}
              className="relative p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold mb-3 text-purple-300">
                {t('philosophy', b.titleKey)}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
                {t('philosophy', b.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
