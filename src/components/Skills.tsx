import { useInView } from './useInView'

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
    skills: ['React', 'Next.js', 'Node.js', 'Docker', 'GCP', 'AWS', 'GitHub Actions'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-slate-900 text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

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
      </div>
    </section>
  )
}
