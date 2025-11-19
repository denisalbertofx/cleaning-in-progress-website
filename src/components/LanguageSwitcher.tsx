'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/i18n/translations'
import { cn } from '@/lib/utils'
import { trackLanguageChange } from '@/components/GoogleAnalytics'

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

      const handleLanguageChange = (lang: Language) => {
        setLanguage(lang)
        setIsOpen(false)
        trackLanguageChange(lang)
      }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón del selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200',
          'bg-white border-2 border-gray-300 hover:border-[#0056A6] hover:bg-[#F7F9FA]',
          'text-[#1A1A1A] font-semibold text-sm min-w-[80px]',
          'focus:outline-none focus:ring-2 focus:ring-[#0056A6]/20',
          'shadow-md hover:shadow-lg',
          'md:px-4 md:py-2.5 md:min-w-[120px]'
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-5 h-5 md:w-5 md:h-5 text-[#0056A6] flex-shrink-0" />
        <span className="text-base md:text-lg">{currentLanguage.flag}</span>
        <span className="hidden lg:inline text-sm font-semibold">{currentLanguage.name}</span>
        <span className="lg:hidden text-xs font-semibold">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={cn(
            'w-4 h-4 text-gray-600 transition-transform duration-200 flex-shrink-0',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200',
            'z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200'
          )}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 text-left',
                  'hover:bg-[#F7F9FA] transition-colors duration-150',
                  'text-sm font-medium',
                  language === lang.code && 'bg-[#0056A6]/5'
                )}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{lang.flag}</span>
                  <span
                    className={cn(
                      'text-[#1A1A1A]',
                      language === lang.code && 'text-[#0056A6] font-semibold'
                    )}
                  >
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-[#0056A6]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

