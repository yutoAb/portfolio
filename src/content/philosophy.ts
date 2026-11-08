import type { ComponentType } from 'react'
import type translations from '../i18n/translations'
import WorldviewDiagram from '../components/philosophy/WorldviewDiagram'
import { philosophyMeta } from './philosophyMeta'

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
    ...philosophyMeta[0],
    image: { src: `${base}philosophy-vision.jpg`, altKey: 'visionImageAlt', captionKey: 'visionImageCaption' },
    relatedEssays: ['what-only-humans-can-do'],
  },
  {
    ...philosophyMeta[1],
    diagram: { Component: WorldviewDiagram, altKey: 'worldviewImageAlt', captionKey: 'worldviewImageCaption' },
  },
  {
    ...philosophyMeta[2],
    image: { src: `${base}philosophy-dream.jpg`, altKey: 'dreamImageAlt', captionKey: 'dreamImageCaption' },
  },
  {
    ...philosophyMeta[3],
    image: { src: `${base}philosophy-observation.jpg`, altKey: 'observationImageAlt', captionKey: 'observationImageCaption' },
    relatedEssays: ['compute-and-questions'],
  },
]
