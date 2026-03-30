import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type TimelineEntry = {
  date: string
  title: string
  subtitle?: string
  detail?: string
}

const education: TimelineEntry[] = [
  {
    date: '2025 Apr - 2027 Mar (Expected)',
    title: 'Waseda University - Master of Engineering',
    subtitle: 'Computer Science & Communications',
    detail: 'Kobayashi-Ogawa Lab / Full-duplex spoken dialogue systems / LLM-jp Dialogue WG (NII)',
  },
  {
    date: '2021 Apr - 2025 Mar',
    title: 'Waseda University - Bachelor of Engineering',
    subtitle: 'Information & Communication Engineering',
    detail: 'GPA: 3.33 / 4.00',
  },
]

const awards = [
  { year: '2025', title: 'PKSHA Hackathon Grand Prize', project: 'Changemakers', link: 'https://pksha.notion.site/pksha-hackathon2025' },
  { year: '2025', title: 'PR TIMES Hackathon Individual Excellence Award', project: 'Dream Blossom', link: 'https://prtimes.jp/main/html/rd/p/000001483.000000112.html' },
]

type Community = {
  period: string
  nameKey: keyof typeof import('../i18n/translations').default.education
  descKey: keyof typeof import('../i18n/translations').default.education
  href: string
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
    period: '2021 - 2025',
    nameKey: 'communityRikoten',
    descKey: 'communityRikotenDesc',
    href: 'https://circle.rikoten.com/',
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Education, Awards & Communities</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <div className="relative pl-6 border-l-2 border-white/30 space-y-8">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white" />
                  <p className="text-sm text-white/60">{item.date}</p>
                  <p className="font-semibold text-lg">{item.title}</p>
                  {item.subtitle && <p className="text-white/80">{item.subtitle}</p>}
                  {item.detail && <p className="text-sm text-white/60 mt-1">{item.detail}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Awards</h3>
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
                  <p className="font-semibold">{award.title}</p>
                  <p className="text-sm text-white/70">{award.project}</p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Communities</h3>
            <div className="space-y-4">
              {communities.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <p className="text-xs text-white/60 mb-1">{c.period}</p>
                  <p className="font-semibold">{t('education', c.nameKey)}</p>
                  <p className="text-sm text-white/70 mt-1">{t('education', c.descKey)}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
