/**
 * BreadcrumbJsonLd
 * Injecte un schema.org BreadcrumbList au format JSON-LD dans la page.
 * Compatible Next.js App Router (Server & Client Components).
 *
 * Usage :
 *   <BreadcrumbJsonLd items={[
 *     { name: "Accueil", url: "https://gh-epaviste.fr/" },
 *     { name: "Services", url: "https://gh-epaviste.fr/services" },
 *   ]} />
 */

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
