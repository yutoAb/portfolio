import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type ExperienceEntry = {
  period: string
  company: string
  role: string
  descKeys: (keyof typeof import('../i18n/translations').default.experience)[]
}

const experiences: ExperienceEntry[] = [
  {
    period: '2026 Feb (2 weeks)',
    company: 'GMO Internet Group',
    role: 'Engineering Intern',
    descKeys: ['gmo_desc0'],
  },
  {
    period: '2025 - Present',
    company: 'National Institute of Informatics (NII)',
    role: 'Research Engineer',
    descKeys: ['nii_desc0', 'nii_desc1', 'nii_desc2'],
  },
  {
    period: '2025 Oct',
    company: 'Medley, Inc.',
    role: 'Engineering Intern',
    descKeys: ['medley_desc0', 'medley_desc1'],
  },
  {
    period: '2025 Sep (1 day)',
    company: 'kubell, Inc.',
    role: 'Data Science Intern',
    descKeys: ['kubell_desc0'],
  },
  {
    period: '2025 Aug - Sep',
    company: 'Hitachi, Ltd. R&D Group',
    role: 'Research Intern',
    descKeys: ['hitachi_desc0'],
  },
  {
    period: '2025 Aug',
    company: 'Accenture',
    role: 'Engineering Intern',
    descKeys: ['accenture_desc0'],
  },
  {
    period: '2025 Aug (1 day)',
    company: 'BayCurrent Consulting',
    role: 'Consulting Intern',
    descKeys: ['baycurrent_desc0'],
  },
  {
    period: '2023 Feb - 2025 Oct',
    company: 'Japan Useware Systems Co., Ltd.',
    role: 'Software Engineer',
    descKeys: ['jus_desc0', 'jus_desc1', 'jus_desc2'],
  },
  {
    period: '2022 Nov - 2023 Feb',
    company: 'Carrot Software Co., Ltd.',
    role: 'Part-time Engineer',
    descKeys: ['carrot_desc0'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()
  const t = useT()

  return (
    <section className="bg-blue text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('experience', 'sectionTitle')}</h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-white/30"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white/90" />
              <p className="text-sm text-white/60 mb-1">{exp.period}</p>
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-white/80 mb-2">{exp.role}</p>
              <ul className="space-y-1 text-sm text-white/70">
                {exp.descKeys.map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40" />
                    {t('experience', key)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
