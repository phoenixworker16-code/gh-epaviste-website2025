const fs = require('fs');
const path = require('path');

const depts = [
  { file: 'app/enlevement-epave-seine-et-marne/page.tsx', var: 'seineEtMarneData', importPath: '@/data/departments/seine-et-marne', name: 'SeineEtMarne' },
  { file: 'app/enlevement-epave-yvelines/page.tsx', var: 'yvelinesData', importPath: '@/data/departments/yvelines', name: 'Yvelines' },
  { file: 'app/enlevement-epave-essonne/page.tsx', var: 'essonneData', importPath: '@/data/departments/essonne', name: 'Essonne' },
  { file: 'app/enlevement-epave-hauts-de-seine/page.tsx', var: 'hautsDeSeineData', importPath: '@/data/departments/hauts-de-seine', name: 'HautsDeSeine' },
  { file: 'app/enlevement-epave-seine-saint-denis/page.tsx', var: 'seineSaintDenisData', importPath: '@/data/departments/seine-saint-denis', name: 'SeineSaintDenis' },
  { file: 'app/enlevement-epave-val-de-marne/page.tsx', var: 'valDeMarneData', importPath: '@/data/departments/val-de-marne', name: 'ValDeMarne' },
  { file: 'app/enlevement-epave-val-d-oise/page.tsx', var: 'valDoiseData', importPath: '@/data/departments/val-doise', name: 'ValDoise' }
];

depts.forEach(d => {
  const code = import { Metadata } from 'next'
import { \ } from '\'
import { PageBuilder } from '@/components/blocks/PageBuilder'
import { InternalLinking } from '@/components/internal-linking'
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld'

export const metadata: Metadata = {
  title: \.metaTitle,
  description: \.metaDescription,
  alternates: { canonical: \\\https://gh-epaviste.fr/enlevement-epave-\\\\ },
  robots: { index: true, follow: true },
  openGraph: {
    title: \.metaTitle,
    description: \.metaDescription,
    url: \\\https://gh-epaviste.fr/enlevement-epave-\\\\,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: \.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: \.metaTitle,
    description: \.metaDescription,
    images: ["/og-image.jpg"],
  },
}

export default function \EpavistePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: \.metaTitle,
    description: \.metaDescription,
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: \ },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: \.metaTitle, url: \\\https://gh-epaviste.fr/enlevement-epave-\\\\ },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Moteur de rendu modulaire des Blocs */}
      <PageBuilder blocks={\.blocks} />

      {/* Maillage Interne Intelligent */}
      <InternalLinking 
        relatedServicesSlugs={\.relatedServicesSlugs}
        relatedCitiesSlugs={\.relatedCitiesSlugs}
        currentSlug={\.slug}
        entityType={\.entityType}
      />
    </div>
  )
}
;
  
  fs.writeFileSync(path.join(process.cwd(), d.file), code);
});
console.log('7 files generated successfully.');
