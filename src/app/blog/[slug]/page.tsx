import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ScrollReveal } from '@/components/ScrollReveal'
import { generateMetadata as generateSEOMetadata, generateArticleSchema } from '@/lib/seo'
import { getWhatsAppUrl } from '@/lib/contact-info'
import mockData from '@/data/mock-data.json'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = mockData.blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return generateSEOMetadata({
    title: `${post.title} | Cleaning in Progress Blog`,
    description: post.excerpt,
    url: `https://cleaninginprogress.com/blog/${params.slug}`,
    image: post.coverImage,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockData.blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    publishedAt: post.publishedAt,
    coverImage: post.coverImage,
  })

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Contenido Markdown simulado (en modo design)
  const markdownContent = `
## Introducción

Este es un ejemplo de contenido Markdown renderizado. En producción, este contenido vendría de la base de datos y se renderizaría usando un procesador de Markdown como MDX o react-markdown.

## Sección Principal

El contenido del blog está diseñado para ser legible y profesional, con tipografía editorial que facilita la lectura. Las imágenes se centran automáticamente y tienen bordes suaves con sombras ligeras.

### Subtítulo de Ejemplo

- Lista de puntos importantes
- Información relevante para el lector
- Consejos prácticos y útiles

## Conclusión

Este artículo proporciona información valiosa sobre ${post.category.toLowerCase()} en el contexto de limpieza profesional en Miami.
  `.trim()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="inline-block px-3 py-1 bg-[#0056A6]/10 text-[#0056A6] rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content - Mejorado móvil 2025 */}
      <article className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Cover Image */}
            <div className="relative mb-6 sm:mb-8 h-56 sm:h-64 md:h-96 rounded-xl overflow-hidden shadow-medium">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <Separator className="mb-8" />

            {/* Markdown Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {markdownContent.split('\n').map((line, index) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2
                        key={index}
                        className="text-3xl font-bold text-[#1A1A1A] mt-8 mb-4"
                      >
                        {line.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3
                        key={index}
                        className="text-2xl font-semibold text-[#1A1A1A] mt-6 mb-3"
                      >
                        {line.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li
                        key={index}
                        className="ml-6 list-disc text-gray-700"
                      >
                        {line.replace('- ', '')}
                      </li>
                    )
                  }
                  if (line.trim() === '') {
                    return <br key={index} />
                  }
                  return (
                    <p key={index} className="text-lg leading-relaxed">
                      {line}
                    </p>
                  )
                })}
              </div>
            </div>

            <Separator className="my-12" />

            {/* CTA Section */}
            <div className="bg-[#F7F9FA] p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                ¿Necesitas Ayuda con tu Limpieza?
              </h3>
              <p className="text-gray-600 mb-6">
                Contáctanos y obtén una cotización gratuita para nuestros servicios profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-[#0056A6] hover:bg-[#004494] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contacto">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Cotización
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#00A884] hover:bg-[#008f6f] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hablar por WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      </div>
    </>
  )
}

