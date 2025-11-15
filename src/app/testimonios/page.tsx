import { TestimonialCard } from '@/features/testimonials/TestimonialCard'
import { generateMetadata as generateSEOMetadata, generateReviewSchema } from '@/lib/seo'
import mockData from '@/data/mock-data.json'

export const metadata = generateSEOMetadata({
  title: 'Testimonios de Clientes | Cleaning in Progress',
  description: 'Lee las opiniones y experiencias de nuestros clientes satisfechos con nuestros servicios de limpieza en Miami.',
  url: 'https://cleaninginprogress.com/testimonios',
})

export default function TestimoniosPage() {
  const { testimonials } = mockData
  const reviewSchema = generateReviewSchema(
    testimonials.map((t) => ({
      name: t.name,
      text: t.text,
      rating: t.rating,
    }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              Lo que Dicen Nuestros Clientes
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
              Testimonios reales de clientes satisfechos en Miami
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {testimonials.map((testimonial) => (
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

      {/* CTA Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
            ¿Quieres ser nuestro próximo cliente satisfecho?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            Contáctanos hoy y descubre por qué nuestros clientes nos recomiendan.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-[#0056A6] hover:bg-[#004494] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
      </div>
    </>
  )
}

