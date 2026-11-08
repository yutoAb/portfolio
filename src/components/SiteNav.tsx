import type { RefObject } from 'react'
import Nav, { type NavEntry } from './Nav'
import { useT } from '../i18n/useT'

export type SectionId =
  | 'top'
  | 'philosophy'
  | 'profiles'
  | 'skills'
  | 'education'
  | 'experience'
  | 'research'
  | 'projects'
  | 'contact'

type Refs = Record<SectionId, RefObject<HTMLDivElement | null>>

// One header for every page. On the top page sections scroll in place;
// on sub-pages (blog, essays, philosophy, manga) they link back to /#<id>.
export default function SiteNav({ refs, active }: { refs?: Refs; active?: 'blog' }) {
  const t = useT()

  const item = (id: SectionId, label: string): NavEntry =>
    refs ? { kind: 'section', label, ref: refs[id] } : { kind: 'link', label, href: id === 'top' ? '/' : `/#${id}` }

  const group = (label: string, children: NavEntry[]): NavEntry => ({
    kind: 'group',
    label,
    children: children as Extract<NavEntry, { kind: 'section' | 'link' }>[],
  })

  const entries: NavEntry[] = [
    item('top', t('nav', 'top')),
    group(t('nav', 'aboutGroup'), [
      item('philosophy', t('nav', 'philosophy')),
      item('profiles', t('nav', 'profiles')),
      item('skills', t('nav', 'skills')),
      item('education', t('nav', 'education')),
    ]),
    group(t('nav', 'workGroup'), [
      item('experience', t('nav', 'experience')),
      item('research', t('nav', 'research')),
      item('projects', t('nav', 'projects')),
    ]),
    { kind: 'link', label: t('nav', 'blog'), href: '/blog', active: active === 'blog' },
    item('contact', t('nav', 'contact')),
  ]

  return <Nav entries={entries} />
}
