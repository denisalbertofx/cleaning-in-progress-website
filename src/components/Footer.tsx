import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { getPhoneUrl, getEmailUrl, getWhatsAppUrl, contactInfo } from '@/lib/contact-info'

export function Footer() {

  const footerLinks = {
    servicios: [
      { href: '/servicios/limpieza-residencial-miami', label: 'Limpieza Residencial' },
      { href: '/servicios/limpieza-comercial-miami', label: 'Limpieza Comercial' },
      { href: '/servicios/limpieza-post-construccion-miami', label: 'Post-Construcción' },
      { href: '/servicios/limpieza-alfombras-miami', label: 'Limpieza de Alfombras' },
    ],
    empresa: [
      { href: '/nosotros', label: 'Sobre Nosotros' },
      { href: '/testimonios', label: 'Testimonios' },
      { href: '/blog', label: 'Blog' },
      { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
    ],
  }

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Información + Dirección */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/logo-cleaning-in-progress.png"
                  alt="Cleaning in Progress Logo"
                  width={200}
                  height={60}
                  className="object-contain h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Servicios profesionales de limpieza en Miami. Confianza, calidad y resultados garantizados.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00A884] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-300 font-medium">Servicio Móvil en Miami</span>
                  <p className="text-xs text-gray-400 mt-1">Atendemos toda el área metropolitana</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00A884] flex-shrink-0" />
                <a href={getPhoneUrl()} className="text-gray-300 hover:text-white transition-colors font-medium">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00A884] flex-shrink-0" />
                <a href={getEmailUrl('Consulta sobre servicios de limpieza')} className="text-gray-300 hover:text-white transition-colors font-medium break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-gray-400 text-xs mt-2">
                {contactInfo.businessHours}
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Navegación</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Servicios</h4>
                <ul className="space-y-2">
                  {footerLinks.servicios.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Empresa</h4>
                <ul className="space-y-2">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 3: Áreas de Servicio / Google Maps */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Áreas de Servicio</h3>
            {/* Google Maps Embed */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943784567!2d-80.290556!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f0f82ee6ac68d83%3A0x5fa01743d70c3070!2sCleaning%20in%20Progress%20Miami!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Áreas de Servicio - Cleaning in Progress Miami"
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {contactInfo.serviceAreas.slice(0, 6).map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#0056A6]/20 text-[#00A884] border border-[#0056A6]/30"
                  >
                    {area}
                  </span>
                ))}
                {contactInfo.serviceAreas.length > 6 && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    +{contactInfo.serviceAreas.length - 6} más
                  </span>
                )}
              </div>
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#00A884] hover:text-[#00A884]/80 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-1" />
                Ver en Google Maps
              </a>
            </div>
            <a
              href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#00A884] hover:bg-[#008f6f] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 w-full"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Línea final con redes y derechos */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Cleaning in Progress. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              {/* Aquí se pueden agregar iconos de redes sociales */}
              <span className="text-sm text-gray-300">Síguenos en redes sociales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

