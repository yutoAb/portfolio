import SnsLinks from './SnsLinks'
import profileImg from '../assets/2024_阿部雄斗.png'

export default function Hero() {
  return (
    <section className="min-h-screen bg-purple text-white flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <img
          src={profileImg}
          alt="阿部 雄斗"
          className="w-48 md:w-72 rounded-lg shadow-lg object-contain"
        />
        <div className="animate-[slide-fade-in_1s_ease-out]">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Yuto Abe
          </h1>
          <p className="text-lg text-white/70 mb-6">阿部 雄斗</p>
          <div className="mb-6">
            <SnsLinks />
          </div>
          <div className="space-y-3 leading-relaxed text-white/90">
            <p>
              早稲田大学 基幹理工学術院 修士1年。小林・小川研究室にて、
              全二重音声対話システムの研究に取り組んでいます。
            </p>
            <p>
              国立情報学研究所 (NII) にてリサーチエンジニアとして、
              7Bパラメータの日本語全二重音声対話モデル{' '}
              <a href="https://llm-jp.github.io/llm-jp-moshi/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-white">LLM-jp-Moshi-v1</a> を筆頭開発。
              <a href="https://aclanthology.org/2026.iwsds-1.10/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">IWSDS 2026</a> にて筆頭著者として発表。
            </p>
            <p>
              データ基盤を設計・構築するソフトウェアエンジニアリングと、
              データからモデルを生み出すデータサイエンスの両軸で、
              人とAIの自然なコミュニケーションの実現を目指しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
