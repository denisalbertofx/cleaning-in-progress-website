'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import mockData from '@/data/mock-data.json'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PreguntasFrecuentesPage() {
  const { t } = useLanguage()
  const { faqs } = mockData

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              {t.faq.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
              {t.faq.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 rounded-xl px-4 sm:px-6 shadow-soft hover:shadow-medium transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#1A1A1A] hover:no-underline text-base sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4 text-sm sm:text-base text-readable">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
            {t.faq.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            {t.faq.ctaSubtitle}
          </p>
          <a
            href="/contacto"
            className="inline-block bg-[#0056A6] hover:bg-[#004494] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            {t.faq.ctaButton}
          </a>
        </div>
      </section>
    </div>
  )
}

