import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'

type EssayKey = keyof typeof import('../i18n/translations').default.essay

type Section = {
  titleKey: EssayKey
  bodyKeys: EssayKey[]
  caveatKey?: EssayKey
}

const sections: Section[] = [
  { titleKey: 's0Title', bodyKeys: ['s0Body'] },
  { titleKey: 's1Title', bodyKeys: ['s1Body1', 's1Body2'], caveatKey: 's1Caveat' },
  { titleKey: 's2Title', bodyKeys: ['s2Body1', 's2Body2', 's2Body3'] },
  { titleKey: 's3Title', bodyKeys: ['s3Body1', 's3Body2'] },
]

const counterKeys: EssayKey[] = ['counter1', 'counter2', 'counter3']

const sources: { label: string; url: string }[] = [
  { label: '内閣府 CSTI 資料（2019-02-28）— 1989年の時価総額ランキング', url: 'https://www8.cao.go.jp/cstp/gaiyo/yusikisha/20190228/siryo1-1.pdf' },
  { label: 'companiesmarketcap.com（2026-10-26 取得）— 現在の時価総額ランキング', url: 'https://companiesmarketcap.com/' },
  { label: 'EF English Proficiency Index 2025 — Japan', url: 'https://www.ef.com/wwen/epi/regions/asia/japan/' },
  { label: 'IMD 世界デジタル競争力ランキング 2023（日本語リリース）', url: 'https://www.imd.org/?p=126006' },
  { label: 'IMD 世界デジタル競争力ランキング 2024（日本語リリース）', url: 'https://www.imd.org/?p=200549' },
  { label: 'OECD PISA 2022 Country Note: Japan', url: 'https://web.archive.org/web/2024/https://www.oecd.org/publication/pisa-2022-results/country-notes/japan-f7d7daad/' },
  { label: 'GEM 2022/2023 Global Report, Table A3', url: 'https://www.gemconsortium.org/file/open?fileId=51147' },
  { label: '日本財団「18歳意識調査」第20回 要約版（2019）', url: 'https://www.nippon-foundation.or.jp/app/uploads/2019/11/wha_pro_eig_97.pdf' },
  { label: '2025年版 中小企業白書 — 開業率・生存率', url: 'https://www.chusho.meti.go.jp/pamflet/hakusyo/2025/chusho/b1_1_8.html' },
  { label: '令和6年版 こども白書 — 若者の意識', url: 'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/0357b0f6-8b14-47fc-83eb-2654172c2803/282e2d76/20241009_resources_white-paper_r06_15.pdf' },
  { label: '経産省「スタートアップ育成に向けた政府の取組」（2026年3月）', url: 'https://www.meti.go.jp/policy/newbusiness/kaisetsushiryou_202603.pdf' },
]

export default function Essay() {
  const t = useT()
  const { lang, toggleLang } = useLang()
  const base = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/85 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="/" className="text-white font-bold text-lg hover:text-white/80 transition-colors">
            yutoAb
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:inline text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('essay', 'backToPortfolio')}
            </a>
            <button
              onClick={toggleLang}
              className="text-xs px-2.5 py-1 rounded-full border border-white/30 hover:border-white/50 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className={lang === 'ja' ? 'text-white font-bold' : 'text-white/40'}>JA</span>
              <span className="text-white/30">/</span>
              <span className={lang === 'en' ? 'text-white font-bold' : 'text-white/40'}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-10">
          <p className="text-sm text-amber-300/80 font-mono mb-3">/ essays</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{t('essay', 'pageTitle')}</h1>
          <p className="text-white/50 text-sm">{t('essay', 'meta')}</p>
          <a
            href="/"
            className="sm:hidden inline-block mt-6 text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('essay', 'backToPortfolio')}
          </a>
        </header>

        <div className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
          <section className="space-y-5">
            <p className="text-white/85 leading-[1.9]">{t('essay', 'intro')}</p>
            <p className="text-amber-200/90 text-sm leading-relaxed border-l-2 border-amber-300/40 pl-4">
              {t('essay', 'note')}
            </p>
          </section>

          <figure className="space-y-3">
            <video
              src={`${base}essays/japan-20years.mp4`}
              poster={`${base}essays/japan-20years-poster.jpg`}
              controls
              playsInline
              preload="metadata"
              className="mx-auto w-full max-w-sm rounded-lg border border-white/10 shadow-xl"
            />
            <figcaption className="text-center text-white/40 text-xs">{t('essay', 'videoNote')}</figcaption>
          </figure>

          {sections.map((s) => (
            <section key={s.titleKey} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{t('essay', s.titleKey)}</h2>
              {s.bodyKeys.map((k) => (
                <p key={k} className="text-white/85 leading-[1.9]">{t('essay', k)}</p>
              ))}
              {s.caveatKey && <p className="text-white/50 text-sm">{t('essay', s.caveatKey)}</p>}
            </section>
          ))}

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">{t('essay', 'counterTitle')}</h2>
            <ul className="space-y-3 list-disc pl-5 text-white/85 leading-[1.9]">
              {counterKeys.map((k) => (
                <li key={k}>{t('essay', k)}</li>
              ))}
            </ul>
          </section>

          <p className="text-lg text-white leading-[1.9] border-l-2 border-amber-300/60 pl-4">{t('essay', 'closing')}</p>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white/70">{t('essay', 'sourcesTitle')}</h2>
            <ol className="space-y-1.5 list-decimal pl-5 text-sm text-white/55">
              {sources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-2 hover:underline break-all">
                    {src.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
    </div>
  )
}
