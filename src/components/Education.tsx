import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type TimelineEntryKeys = {
  dateKey: keyof typeof import('../i18n/translations').default.education
  titleKey: keyof typeof import('../i18n/translations').default.education
  subtitleKey?: keyof typeof import('../i18n/translations').default.education
  detailKey?: keyof typeof import('../i18n/translations').default.education
}

const educationKeys: TimelineEntryKeys[] = [
  {
    dateKey: 'eduDate1',
    titleKey: 'eduTitle1',
    subtitleKey: 'eduSubtitle1',
    detailKey: 'eduDetail1',
  },
  {
    dateKey: 'eduDate2',
    titleKey: 'eduTitle2',
    subtitleKey: 'eduSubtitle2',
    detailKey: 'eduDetail2',
  },
]

type AwardKeys = {
  year: string
  titleKey: keyof typeof import('../i18n/translations').default.education
  projectKey: keyof typeof import('../i18n/translations').default.education
  link: string
}

const awards: AwardKeys[] = [
  { year: '2026', titleKey: 'award0Title', projectKey: 'award0Project', link: 'https://progate.connpass.com/event/386402/' },
  { year: '2025', titleKey: 'award1Title', projectKey: 'award1Project', link: 'https://pksha.notion.site/pksha-hackathon2025' },
  { year: '2025', titleKey: 'award2Title', projectKey: 'award2Project', link: 'https://prtimes.jp/main/html/rd/p/000001483.000000112.html' },
]

type Community = {
  period: string
  nameKey: keyof typeof import('../i18n/translations').default.education
  descKey: keyof typeof import('../i18n/translations').default.education
  href?: string
}

const communities: Community[] = [
  {
    period: '2025 Dec - Present',
    nameKey: 'communityMirai',
    descKey: 'communityMiraiDesc',
    href: 'https://github.com/team-mirai-students',
  },
  {
    period: '2025 Aug - Present',
    nameKey: 'communityRecursion',
    descKey: 'communityRecursionDesc',
    href: 'https://recursionist.io/',
  },
  {
    period: '2021 - 2024',
    nameKey: 'communityRikoten',
    descKey: 'communityRikotenDesc',
    href: 'https://circle.rikoten.com/',
  },
  {
    period: '2021 - 2024',
    nameKey: 'circlePadi',
    descKey: 'circlePadiDesc',
    href: 'https://www.waseda.jp/inst/weekly/circleguide/detail/?id=3402',
  },
  {
    period: '2021 - 2024',
    nameKey: 'circleNeige',
    descKey: 'circleNeigeDesc',
    href: 'https://laneige.wixsite.com/laneige41st',
  },
  {
    period: '2021 - 2024',
    nameKey: 'circleUtaou',
    descKey: 'circleUtaouDesc',
    href: 'https://www.waseda.jp/inst/weekly/circleguide/detail/?id=3543',
  },
]

export default function Education() {
  const { ref, inView } = useInView()
  const t = useT()

  return (
    <section className="bg-pink text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('education', 'sectionTitle')}</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'educationLabel')}</h3>
            <div className="relative pl-6 border-l-2 border-white/30 space-y-8">
              {educationKeys.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white" />
                  <p className="text-sm text-white/60">{t('education', item.dateKey)}</p>
                  <p className="font-semibold text-lg">{t('education', item.titleKey)}</p>
                  {item.subtitleKey && <p className="text-white/80">{t('education', item.subtitleKey)}</p>}
                  {item.detailKey && <p className="text-sm text-white/60 mt-1">{t('education', item.detailKey)}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'awardsLabel')}</h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <a
                  key={i}
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-200">
                      {award.year}
                    </span>
                  </div>
                  <p className="font-semibold">{t('education', award.titleKey)}</p>
                  <p className="text-sm text-white/70">{t('education', award.projectKey)}</p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'communitiesLabel')}</h3>
            <div className="space-y-4">
              {communities.map((c, i) => {
                const content = (
                  <>
                    <p className="text-xs text-white/60 mb-1">{c.period}</p>
                    <p className="font-semibold">{t('education', c.nameKey)}</p>
                    <p className="text-sm text-white/70 mt-1">{t('education', c.descKey)}</p>
                  </>
                )
                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/20">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
