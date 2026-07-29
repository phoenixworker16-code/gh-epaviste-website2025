import { Metadata } from 'next'
import { seineSaintDenisData } from '@/data/departments/seine-saint-denis'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: seineSaintDenisData.metaTitle,
  description: seineSaintDenisData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-seine-saint-denis` },
  robots: { index: true, follow: true },
  openGraph: {
    title: seineSaintDenisData.metaTitle,
    description: seineSaintDenisData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-seine-saint-denis`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: seineSaintDenisData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: seineSaintDenisData.metaTitle,
    description: seineSaintDenisData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function SeineSaintDenisEpavistePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: seineSaintDenisData.metaTitle,
      description: seineSaintDenisData.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "Seine-Saint-Denis (93)" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "Seine-Saint-Denis", // to remove (91) if it exists
      url: "https://gh-epaviste.fr/enlevement-epave-seine-saint-denis"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Seine-Saint-Denis (93)", url: "https://gh-epaviste.fr/enlevement-epave-seine-saint-denis" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={seineSaintDenisData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={seineSaintDenisData.relatedServicesSlugs}
        relatedCitiesSlugs={seineSaintDenisData.relatedCitiesSlugs}
        currentSlug={seineSaintDenisData.slug}
        entityType={seineSaintDenisData.entityType}
      />
    </div>
  )
}
