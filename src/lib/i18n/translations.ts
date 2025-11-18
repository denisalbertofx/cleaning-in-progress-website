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
    pageTitle: string
    pageSubtitle: string
    notFound: string
    notFoundDesc: string
    requestQuote: string
    talkWhatsApp: string
    viewService: string
    whatIncludes: string
    ourProcess: string
    areasCovered: string
    getQuote: string
    getQuoteDesc: string
    readyToStart: string
    readyToStartDesc: string
    process: {
      step1: string
      step1Desc: string
      step2: string
      step2Desc: string
      step3: string
      step3Desc: string
    }
    features: string
    areas: string
    ready: string
    customQuote: string
  }
  // Nosotros
  about: {
    title: string
    subtitle: string
    history: {
      title: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
      yearsExperience: string
      yearsDescription: string
      professionalTeam: string
      teamDescription: string
      satisfiedClients: string
      clientsDescription: string
    }
    values: {
      title: string
      subtitle: string
      trust: {
        title: string
        description: string
      }
      punctuality: {
        title: string
        description: string
      }
      quality: {
        title: string
        description: string
      }
      professionalism: {
        title: string
        description: string
      }
    }
    mission: {
      title: string
      description: string
    }
    leadership: {
      title: string
      subtitle: string
      ceo: string
      founder: string
      description1: string
      description2: string
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
        validation: {
          nameRequired: string
          nameMinLength: string
          phoneRequired: string
          phoneInvalid: string
          emailInvalid: string
          validationError: string
        }
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
    pageTitle: string
    pageSubtitle: string
    allCategories: string
    noPosts: string
    readMore: string
    backToBlog: string
    share: string
  }
  // Testimonios
  testimonials: {
    title: string
    subtitle: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  // FAQ
  faq: {
    title: string
    subtitle: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
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
        subtitle: 'Testimonios reales de clientes satisfechos en Miami',
      },
      blog: {
        title: 'Últimos Artículos del Blog',
        subtitle: 'Consejos y guías sobre limpieza profesional en Miami',
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
      pageTitle: 'Nuestros Servicios de Limpieza',
      pageSubtitle: 'Soluciones profesionales para hogares y negocios en Miami',
      notFound: '¿No encuentras el servicio que necesitas?',
      notFoundDesc: 'Contáctanos y te ayudaremos a encontrar la solución perfecta para tus necesidades de limpieza.',
      requestQuote: 'Solicitar Cotización',
      talkWhatsApp: 'Hablar por WhatsApp',
      viewService: 'Ver servicio',
      whatIncludes: '¿Qué incluye este servicio?',
      ourProcess: 'Nuestro Proceso',
      areasCovered: 'Áreas que Cubrimos',
      getQuote: 'Solicita tu Cotización',
      getQuoteDesc: 'Obtén una cotización gratuita y personalizada para este servicio.',
      readyToStart: '¿Listo para Empezar?',
      readyToStartDesc: 'Contáctanos ahora y obtén una cotización gratuita para',
      process: {
        step1: 'Solicita tu Cotización',
        step1Desc: 'Completa nuestro formulario o contáctanos por teléfono/WhatsApp. Te responderemos en menos de 24 horas.',
        step2: 'Programamos la Visita',
        step2Desc: 'Coordinamos una fecha y hora que se ajuste a tu disponibilidad. Llegamos puntualmente.',
        step3: 'Realizamos el Servicio',
        step3Desc: 'Nuestro equipo profesional ejecuta el trabajo con los más altos estándares de calidad.',
      },
      features: 'Características',
      areas: 'Áreas de Servicio',
      ready: '¿Listo para Empezar?',
      customQuote: 'Solicitar Cotización Personalizada',
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Tu empresa de confianza para servicios de limpieza profesional en Miami',
      history: {
        title: 'Nuestra Historia',
        paragraph1: 'Cleaning in Progress nació con la misión de proporcionar servicios de limpieza profesionales, confiables y de alta calidad para hogares y negocios en Miami.',
        paragraph2: 'Somos una empresa local enfocada en la calidad, no en el volumen. Cada cliente es importante para nosotros y nos comprometemos a superar sus expectativas en cada servicio.',
        paragraph3: 'Nuestro equipo está formado por profesionales capacitados y comprometidos con la excelencia, utilizando productos de calidad y técnicas probadas para garantizar resultados impecables.',
        yearsExperience: 'Años de Experiencia',
        yearsDescription: 'Servicio confiable desde nuestros inicios',
        professionalTeam: 'Equipo Profesional',
        teamDescription: 'Personal capacitado y certificado',
        satisfiedClients: 'Clientes Satisfechos',
        clientsDescription: '4.9+ de calificación promedio',
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían nuestro trabajo cada día',
        trust: {
          title: 'Confianza',
          description: 'Empresa local con años de experiencia y clientes satisfechos.',
        },
        punctuality: {
          title: 'Puntualidad',
          description: 'Llegamos a tiempo, siempre respetando tus horarios y necesidades.',
        },
        quality: {
          title: 'Calidad',
          description: 'Estándares de limpieza profesional garantizados en cada servicio.',
        },
        professionalism: {
          title: 'Profesionalismo',
          description: 'Equipo capacitado y comprometido con la excelencia.',
        },
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Proporcionar servicios de limpieza profesionales, confiables y de alta calidad que superen las expectativas de nuestros clientes, creando espacios limpios y saludables para hogares y negocios en Miami.',
      },
      leadership: {
        title: 'Nuestro Liderazgo',
        subtitle: 'Conoce a quien está al frente de nuestra empresa',
        ceo: 'CEO & Fundadora',
        founder: 'CEO & Fundadora',
        description1: 'es la fundadora y directora ejecutiva de Cleaning in Progress. Con una visión clara de excelencia y compromiso con la calidad, ha construido una empresa que se enfoca en superar las expectativas de cada cliente.',
        description2: 'Su dedicación a la calidad y el servicio al cliente ha sido la base del éxito de nuestra empresa en Miami.',
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
        validation: {
          nameRequired: 'El nombre es requerido',
          nameMinLength: 'El nombre debe tener al menos 2 caracteres',
          phoneRequired: 'El teléfono es requerido',
          phoneInvalid: 'Formato de teléfono inválido',
          emailInvalid: 'Formato de email inválido',
          validationError: 'Por favor, corrige los errores en el formulario.',
        },
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
      pageTitle: 'Blog de Limpieza Profesional',
      pageSubtitle: 'Consejos, guías y noticias sobre limpieza en Miami',
      allCategories: 'Todas',
      noPosts: 'No hay artículos en esta categoría.',
      readMore: 'Leer más',
      backToBlog: 'Volver al Blog',
      share: 'Compartir',
    },
    testimonials: {
      title: 'Lo que Dicen Nuestros Clientes',
      subtitle: 'Testimonios reales de clientes satisfechos',
      ctaTitle: '¿Quieres ser nuestro próximo cliente satisfecho?',
      ctaSubtitle: 'Contáctanos hoy y descubre por qué nuestros clientes nos recomiendan.',
      ctaButton: 'Solicitar Cotización',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las preguntas más comunes sobre nuestros servicios',
      ctaTitle: '¿Tienes otra pregunta?',
      ctaSubtitle: 'No dudes en contactarnos. Estamos aquí para ayudarte con todas tus necesidades de limpieza.',
      ctaButton: 'Contáctanos',
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
      pageTitle: 'Our Cleaning Services',
      pageSubtitle: 'Professional solutions for homes and businesses in Miami',
      notFound: 'Can\'t find the service you need?',
      notFoundDesc: 'Contact us and we\'ll help you find the perfect solution for your cleaning needs.',
      requestQuote: 'Request Quote',
      talkWhatsApp: 'Talk on WhatsApp',
      viewService: 'View service',
      whatIncludes: 'What does this service include?',
      ourProcess: 'Our Process',
      areasCovered: 'Areas We Cover',
      getQuote: 'Request Your Quote',
      getQuoteDesc: 'Get a free and personalized quote for this service.',
      readyToStart: 'Ready to Get Started?',
      readyToStartDesc: 'Contact us now and get a free quote for',
      process: {
        step1: 'Request Your Quote',
        step1Desc: 'Complete our form or contact us by phone/WhatsApp. We will respond within 24 hours.',
        step2: 'We Schedule the Visit',
        step2Desc: 'We coordinate a date and time that fits your availability. We arrive on time.',
        step3: 'We Perform the Service',
        step3Desc: 'Our professional team executes the work with the highest quality standards.',
      },
      features: 'Features',
      areas: 'Service Areas',
      ready: 'Ready to Get Started?',
      customQuote: 'Request Custom Quote',
    },
    about: {
      title: 'About Us',
      subtitle: 'Your trusted company for professional cleaning services in Miami',
      history: {
        title: 'Our History',
        paragraph1: 'Cleaning in Progress was born with the mission of providing professional, reliable and high-quality cleaning services for homes and businesses in Miami.',
        paragraph2: 'We are a local company focused on quality, not volume. Every client is important to us and we are committed to exceeding their expectations in every service.',
        paragraph3: 'Our team is made up of trained professionals committed to excellence, using quality products and proven techniques to guarantee impeccable results.',
        yearsExperience: 'Years of Experience',
        yearsDescription: 'Reliable service since our beginnings',
        professionalTeam: 'Professional Team',
        teamDescription: 'Trained and certified staff',
        satisfiedClients: 'Satisfied Clients',
        clientsDescription: '4.9+ average rating',
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide our work every day',
        trust: {
          title: 'Trust',
          description: 'Local company with years of experience and satisfied clients.',
        },
        punctuality: {
          title: 'Punctuality',
          description: 'We arrive on time, always respecting your schedules and needs.',
        },
        quality: {
          title: 'Quality',
          description: 'Professional cleaning standards guaranteed in every service.',
        },
        professionalism: {
          title: 'Professionalism',
          description: 'Trained team committed to excellence.',
        },
      },
      mission: {
        title: 'Our Mission',
        description: 'Provide professional, reliable and high-quality cleaning services that exceed our clients\' expectations, creating clean and healthy spaces for homes and businesses in Miami.',
      },
      leadership: {
        title: 'Our Leadership',
        subtitle: 'Meet who is at the forefront of our company',
        ceo: 'CEO & Founder',
        founder: 'CEO & Founder',
        description1: 'is the founder and executive director of Cleaning in Progress. With a clear vision of excellence and commitment to quality, she has built a company that focuses on exceeding each client\'s expectations.',
        description2: 'Her dedication to quality and customer service has been the foundation of our company\'s success in Miami.',
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
        validation: {
          nameRequired: 'Name is required',
          nameMinLength: 'Name must be at least 2 characters',
          phoneRequired: 'Phone is required',
          phoneInvalid: 'Invalid phone format',
          emailInvalid: 'Invalid email format',
          validationError: 'Please correct the errors in the form.',
        },
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
      pageTitle: 'Professional Cleaning Blog',
      pageSubtitle: 'Tips, guides and news about cleaning in Miami',
      allCategories: 'All',
      noPosts: 'No articles in this category.',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      share: 'Share',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real testimonials from satisfied clients',
      ctaTitle: 'Want to be our next satisfied client?',
      ctaSubtitle: 'Contact us today and discover why our clients recommend us.',
      ctaButton: 'Request Quote',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about our services',
      ctaTitle: 'Have another question?',
      ctaSubtitle: 'Don\'t hesitate to contact us. We are here to help you with all your cleaning needs.',
      ctaButton: 'Contact Us',
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

