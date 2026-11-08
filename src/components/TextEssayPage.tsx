import Breadcrumbs from './Breadcrumbs'
import SiteNav from './SiteNav'
import { useLang } from '../i18n/LangContext'
import type { TextEssay } from '../content/essays'

export default function TextEssayPage({ essay }: { essay: TextEssay }) {
  const { lang } = useLang()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteNav active="blog" />

      <main className="pt-16">
        <header className="max-w-3xl mx-auto px-6 pt-8 md:pt-16 pb-10">
          <Breadcrumbs current={essay.title[lang]} />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{essay.title[lang]}</h1>
          <p className="text-white/50 text-sm">
            {essay.date.replace(/-/g, '/')} / {lang === 'ja' ? '阿部 雄斗' : 'Yuto Abe'}
          </p>
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
