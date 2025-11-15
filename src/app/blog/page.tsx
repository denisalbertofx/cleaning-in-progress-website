'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from '@/features/blog/BlogCard'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/ScrollReveal'
import mockData from '@/data/mock-data.json'

export default function BlogPage() {
  const { blogPosts } = mockData
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Obtener categorías únicas
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Filtrar posts por categoría
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="section-spacing bg-gradient-to-br from-[#F7F9FA] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
                Blog de Limpieza Profesional
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 text-readable px-4">
                Consejos, guías y noticias sobre limpieza en Miami
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtro por Categorías - Mejorado móvil 2025 */}
      <section className="py-6 sm:py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? 'bg-[#0056A6] text-white'
                  : 'border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white'
              }
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-[#0056A6] text-white'
                    : 'border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid - Mejorado móvil 2025 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No hay artículos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

