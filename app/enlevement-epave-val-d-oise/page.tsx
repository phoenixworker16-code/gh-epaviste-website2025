import { Metadata } from 'next'
import { valDoiseData } from '@/data/departments/val-d-oise'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: valDoiseData.metaTitle,
  description: valDoiseData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-val-d-oise` },
  robots: { index: true, follow: true },
  openGraph: {
    title: valDoiseData.metaTitle,
    description: valDoiseData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-val-d-oise`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: valDoiseData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: valDoiseData.metaTitle,
    description: valDoiseData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function ValDoiseEpavistePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: valDoiseData.metaTitle,
    description: valDoiseData.metaDescription,
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Val-d'Oise (95)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Val-d'Oise (95)", url: "https://gh-epaviste.fr/enlevement-epave-val-d-oise" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={valDoiseData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={valDoiseData.relatedServicesSlugs}
        relatedCitiesSlugs={valDoiseData.relatedCitiesSlugs}
        currentSlug={valDoiseData.slug}
        entityType={valDoiseData.entityType}
      />
    </div>
  )
}
