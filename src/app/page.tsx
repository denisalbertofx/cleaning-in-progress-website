'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { Star, CheckCircle, Shield, Clock, MessageCircle, Phone, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ServiceCard } from '@/features/services/ServiceCard'
import { BlogCard } from '@/features/blog/BlogCard'
import { TestimonialCard } from '@/features/testimonials/TestimonialCard'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import mockData from '@/data/mock-data.json'
import { getWhatsAppUrl } from '@/lib/contact-info'

// Lazy load componentes pesados para mejor rendimiento inicial
const ScrollReveal = dynamic(() => import('@/components/ScrollReveal').then(mod => ({ default: mod.ScrollReveal })), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />
})

const ImageLightbox = dynamic(() => import('@/components/ImageLightbox').then(mod => ({ default: mod.ImageLightbox })), {
  ssr: false
})

export default function Home() {
  const { services, blogPosts, testimonials, faqs } = mockData
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  const beforeAfterImages = [
    '/images/before-after/before-room-messy.png',
    '/images/before-after/after-room-clean.png',
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen">
        {/* Hero Principal - 2025 Modern Design */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero/hero-home.jpg"
              alt="Limpieza Profesional en Miami"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>
          {/* Overlay más sutil para 2025 - mejor balance visual */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
          {/* Subtle pattern overlay más sutil */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        </div>
        
        {/* Content - Mejor spacing para móvil */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 sm:py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Rating Badge - Mejorado para móvil */}
            <div className="inline-flex items-center space-x-2 glass-strong px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-strong mb-4 sm:mb-6 animate-fade-in">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#00A884] text-[#00A884]" />
              <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">
                4.9+ en clientes verificados
              </span>
            </div>
            
            {/* Main Headline - Mejorado para móvil 2025 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] sm:leading-tight drop-shadow-lg px-2 animate-fade-in-up delay-200">
              Limpieza Profesional en Miami
            </h1>
            
            {/* Subheadline - Mejor legibilidad móvil */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed text-readable drop-shadow-md px-4 animate-fade-in-up delay-400">
              Servicio confiable, profesional y puntual. Limpieza garantizada con resultados verificables.
            </p>
            
            {/* CTA Buttons - Mejor spacing móvil */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 animate-fade-in-up delay-400">
                     <Button
                       asChild
                       size="lg"
                       className="bg-[#0056A6] hover:bg-[#004494] text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                     >
                       <Link href="/contacto">
                         Solicitar Cotización
                       </Link>
                     </Button>
                     <Button
                       asChild
                       size="lg"
                       className="bg-[#00A884] hover:bg-[#008f6f] text-white border-2 border-[#00A884] px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg font-semibold shadow-strong hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                     >
                       <Link href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')} target="_blank" rel="noopener noreferrer">
                         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                         Hablar por WhatsApp
                       </Link>
                     </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Oculto en móvil para evitar sobreposición con FloatingCTA */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F7F9FA]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-[#0056A6]/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#0056A6]">NUESTROS SERVICIOS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                Soluciones Profesionales de Limpieza
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soluciones de limpieza profesionales para hogares y negocios en Miami. 
                Cada servicio diseñado para superar tus expectativas.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Somos Locales / Confianza - Mejorado móvil 2025 */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Somos Locales
                </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 text-readable">
                Empresa local enfocada en calidad, no volumen. Conocemos Miami y sus necesidades específicas.
              </p>
              <p className="text-gray-600 text-base sm:text-lg text-readable">
                Cada cliente es importante para nosotros y nos comprometemos a superar sus expectativas en cada servicio.
              </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-56 sm:h-64 md:h-96 rounded-xl overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <Image
                src="/images/hero/hero-building-exterior.png"
                alt="Somos Locales - Cleaning in Progress Miami"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Antes y Después - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              Resultados Reales
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
              Vea la diferencia que hace nuestro servicio profesional. Haga clic en las imágenes para ampliar.
            </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="left" delay={0.2}>
              <div
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src="/images/before-after/before-room-messy.png"
                  alt="Antes de la limpieza"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <p className="font-semibold text-lg">Antes</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-[#0056A6]" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openLightbox(1)}
              >
                <Image
                  src="/images/before-after/after-room-clean.png"
                  alt="Después de la limpieza"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0056A6]/90 text-white p-4">
                  <p className="font-semibold text-lg">Después</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-[#0056A6]" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={beforeAfterImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt="Resultados de limpieza"
      />

      {/* ¿Por qué Nosotros? - Mejorado móvil 2025 */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                ¿Por qué Nosotros?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                Empresa local enfocada en calidad, no volumen
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Resultados Garantizados',
                description: 'Limpieza verificable con estándares de calidad profesional',
              },
              {
                icon: Shield,
                title: 'Asegurados y Con Licencia',
                description: 'Su propiedad está protegida mientras trabajamos',
              },
              {
                icon: Clock,
                title: 'Puntualidad',
                description: 'Llegamos a tiempo, siempre respetando sus horarios',
              },
              {
                icon: Star,
                title: 'Profesionales Certificados',
                description: 'Equipo capacitado y con experiencia comprobada',
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.05] hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-16 h-16 bg-[#0056A6]/10 rounded-full flex items-center justify-center mx-auto mb-4 cursor-help">
                      <benefit.icon className="w-8 h-8 text-[#0056A6]" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{benefit.description}</p>
                  </TooltipContent>
                </Tooltip>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Mejorado móvil 2025 */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                Lo que Dicen Nuestros Clientes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                Testimonios reales de clientes satisfechos en Miami
              </p>
            </div>
          </ScrollReveal>
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

      {/* Blog Preview - Mejorado móvil 2025 */}
      <section className="section-spacing bg-[#F7F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                Últimos Artículos del Blog
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                Consejos y guías sobre limpieza profesional en Miami
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                category={post.category}
                readTime={post.readTime}
                publishedAt={post.publishedAt}
              />
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white"
            >
              <Link href="/blog">Ver más artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ - Mejorado móvil 2025 */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                Preguntas Frecuentes
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-readable px-4">
                Respuestas a las preguntas más comunes sobre nuestros servicios
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-xl px-4 sm:px-6 shadow-soft hover:shadow-medium transition-shadow">
                  <AccordionTrigger className="text-left font-semibold text-[#1A1A1A] text-base sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base text-readable">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-r from-[#0056A6] to-[#004494] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Solicita tu Limpieza Hoy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto text-readable px-4">
            Contáctanos ahora y obtén una cotización gratuita. Estamos listos para ayudarte.
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
              <Link href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Hablar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
