// app/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageBuilder } from '@/components/blocks/PageBuilder';
import { InternalLinking } from '@/components/internal-linking';
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld';
import { MAJOR_CITY_SLUGS } from '@/data/major-cities';

// Helper to get city data dynamically
async function getCityData(slug: string) {
  const citySlug = slug.replace('epaviste-gratuit-', '');
  
  try {
    const cityModule = await import(`@/data/cities/${citySlug}`);
    // Support the manually created format (e.g. montreuilData) or the generated format (cityData)
    const rawData = cityModule.cityData || cityModule[`${citySlug.replace(/-([a-z])/g, (g: string) => g[1].toUpperCase())}Data`] || Object.values(cityModule)[0] as any;
    
    if (!rawData) {
      console.log(`[getCityData] rawData is falsy for ${citySlug}`, cityModule);
      return null;
    }
    
    // Adapt old format to new format if needed
    if (!rawData.blocks) {
      const blocks = [];
      if (rawData.hero) {
        blocks.push({
          type: 'Hero',
          title: rawData.hero.title,
          subtitle: rawData.hero.subtitle,
          badge: rawData.name
        });
      }
      if (rawData.introduction) {
        blocks.push({
          type: 'Introduction',
          title: `Intervention à ${rawData.name}`,
          content: rawData.introduction
        });
      }
      if (rawData.localContext) {
        blocks.push({
          type: 'LocalCoverage',
          title: "Couverture locale",
          intro: rawData.localContext,
          zones: [{ name: "Toute la commune", delay: "Sous 24h" }]
        });
      }
      if (rawData.faq) {
        blocks.push({
          type: 'FaqLocal',
          title: `FAQ ${rawData.name}`,
          questions: rawData.faq.map((q: any) => ({ q: q.question, a: q.answer }))
        });
      }
      if (rawData.cta) {
        blocks.push({
          type: 'Cta',
          title: rawData.cta.text,
          subtitle: "Contactez-nous pour un retrait gratuit."
        });
      }
      return {
        ...rawData,
        metaTitle: rawData.seo?.title || rawData.hero?.title,
        metaDescription: rawData.seo?.description || rawData.introduction,
        blocks,
        relatedServicesSlugs: [],
        relatedCitiesSlugs: []
      };
    }
    
    return rawData;
  } catch (error) {
    console.log(`[getCityData] import failed for ${citySlug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getCityData(params.slug);
  const citySlug = params.slug.replace('epaviste-gratuit-', '');
  
  if (data) {
    return {
      title: data.metaTitle,
      description: data.metaDescription,
      alternates: { canonical: `https://gh-epaviste.fr/epaviste-gratuit-${data.slug || citySlug}` },
      robots: { 
        index: MAJOR_CITY_SLUGS.has(citySlug), 
        follow: true 
      },
    };
  }
  
  notFound();
  return {} as any; // Unreachable, but satisfies return type
}

export default async function CityPage({ params }: { params: { slug: string } }) {
  const data = await getCityData(params.slug);

  if (data) {
    const jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.metaTitle,
        description: data.metaDescription,
        provider: { '@type': 'LocalBusiness', '@id': 'https://gh-epaviste.fr/#localbusiness' },
        areaServed: { '@type': 'City', name: data.badge || data.name || data.slug },
        serviceType: "Enlèvement d'épave automobile",
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://gh-epaviste.fr/#localbusiness',
        name: 'GH Épaviste',
        telephone: '+33753120793',
        url: 'https://gh-epaviste.fr',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GH Épaviste',
        url: 'https://gh-epaviste.fr',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+33753120793',
          contactType: 'customer service'
        }
      }
    ];

    return (
      <main className="min-h-screen bg-white">
        <BreadcrumbJsonLd
          items={[
            { name: 'Accueil', url: 'https://gh-epaviste.fr/' },
            { name: data.metaTitle, url: `https://gh-epaviste.fr/epaviste-gratuit-${data.slug || params.slug.replace('epaviste-gratuit-', '')}` },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PageBuilder blocks={data.blocks} />
        <InternalLinking
          relatedServicesSlugs={data.relatedServicesSlugs || []}
          relatedCitiesSlugs={data.relatedCitiesSlugs || []}
          currentSlug={data.slug || params.slug.replace('epaviste-gratuit-', '')}
          entityType={data.entityType || 'City'}
        />
      </main>
    );
  }

  notFound();
  return null;
}
