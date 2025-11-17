'use client'

import { CheckCircle, Shield, Clock, Star, Users, Award } from 'lucide-react'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { contactInfo } from '@/lib/contact-info'
import mockData from '@/data/mock-data.json'
import { CEOImage } from '@/components/CEOImage'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NosotrosPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: t.about.values.trust.title,
      description: t.about.values.trust.description,
    },
    {
      icon: Clock,
      title: t.about.values.punctuality.title,
      description: t.about.values.punctuality.description,
    },
    {
      icon: Star,
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
    },
    {
      icon: Users,
      title: t.about.values.professionalism.title,
      description: t.about.values.professionalism.description,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              {t.about.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-5 sm:mb-6">
                  {t.about.history.title}
                </h2>
                <div className="space-y-4 text-gray-700 text-readable">
                  <p>
                    {t.about.history.paragraph1}
                  </p>
                  <p>
                    {t.about.history.paragraph2}
                  </p>
                  <p>
                    {t.about.history.paragraph3}
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F9FA] p-6 sm:p-8 rounded-xl shadow-soft">
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">{t.about.history.yearsExperience}</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">{t.about.history.yearsDescription}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">{t.about.history.professionalTeam}</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">{t.about.history.teamDescription}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">{t.about.history.satisfiedClients}</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">{t.about.history.clientsDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              {t.about.values.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
              {t.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-xl text-center hover:shadow-medium transition-shadow duration-300 shadow-soft"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0056A6]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-soft">
                  <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0056A6]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-readable">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-5 sm:mb-6 px-2">
              {t.about.mission.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-readable px-4">
              {t.about.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                {t.about.leadership.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                {t.about.leadership.subtitle}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                {/* CEO Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0056A6]/10 shadow-medium bg-gray-100">
                    <CEOImage />
                  </div>
                </div>
                {/* CEO Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
                    {contactInfo.ceo.name}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#0056A6] font-semibold mb-4">
                    {t.about.leadership.ceo}
                  </p>
                  <p className="text-gray-700 text-readable mb-4">
                    {contactInfo.ceo.name} {t.about.leadership.description1}
                  </p>
                  <p className="text-gray-700 text-readable">
                    {t.about.leadership.description2}
                  </p>
                  <div className="mt-6">
                    <a
                      href={`mailto:${contactInfo.ceo.email}`}
                      className="inline-flex items-center text-[#0056A6] hover:text-[#004494] font-medium transition-colors"
                    >
                      <span className="mr-2">📧</span>
                      {contactInfo.ceo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-r from-[#0056A6] to-[#004494] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            {t.about.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            {t.about.cta.subtitle}
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-[#0056A6] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            {t.about.cta.button}
          </a>
        </div>
      </section>
    </div>
  )
}

