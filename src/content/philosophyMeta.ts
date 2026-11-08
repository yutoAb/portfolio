import type translations from '../i18n/translations'

type PhilosophyKey = keyof typeof translations.philosophy

// Plain data (no React) so the build can read it for per-page meta tags.
export const philosophyMeta = [
  { slug: 'automating-essentials', date: '2026-04-20', titleKey: 'visionTitle', bodyKey: 'visionBody', articleKey: 'visionArticle' },
  { slug: 'swe-ds-biz', date: '2026-04-20', titleKey: 'worldviewTitle', bodyKey: 'worldviewBody', articleKey: 'worldviewArticle' },
  { slug: 'recreating-people', date: '2026-04-20', titleKey: 'dreamTitle', bodyKey: 'dreamBody', articleKey: 'dreamArticle' },
  { slug: 'data-reproduces-behavior', date: '2026-04-20', titleKey: 'observationTitle', bodyKey: 'observationBody', articleKey: 'observationArticle' },
] satisfies { slug: string; date: string; titleKey: PhilosophyKey; bodyKey: PhilosophyKey; articleKey: PhilosophyKey }[]
