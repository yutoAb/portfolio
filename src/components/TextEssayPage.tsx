import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'
import type { TextEssay } from '../content/essays'

export default function TextEssayPage({ essay }: { essay: TextEssay }) {
  const t = useT()
  const { lang, toggleLang } = useLang()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/85 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="/" className="text-white font-bold text-lg hover:text-white/80 transition-colors">
            yutoAb
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/blog"
              className="hidden sm:inline text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('blog', 'backToBlog')}
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{essay.title[lang]}</h1>
          <p className="text-white/50 text-sm">
            {essay.date.replace(/-/g, '/')} / {lang === 'ja' ? '阿部 雄斗' : 'Yuto Abe'}
          </p>
          <a
            href="/blog"
            className="sm:hidden inline-block mt-6 text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('blog', 'backToBlog')}
          </a>
        </header>

        <div className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
          <img
            src={`${import.meta.env.BASE_URL}${essay.image}`}
            alt=""
            className="w-full rounded-lg border border-white/10"
          />
          <p className="text-white/85 leading-[1.9]">{essay.lead[lang]}</p>

          {essay.sections.map((s, i) => (
            <section key={i} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{s.heading[lang]}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-white/85 leading-[1.9]">{p[lang]}</p>
              ))}
            </section>
          ))}

          <p className="text-lg text-white leading-[1.9] border-l-2 border-amber-300/60 pl-4">{essay.closing[lang]}</p>
        </div>
      </main>
    </div>
  )
}
