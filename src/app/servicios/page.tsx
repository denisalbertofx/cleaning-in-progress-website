'use client'

import Image from 'next/image'
import { ServiceCard } from '@/features/services/ServiceCard'
import { ScrollReveal } from '@/components/ScrollReveal'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslatedServices } from '@/lib/services-translations'

export default function ServiciosPage() {
  const { t, language } = useLanguage()
  const services = getTranslatedServices(language)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing relative bg-gradient-to-br from-[#F7F9FA] to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0056A6]/5 to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                {t.services.pageTitle}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
                {t.services.pageSubtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid - Mejorado móvil 2025 */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                slug={service.slug}
                description={service.description}
                icon={service.icon}
                iconFile={service.iconFile}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              {t.services.notFound}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
              {t.services.notFoundDesc}
            </p>
          </ScrollReveal>
          <a
            href="/contacto"
            className="inline-block bg-[#0056A6] hover:bg-[#004494] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            {t.services.customQuote}
          </a>
        </div>
      </section>
    </div>
  )
}

