import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-[#0056A6]">404</h1>
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Página no encontrada
          </h2>
          <p className="text-gray-600 text-readable">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            className="bg-[#0056A6] hover:bg-[#004494] text-white"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white"
          >
            <Link href="/servicios">
              <Search className="w-4 h-4 mr-2" />
              Ver servicios
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Páginas populares:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/servicios"
              className="text-sm text-[#0056A6] hover:underline"
            >
              Servicios
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/blog"
              className="text-sm text-[#0056A6] hover:underline"
            >
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contacto"
              className="text-sm text-[#0056A6] hover:underline"
            >
              Contacto
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/testimonios"
              className="text-sm text-[#0056A6] hover:underline"
            >
              Testimonios
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

