'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'

interface ServiceCardProps {
  title: string
  slug: string
  description: string
  icon: string
  iconFile?: string
  features: string[]
}

export function ServiceCard({ title, slug, description, icon, iconFile, features }: ServiceCardProps) {
  const { t } = useLanguage()
  const iconPath = iconFile ? `/images/icons/${iconFile}` : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full flex flex-col group hover:shadow-strong transition-all duration-300 border border-gray-200 hover:border-[#0056A6] overflow-hidden rounded-xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0056A6]/10 to-[#00A884]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
            {iconPath ? (
              <Image
                src={iconPath}
                alt={title}
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
            ) : (
              <div className="w-10 h-10 bg-[#0056A6] rounded-lg" />
            )}
          </div>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#0056A6] transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed text-readable">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <ul className="space-y-2.5 sm:space-y-3">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A884] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-readable">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 border-t border-gray-100">
        <Button
          asChild
          variant="outline"
          className="w-full border-2 border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white font-semibold group-hover:shadow-medium transition-all text-sm sm:text-base"
        >
          <Link href={`/servicios/${slug}`} className="flex items-center justify-center">
            {t.services.viewService}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
    </motion.div>
  )
}

