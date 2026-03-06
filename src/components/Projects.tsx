import { useState } from 'react'
import { useInView } from './useInView'
import movie from '../assets/卒業論文研究紹介動画.mp4'

type PortfolioItem = {
  title: string
  description: string
  link: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'To Do アプリ (App Engine)',
    description:
      'ReactとTypeScriptで作成したタスク管理アプリです。App Engine の /tmp に保存しているので、一定時間後にToDo データはすべて消えてしまいます。',
    link: 'https://karu-web-taupe.vercel.app/',
  },
  {
    title: '父の会社のホームページ',
    description:
      '企業紹介とお問い合わせ機能を備えたホームページです。Next.jsとMUIで実装されています。',
    link: 'https://www.heiseiyusou.co.jp/',
  },
  {
    title: 'To Do アプリ (Cloud Run + Cloud SQL)',
    description:
      'Cloud RunとCloud SQLを使用してデプロイされたTo Do アプリです。永続的なデータ保存が可能です。',
    link: 'https://flask-service-995640452429.asia-northeast1.run.app/',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  return (
    <section className="min-h-screen bg-blue text-white px-6 py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Thesis */}
          <div>
            <h3 className="text-xl font-bold mb-4">卒業論文</h3>
            <video src={movie} controls className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Portfolio items */}
          <div>
            <h3 className="text-xl font-bold mb-4">ポートフォリオ</h3>
            <div className="space-y-3">
              {portfolioItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setSelected(item)}
                  className="w-full text-left px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white text-gray-900 rounded-xl p-6 max-w-md mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-3">{selected.title}</h3>
            <p className="mb-4 text-gray-700">{selected.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline font-medium"
              >
                サイトを見る
              </a>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
