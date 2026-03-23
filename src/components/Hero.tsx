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
          <div className="mb-6 flex items-center gap-4">
            <SnsLinks />
            <a
              href="cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              CV
            </a>
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
