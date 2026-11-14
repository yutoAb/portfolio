import { useEffect, useRef } from 'react'
import SiteNav, { type SectionId } from './components/SiteNav'
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
import Essay from './components/Essay'
import Blog from './components/Blog'
import TextEssayPage from './components/TextEssayPage'
import { textEssays } from './content/essays'
import PhilosophyPostPage from './components/PhilosophyPostPage'
import { philosophyPosts } from './content/philosophy'

export default function App() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.replace(/\/+$/, '')
    if (path === '/blog') {
      return <Blog />
    }
    if (path === '/manga') {
      return <Manga />
    }
    if (path === '/essays/japan-20years') {
      return <Essay />
    }
    const textEssay = textEssays.find((e) => path === `/essays/${e.slug}`)
    if (textEssay) {
      return <TextEssayPage essay={textEssay} />
    }
    const philosophyPost = philosophyPosts.find((p) => path === `/philosophy/${p.slug}`)
    if (philosophyPost) {
      return <PhilosophyPostPage post={philosophyPost} />
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
  const refs: Record<SectionId, typeof heroRef> = {
    top: heroRef,
    philosophy: philosophyRef,
    profiles: profilesRef,
    skills: skillsRef,
    education: educationRef,
    experience: experienceRef,
    research: researchRef,
    projects: projectsRef,
    contact: contactRef,
  }

  // Arriving from a sub-page via /#<section>: scroll once the sections exist.
  useEffect(() => {
    const id = window.location.hash.slice(1) as SectionId
    const el = refs[id]?.current
    if (el) requestAnimationFrame(() => el.scrollIntoView())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep the address bar in step with the section on screen, and follow Back/Forward.
  useEffect(() => {
    const sections = () =>
      Object.values(refs)
        .map((r) => r.current)
        .filter((el): el is HTMLDivElement => !!el)
        .sort((a, b) => a.offsetTop - b.offsetTop)
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.35
        const current = sections().filter((el) => el.getBoundingClientRect().top <= line).pop()
        const hash = current && current.id !== 'top' ? `#${current.id}` : ''
        if (hash !== window.location.hash) {
          window.history.replaceState(null, '', hash || window.location.pathname)
        }
      })
    }
    const onPop = () => {
      const id = window.location.hash.slice(1) || 'top'
      document.getElementById(id)?.scrollIntoView()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('popstate', onPop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('popstate', onPop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SiteNav refs={refs} />
      <main>
        <div id="top" ref={heroRef}><Hero /></div>
        <div id="philosophy" ref={philosophyRef}><Philosophy /></div>
        <div id="skills" ref={skillsRef}><Skills /></div>
        <div id="profiles" ref={profilesRef}><Profiles /></div>
        <div id="experience" ref={experienceRef}><Experience /></div>
        <div id="research" ref={researchRef}><Research /></div>
        <div id="projects" ref={projectsRef}><Projects /></div>
        <div id="education" ref={educationRef}><Education /></div>
        <div id="contact" ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  )
}
