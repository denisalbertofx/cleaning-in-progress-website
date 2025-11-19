/**
 * Helper para obtener servicios traducidos
 * Mapea los servicios de mock-data.json con las traducciones
 */

import mockData from '@/data/mock-data.json'
import { Language, translations } from './i18n/translations'

interface TranslatedService {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  iconFile?: string
  imageFile?: string
  features: string[]
  areas: string[]
}

// Mapeo de slugs a keys de traducción
const serviceSlugToKey: Record<string, keyof typeof translations.es.services.list> = {
  'limpieza-residencial-miami': 'residential',
  'limpieza-comercial-miami': 'commercial',
  'limpieza-de-oficinas-miami': 'office',
  'limpieza-profunda-miami': 'deep',
  'limpieza-post-construccion-miami': 'postConstruction',
  'limpieza-de-alfombras-miami': 'carpets',
}

export function getTranslatedServices(language: Language = 'es'): TranslatedService[] {
  const t = translations[language]
  
  return mockData.services.map((service) => {
    const translationKey = serviceSlugToKey[service.slug]
    
    if (translationKey && t.services.list[translationKey]) {
      const translated = t.services.list[translationKey]
      return {
        ...service,
        title: translated.title,
        description: translated.description,
        features: translated.features,
      }
    }
    
    // Fallback al servicio original si no hay traducción
    return service as TranslatedService
  })
}

export function getTranslatedService(slug: string, language: Language = 'es'): TranslatedService | undefined {
  const services = getTranslatedServices(language)
  return services.find((s) => s.slug === slug)
}

