import { CheckCircle, Shield, Clock, Star, Users, Award } from 'lucide-react'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { contactInfo } from '@/lib/contact-info'
import mockData from '@/data/mock-data.json'

export const metadata = generateSEOMetadata({
  title: 'Sobre Nosotros | Cleaning in Progress',
  description: 'Conoce más sobre Cleaning in Progress, tu empresa de confianza para servicios de limpieza profesional en Miami.',
  url: 'https://cleaninginprogress.com/nosotros',
})

export default function NosotrosPage() {

  const values = [
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Empresa local con años de experiencia y clientes satisfechos.',
    },
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Llegamos a tiempo, siempre respetando tus horarios y necesidades.',
    },
    {
      icon: Star,
      title: 'Calidad',
      description: 'Estándares de limpieza profesional garantizados en cada servicio.',
    },
    {
      icon: Users,
      title: 'Profesionalismo',
      description: 'Equipo capacitado y comprometido con la excelencia.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              Sobre Nosotros
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
              Tu empresa de confianza para servicios de limpieza profesional en Miami
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
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-gray-700 text-readable">
                  <p>
                    Cleaning in Progress nació con la misión de proporcionar servicios de limpieza
                    profesionales, confiables y de alta calidad para hogares y negocios en Miami.
                  </p>
                  <p>
                    Somos una empresa local enfocada en la calidad, no en el volumen. Cada cliente
                    es importante para nosotros y nos comprometemos a superar sus expectativas en
                    cada servicio.
                  </p>
                  <p>
                    Nuestro equipo está formado por profesionales capacitados y comprometidos con
                    la excelencia, utilizando productos de calidad y técnicas probadas para
                    garantizar resultados impecables.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F9FA] p-6 sm:p-8 rounded-xl shadow-soft">
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">Años de Experiencia</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">Servicio confiable desde nuestros inicios</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">Equipo Profesional</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">Personal capacitado y certificado</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#0056A6] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-[#1A1A1A]">Clientes Satisfechos</h3>
                      <p className="text-gray-600 text-sm sm:text-base text-readable">4.9+ de calificación promedio</p>
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
              Nuestros Valores
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
              Los principios que guían nuestro trabajo cada día
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
              Nuestra Misión
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-readable px-4">
              Proporcionar servicios de limpieza profesionales, confiables y de alta calidad que
              superen las expectativas de nuestros clientes, creando espacios limpios y saludables
              para hogares y negocios en Miami.
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
                Nuestro Liderazgo
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                Conoce a quien está al frente de nuestra empresa
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                {/* CEO Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0056A6]/10 shadow-medium bg-gray-100">
                    {/* Usar img normal con fallback a GitHub si Vercel no sirve el archivo */}
                    <img
                      src="/images/team/ceo-anisel-perez.png"
                      alt={`${contactInfo.ceo.name} - CEO de Cleaning in Progress`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        // Intentar cargar desde GitHub como fallback
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true'
                          target.src = 'https://raw.githubusercontent.com/denisalbertofx/cleaning-in-progress-website/main/public/images/team/ceo-anisel-perez.png'
                          return
                        }
                        // Si GitHub también falla, mostrar iniciales
                        console.error('Error loading CEO image from both sources')
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent && !parent.querySelector('.fallback-initials')) {
                          const fallback = document.createElement('div')
                          fallback.className = 'fallback-initials w-full h-full flex items-center justify-center bg-[#0056A6] text-white font-bold text-2xl'
                          fallback.textContent = 'AP'
                          parent.appendChild(fallback)
                        }
                      }}
                    />
                  </div>
                </div>
                {/* CEO Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
                    {contactInfo.ceo.name}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#0056A6] font-semibold mb-4">
                    CEO & Fundadora
                  </p>
                  <p className="text-gray-700 text-readable mb-4">
                    {contactInfo.ceo.name} es la fundadora y directora ejecutiva de Cleaning in Progress.
                    Con una visión clara de excelencia y compromiso con la calidad, ha construido una
                    empresa que se enfoca en superar las expectativas de cada cliente.
                  </p>
                  <p className="text-gray-700 text-readable">
                    Su dedicación a la calidad y el servicio al cliente ha sido la base del éxito
                    de nuestra empresa en Miami.
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
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            Contáctanos hoy y descubre la diferencia de trabajar con profesionales comprometidos.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-[#0056A6] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  )
}

