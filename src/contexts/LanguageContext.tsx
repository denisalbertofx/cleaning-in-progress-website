'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '@/lib/i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  // Cargar idioma desde localStorage al montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  // Guardar idioma en localStorage cuando cambie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Actualizar el atributo lang del HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  // Actualizar lang del HTML cuando cambie el idioma
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  // Evitar hidration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Fallback para SSR o cuando no hay provider
    return {
      language: 'es' as Language,
      setLanguage: () => {},
      t: translations.es,
    }
  }
  return context
}

