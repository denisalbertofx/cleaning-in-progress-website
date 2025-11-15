'use client'

import { MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/contact-info'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-20 right-4 z-50 md:hidden">
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <Link
          href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00A884] hover:bg-[#008f6f] text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>

        {/* Phone Button */}
        <Link
          href={getPhoneUrl()}
          className="bg-[#0056A6] hover:bg-[#004494] text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Llamar"
        >
          <Phone className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}

