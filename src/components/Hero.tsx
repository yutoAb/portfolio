import SnsLinks from './SnsLinks'
import profileImg from '../assets/2024_阿部雄斗.png'
import { useT } from '../i18n/useT'

export default function Hero() {
  const t = useT()

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
          <p className="text-lg text-white/70 mb-6">{t('hero', 'subtitle')}</p>
          <div className="mb-6">
            <SnsLinks />
          </div>
          <div className="space-y-3 leading-relaxed text-white/90">
            <p>{t('hero', 'bio1')}</p>
            <p>
              {t('hero', 'bio2_prefix')}{' '}
              <a href="https://llm-jp.github.io/llm-jp-moshi/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-white">LLM-jp-Moshi-v1</a>
              {t('hero', 'bio2_mid')}{' '}
              <a href="https://aclanthology.org/2026.iwsds-1.10/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">IWSDS 2026</a>
              {t('hero', 'bio2_suffix')}
            </p>
            <p>{t('hero', 'bio3')}</p>
            <p>{t('hero', 'bio4')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
