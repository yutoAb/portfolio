import { useRef } from 'react'
import { useT } from './i18n/useT'
import Nav, { type NavEntry } from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Manga from './components/Manga'

export default function App() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.replace(/\/+$/, '')
    if (path === '/manga') {
      return <Manga />
    }
  }

  const heroRef = useRef<HTMLDivElement>(null)
  const philosophyRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const profilesRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const researchRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const t = useT()

  const entries: NavEntry[] = [
    { kind: 'section', label: t('nav', 'top'), ref: heroRef },
    {
      kind: 'group',
      label: t('nav', 'aboutGroup'),
      children: [
        { kind: 'section', label: t('nav', 'philosophy'), ref: philosophyRef },
        { kind: 'section', label: t('nav', 'profiles'), ref: profilesRef },
        { kind: 'section', label: t('nav', 'skills'), ref: skillsRef },
        { kind: 'section', label: t('nav', 'education'), ref: educationRef },
      ],
    },
    {
      kind: 'group',
      label: t('nav', 'workGroup'),
      children: [
        { kind: 'section', label: t('nav', 'experience'), ref: experienceRef },
        { kind: 'section', label: t('nav', 'research'), ref: researchRef },
        { kind: 'section', label: t('nav', 'projects'), ref: projectsRef },
      ],
    },
    { kind: 'link', label: t('nav', 'manga'), href: '/manga' },
    { kind: 'section', label: t('nav', 'contact'), ref: contactRef },
  ]

  return (
    <>
      <Nav entries={entries} />
      <main>
        <div ref={heroRef}><Hero /></div>
        <div ref={philosophyRef}><Philosophy /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={profilesRef}><Profiles /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={researchRef}><Research /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  )
}
