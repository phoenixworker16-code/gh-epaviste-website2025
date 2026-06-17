import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Véhicule immobilisé : quelles solutions ? | GH Épaviste",
  description: "Panne mécanique grave, CT raté, problème administratif : votre véhicule est immobilisé ? Découvrez toutes les solutions disponibles.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/vehicule-immobilise-solutions" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Véhicule immobilisé : quelles solutions ? | GH Épaviste",
    description: "Panne mécanique grave, CT raté, problème administratif : votre véhicule est immobilisé ? Découvrez toutes les solutions disponibles.",
    url: "https://gh-epaviste.fr/blog/vehicule-immobilise-solutions",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Véhicule immobilisé" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Véhicule immobilisé : quelles solutions ? | GH Épaviste",
    description: "Panne mécanique grave, CT raté, problème administratif : votre véhicule est immobilisé ? Découvrez toutes les solutions disponibles.",
    images: ["/og-image.jpg"],
  },
}

const causes = [
  { cause: "Panne moteur irréparable", solution: "Si le coût de réparation dépasse la valeur du véhicule, l'enlèvement gratuit est la solution la plus économique." },
  { cause: "Boîte de vitesses hors service", solution: "Selon le modèle et le kilométrage, une réparation peut être rentable. Sinon, le véhicule peut être enlevé gratuitement." },
  { cause: "Contrôle technique raté (contre-visite obligatoire)", solution: "Vous avez 2 mois pour effectuer les réparations et passer la contre-visite. Sans réparation, le véhicule ne peut plus circuler." },
  { cause: "Suspension ou direction défaillante", solution: "Un véhicule avec une suspension ou une direction hors service est immobilisé et doit être pris en charge par un professionnel." },
  { cause: "Problème administratif (retrait de permis, etc.)", solution: "Si le propriétaire ne peut plus conduire, le véhicule peut être vendu ou remis à un service d'enlèvement." },
]

export default function ArticleVehiculeImmobilise() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Véhicule immobilisé : quelles solutions ?",
    "description": "Solutions pour un véhicule immobilisé pour diverses raisons.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-05-10",
    "dateModified": "2025-06-01",
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Véhicule immobilisé : quelles solutions ?</h1>
          <p className="text-gray-300">Cas pratiques · 5 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">Un véhicule immobilisé dans votre garage ou sur la voie publique peut rapidement devenir un problème. Selon la raison de l&apos;immobilisation, les solutions varient. Voici un guide complet par cause.</p>

        <h2 className="text-2xl font-bold text-black mt-8">Solutions par type d&apos;immobilisation</h2>
        <div className="space-y-4 mt-3">
          {causes.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-black text-white px-5 py-3 flex items-center gap-2">
                <Car className="w-4 h-4 text-yellow-400" />
                <h3 className="font-bold text-sm">{item.cause}</h3>
              </div>
              <div className="px-5 py-4 text-gray-600 text-sm">{item.solution}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Véhicule sur la voie publique : vos obligations</h2>
        <p>Un véhicule immobilisé sur la voie publique peut faire l&apos;objet d&apos;une mise en demeure par les autorités locales. Passé un certain délai (variable selon les communes), le véhicule peut être enlevé d&apos;office aux frais du propriétaire. Anticipez en contactant un service d&apos;enlèvement volontaire avant d&apos;en arriver là.</p>

        <h2 className="text-2xl font-bold text-black mt-8">La solution la plus simple</h2>
        <p>Quelle que soit la cause de l&apos;immobilisation, GH Épaviste peut intervenir rapidement pour prendre en charge votre véhicule. Notre service est <strong>gratuit, sans engagement</strong> et disponible 7j/7.</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Véhicule immobilisé ? On vient le chercher</h2>
          <p className="text-gray-600 mb-6">Enlèvement gratuit — Île-de-France — 7j/7 de 8h à 22h</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Demande gratuite</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
