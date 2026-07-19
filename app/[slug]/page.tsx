// app/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageBuilder } from '@/components/blocks/PageBuilder';
import { InternalLinking } from '@/components/internal-linking';
import BreadcrumbJsonLd from '@/components/breadcrumb-jsonld';
import { MAJOR_CITY_SLUGS, isMajorCity } from '@/data/major-cities';

// Liste exhaustive des slugs de ville générés — utilisée pour generateStaticParams
// et pour valider les slugs entrants (prévention d'attaques par import dynamique)
// Générée à partir du fichier batch phase4-2-batch1 + manuellement validée
const VALID_CITY_SLUGS = new Set<string>([
  "alfortville","antony","argenteuil","arpajon","asnieres-sur-seine","athis-mons",
  "aubervilliers","aulnay-sous-bois","bagnolet","bezons","bobigny","boissy-saint-leger",
  "bondy","boulogne-billancourt","brie-comte-robert","cergy","champigny-sur-marne",
  "charenton-le-pont","chatenay-malabry","chatou","chelles","choisy-le-roi","clamart",
  "clichy-sous-bois","clichy","colombes","conflans-sainte-honorine","corbeil-essonnes",
  "coubron","coulommiers","courbevoie","creteil","drancy","draveil","dugny",
  "enghien-les-bains","epinay-sur-seine","eragny-sur-oise","ermont","etampes",
  "evry-courcouronnes","fontainebleau","fontenay-sous-bois","gagny","garches",
  "garges-les-gonesse","gif-sur-yvette","gonesse","gournay-sur-marne","guyancourt",
  "herblay-sur-seine","houilles","issy-les-moulineaux","ivry-sur-seine",
  "joinville-le-pont","juvisy-sur-orge","la-courneuve","le-blanc-mesnil","le-bourget",
  "le-pre-saint-gervais","le-raincy","le-vesinet","les-lilas","les-pavillons-sous-bois",
  "les-ulis","levallois-perret","lile-saint-denis","livry-gargan","lognes","longjumeau",
  "maisons-alfort","maisons-laffitte","mantes-la-jolie","marines","massy","meaux",
  "melun","moissy-cramayel","montereau-fault-yonne","montfermeil",
  "montigny-le-bretonneux","montmorency","montreuil","montrouge","nanterre",
  "neuilly-plaisance","neuilly-sur-marne","nogent-sur-marne","noisiel","noisy-le-grand",
  "noisy-le-sec","ozoir-la-ferriere","palaiseau","pantin","paris","poissy",
  "pontault-combault","pontoise","provins","rambouillet","ris-orangis","romainville",
  "rosny-sous-bois","rueil-malmaison","saint-denis","saint-germain-en-laye",
  "saint-maur-des-fosses","saint-ouen-laumone","saint-ouen-sur-seine",
  "sainte-genevieve-des-bois","sarcelles","sartrouville","savigny-le-temple","sceaux",
  "sevran","stains","taverny","torcy","trappes","tremblay-en-france","vaujours",
  "velizy-villacoublay","versailles","villemomble","villeneuve-saint-georges",
  "villepinte","villetaneuse","vincennes","viry-chatillon","vitry-sur-seine"
]);

// Cache par requête pour éviter les doubles imports (generateMetadata + page component)
const cityDataCache = new Map<string, any>();

// Valide que le slug est un slug de ville connu avec le bon préfixe
function validateSlug(slug: string): { valid: boolean; citySlug: string } {
  if (!slug.startsWith('epaviste-gratuit-')) {
    return { valid: false, citySlug: '' };
  }
  const citySlug = slug.slice('epaviste-gratuit-'.length);
  if (!citySlug || !VALID_CITY_SLUGS.has(citySlug)) {
    return { valid: false, citySlug };
  }
  return { valid: true, citySlug };
}

// Helper to get city data with caching per request
async function getCityData(slug: string) {
  const { valid, citySlug } = validateSlug(slug);
  if (!valid) return null;

  // Cache check pour éviter double import (generateMetadata + page component)
  const cacheKey = citySlug;
  if (cityDataCache.has(cacheKey)) {
    return cityDataCache.get(cacheKey)!;
  }
  
  try {
    const cityModule = await import(`@/data/cities/${citySlug}`);
    // Support deterministe : on utilise un nom de variable construit depuis le slug
    // Les fichiers générés par le pipeline utilisent le format camelCase + "Data"
    const camelSlug = citySlug.replace(/-([a-z])/g, (g: string) => g[1].toUpperCase());
    const expectedKey = `${camelSlug}Data`;
    
    // Ordre de résolution déterministe :
    // 1. format pipeline-v4 (ex: alfortvilleData)
    // 2. format legacy cityData
    const rawData = cityModule[expectedKey] || cityModule.cityData || null;
    
    if (!rawData) {
      console.log(`[getCityData] No data found for ${citySlug} (expected ${expectedKey})`);
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
      const result = {
        ...rawData,
        metaTitle: rawData.seo?.title || rawData.hero?.title,
        metaDescription: rawData.seo?.description || rawData.introduction,
        blocks,
        relatedServicesSlugs: [],
        relatedCitiesSlugs: []
      };
      cityDataCache.set(cacheKey, result);
      return result;
    }
    
    cityDataCache.set(cacheKey, rawData);
    return rawData;
  } catch (error) {
    console.log(`[getCityData] import failed for ${citySlug}:`, error);
    return null;
  }
}

// SSG : liste des slugs à pré-générer
export async function generateStaticParams() {
  return Array.from(VALID_CITY_SLUGS).map((citySlug) => ({
    slug: `epaviste-gratuit-${citySlug}`,
  }));
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
