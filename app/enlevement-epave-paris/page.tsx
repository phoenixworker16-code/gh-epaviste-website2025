import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { parisData } from '@/data/departments/paris'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: parisData.metaTitle,
  description: parisData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-paris` },
  robots: { index: true, follow: true },
  openGraph: {
    title: parisData.metaTitle,
    description: parisData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-paris`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: parisData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: parisData.metaTitle,
    description: parisData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function ParisEpavistePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: parisData.metaTitle,
    description: parisData.metaDescription,
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Paris (75)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Paris (75)", url: "https://gh-epaviste.fr/enlevement-epave-paris" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Moteur de rendu modulaire des Blocs */}
      <PageBuilder blocks={parisData.blocks} />

      {/* Maillage Interne Intelligent */}
      <InternalLinking 
        relatedServicesSlugs={parisData.relatedServicesSlugs}
        relatedCitiesSlugs={parisData.relatedCitiesSlugs}
        currentSlug={parisData.slug}
        entityType={parisData.entityType}
      />
    </div>
  )
}
