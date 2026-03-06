import { useState } from 'react'
import { useInView } from './useInView'

type Project = {
  title: string
  award?: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Speech Arena',
    description:
      'リアルタイム全二重音声対話モデルのための人間中心A/B評価プラットフォーム。ブラインド比較とBradley-Terryランキングの統合を実現。',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Cloudflare Tunnel', 'GPU Inference'],
    link: 'https://github.com/kobas-lab/speech-arena',
  },
  {
    title: 'Changemakers',
    award: 'PKSHA Hackathon Grand Prize',
    description:
      'GPT-Realtime APIを活用したAI医療相談・予約アプリ。リアルタイム音声インタラクションによる病院の問診を実現。',
    tech: ['GPT-Realtime API', 'React', 'Voice AI'],
  },
  {
    title: 'Dream Blossom',
    award: 'PR TIMES Hackathon 2025 Individual Excellence Award',
    description:
      '個人の夢や目標を共有・追跡するWebアプリ。目標達成時に桜のアニメーションが咲く。',
    tech: ['React', 'TypeScript', 'Animation'],
  },
  {
    title: 'Global Mirai Parliament & Political Quiz App',
    description:
      'チームみらい学生エンジニアとして、テクノロジーと政策をつなぐシビックテックイニシアチブのリード。有権者エンゲージメントのための政治クイズアプリの開発。',
    tech: ['Civic Tech', 'Full-Stack'],
  },
  {
    title: "Father's Company Homepage",
    description:
      '企業紹介とお問い合わせ機能を備えたコーポレートサイト。',
    tech: ['Next.js', 'MUI'],
    link: 'https://www.heiseiyusou.co.jp/',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState<Project | null>(null)

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
              <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                    {t}
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
            <p className="mb-4 text-gray-700">{selected.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              {selected.link ? (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline font-medium"
                >
                  View Project
                </a>
              ) : (
                <span />
              )}
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
