import { useState } from 'react'
import { useInView } from './useInView'
import { useT } from '../i18n/useT'

type Category = 'personal' | 'team' | 'research'

type Project = {
  title: string
  category: Category
  award?: string
  descKey: keyof typeof import('../i18n/translations').default.projects
  tech: string[]
  link?: string
  repo?: string
  articles?: { title: string; url: string }[]
}

const categoryStyle: Record<Category, { labelKey: 'categoryPersonal' | 'categoryTeam' | 'categoryResearch'; onDark: string; onLight: string }> = {
  personal: {
    labelKey: 'categoryPersonal',
    onDark: 'bg-purple-400/20 text-purple-100',
    onLight: 'bg-purple-100 text-purple-800',
  },
  team: {
    labelKey: 'categoryTeam',
    onDark: 'bg-emerald-400/20 text-emerald-100',
    onLight: 'bg-emerald-100 text-emerald-800',
  },
  research: {
    labelKey: 'categoryResearch',
    onDark: 'bg-sky-400/20 text-sky-100',
    onLight: 'bg-sky-100 text-sky-800',
  },
}

const projects: Project[] = [
  {
    title: 'airflow-moshi-orchestration',
    category: 'research',
    descKey: 'airflowMoshi',
    tech: ['Apache Airflow', 'PBS Pro', 'ABCI HPC', 'Python', 'MLOps'],
  },
  {
    title: 'Spoken Dialogue Arena',
    category: 'research',
    descKey: 'speechArena',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Cloudflare Tunnel', 'GPU Inference'],
    link: 'https://speech-arena-next.vercel.app/',
  },
  {
    title: 'Changemakers',
    category: 'team',
    award: 'PKSHA Hackathon Grand Prize',
    descKey: 'changemakers',
    tech: ['GPT-Realtime API', 'React', 'Voice AI'],
  },
  {
    title: 'Dream Blossom',
    category: 'team',
    award: 'PR TIMES Hackathon 2025 Individual Excellence Award',
    descKey: 'dreamBlossom',
    tech: ['React', 'TypeScript', 'Animation'],
    repo: 'https://github.com/PRTIMES-hackathon-2025-winter-team2/frontend',
  },
  {
    title: 'Global Mirai Parliament',
    category: 'team',
    descKey: 'globalMirai',
    tech: ['Next.js', 'AI Chat', 'Civic Tech'],
    link: 'https://global-policies.vercel.app/',
    repo: 'https://github.com/team-mirai-students/global-policies',
  },
  {
    title: 'hanasu',
    category: 'personal',
    descKey: 'hanasu',
    tech: ['WebGPU', 'On-device ASR/LLM/TTS', 'Vercel'],
    link: 'https://hanasu-sigma.vercel.app/',
    repo: 'https://github.com/yutoAb/hanasu',
  },
  {
    title: 'g1-work-coach',
    category: 'personal',
    descKey: 'g1WorkCoach',
    tech: ['Unitree G1', 'OpenAI Realtime API', 'rt/arm_sdk', 'Python'],
    repo: 'https://github.com/yutoAb/g1-work-coach',
  },
  {
    title: 'so101-lab',
    category: 'personal',
    descKey: 'so101Lab',
    tech: ['LeRobot', 'SO-101', 'Python', 'MLOps'],
    repo: 'https://github.com/yutoAb/so101-lab',
    articles: [
      {
        title: 'Claude に SO-101 を「学習なし」で直接操縦させたら、模倣学習の必要性を理解した',
        url: 'https://qiita.com/yuAbe/items/b498be1d93103d587a7a',
      },
      {
        title: 'SO-101 で模倣学習、「実機で動かないポリシー」をデバッグして 60% まで動かしてみた',
        url: 'https://qiita.com/yuAbe/items/9611280b08f5114f8816',
      },
      {
        title: '事前学習VLA（SmolVLA）は「掴めない位置」を救うのか？ACTと同じ土俵で比べた',
        url: 'https://qiita.com/yuAbe/items/6bad2384bc2233727d3e',
      },
    ],
  },
  {
    title: 'flowarrow',
    category: 'personal',
    descKey: 'flowarrow',
    tech: ['Vanilla JS', 'Canvas', 'GIF'],
    link: 'https://flow-arrow.com/',
    repo: 'https://github.com/yutoAb/flowarrow',
    articles: [
      {
        title: 'Googleスライドで「流れる矢印」を作る方法【無料ツールを作った】',
        url: 'https://qiita.com/yuAbe/items/193950568e02a7318c01',
      },
    ],
  },
  {
    title: 'system-design-puzzle',
    category: 'personal',
    descKey: 'systemDesignPuzzle',
    tech: ['React Flow', 'TypeScript', 'Vercel'],
    link: 'https://system-design-puzzle.vercel.app/',
    repo: 'https://github.com/yutoAb/system-design-puzzle',
  },
  {
    title: 'Political Quiz App',
    category: 'personal',
    descKey: 'politicalQuiz',
    tech: ['React', 'TypeScript', 'Multiplayer'],
    link: 'https://minhaya-web.pages.dev/',
    repo: 'https://github.com/yutoAb/minhaya-app',
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('projects', 'sectionTitle')}</h2>

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
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${categoryStyle[project.category].onDark}`}>
                  {t('projects', categoryStyle[project.category].labelKey)}
                </span>
                {project.award && (
                  <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-200">
                    {project.award}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/60 line-clamp-2">{t('projects', project.descKey)}</p>
              <div className="flex flex-wrap gap-1.5 mt-3 items-center">
                {project.tech.slice(0, 3).map((tc) => (
                  <span key={tc} className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                    {tc}
                  </span>
                ))}
                {project.articles && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                    📝 {project.articles.length}
                  </span>
                )}
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
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${categoryStyle[selected.category].onLight}`}>
                {t('projects', categoryStyle[selected.category].labelKey)}
              </span>
              {selected.award && (
                <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">
                  {selected.award}
                </span>
              )}
            </div>
            <p className="mb-4 text-gray-700">{t('projects', selected.descKey)}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.tech.map((tc) => (
                <span key={tc} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {tc}
                </span>
              ))}
            </div>
            {selected.articles && (
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  📝 {t('projects', 'relatedArticles')}
                </div>
                <ul className="space-y-1.5">
                  {selected.articles.map((a) => (
                    <li key={a.url}>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue hover:underline block leading-snug"
                      >
                        {a.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
