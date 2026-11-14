import { useEffect, useState } from 'react'
import { useInView } from './useInView'
import { useT } from '../i18n/useT'

const INITIAL = 6

type Category = 'personal' | 'team' | 'research'
type Filter = 'all' | Category

type Project = {
  title: string
  category: Category
  award?: string
  descKey: keyof typeof import('../i18n/translations').default.projects
  tech: string[]
  link?: string
  repo?: string
  articles?: { title: string; url: string }[]
  /** Screenshot of the running app, in public/projects/. */
  image?: string
  /** Short silent clip that loops in place of the still; `image` is its poster. */
  video?: string
}

// Dot / accent colours are plain palette colours so they read on both themes.
const categoryStyle: Record<
  Category,
  {
    labelKey: 'categoryPersonal' | 'categoryTeam' | 'categoryResearch'
    dot: string
    accent: string
  }
> = {
  research: {
    labelKey: 'categoryResearch',
    dot: 'bg-sky-400',
    accent: 'from-sky-400',
  },
  team: {
    labelKey: 'categoryTeam',
    dot: 'bg-emerald-400',
    accent: 'from-emerald-400',
  },
  personal: {
    labelKey: 'categoryPersonal',
    dot: 'bg-purple-400',
    accent: 'from-purple-400',
  },
}

const filters: Filter[] = ['all', 'research', 'team', 'personal']

const projects: Project[] = [
  {
    title: 'airflow-moshi-orchestration',
    category: 'research',
    descKey: 'airflowMoshi',
    tech: ['Apache Airflow', 'PBS Pro', 'ABCI HPC', 'Python', 'MLOps'],
  },
  {
    title: 'Spoken Dialogue Arena',
    image: 'projects/spoken-dialogue-arena.jpg',
    category: 'research',
    descKey: 'speechArena',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Cloudflare Tunnel', 'GPU Inference'],
    link: 'https://spoken-dialogue-arena.vercel.app/',
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
    title: 'Automation Landscape',
    image: 'projects/automation-landscape.jpg',
    category: 'personal',
    descKey: 'automationLandscape',
    tech: ['Astro', 'React', 'Tailwind CSS 4', 'MDX', 'Cloudflare Pages'],
    link: 'https://automation.yutoabe.com/',
  },
  {
    title: 'hanasu',
    image: 'projects/hanasu.jpg',
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
    image: 'projects/so101-lab.jpg',
    video: 'projects/so101-lab.mp4',
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
    image: 'projects/flowarrow.jpg',
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
    image: 'projects/system-design-puzzle.jpg',
    category: 'personal',
    descKey: 'systemDesignPuzzle',
    tech: ['React Flow', 'TypeScript', 'Vercel'],
    link: 'https://interview.yutoabe.com/',
    repo: 'https://github.com/yutoAb/system-design-puzzle',
  },
  {
    title: 'Political Quiz App',
    image: 'projects/political-quiz.jpg',
    category: 'personal',
    descKey: 'politicalQuiz',
    tech: ['React', 'TypeScript', 'Multiplayer'],
    link: 'https://minhaya-web.pages.dev/',
    repo: 'https://github.com/yutoAb/minhaya-app',
  },
]

// Projects with something to look at come first; the hand-written order is kept within each group.
const ordered = [...projects.filter((p) => p.image), ...projects.filter((p) => !p.image)]

function CategoryLabel({ category }: { category: Category }) {
  const t = useT()
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
      <span className={`w-1.5 h-1.5 rounded-full ${categoryStyle[category].dot}`} />
      {t('projects', categoryStyle[category].labelKey)}
    </span>
  )
}

function Award({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs leading-snug px-2 py-1 rounded-md bg-yellow-500/20 text-yellow-200">
      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 3h12v2h3v3a4 4 0 0 1-4 4h-.35A5 5 0 0 1 13 14.9V18h3v3H8v-3h3v-3.1A5 5 0 0 1 7.35 12H7a4 4 0 0 1-4-4V5h3V3Zm0 4H5v1a2 2 0 0 0 1 1.73V7Zm12 0v2.73A2 2 0 0 0 19 8V7h-1Z" />
      </svg>
      {children}
    </span>
  )
}

