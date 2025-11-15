import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata({
  title: 'Contacto | Cleaning in Progress',
  description: 'Solicita tu cotización gratuita para servicios de limpieza profesional en Miami. Contáctanos por teléfono, WhatsApp o formulario.',
  url: 'https://cleaninginprogress.com/contacto',
})

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

