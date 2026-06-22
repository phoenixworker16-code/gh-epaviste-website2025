// Server component: outputs raw JSON-LD script without client runtime

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'WebPage' | 'Organization'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'LocalBusiness':
        return {
          ...baseData,
          '@type': 'LocalBusiness',
          name: 'GH Épaviste',
          description: 'Service professionnel d\'enlèvement gratuit et rapide d\'épaves en Île-de-France. Intervention 24/7, prise en charge conforme à la réglementation.',
          url: 'https://gh-epaviste.fr',
          telephone: '+33753120793',
          email: 'contact@gh-epaviste.fr',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          areaServed: {
            '@type': 'State',
            name: 'Île-de-France'
          },
          serviceType: 'Enlèvement d\'épaves automobiles',
          priceRange: 'Gratuit',
          openingHours: 'Mo-Su 00:00-23:59',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services d\'épaviste',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Enlèvement gratuit d\'épaves',
                  description: 'Service d\'enlèvement gratuit d\'épaves automobiles avec prise en charge conforme à la réglementation'
                }
              }
            ]
          },
          ...data
        }

      case 'Service':
        return {
          ...baseData,
          '@type': 'Service',
          name: 'Enlèvement d\'épaves automobiles',
          description: 'Service professionnel d\'enlèvement gratuit d\'épaves avec prise en charge conforme à la réglementation',
          provider: {
            '@type': 'LocalBusiness',
            name: 'GH Épaviste'
          },
          areaServed: 'Île-de-France',
          serviceType: 'Service d\'enlèvement d\'épaves automobiles',
          ...data
        }

      case 'WebPage':
        return {
          ...baseData,
          '@type': 'WebPage',
          name: data?.title || 'GH Épaviste - Enlèvement Gratuit d\'Épaves',
          description: data?.description || 'Service d\'enlèvement gratuit et rapide d\'épaves professionnel en Île-de-France',
          url: data?.url || 'https://gh-epaviste.fr',
          inLanguage: 'fr-FR',
          isPartOf: {
            '@type': 'WebSite',
            name: 'GH Épaviste',
            url: 'https://gh-epaviste.fr'
          },
          ...data
        }

      case 'Organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'GH Épaviste',
          url: 'https://gh-epaviste.fr',
          logo: 'https://gh-epaviste.fr/images/gh-logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33753120793',
            contactType: 'customer service',
            availableLanguage: 'French'
          },
          sameAs: [
            // Ajouter les réseaux sociaux si disponibles
          ],
          ...data
        }

      default:
        return baseData
    }
  }

  return (
    <script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}