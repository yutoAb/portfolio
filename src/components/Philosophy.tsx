import { useInView } from './useInView'
import { useT } from '../i18n/useT'
import { philosophyPosts } from '../content/philosophy'

const visionValue = [
  { label: 'Vision', key: 'visionStatement' },
  { label: 'Value', key: 'valueBody' },
] as const

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
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          {t('philosophy', 'sectionTitle')}
        </h2>

        {/* Mission is the headline; Vision and Value sit under it */}
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Mission</p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug md:leading-snug max-w-4xl break-keep [overflow-wrap:anywhere]">
          {t('philosophy', 'missionBody')}
        </p>

        <dl className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6 border-t border-white/10 pt-8">
          {visionValue.map((m) => (
            <div key={m.label}>
              <dt className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-2">{m.label}</dt>
              <dd className="text-white/85 leading-relaxed">{t('philosophy', m.key)}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-16 mb-4 text-sm text-white/50 break-keep [overflow-wrap:anywhere]">
          {t('philosophy', 'sectionLead')}
        </p>
        <ul className="grid md:grid-cols-2 md:gap-x-12 border-t border-white/10">
          {philosophyPosts.map((b, i) => (
            <li key={b.slug} className="border-b border-white/10">
              <a href={`/philosophy/${b.slug}`} className="group flex items-baseline gap-4 py-5 h-full">
                <span className="font-mono text-sm text-purple-300/70 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold group-hover:text-purple-200 transition-colors">
                    {t('philosophy', b.titleKey)}
                  </span>
                  <span className="block mt-1 text-sm text-white/60 leading-relaxed">{t('philosophy', b.bodyKey)}</span>
                </span>
                <svg
                  className="w-4 h-4 shrink-0 self-center text-white/30 group-hover:text-purple-200 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
