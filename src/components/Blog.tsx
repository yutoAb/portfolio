import Breadcrumbs from './Breadcrumbs'
import SiteNav from './SiteNav'
import { useState, type ComponentType } from 'react'
import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'
import translations, { type Lang } from '../i18n/translations'
import { textEssays } from '../content/essays'
import { philosophyPosts } from '../content/philosophy'

type BlogKey = keyof typeof translations.blog

type Post = {
  href: string
  date: string
  typeKey: BlogKey
  title: Record<Lang, string>
  summary: Record<Lang, string>
  image?: string
  Diagram?: ComponentType
}

const base = import.meta.env.BASE_URL

// Add a new post by adding one entry here (or to content/essays.ts for text essays).
const posts: Post[] = ([
  ...philosophyPosts.map((p) => ({
    href: `/philosophy/${p.slug}`,
    date: p.date,
    typeKey: 'typePhilosophy' as const,
    title: translations.philosophy[p.titleKey] as Record<Lang, string>,
    summary: translations.philosophy[p.bodyKey] as Record<Lang, string>,
    image: p.image?.src,
    Diagram: p.diagram?.Component,
  })),
  ...textEssays.map((e) => ({
    href: `/essays/${e.slug}`,
    date: e.date,
    typeKey: 'typeEssay' as const,
    title: e.title,
    summary: e.summary,
    image: `${base}${e.image}`,
  })),
  {
    href: '/essays/japan-20years',
    date: '2026-10-30',
    typeKey: 'typeEssay',
    title: translations.blog.essayJapanTitle,
    summary: translations.blog.essayJapanSummary,
    image: `${base}essays/japan-20years-poster.jpg`,
  },
  {
    href: '/manga',
    date: '2026-09-12',
    typeKey: 'typeManga',
    title: translations.blog.mangaTitle,
    summary: translations.blog.mangaSummary,
    image: `${base}manga/p24.png`,
  },
] satisfies Post[]).sort((a, b) => b.date.localeCompare(a.date))

type View = 'cards' | 'list'
const VIEW_KEY = 'blogView'

function readView(): View {
  try {
    return localStorage.getItem(VIEW_KEY) === 'list' ? 'list' : 'cards'
  } catch {
    return 'cards'
  }
}

export default function Blog() {
  const t = useT()
  const { lang } = useLang()
  const [view, setView] = useState<View>(readView)

  const changeView = (next: View) => {
    setView(next)
    try {
      localStorage.setItem(VIEW_KEY, next)
    } catch {
      /* no-op */
    }
  }

  const toggleBtn = (v: View, label: string, icon: React.ReactNode) => (
    <button
      onClick={() => changeView(v)}
      aria-pressed={view === v}
      aria-label={label}
      title={label}
      className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors cursor-pointer ${
        view === v ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'
      }`}
    >
      {icon}
    </button>
  )

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteNav active="blog" />

      <main className="pt-16">
        <header className="max-w-4xl mx-auto px-6 pt-8 md:pt-16 pb-10">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog', 'pageTitle')}</h1>
          <div className="flex items-end justify-between gap-4">
            <p className="text-white/60">{t('blog', 'pageLead')}</p>
            <div className="shrink-0 flex gap-1 p-1 rounded-lg border border-white/10">
              {toggleBtn(
                'cards',
                t('blog', 'viewCards'),
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>,
              )}
              {toggleBtn(
                'list',
                t('blog', 'viewList'),
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>,
              )}
            </div>
          </div>
        </header>

        {view === 'list' ? (
          <div className="max-w-4xl mx-auto px-6 pb-20">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {posts.map((post) => (
              <li key={post.href}>
                <a href={post.href} className="group block py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200">
                      {t('blog', post.typeKey)}
                    </span>
                    <span className="text-xs text-white/50">{post.date.replace(/-/g, '/')}</span>
                  </div>
                  <h2 className="font-bold group-hover:text-purple-200 transition-colors">{post.title[lang]}</h2>
                  <p className="text-sm text-white/60 mt-1 line-clamp-1">{post.summary[lang]}</p>
                </a>
              </li>
            ))}
          </ul>
          </div>
        ) : (
        <div className="max-w-4xl mx-auto px-6 pb-20 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="group block rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black/20">
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : post.Diagram ? (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    <div className="h-full aspect-[800/560]">
                      <post.Diagram />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-end p-5 bg-gradient-to-br from-purple-500/40 via-slate-800 to-amber-500/20">
                    <span className="text-white/90 font-bold text-lg leading-snug line-clamp-3">{post.title[lang]}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-200">
                    {t('blog', post.typeKey)}
                  </span>
                  <span className="text-xs text-white/50">{post.date.replace(/-/g, '/')}</span>
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-purple-200 transition-colors">
                  {post.title[lang]}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed">{post.summary[lang]}</p>
              </div>
            </a>
          ))}
        </div>
        )}
      </main>
    </div>
  )
}
