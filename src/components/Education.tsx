import { useInView } from './useInView'

type TimelineEntry = {
  date: string
  title: string
  subtitle?: string
}

const education: TimelineEntry[] = [
  { date: '2027年3月', title: '早稲田大学 基幹理工学術院 博士前期課程', subtitle: '情報理工・情報通信専攻' },
  { date: '2025年3月', title: '早稲田大学 基幹理工学部 学士課程', subtitle: '情報通信学科' },
  { date: '2021年4月', title: '早稲田大学 入学' },
]

const career: TimelineEntry[] = [
  { date: '2025年8月～9月', title: '日立製作所 研究開発グループ', subtitle: '短期インターンシップ' },
  { date: '2025年2月', title: 'PR TIMES HACKATHON 2025 Winter', subtitle: 'ハッカソン' },
  { date: '2023年2月～現在', title: '日本ユースウェアシステム株式会社', subtitle: '長期アルバイト' },
  { date: '2022年10月～2023年1月', title: 'キャロットソフトウェア株式会社', subtitle: '短期アルバイト' },
]

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative pl-6 border-l-2 border-white/30 space-y-6">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white" />
          <p className="text-sm text-white/70">{item.date}</p>
          <p className="font-semibold">{item.title}</p>
          {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
        </div>
      ))}
    </div>
  )
}

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section className="min-h-screen bg-pink text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">学歴</h3>
            <Timeline items={education} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">経歴</h3>
            <Timeline items={career} />
          </div>
        </div>
      </div>
    </section>
  )
}
