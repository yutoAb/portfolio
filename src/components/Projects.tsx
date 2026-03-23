import { useState } from 'react'
import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type Project = {
  title: string
  award?: string
  descKey: keyof typeof import('../i18n/translations').default.projects
  tech: string[]
  link?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: 'Speech Arena',
    descKey: 'speechArena',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Cloudflare Tunnel', 'GPU Inference'],
    link: 'https://web-fawn-five-91.vercel.app/',
    repo: 'https://github.com/kobas-lab/speech-arena',
  },
  {
    title: 'Changemakers',
    award: 'PKSHA Hackathon Grand Prize',
    descKey: 'changemakers',
    tech: ['GPT-Realtime API', 'React', 'Voice AI'],
  },
  {
    title: 'Dream Blossom',
    award: 'PR TIMES Hackathon 2025 Individual Excellence Award',
    descKey: 'dreamBlossom',
    tech: ['React', 'TypeScript', 'Animation'],
    repo: 'https://github.com/PRTIMES-hackathon-2025-winter-team2/frontend',
  },
  {
    title: 'Global Mirai Parliament',
    descKey: 'globalMirai',
    tech: ['Next.js', 'AI Chat', 'Civic Tech'],
    link: 'https://global-policies.vercel.app/',
    repo: 'https://github.com/team-mirai-students/global-policies',
  },
  {
    title: 'Political Quiz App',
    descKey: 'politicalQuiz',
    tech: ['React', 'TypeScript', 'Multiplayer'],
    link: 'https://minhaya-web.pages.dev/',
    repo: 'https://github.com/yutoAb/minhaya-app',
  },
  {
    title: "Father's Company Homepage",
    descKey: 'fatherCompany',
    tech: ['Next.js', 'MUI'],
    link: 'https://www.heiseiyusou.co.jp/',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState<Project | null>(null)
  const t = useT()

  return (
    <section className="bg-blue text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelected(project)}
              className="text-left p-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-200 transition-colors">
                {project.title}
              </h3>
              {project.award && (
                <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-200 mb-2">
                  {project.award}
                </span>
              )}
              <p className="text-sm text-white/60 line-clamp-2">{t('projects', project.descKey)}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.slice(0, 3).map((tc) => (
                  <span key={tc} className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                    {tc}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white text-gray-900 rounded-xl p-6 max-w-md mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-1">{selected.title}</h3>
            {selected.award && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 mb-3">
                {selected.award}
              </span>
            )}
            <p className="mb-4 text-gray-700">{t('projects', selected.descKey)}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.tech.map((tc) => (
                <span key={tc} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {tc}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:underline font-medium"
                  >
                    View App
                  </a>
                )}
                {selected.repo && (
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:underline font-medium"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
              >
                {t('projects', 'close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
