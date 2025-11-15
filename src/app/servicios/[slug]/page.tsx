import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, MapPin, Phone, MessageCircle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TestimonialCard } from '@/features/testimonials/TestimonialCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal } from '@/components/ScrollReveal'
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/lib/seo'
import { getWhatsAppUrl, contactInfo } from '@/lib/contact-info'
import mockData from '@/data/mock-data.json'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = mockData.services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return generateSEOMetadata({
    title: `${service.title} en Miami | Cleaning in Progress`,
    description: `${service.description}. Áreas: ${service.areas.join(', ')}. Solicita tu cotización gratuita.`,
    url: `https://cleaninginprogress.com/servicios/${params.slug}`,
  })
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = mockData.services.find((s) => s.slug === params.slug)
  const { testimonials } = mockData

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema(service)

  // Filtrar testimonios relacionados con este servicio
  const relatedTestimonials = testimonials.filter(
    (t) => t.service === service.title
  )

  // Proceso en 3 pasos
  const processSteps = [
    {
      step: 1,
      title: 'Solicita tu Cotización',
      description: 'Completa nuestro formulario o contáctanos por teléfono/WhatsApp. Te responderemos en menos de 24 horas.',
    },
    {
      step: 2,
      title: 'Programamos la Visita',
      description: 'Coordinamos una fecha y hora que se ajuste a tu disponibilidad. Llegamos puntualmente.',
    },
    {
      step: 3,
      title: 'Realizamos el Servicio',
      description: 'Nuestro equipo profesional ejecuta el trabajo con los más altos estándares de calidad.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Mejorado móvil 2025 */}
      <section className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        {service.imageFile && (
          <div className="absolute inset-0 z-0">
            <Image
              src={`/images/services/${service.imageFile}`}
              alt={service.title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay más sutil para 2025 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
            {/* Subtle pattern overlay más sutil */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          </div>
        )}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-20">
          <Breadcrumbs
            variant="light"
            items={[
              { label: 'Servicios', href: '/servicios' },
              { label: service.title },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg leading-[1.1] sm:leading-tight px-2">
            {service.title} en Miami
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl leading-relaxed text-readable drop-shadow-md px-2">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* ¿Qué incluye? */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-5 sm:mb-6">
                    ¿Qué incluye este servicio?
                  </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A884] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-base sm:text-lg text-readable">{feature}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollReveal>

              <Separator />

              {/* Proceso en 3 pasos */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">
                    Nuestro Proceso
                  </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="bg-[#F7F9FA] p-6 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-[#0056A6] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
                </div>
              </ScrollReveal>

              <Separator />

              {/* Áreas de servicio */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-5 sm:mb-6">
                    Áreas que Cubrimos
                  </h2>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {service.areas.map((area, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center space-x-2 bg-[#0056A6]/10 text-[#0056A6] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-sm sm:text-base shadow-soft"
                    >
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar - CTA */}
            <ScrollReveal direction="right">
              <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-gray-200/50 shadow-medium">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                  Solicita tu Cotización
                </h3>
                <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base text-readable">
                  Obtén una cotización gratuita y personalizada para este servicio.
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#0056A6] hover:bg-[#004494] text-white shadow-medium hover:shadow-strong transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href="/contacto">
                      <Phone className="w-4 h-4 mr-2" />
                      Solicitar Cotización
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-[#00A884] hover:bg-[#008f6f] text-white font-semibold shadow-medium hover:shadow-strong transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link
                      href={getWhatsAppUrl(`Hola, me interesa el servicio de ${service.title}. ¿Podrían darme más información?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Hablar por WhatsApp
                    </Link>
                  </Button>
                </div>
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-300">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 text-readable">
                    <strong>Teléfono:</strong> {contactInfo.phone}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 text-readable">
                    <strong>Email:</strong> {contactInfo.email}
                  </p>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

            {/* Testimonios Relacionados - Mejorado móvil 2025 */}
            {relatedTestimonials.length > 0 && (
              <section className="section-spacing bg-[#F7F9FA]">
                <div className="container mx-auto px-4 sm:px-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 text-center px-2">
                    Lo que Dicen Nuestros Clientes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {relatedTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  service={testimonial.service}
                  photo={testimonial.photo}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-r from-[#0056A6] to-[#004494] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            ¿Listo para Empezar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            Contáctanos ahora y obtén una cotización gratuita para {service.title.toLowerCase()} en Miami.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0056A6] hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <Link href="/contacto">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Solicitar Cotización
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#00A884] hover:bg-[#008f6f] text-white border-2 border-[#00A884] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <Link
                href={getWhatsAppUrl(`Hola, me interesa el servicio de ${service.title}. ¿Podrían darme más información?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Hablar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

