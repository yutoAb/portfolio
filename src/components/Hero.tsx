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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Yuto Abe / 阿部 雄斗
          </h1>
          <div className="mb-6">
            <SnsLinks />
          </div>
          <div className="space-y-3 leading-relaxed text-white/90">
            <p>皆さん初めまして。阿部 雄斗（アベ ユウト）と申します。</p>
            <p>
              早稲田大学 情報通信学科の小林・小川研究室に所属させていただいている修士１年生です。
              研究内容としては、機械学習を用いた音声認識モデル・音声対話モデルの構築に取り組んでいます。
            </p>
            <p>
              また長期インターンでは日本ユースウェアシステム株式会社で、WEBアプリの開発をさせていただいています。
              フロントでは React×TypeScript、バックでは Scala を触っています。
            </p>
            <p>趣味はマンガとゴルフです。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
