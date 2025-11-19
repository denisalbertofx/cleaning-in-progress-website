'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function GoogleReviewsWidget() {
  useEffect(() => {
    // El script se carga automáticamente, solo necesitamos asegurarnos de que el iframe esté listo
  }, [])

  return (
    <>
      {/* Script de ReputationHub */}
      <Script
        src="https://reputationhub.site/reputation/assets/review-widget.js"
        strategy="lazyOnload"
      />
      
      {/* Widget de Reviews */}
      <div className="w-full">
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/8OY50oYR2yAiif6GUkRX"
          frameBorder="0"
          scrolling="no"
          style={{
            minWidth: '100%',
            width: '100%',
            border: 'none',
          }}
          title="Google Reviews - Cleaning in Progress"
          loading="lazy"
        />
      </div>
    </>
  )
}

