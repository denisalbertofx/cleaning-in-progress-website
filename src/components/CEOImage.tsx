'use client'

import { useState } from 'react'
import { contactInfo } from '@/lib/contact-info'

export function CEOImage() {
  const [imageSrc, setImageSrc] = useState('/images/team/ceo-anisel-perez.png')
  const [showFallback, setShowFallback] = useState(false)
  const [fallbackTried, setFallbackTried] = useState(false)

  const handleError = () => {
    if (!fallbackTried) {
      // Intentar cargar desde GitHub como fallback
      setFallbackTried(true)
      setImageSrc('https://raw.githubusercontent.com/denisalbertofx/cleaning-in-progress-website/main/public/images/team/ceo-anisel-perez.png')
    } else {
      // Si GitHub también falla, mostrar iniciales
      setShowFallback(true)
    }
  }

  if (showFallback) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0056A6] text-white font-bold text-2xl">
        AP
      </div>
    )
  }

  return (
    <img
      src={imageSrc}
      alt={`${contactInfo.ceo.name} - CEO de Cleaning in Progress`}
      className="w-full h-full object-cover"
      loading="eager"
      onError={handleError}
    />
  )
}

