import { useEffect, useMemo, useState } from 'react'
import LanguageContext from './languageContextObject'
import en from './en.json'
import es from './es.json'

const dictionaries = { en, es }
const DEFAULT_LANGUAGE = 'en'
const STORAGE_KEY = 'pf-language'

function getFromPath(dictionary, path) {
  return path.split('.').reduce((value, key) => value?.[key], dictionary)
}

// Priority: ?lang= in the URL (shareable links), then the visitor's saved
// choice, then the default.
function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested in dictionaries) return requested

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored in dictionaries) return stored
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default.
  }

  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // localStorage unavailable — the choice just won't survive a reload.
    }
  }, [language])

  const value = useMemo(() => {
    function setLanguage(next) {
      if (next in dictionaries) setLanguageState(next)
    }

    const dictionary = dictionaries[language]

    // t("about.sidebar.statusLabel") -> "Status" / "Estado"
    function t(key) {
      const result = getFromPath(dictionary, key)
      if (result === undefined) {
        console.warn(`[i18n] Missing key "${key}" for language "${language}"`)
        return key
      }
      return result
    }

    // pick({ en: "...", es: "..." }) -> value for the current language
    function pick(field) {
      return field?.[language] ?? field?.[DEFAULT_LANGUAGE] ?? field
    }

    return { language, setLanguage, t, pick }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
