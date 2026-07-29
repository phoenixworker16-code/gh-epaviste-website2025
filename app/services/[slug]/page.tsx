import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  CheckCircle,
  MapPin,
  Truck,
  FileText,
  Recycle,
  Shield,
  AlertTriangle,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import servicesData from "@/data/services.json"

interface ServiceSection {
  title: string
  content: string
}

interface ServiceFaq {
  q: string
  a: string
}

interface Service {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  icon: string
  badge: string | null
  color: string
  sections: ServiceSection[]
  faq: ServiceFaq[]
  relatedDepts: string[]
}

const services = servicesData as Service[]

// Mapping des slugs de département vers leurs labels et URL
const deptMap: Record<string, { label: string; url: string }> = {
  "paris":              { label: "Paris (75)",              url: "/enlevement-epave-paris" },
  "seine-et-marne":     { label: "Seine-et-Marne (77)",     url: "/enlevement-epave-seine-et-marne" },
  "yvelines":           { label: "Yvelines (78)",            url: "/enlevement-epave-yvelines" },
  "essonne":            { label: "Essonne (91)",             url: "/enlevement-epave-essonne" },
  "hauts-de-seine":     { label: "Hauts-de-Seine (92)",      url: "/enlevement-epave-hauts-de-seine" },
  "seine-saint-denis":  { label: "Seine-Saint-Denis (93)",   url: "/enlevement-epave-seine-saint-denis" },
  "val-de-marne":       { label: "Val-de-Marne (94)",        url: "/enlevement-epave-val-de-marne" },
  "val-d-oise":         { label: "Val-d'Oise (95)",          url: "/enlevement-epave-val-d-oise" },
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://gh-epaviste.fr/services/${service.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://gh-epaviste.fr/services/${service.slug}`,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: service.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/og-image.jpg"],
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  // JSON-LD Service + FAQPage
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.metaDescription,
      "url": `https://gh-epaviste.fr/services/${service.slug}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "GH Épaviste",
        "telephone": "+33753120793",
        "url": "https://gh-epaviste.fr",
        "areaServed": {
          "@type": "State",
          "name": "Île-de-France"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Île-de-France"
      },
      "serviceType": service.title,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Service gratuit"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gh-epaviste.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gh-epaviste.fr/services" },
        { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://gh-epaviste.fr/services/${service.slug}` }
      ]
    }
  ]

  // Autres services pour le maillage interne (exclure le courant)
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100 py-3" aria-label="Fil d'Ariane">
        <div className="container mx-auto px-4 max-w-5xl">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-yellow-600 transition-colors">Accueil</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li><Link href="/services" className="hover:text-yellow-600 transition-colors">Services</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-black font-medium truncate">{service.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-black text-white py-16" aria-labelledby="service-hero-heading">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              {service.badge && (
                <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {service.badge}
                </div>
              )}
              <h1 id="service-hero-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {service.h1}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                {service.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/formulaire">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6">
                    Demander un Enlèvement Gratuit
                  </Button>
                </Link>
                <a href="tel:+33753120793">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-6">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    07 53 12 07 93
                  </Button>
                </a>
              </div>
            </div>
            {/* Points clés rapides */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <h2 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Points clés</h2>
                {[
                  "Service 100% gratuit",
                  "Intervention sous 24h",
                  "7j/7, de 8h à 22h",
                  "Toute l'Île-de-France",
                  "Conforme réglementation VHU",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-200 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Sections de contenu */}
        <section className="py-16 bg-white" aria-label="Détails du service">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {service.sections.map((section, i) => (
                <div key={i} className="border-l-4 border-yellow-400 pl-6">
                  <h2 className="text-2xl font-bold text-black mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre processus */}
        <section className="py-14 bg-gray-50" aria-labelledby="processus-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="processus-heading" className="text-2xl font-bold text-center text-black mb-10">
              Comment fonctionne notre service ?
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "1", icon: Phone,    title: "Contactez-nous",       desc: "Par téléphone ou formulaire. Réponse immédiate." },
                { step: "2", icon: FileText,  title: "Préparez vos docs",    desc: "Carte grise, pièce d'identité, non-gage récent." },
                { step: "3", icon: Truck,     title: "Enlèvement gratuit",   desc: "Nos opérateurs interviennent sous 24h." },
                { step: "4", icon: Recycle,   title: "Certificat de destruction", desc: "Transmis dès émission par le centre VHU agréé." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-yellow-400 transition-colors">
                  <div className="flex items-center mb-3 gap-2">
                    <div className="w-7 h-7 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {item.step}
                    </div>
                    <item.icon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-black mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="py-16 bg-white" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 id="faq-heading" className="text-2xl font-bold text-center text-black mb-10">
                Questions fréquentes — {service.title}
              </h2>
              <div className="space-y-4">
                {service.faq.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 hover:border-yellow-300 rounded-xl p-6 transition-colors"
                  >
                    <h3 className="font-bold text-black mb-3 flex items-start gap-2">
                      <span className="w-6 h-6 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        Q
                      </span>
                      {item.q}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed pl-8">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Zones desservies */}
        <section className="py-14 bg-gray-50" aria-labelledby="zones-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="zones-heading" className="text-2xl font-bold text-black mb-4">
              Zones d&apos;intervention pour ce service
            </h2>
            <p className="text-gray-600 mb-8">
              Nous intervenons dans les départements suivants pour ce service :
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {service.relatedDepts.map((deptSlug) => {
                const dept = deptMap[deptSlug]
                if (!dept) return null
                return (
                  <Link
                    key={deptSlug}
                    href={dept.url}
                    className="inline-flex items-center gap-1.5 bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-full font-medium text-sm transition-colors"
                  >
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {dept.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Conformité VHU */}
        <section className="py-12 bg-amber-50 border-t border-amber-100" aria-labelledby="conformite-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 id="conformite-heading" className="text-lg font-bold text-amber-900 mb-2">
                  Conformité réglementaire
                </h2>
                <p className="text-amber-800 text-sm leading-relaxed">
                  GH Épaviste est un prestataire de collecte de véhicules hors d&apos;usage. Votre véhicule est
                  confié à un <strong>centre de traitement VHU agréé partenaire</strong>, seul habilité à réaliser
                  la dépollution et à émettre le certificat de destruction officiel conformément à la
                  réglementation française (Code de l&apos;environnement, articles R543-153 et suivants).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Autres services (maillage interne) */}
        <section className="py-14 bg-white" aria-labelledby="autres-services-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="autres-services-heading" className="text-2xl font-bold text-center text-black mb-8">
              Autres services GH Épaviste
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:bg-yellow-50 transition-colors group"
                >
                  <h3 className="font-bold text-black text-sm mb-1 group-hover:text-yellow-700 transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{other.intro}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/services">
                <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-50">
                  Voir tous nos services →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14 bg-yellow-500" aria-labelledby="service-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="service-cta-heading" className="text-3xl font-bold text-black mb-3">
              Besoin de ce service ?
            </h2>
            <p className="text-black/80 mb-8 text-lg">
              Intervention gratuite sous 24h — Île-de-France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formulaire">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">
                  Demande d&apos;enlèvement gratuit
                </Button>
              </Link>
              <a href="tel:+33753120793">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  07 53 12 07 93
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
