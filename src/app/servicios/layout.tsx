import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata({
  title: 'Servicios de Limpieza en Miami | Cleaning in Progress',
  description: 'Servicios profesionales de limpieza residencial, comercial, post-construcción y alfombras en Miami. Cotización gratuita.',
  url: 'https://cleaninginprogress.com/servicios',
})

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

