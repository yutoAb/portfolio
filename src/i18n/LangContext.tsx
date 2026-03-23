import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from './translations'

type LangContextType = {
  lang: Lang
  toggleLang: () => void
}

const LangContext = createContext<LangContextType>({ lang: 'ja', toggleLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'ja'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'ja' ? 'en' : 'ja'))

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
