import { Metadata } from 'next'
import { essonneData } from '@/data/departments/essonne'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: essonneData.metaTitle,
  description: essonneData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-essonne` },
  robots: { index: true, follow: true },
  openGraph: {
    title: essonneData.metaTitle,
    description: essonneData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-essonne`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: essonneData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: essonneData.metaTitle,
    description: essonneData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function EssonneEpavistePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: essonneData.metaTitle,
      description: essonneData.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "Essonne (91)" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "Essonne", // to remove (91) if it exists
      url: "https://gh-epaviste.fr/enlevement-epave-essonne"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Essonne (91)", url: "https://gh-epaviste.fr/enlevement-epave-essonne" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={essonneData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={essonneData.relatedServicesSlugs}
        relatedCitiesSlugs={essonneData.relatedCitiesSlugs}
        currentSlug={essonneData.slug}
        entityType={essonneData.entityType}
      />
    </div>
  )
}
