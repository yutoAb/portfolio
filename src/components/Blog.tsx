import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'

type BlogKey = keyof typeof import('../i18n/translations').default.blog

type Post = {
  href: string
  date: string
  typeKey: BlogKey
  titleKey: BlogKey
  summaryKey: BlogKey
  image: string
}

const base = import.meta.env.BASE_URL

// Newest first. Add a new post by adding one entry here.
const posts: Post[] = [
  {
    href: '/essays/japan-20years',
    date: '2026-10-30',
    typeKey: 'typeEssay',
    titleKey: 'essayJapanTitle',
    summaryKey: 'essayJapanSummary',
    image: `${base}essays/japan-20years-poster.jpg`,
  },
  {
    href: '/manga',
    date: '2026-09-12',
    typeKey: 'typeManga',
    titleKey: 'mangaTitle',
    summaryKey: 'mangaSummary',
    image: `${base}manga/p24.png`,
  },
]

export default function Blog() {
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
              href="/"
              className="hidden sm:inline text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('blog', 'backToPortfolio')}
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
        <header className="max-w-4xl mx-auto px-6 pt-16 pb-10">
          <p className="text-sm text-purple-300/80 font-mono mb-3">/ blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog', 'pageTitle')}</h1>
          <p className="text-white/60">{t('blog', 'pageLead')}</p>
          <a
            href="/"
            className="sm:hidden inline-block mt-6 text-sm text-white/60 hover:text-white transition-colors"
          >
            {t('blog', 'backToPortfolio')}
          </a>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="group block rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black/20">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200">
                    {t('blog', post.typeKey)}
                  </span>
                  <span className="text-xs text-white/50">{post.date.replace(/-/g, '/')}</span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-purple-200 transition-colors">
                  {t('blog', post.titleKey)}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">{t('blog', post.summaryKey)}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
