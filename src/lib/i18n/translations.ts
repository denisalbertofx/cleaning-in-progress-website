/**
 * Traducciones del sitio web
 * Español e Inglés
 */

export type Language = 'es' | 'en'

export interface Translations {
  // Navegación
  nav: {
    home: string
    services: string
    about: string
    blog: string
    testimonials: string
    contact: string
  }
  // Header
  header: {
    requestQuote: string
  }
  // Footer
  footer: {
    description: string
    mobileService: string
    serviceArea: string
    navigation: string
    company: string
    serviceAreas: string
    viewOnGoogleMaps: string
    talkOnWhatsApp: string
    followUs: string
    rights: string
    services: {
      residential: string
      commercial: string
      postConstruction: string
      carpets: string
    }
  }
  // Homepage
  home: {
    hero: {
      title: string
      subtitle: string
      verifiedClients: string
      ctaPrimary: string
      ctaSecondary: string
    }
    services: {
      title: string
      subtitle: string
      viewService: string
    }
    testimonials: {
      title: string
      subtitle: string
    }
    blog: {
      title: string
      subtitle: string
      readMore: string
      viewMore: string
    }
    faq: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  // Servicios
  services: {
    title: string
    subtitle: string
    requestQuote: string
    talkWhatsApp: string
    process: {
      step1: string
      step2: string
      step3: string
    }
    features: string
    areas: string
    ready: string
  }
  // Nosotros
  about: {
    title: string
    subtitle: string
    history: {
      title: string
    }
    values: {
      title: string
      subtitle: string
    }
    mission: {
      title: string
    }
    leadership: {
      title: string
      subtitle: string
      ceo: string
      founder: string
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  // Contacto
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      description: string
      fullName: string
      phone: string
      email: string
      service: string
      message: string
      selectService: string
      send: string
      sending: string
      success: {
        title: string
        message: string
        sendAnother: string
        backHome: string
      }
    }
    info: {
      title: string
      phone: string
      email: string
      areas: string
      hours: string
      quickContact: string
      quickContactDesc: string
      location: string
    }
  }
  // Blog
  blog: {
    title: string
    subtitle: string
    readMore: string
    backToBlog: string
    share: string
  }
  // Testimonios
  testimonials: {
    title: string
    subtitle: string
  }
  // FAQ
  faq: {
    title: string
    subtitle: string
  }
  // Common
  common: {
    loading: string
    error: string
    back: string
    next: string
    readMore: string
    learnMore: string
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      blog: 'Blog',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    header: {
      requestQuote: 'Solicitar Cotización',
    },
    footer: {
      description: 'Servicios profesionales de limpieza en Miami. Confianza, calidad y resultados garantizados.',
      mobileService: 'Servicio Móvil en Miami',
      serviceArea: 'Atendemos toda el área metropolitana',
      navigation: 'Navegación',
      company: 'Empresa',
      serviceAreas: 'Áreas de Servicio',
      viewOnGoogleMaps: 'Ver en Google Maps',
      talkOnWhatsApp: 'Hablar por WhatsApp',
      followUs: 'Síguenos en redes sociales',
      rights: 'Todos los derechos reservados.',
      services: {
        residential: 'Limpieza Residencial',
        commercial: 'Limpieza Comercial',
        postConstruction: 'Post-Construcción',
        carpets: 'Limpieza de Alfombras',
      },
    },
    home: {
      hero: {
        title: 'Limpieza Profesional en Miami',
        subtitle: 'Servicio confiable, profesional y puntual. Limpieza garantizada con resultados verificables.',
        verifiedClients: 'en clientes verificados',
        ctaPrimary: 'Solicitar Cotización',
        ctaSecondary: 'Hablar por WhatsApp',
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Servicios profesionales de limpieza para hogares y negocios',
        viewService: 'Ver servicio',
      },
      testimonials: {
        title: 'Lo que Dicen Nuestros Clientes',
        subtitle: 'Testimonios reales de clientes satisfechos',
      },
      blog: {
        title: 'Últimos Artículos',
        subtitle: 'Consejos y guías sobre limpieza profesional',
        readMore: 'Leer más',
        viewMore: 'Ver más artículos',
      },
      faq: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Respuestas a las preguntas más comunes sobre nuestros servicios',
      },
      cta: {
        title: 'Solicita tu Limpieza Hoy',
        subtitle: 'Contáctanos ahora y obtén una cotización gratuita. Estamos listos para ayudarte.',
        button: 'Solicitar Cotización',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Servicios profesionales de limpieza para hogares y negocios en Miami',
      requestQuote: 'Solicitar Cotización',
      talkWhatsApp: 'Hablar por WhatsApp',
      process: {
        step1: 'Solicita tu Cotización',
        step2: 'Programamos la Visita',
        step3: 'Realizamos el Servicio',
      },
      features: 'Características',
      areas: 'Áreas de Servicio',
      ready: '¿Listo para Empezar?',
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Tu empresa de confianza para servicios de limpieza profesional en Miami',
      history: {
        title: 'Nuestra Historia',
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían nuestro trabajo cada día',
      },
      mission: {
        title: 'Nuestra Misión',
      },
      leadership: {
        title: 'Nuestro Liderazgo',
        subtitle: 'Conoce a quien está al frente de nuestra empresa',
        ceo: 'CEO & Fundadora',
        founder: 'CEO & Fundadora',
      },
      cta: {
        title: '¿Listo para Trabajar con Nosotros?',
        subtitle: 'Contáctanos hoy y descubre la diferencia de trabajar con profesionales comprometidos.',
        button: 'Solicitar Cotización',
      },
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte. Solicita tu cotización gratuita hoy mismo.',
      form: {
        title: 'Completa el Formulario',
        description: 'Llena el formulario y nos pondremos en contacto contigo lo antes posible.',
        fullName: 'Nombre Completo',
        phone: 'Teléfono',
        email: 'Email',
        service: 'Servicio de Interés',
        message: 'Mensaje',
        selectService: 'Selecciona un servicio',
        send: 'Enviar Solicitud',
        sending: 'Enviando...',
        success: {
          title: '¡Mensaje Enviado con Éxito!',
          message: 'Gracias por contactarnos. Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de 24 horas.',
          sendAnother: 'Enviar Otro Mensaje',
          backHome: 'Volver al Inicio',
        },
      },
      info: {
        title: 'Información de Contacto',
        phone: 'Teléfono',
        email: 'Email',
        areas: 'Áreas de Servicio',
        hours: 'Horarios',
        quickContact: 'Contacto Rápido',
        quickContactDesc: '¿Necesitas una respuesta inmediata? Contáctanos ahora mismo.',
        location: 'Ubicación',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Consejos y guías sobre limpieza profesional',
      readMore: 'Leer más',
      backToBlog: 'Volver al Blog',
      share: 'Compartir',
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen nuestros clientes',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las preguntas más comunes sobre nuestros servicios',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      back: 'Volver',
      next: 'Siguiente',
      readMore: 'Leer más',
      learnMore: 'Saber más',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      blog: 'Blog',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    header: {
      requestQuote: 'Request Quote',
    },
    footer: {
      description: 'Professional cleaning services in Miami. Trust, quality and guaranteed results.',
      mobileService: 'Mobile Service in Miami',
      serviceArea: 'We serve the entire metropolitan area',
      navigation: 'Navigation',
      company: 'Company',
      serviceAreas: 'Service Areas',
      viewOnGoogleMaps: 'View on Google Maps',
      talkOnWhatsApp: 'Talk on WhatsApp',
      followUs: 'Follow us on social media',
      rights: 'All rights reserved.',
      services: {
        residential: 'Residential Cleaning',
        commercial: 'Commercial Cleaning',
        postConstruction: 'Post-Construction',
        carpets: 'Carpet Cleaning',
      },
    },
    home: {
      hero: {
        title: 'Professional Cleaning in Miami',
        subtitle: 'Reliable, professional and punctual service. Guaranteed cleaning with verifiable results.',
        verifiedClients: 'verified clients',
        ctaPrimary: 'Request Quote',
        ctaSecondary: 'Talk on WhatsApp',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Professional cleaning services for homes and businesses',
        viewService: 'View service',
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Real testimonials from satisfied clients',
      },
      blog: {
        title: 'Latest Articles',
        subtitle: 'Tips and guides on professional cleaning',
        readMore: 'Read more',
        viewMore: 'View more articles',
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to the most common questions about our services',
      },
      cta: {
        title: 'Request Your Cleaning Today',
        subtitle: 'Contact us now and get a free quote. We are ready to help you.',
        button: 'Request Quote',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional cleaning services for homes and businesses in Miami',
      requestQuote: 'Request Quote',
      talkWhatsApp: 'Talk on WhatsApp',
      process: {
        step1: 'Request Your Quote',
        step2: 'We Schedule the Visit',
        step3: 'We Perform the Service',
      },
      features: 'Features',
      areas: 'Service Areas',
      ready: 'Ready to Get Started?',
    },
    about: {
      title: 'About Us',
      subtitle: 'Your trusted company for professional cleaning services in Miami',
      history: {
        title: 'Our History',
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide our work every day',
      },
      mission: {
        title: 'Our Mission',
      },
      leadership: {
        title: 'Our Leadership',
        subtitle: 'Meet who is at the forefront of our company',
        ceo: 'CEO & Founder',
        founder: 'CEO & Founder',
      },
      cta: {
        title: 'Ready to Work with Us?',
        subtitle: 'Contact us today and discover the difference of working with committed professionals.',
        button: 'Request Quote',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you. Request your free quote today.',
      form: {
        title: 'Complete the Form',
        description: 'Fill out the form and we will contact you as soon as possible.',
        fullName: 'Full Name',
        phone: 'Phone',
        email: 'Email',
        service: 'Service of Interest',
        message: 'Message',
        selectService: 'Select a service',
        send: 'Send Request',
        sending: 'Sending...',
        success: {
          title: 'Message Sent Successfully!',
          message: 'Thank you for contacting us. We have received your request and will contact you within 24 hours.',
          sendAnother: 'Send Another Message',
          backHome: 'Back to Home',
        },
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        areas: 'Service Areas',
        hours: 'Hours',
        quickContact: 'Quick Contact',
        quickContactDesc: 'Need an immediate response? Contact us now.',
        location: 'Location',
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Tips and guides on professional cleaning',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      share: 'Share',
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What our clients say',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about our services',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      back: 'Back',
      next: 'Next',
      readMore: 'Read more',
      learnMore: 'Learn more',
    },
  },
}

