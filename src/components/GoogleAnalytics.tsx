'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-MDX81XF58G'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Función helper para enviar eventos de conversión
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Función helper para trackear envío de formulario
export function trackFormSubmission(formData: {
  service?: string
  hasMessage: boolean
}) {
  trackEvent('form_submission', {
    event_category: 'Contact',
    event_label: 'Contact Form',
    service: formData.service || 'Not specified',
    has_message: formData.hasMessage,
  })
  
  // Evento de conversión
  trackEvent('conversion', {
    send_to: GA_MEASUREMENT_ID,
    event_category: 'Lead',
    event_label: 'Contact Form Submission',
  })
}

// Extender el tipo Window para incluir gtag
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

