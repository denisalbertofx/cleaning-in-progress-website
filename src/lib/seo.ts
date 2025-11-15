import { Metadata } from 'next'
import { contactInfo } from '@/lib/contact-info'

const company = {
  name: 'Cleaning in Progress',
  phone: contactInfo.phone,
  email: contactInfo.email,
  address: contactInfo.isMobileService ? undefined : contactInfo.address,
  serviceAreas: contactInfo.serviceAreas || [],
}

export const siteConfig = {
  name: 'Cleaning in Progress',
  description: 'Servicios profesionales de limpieza residencial y comercial en Miami. Limpieza garantizada con resultados verificables.',
  url: 'https://cleaninginprogress.com',
  ogImage: '/images/hero/hero-home.jpg',
  links: {
    twitter: '',
    github: '',
  },
}

export function generateMetadata({
  title,
  description,
  image,
  url,
}: {
  title?: string
  description?: string
  image?: string
  url?: string
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageImage = image || siteConfig.ogImage
  const pageUrl = url || siteConfig.url

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export function generateLocalBusinessSchema() {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    image: `${siteConfig.url}/images/hero/hero-home.jpg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: company.phone,
    email: company.email,
    // Servicio móvil - sin dirección física fija
    ...(company.address ? {
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address,
        addressLocality: 'Miami',
        addressRegion: 'FL',
        postalCode: '33101',
        addressCountry: 'US',
      },
    } : {}),
    // Coordenadas del área de servicio (centro de Miami)
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.8516535',
      longitude: '-80.2459345',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Check',
    currenciesAccepted: 'USD',
    areaServed: company.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Limpieza',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Residencial',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Comercial',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza de Oficinas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Profunda',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Post-Construcción',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza de Alfombras',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
  }
  
  return schema
}

export function generateServiceSchema(service: {
  title: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Miami',
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  slug: string
  publishedAt: string
  coverImage: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.coverImage}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: company.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/hero/hero-home.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`,
    },
  }
}

export function generateReviewSchema(reviews: Array<{
  name: string
  text: string
  rating: number
  datePublished?: string
}>) {
  // Usar ItemList para múltiples reviews (mejor práctica SEO)
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.name,
        },
        reviewBody: review.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        datePublished: review.datePublished || new Date().toISOString(),
        itemReviewed: {
          '@type': 'LocalBusiness',
          name: company.name,
        },
      },
    })),
  }
}

