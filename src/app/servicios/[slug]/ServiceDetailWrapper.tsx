'use client'

import { getTranslatedService } from '@/lib/services-translations'
import { useLanguage } from '@/contexts/LanguageContext'
import { ServiceDetailContent } from './ServiceDetailContent'

interface ServiceDetailWrapperProps {
  slug: string
}

export function ServiceDetailWrapper({ slug }: ServiceDetailWrapperProps) {
  const { language } = useLanguage()
  const service = getTranslatedService(slug, language)

  if (!service) {
    return null
  }

  return <ServiceDetailContent service={service} relatedTestimonials={[]} />
}

