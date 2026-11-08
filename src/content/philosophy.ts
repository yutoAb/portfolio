import type { ComponentType } from 'react'
import type translations from '../i18n/translations'
import WorldviewDiagram from '../components/philosophy/WorldviewDiagram'

type PhilosophyKey = keyof typeof translations.philosophy

export type PhilosophyPost = {
  slug: string
  date: string
  titleKey: PhilosophyKey
  bodyKey: PhilosophyKey
  articleKey: PhilosophyKey
  image?: { src: string; altKey: PhilosophyKey; captionKey: PhilosophyKey }
  diagram?: { Component: ComponentType; altKey: PhilosophyKey; captionKey: PhilosophyKey }
  // slugs in content/essays.ts that continue this line of thought
  relatedEssays?: string[]
}

const base = import.meta.env.BASE_URL

// Served at /philosophy/<slug>; summarized as cards in the top-page Philosophy section.
export const philosophyPosts: PhilosophyPost[] = [
  {
    slug: 'automating-essentials',
    date: '2026-04-20',
    titleKey: 'visionTitle',
    bodyKey: 'visionBody',
    articleKey: 'visionArticle',
    image: { src: `${base}philosophy-vision.jpg`, altKey: 'visionImageAlt', captionKey: 'visionImageCaption' },
    relatedEssays: ['what-only-humans-can-do'],
  },
  {
    slug: 'swe-ds-biz',
    date: '2026-04-20',
    titleKey: 'worldviewTitle',
    bodyKey: 'worldviewBody',
    articleKey: 'worldviewArticle',
    diagram: { Component: WorldviewDiagram, altKey: 'worldviewImageAlt', captionKey: 'worldviewImageCaption' },
  },
  {
    slug: 'recreating-people',
    date: '2026-04-20',
    titleKey: 'dreamTitle',
    bodyKey: 'dreamBody',
    articleKey: 'dreamArticle',
    image: { src: `${base}philosophy-dream.jpg`, altKey: 'dreamImageAlt', captionKey: 'dreamImageCaption' },
  },
  {
    slug: 'data-reproduces-behavior',
    date: '2026-04-20',
    titleKey: 'observationTitle',
    bodyKey: 'observationBody',
    articleKey: 'observationArticle',
    image: { src: `${base}philosophy-observation.jpg`, altKey: 'observationImageAlt', captionKey: 'observationImageCaption' },
    relatedEssays: ['compute-and-questions'],
  },
]
