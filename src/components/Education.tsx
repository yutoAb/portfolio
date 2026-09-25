import { useState } from 'react'
import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type EduKey = keyof typeof import('../i18n/translations').default.education

type TimelineEntryKeys = {
  dateKey: EduKey
  titleKey: EduKey
  subtitleKey?: EduKey
  detailKey?: EduKey
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

type Certification = {
  date: string
  nameKey: EduKey
  planned?: boolean
}

const certifications: Certification[] = [
  { date: '2024/12', nameKey: 'cert0Name' },
  { date: '2026/03', nameKey: 'cert1Name' },
  { date: '2026', nameKey: 'cert2Name', planned: true },
]

type AwardKeys = {
  year: string
  titleKey: EduKey
  projectKey: EduKey
  link: string
}

const awards: AwardKeys[] = [
  { year: '2026', titleKey: 'award3Title', projectKey: 'award3Project', link: 'https://x.com/yans_official/status/2089525184705294466' },
  { year: '2026', titleKey: 'award0Title', projectKey: 'award0Project', link: 'https://progate.connpass.com/event/386402/' },
  { year: '2025', titleKey: 'award1Title', projectKey: 'award1Project', link: 'https://pksha.notion.site/pksha-hackathon2025' },
  { year: '2025', titleKey: 'award2Title', projectKey: 'award2Project', link: 'https://prtimes.jp/main/html/rd/p/000001483.000000112.html' },
]

type Community = {
  period: string
  nameKey: EduKey
  descKey: EduKey
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

type TabKey = 'education' | 'certifications' | 'awards' | 'communities'

export default function Education() {
  const { ref, inView } = useInView()
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabKey>('education')

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: 'education', label: t('education', 'educationLabel'), count: educationKeys.length },
    { key: 'certifications', label: t('education', 'certificationsLabel'), count: certifications.length },
    { key: 'awards', label: t('education', 'awardsLabel'), count: awards.length },
    { key: 'communities', label: t('education', 'communitiesLabel'), count: communities.length },
  ]

  const eduList = (
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
  )
  const certList = (
    <div className="space-y-3">
      {certifications.map((c, i) => (
        <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/20">
          <div className="flex items-center gap-2 mb-1">
            {c.planned ? (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-100 whitespace-nowrap">
                {t('education', 'certPlanned')} {c.date}
              </span>
            ) : (
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-white/80 whitespace-nowrap">
                {c.date}
              </span>
            )}
          </div>
          <p className="font-semibold text-sm">{t('education', c.nameKey)}</p>
        </div>
      ))}
    </div>
  )
  const awardList = (
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
  )
  const commList = (
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
  )

  return (
    <section className="bg-pink text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto w-full transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 whitespace-nowrap">
          {t('education', 'sectionTitle')}
        </h2>

        {/* Mobile: 3-col grid layout (original UI) */}
        <div className="md:hidden grid gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'educationLabel')}</h3>
            {eduList}
            <h3 className="text-xl font-bold mt-10 mb-6">{t('education', 'certificationsLabel')}</h3>
            {certList}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'awardsLabel')}</h3>
            {awardList}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">{t('education', 'communitiesLabel')}</h3>
            {commList}
          </div>
        </div>

        {/* Desktop: tab UI */}
        <div className="hidden md:block">
          <div className="flex gap-2 border-b border-white/20 mb-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`shrink-0 px-4 py-2 text-sm border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-white text-white font-semibold'
                      : 'border-transparent text-white/60 hover:text-white/90'
                  }`}
                >
                  {tab.label}{' '}
                  <span className={`text-xs ${isActive ? 'text-white/70' : 'text-white/40'}`}>
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="min-h-[380px]">
            {activeTab === 'education' && eduList}
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-2 gap-3">{certifications.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-1">
                    {c.planned ? (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-100 whitespace-nowrap">
                        {t('education', 'certPlanned')} {c.date}
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/15 text-white/80 whitespace-nowrap">
                        {c.date}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-sm">{t('education', c.nameKey)}</p>
                </div>
              ))}</div>
            )}
            {activeTab === 'awards' && (
              <div className="grid grid-cols-2 gap-3">{awards.map((award, i) => (
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
              ))}</div>
            )}
            {activeTab === 'communities' && (
              <div className="grid grid-cols-2 gap-3">{communities.map((c, i) => {
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
              })}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
