import Breadcrumbs from './Breadcrumbs'
import SiteNav from './SiteNav'
import { useT } from '../i18n/useT'
import { useLang } from '../i18n/LangContext'
import type { PhilosophyPost } from '../content/philosophy'
import { philosophyPosts } from '../content/philosophy'
import { textEssays } from '../content/essays'

export default function PhilosophyPostPage({ post }: { post: PhilosophyPost }) {
  const t = useT()
  const { lang } = useLang()
  const index = philosophyPosts.indexOf(post)
  const prev = philosophyPosts[index - 1]
  const next = philosophyPosts[index + 1]
  const related = textEssays.filter((e) => post.relatedEssays?.includes(e.slug))
  const Diagram = post.diagram?.Component

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SiteNav active="blog" />

      <main className="pt-16">
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-10">
          <Breadcrumbs parent="philosophy" current={t('philosophy', post.titleKey)} />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{t('philosophy', post.titleKey)}</h1>
          <p className="text-white/60 leading-relaxed">{t('philosophy', post.bodyKey)}</p>
        </header>

        <div className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
          {post.image && (
            <figure>
              <img
                src={post.image.src}
                alt={t('philosophy', post.image.altKey)}
                className="w-full rounded-lg border border-white/10"
              />
              <figcaption className="mt-2 text-xs text-white/50 text-center">
                {t('philosophy', post.image.captionKey)}
              </figcaption>
            </figure>
          )}

          {post.diagram && Diagram && (
            <figure>
              <div className="w-full rounded-lg border border-white/10 overflow-hidden">
                <Diagram />
              </div>
              <figcaption className="mt-2 text-xs text-white/50 text-center">
                {t('philosophy', post.diagram.captionKey)}
              </figcaption>
            </figure>
          )}

          <p className="text-white/85 leading-[1.9] whitespace-pre-line">{t('philosophy', post.articleKey)}</p>

          {related.length > 0 && (
            <section className="pt-6 border-t border-white/10">
              <h2 className="text-sm font-bold text-white/60 mb-3">{t('philosophy', 'relatedEssays')}</h2>
              <ul className="space-y-2">
                {related.map((e) => (
                  <li key={e.slug}>
                    <a
                      href={`/essays/${e.slug}`}
                      className="text-purple-300 hover:text-purple-100 underline underline-offset-2"
                    >
                      {e.title[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav className="pt-6 border-t border-white/10 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                {prev && (
                  <a href={`/philosophy/${prev.slug}`} className="group block">
                    <span className="text-white/40">← #{index}</span>
                    <span className="block text-white/80 group-hover:text-purple-200 transition-colors">
                      {t('philosophy', prev.titleKey)}
                    </span>
                  </a>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <a href={`/philosophy/${next.slug}`} className="group block">
                    <span className="text-white/40">#{index + 2} →</span>
                    <span className="block text-white/80 group-hover:text-purple-200 transition-colors">
                      {t('philosophy', next.titleKey)}
                    </span>
                  </a>
                )}
              </div>
            </div>
            <div className="text-center">
              <a
                href="/#philosophy"
                className="inline-block px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                {t('philosophy', 'backToPhilosophy')}
              </a>
            </div>
          </nav>
        </div>
      </main>
    </div>
  )
}
