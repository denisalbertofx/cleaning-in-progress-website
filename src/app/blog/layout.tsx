import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata = generateSEOMetadata({
  title: 'Blog de Limpieza Profesional | Cleaning in Progress',
  description: 'Consejos, guías y noticias sobre limpieza profesional en Miami. Aprende las mejores prácticas y técnicas de limpieza.',
  url: 'https://cleaninginprogress.com/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

