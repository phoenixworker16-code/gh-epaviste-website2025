import { Metadata } from 'next'
import { valDeMarneData } from '@/data/departments/val-de-marne'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: valDeMarneData.metaTitle,
  description: valDeMarneData.metaDescription,
  alternates: { canonical: `https://gh-epaviste.fr/enlevement-epave-val-de-marne` },
  robots: { index: true, follow: true },
  openGraph: {
    title: valDeMarneData.metaTitle,
    description: valDeMarneData.metaDescription,
    url: `https://gh-epaviste.fr/enlevement-epave-val-de-marne`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: valDeMarneData.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: valDeMarneData.metaTitle,
    description: valDeMarneData.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function ValDeMarneEpavistePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: valDeMarneData.metaTitle,
      description: valDeMarneData.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "Val-de-Marne (94)" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "Val-de-Marne", // to remove (91) if it exists
      url: "https://gh-epaviste.fr/enlevement-epave-val-de-marne"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Enlèvement épave Val-de-Marne (94)", url: "https://gh-epaviste.fr/enlevement-epave-val-de-marne" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <PageBuilder blocks={valDeMarneData.blocks} />

      <InternalLinking 
        relatedServicesSlugs={valDeMarneData.relatedServicesSlugs}
        relatedCitiesSlugs={valDeMarneData.relatedCitiesSlugs}
        currentSlug={valDeMarneData.slug}
        entityType={valDeMarneData.entityType}
      />
    </div>
  )
}
