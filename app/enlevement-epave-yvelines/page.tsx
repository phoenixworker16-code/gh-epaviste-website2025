import { Metadata } from 'next'
import { yvelinesData } from '@/data/departments/yvelines'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: yvelinesData.metaTitle,
  description: yvelinesData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-yvelines` },
  robots: { index: true, follow: true },
  openGraph: {
    title: yvelinesData.metaTitle,
    description: yvelinesData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-yvelines`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: yvelinesData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: yvelinesData.metaTitle,
    description: yvelinesData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function YvelinesEpavistePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: yvelinesData.metaTitle,
      description: yvelinesData.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "Yvelines (78)" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "Yvelines", // to remove (91) if it exists
      url: "https://gh-epaviste.fr/enlevement-epave-yvelines"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Yvelines (78)", url: "https://gh-epaviste.fr/enlevement-epave-yvelines" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={yvelinesData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={yvelinesData.relatedServicesSlugs}
        relatedCitiesSlugs={yvelinesData.relatedCitiesSlugs}
        currentSlug={yvelinesData.slug}
        entityType={yvelinesData.entityType}
      />
    </div>
  )
}
