import { useInView } from './useInView'

type ExperienceEntry = {
  period: string
  company: string
  role: string
  description: string[]
}

const experiences: ExperienceEntry[] = [
  {
    period: '2025 - Present',
    company: 'National Institute of Informatics (NII)',
    role: 'Research Engineer',
    description: [
      'LLM-jp-Moshi-v1: 7Bパラメータの日本語全二重音声対話モデルを筆頭開発',
      'J-CHAT, CSJ, CallHome-Japanese等の多言語対話コーパスを用いたカリキュラム学習',
      'ターンテイキング・相槌行動のモデリングに関する研究',
    ],
  },
  {
    period: '2025 Aug - Sep',
    company: 'Hitachi, Ltd. R&D Group',
    role: 'Research Intern',
    description: [
      'Qwen-Audio（大規模音声言語モデル）を用いたフェイク音声検出の研究',
    ],
  },
  {
    period: '2025 Feb',
    company: 'Medley, Inc.',
    role: 'Engineering Intern',
    description: [
      'LLMベースの医療対話要約の改善',
      '薬品名の欠落や文脈参照の問題を解決',
    ],
  },
  {
    period: '2023 Feb - 2025 Oct',
    company: 'Japan Useware Systems Co., Ltd.',
    role: 'Software Engineer',
    description: [
      'Elasticsearch + React + MUI によるアクセスログ分析ダッシュボードの設計・実装',
      'Elasticsearch集約の最適化によるAPIレスポンス遅延の解決',
      'パフォーマンスプロファイリングに基づくフロントエンドレンダリングの最適化',
    ],
  },
  {
    period: '2025 Aug',
    company: 'Accenture',
    role: 'Engineering Intern',
    description: [
      '倉庫管理アプリケーションの開発',
    ],
  },
  {
    period: '2026 Feb (2 weeks)',
    company: 'GMO Internet Group',
    role: 'Engineering Intern',
    description: [
      '2週間の集中プログラムで「天秤AI」（AI比較ツール）をエンドツーエンドで実装',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-blue text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

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
                {exp.description.map((d, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40" />
                    {d}
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
