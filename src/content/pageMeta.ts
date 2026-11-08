import translations from '../i18n/translations'
import { textEssays } from './essays'
import { philosophyMeta } from './philosophyMeta'

export type PageMeta = { path: string; title: string; description: string; image: string }

// Per-page <title>/OGP tags, written to dist/<path>.html at build time so link
// previews and crawlers (which don't run JS) see the right card. Images live in public/og/.
export const pageMetas: PageMeta[] = [
  {
    path: '/blog',
    title: translations.blog.pageTitle.ja,
    description: translations.blog.pageLead.ja,
    image: 'og/blog.jpg',
  },
  ...textEssays.map((e) => ({
    path: `/essays/${e.slug}`,
    title: e.title.ja,
    description: e.summary.ja,
    image: `og/${e.slug}.jpg`,
  })),
  {
    path: '/essays/japan-20years',
    title: translations.blog.essayJapanTitle.ja,
    description: translations.blog.essayJapanSummary.ja,
    image: 'og/japan-20years.jpg',
  },
  {
    path: '/manga',
    title: translations.blog.mangaTitle.ja,
    description: translations.blog.mangaSummary.ja,
    image: 'og/manga.jpg',
  },
  ...philosophyMeta.map((p) => ({
    path: `/philosophy/${p.slug}`,
    title: translations.philosophy[p.titleKey].ja,
    description: translations.philosophy[p.bodyKey].ja,
    image: `og/${p.slug}.jpg`,
  })),
]
