import { Metadata } from 'next'
import { hautsDeSeineData } from '@/data/departments/hauts-de-seine'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: hautsDeSeineData.metaTitle,
  description: hautsDeSeineData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-hauts-de-seine` },
  robots: { index: true, follow: true },
  openGraph: {
    title: hautsDeSeineData.metaTitle,
    description: hautsDeSeineData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-hauts-de-seine`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: hautsDeSeineData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: hautsDeSeineData.metaTitle,
    description: hautsDeSeineData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function HautsDeSeineEpavistePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: hautsDeSeineData.metaTitle,
      description: hautsDeSeineData.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "Hauts-de-Seine", // to remove (91) if it exists
      url: "https://gh-epaviste.fr/enlevement-epave-hauts-de-seine"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Hauts-de-Seine (92)", url: "https://gh-epaviste.fr/enlevement-epave-hauts-de-seine" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={hautsDeSeineData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={hautsDeSeineData.relatedServicesSlugs}
        relatedCitiesSlugs={hautsDeSeineData.relatedCitiesSlugs}
        currentSlug={hautsDeSeineData.slug}
        entityType={hautsDeSeineData.entityType}
      />
    </div>
  )
}
