import { useLang } from './LangContext'
import translations from './translations'

type Translations = typeof translations

export function useT() {
  const { lang } = useLang()

  function t<S extends keyof Translations>(
    section: S,
    key: keyof Translations[S]
  ): string {
    const entry = translations[section][key] as Record<string, string>
    return entry[lang]
  }

  return t
}
