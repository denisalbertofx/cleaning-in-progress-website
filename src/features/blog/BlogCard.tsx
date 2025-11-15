'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  readTime: string
  publishedAt: string
}

export function BlogCard({
  title,
  slug,
  excerpt,
  coverImage,
  category,
  readTime,
  publishedAt,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden transition-all duration-300 border border-gray-200 hover:border-[#0056A6] rounded-xl hover:shadow-medium">
        <div className="relative h-44 sm:h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2">
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{formattedDate}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{readTime}</span>
          </span>
        </div>
        <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-medium bg-[#0056A6]/10 text-[#0056A6] rounded-full shadow-soft">
          {category}
        </span>
        <CardTitle className="mt-3 text-lg sm:text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base text-readable">{excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Link
          href={`/blog/${slug}`}
          className="text-[#0056A6] hover:text-[#004494] font-medium text-sm sm:text-base flex items-center transition-colors"
        >
          Leer más →
        </Link>
      </CardFooter>
    </Card>
    </motion.div>
  )
}

