import { useInView } from './useInView'
import { useT } from '../i18n/useT'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'Scala', 'PHP'],
  },
  {
    title: 'Data Science / ML',
    skills: ['PyTorch', 'Hugging Face', 'MLflow', 'scikit-learn', 'pandas', 'Speech Tokenization'],
  },
  {
    title: 'Data Engineering',
    skills: ['PostgreSQL', 'MySQL', 'Elasticsearch', 'Prisma', 'ETL Pipeline', 'Data Visualization'],
  },
  {
    title: 'Web / Infra',
    skills: ['React', 'Next.js', 'Node.js', 'Docker', 'Terraform', 'GCP', 'AWS', 'GitHub Actions'],
  },
]

const learningTools = ['Go', 'Rust', 'Kubernetes', 'Accelerate', 'DeepSpeed']
const learningTopicKeys = ['topicMLOps', 'topicDistributed', 'topicRealtime'] as const

export default function Skills() {
  const { ref, inView } = useInView()
  const t = useT()

  return (
    <section className="bg-slate-900 text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('skills', 'sectionTitle')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-bold mb-4 text-purple-300">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl border border-dashed border-white/20 bg-white/[0.02]">
          <h3 className="text-lg font-bold mb-2 text-purple-300">{t('skills', 'learningTitle')}</h3>
          <p className="text-sm text-white/60 mb-5">{t('skills', 'learningNote')}</p>

          <div className="mb-4">
            <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">{t('skills', 'learningToolsLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {learningTools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-dashed border-white/30 text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">{t('skills', 'learningTopicsLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {learningTopicKeys.map((key) => (
                <span
                  key={key}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-dashed border-white/30 text-white/80"
                >
                  {t('skills', key)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
