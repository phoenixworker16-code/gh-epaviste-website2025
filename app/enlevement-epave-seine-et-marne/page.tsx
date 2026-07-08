import { Metadata } from 'next'
import { seineEtMarneData } from '@/data/departments/seine-et-marne'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: seineEtMarneData.metaTitle,
  description: seineEtMarneData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-seine-et-marne` },
  robots: { index: true, follow: true },
  openGraph: {
    title: seineEtMarneData.metaTitle,
    description: seineEtMarneData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-seine-et-marne`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: seineEtMarneData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: seineEtMarneData.metaTitle,
    description: seineEtMarneData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function SeineEtMarneEpavistePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seineEtMarneData.metaTitle,
    description: seineEtMarneData.metaDescription,
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Seine-et-Marne (77)", url: "https://gh-epaviste.fr/enlevement-epave-seine-et-marne" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={seineEtMarneData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={seineEtMarneData.relatedServicesSlugs}
        relatedCitiesSlugs={seineEtMarneData.relatedCitiesSlugs}
        currentSlug={seineEtMarneData.slug}
        entityType={seineEtMarneData.entityType}
      />
    </div>
  )
}
