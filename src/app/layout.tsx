import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'
import { BackToTop } from '@/components/BackToTop'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: 'Cleaning in Progress - Limpieza Profesional en Miami',
    description: 'Servicios profesionales de limpieza residencial y comercial en Miami. Limpieza garantizada con resultados verificables.',
  }),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/images/logo/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <TooltipProvider>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
            <FloatingCTA />
            <BackToTop />
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

