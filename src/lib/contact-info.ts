/**
 * Configuración centralizada de información de contacto
 * Actualiza estos valores con los datos reales de la empresa
 */

export const contactInfo = {
  phone: '+1 (786) 912-0996',
  phoneFormatted: '(786) 912-0996',
  phoneRaw: '17869120996', // Solo números, sin espacios ni caracteres especiales
  whatsapp: '+17869120996', // Formato internacional con +
  whatsappRaw: '17869120996', // Solo números para wa.me
  email: 'anicelperez417@gmail.com',
  // Servicio móvil - sin dirección física
  isMobileService: true,
  serviceAreas: [
    'Wynwood',
    'Brickell',
    'Key Miami Gardens',
    'Miami Brickell',
    'Hollywood',
    'Coral Gables',
    'Doral',
    'Hialeah',
    'Hialeah Gardens',
    'Kendall',
    'Key Biscayne',
    'Miami Beach',
    'North Miami Beach',
  ],
  businessHours: 'Lunes - Sábado: 8:00 AM - 5:30 PM | Domingo: 8:00 AM - 2:00 PM',
  googleMapsUrl: 'https://www.google.com/maps/place/Cleaning+in+Progress+Miami/@25.8611161,-80.2371751,10.13z/data=!4m6!3m5!1s0x6f0f82ee6ac68d83:0x5fa01743d70c3070!8m2!3d25.8516535!4d-80.2459345!16s%2Fg%2F11zkmnvt7r?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D',
  ceo: {
    name: 'Anisel Perez',
    email: 'anicelperez417@gmail.com',
    photo: '/images/team/ceo-anisel-perez.png',
  },
}

/**
 * Genera el número de WhatsApp sin caracteres especiales para usar en wa.me
 */
export function getWhatsAppNumber(): string {
  return contactInfo.whatsappRaw
}

/**
 * Genera el número de teléfono formateado para usar en tel:
 */
export function getPhoneNumber(): string {
  return contactInfo.phone
}

/**
 * Genera el número de teléfono solo con números para usar en tel:
 */
export function getPhoneNumberRaw(): string {
  return contactInfo.phoneRaw
}

/**
 * Genera la URL de WhatsApp
 */
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${contactInfo.whatsappRaw}`
  if (message) {
    const encodedMessage = encodeURIComponent(message)
    return `${baseUrl}?text=${encodedMessage}`
  }
  return baseUrl
}

/**
 * Genera la URL de teléfono
 */
export function getPhoneUrl(): string {
  return `tel:${contactInfo.phoneRaw}`
}

/**
 * Genera la URL de email
 */
export function getEmailUrl(subject?: string, body?: string): string {
  let url = `mailto:${contactInfo.email}`
  const params: string[] = []
  
  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`)
  }
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`)
  }
  
  if (params.length > 0) {
    url += `?${params.join('&')}`
  }
  
  return url
}

