import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/lib/seo'
import mockData from '@/data/mock-data.json'
import { ServiceDetailWrapper } from './ServiceDetailWrapper'

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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  // Para metadata, usamos el servicio original
  const serviceForMetadata = mockData.services.find((s) => s.slug === params.slug)
  
  if (!serviceForMetadata) {
    notFound()
  }

  const serviceSchema = generateServiceSchema(serviceForMetadata)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailWrapper slug={params.slug} />
    </>
  )
}

