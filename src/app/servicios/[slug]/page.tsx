import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/lib/seo'
import mockData from '@/data/mock-data.json'
import { ServiceDetailContent } from './ServiceDetailContent'

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
    (testimonial) => testimonial.service === service.title
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailContent service={service} relatedTestimonials={relatedTestimonials} />
    </>
  )
}