// Screenshot when the project has one; otherwise a quiet category-tinted panel with the name.
function Thumb({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <span className={`relative block aspect-[16/9] overflow-hidden bg-slate-900 ${className}`}>
      {project.video ? (
        <video
          src={`/${project.video}`}
          poster={project.image && `/${project.image}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : project.image ? (
        <img
          src={`/${project.image}`}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <>
          <span
            className={`absolute inset-0 opacity-25 bg-gradient-to-br ${categoryStyle[project.category].accent} to-transparent`}
          />
          <span className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-sm tracking-wide text-white/50">
            {project.title}
          </span>
        </>
      )}
    </span>
  )
}

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
  </svg>
)

export default function Projects() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState<Project | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [filter, setFilter] = useState<Filter>('all')
  const t = useT()

  const list = filter === 'all' ? ordered : ordered.filter((p) => p.category === filter)
  const visible = expanded ? list : list.slice(0, INITIAL)
  const hidden = list.length - visible.length

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section className="bg-blue text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto w-full transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('projects', 'sectionTitle')}</h2>
          <div className="-mx-6 px-6 md:mx-0 md:px-0 flex gap-2 overflow-x-auto">
            {filters.map((f) => {
              const count = f === 'all' ? projects.length : projects.filter((p) => p.category === f).length
              const active = filter === f
              return (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f)
                    setExpanded(false)
                  }}
                  aria-pressed={active}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm rounded-full border transition-colors cursor-pointer ${
                    active
                      ? 'bg-white text-purple border-transparent font-bold'
                      : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20'
                  }`}
                >
                  {f !== 'all' && <span className={`w-1.5 h-1.5 rounded-full ${categoryStyle[f].dot}`} />}
                  {f === 'all' ? t('projects', 'filterAll') : t('projects', categoryStyle[f].labelKey)}
                  <span className="font-mono text-xs opacity-60">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, i) => (
            <li key={project.title}>
              <button
                onClick={() => setSelected(project)}
                className="group relative overflow-hidden text-left w-full h-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* category-coloured line that draws in on hover */}
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${categoryStyle[project.category].accent} to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
                <Thumb project={project} className="border-b border-white/10" />
                <span className="flex flex-col flex-1 p-5">
                  <span className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, '0')}</span>
                      <CategoryLabel category={project.category} />
                    </span>
                    <span className="text-white/30 group-hover:text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ExternalIcon />
                    </span>
                  </span>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>
                  {project.award && (
                    <span className="mb-2">
                      <Award>{project.award}</Award>
                    </span>
                  )}
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-4">
                    {t('projects', project.descKey)}
                  </p>
                  <span className="mt-auto pt-3 border-t border-white/10 flex items-end justify-between gap-3">
                    <span className="font-mono text-[11px] leading-relaxed text-white/50">
                      {project.tech.slice(0, 3).join(' · ')}
                    </span>
                    <span className="shrink-0 flex gap-1.5 text-[11px] text-white/60">
                      {project.link && <span className="px-1.5 py-0.5 rounded bg-white/10">Live</span>}
                      {project.repo && <span className="px-1.5 py-0.5 rounded bg-white/10">GitHub</span>}
                      {project.articles && (
                        <span className="px-1.5 py-0.5 rounded bg-white/10">
                          {t('projects', 'articlesShort')} {project.articles.length}
                        </span>
                      )}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {(hidden > 0 || expanded) && list.length > INITIAL && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="px-5 py-2 text-sm rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer"
            >
              {expanded ? t('experience', 'showLess') : `${t('experience', 'showMore')}（${hidden}）`}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="relative overflow-hidden bg-slate-900 text-white border border-white/20 rounded-2xl p-6 md:p-7 w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${categoryStyle[selected.category].accent} to-transparent`}
            />
            <button
              onClick={() => setSelected(null)}
              aria-label={t('projects', 'close')}
              className="absolute z-10 top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-full bg-slate-900 border border-white/20 hover:border-white/30 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            {selected.image && (
              <Thumb project={selected} className="-mx-6 md:-mx-7 -mt-6 md:-mt-7 mb-5 border-b border-white/10" />
            )}
            <CategoryLabel category={selected.category} />
            <h3 className="text-2xl font-bold mt-2 mb-2 pr-10 leading-snug">{selected.title}</h3>
            {selected.award && <Award>{selected.award}</Award>}
            <p className="mt-4 mb-5 text-white/80 leading-relaxed">{t('projects', selected.descKey)}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {selected.tech.map((tc) => (
                <span key={tc} className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-white/70">
                  {tc}
                </span>
              ))}
            </div>
            {selected.articles && (
              <div className="mb-5 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-2">
                  {t('projects', 'relatedArticles')}
                </div>
                <ul className="space-y-2">
                  {selected.articles.map((a) => (
                    <li key={a.url}>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-300 hover:text-purple-100 underline underline-offset-2 block leading-snug"
                      >
                        {a.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(selected.link || selected.repo) && (
              <div className="flex flex-wrap gap-3">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full bg-white text-purple hover:opacity-90 transition-opacity"
                  >
                    {t('projects', 'viewApp')}
                    <ExternalIcon />
                  </a>
                )}
                {selected.repo && (
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    GitHub
                    <ExternalIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
