'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
  photo?: string
}

export function TestimonialCard({ name, location, rating, text, service, photo }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-medium transition-all duration-300 border border-gray-200 hover:border-[#0056A6] rounded-xl">
        <CardContent className="pt-5 sm:pt-6 p-4 sm:p-6">
        <div className="flex items-center space-x-1 mb-3 sm:mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#00A884] text-[#00A884]" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 text-sm sm:text-base italic text-readable">&ldquo;{text}&rdquo;</p>
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-3 mb-2">
            {photo && (
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#0056A6]/20 shadow-soft">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div>
              <p className="font-semibold text-[#1A1A1A] text-sm sm:text-base">{name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#0056A6] mt-1 font-medium">{service}</p>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  )
}

