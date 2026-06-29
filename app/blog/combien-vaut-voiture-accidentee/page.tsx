import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Combien vaut une voiture accidentée ?",
  description: "Comment est évaluée la valeur d'une voiture accidentée ? Facteurs, méthodes et options pour valoriser au mieux votre véhicule endommagé.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/combien-vaut-voiture-accidentee" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Combien vaut une voiture accidentée ?",
    description: "Comment est évaluée la valeur d'une voiture accidentée ? Facteurs, méthodes et options pour valoriser au mieux votre véhicule endommagé.",
    url: "https://gh-epaviste.fr/blog/combien-vaut-voiture-accidentee",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Combien vaut une voiture accidentée" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Combien vaut une voiture accidentée ?",
    description: "Comment est évaluée la valeur d'une voiture accidentée ? Facteurs, méthodes et options pour valoriser au mieux votre véhicule endommagé.",
    images: ["/og-image.jpg"],
  },
}

const factors = [
  { label: "L'ancienneté du véhicule", desc: "Plus un véhicule est ancien, moins il a de valeur marchande. Mais certains modèles rares ou de collection peuvent conserver une valeur intéressante." },
  { label: "L'étendue des dégâts", desc: "Un véhicule avec des dommages uniquement esthétiques a plus de valeur qu'un véhicule avec un châssis tordu ou un moteur détruit." },
  { label: "Le kilométrage", desc: "Un faible kilométrage peut compenser en partie des dommages et maintenir une valeur plus élevée pour les pièces mécaniques récupérables." },
  { label: "La demande du marché", desc: "Certaines marques et modèles ont des pièces très demandées, ce qui peut augmenter la valeur de récupération d'un véhicule sinistré." },
]

export default function ArticleVoitureAccidentee() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Combien vaut une voiture accidentée ?",
    "description": "Évaluation de la valeur d'une voiture accidentée : facteurs et options.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-03-20",
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
          <h1 className="text-4xl font-bold text-white mb-4">Combien vaut une voiture accidentée ?</h1>
          <p className="text-gray-200">Estimation & valeur · 5 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">Suite à un accident, votre assurance déclare votre véhicule économiquement irréparable (VEI) ? Vous vous demandez ce que vaut encore votre voiture ? Voici ce qu&apos;il faut savoir.</p>

        <h2 className="text-2xl font-bold text-black mt-8">La notion de valeur de référence</h2>
        <p>Après un sinistre grave, les assureurs comparent le coût de réparation à la <strong>valeur de référence du marché (VRM)</strong> au jour du sinistre. Si les réparations dépassent la VRM, le véhicule est déclaré irréparable. Vous recevez alors une indemnisation basée sur cette valeur, et le véhicule peut être remis à un service de collecte.</p>

        <h2 className="text-2xl font-bold text-black mt-8">Les facteurs qui influencent la valeur</h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-3">
          {factors.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-yellow-500" />
                <h3 className="font-bold text-black text-sm">{f.label}</h3>
              </div>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Vos options après un accident</h2>
        <div className="space-y-3">
          {[
            { opt: "Vendre les pièces séparément", desc: "Si vous avez les connaissances et le temps, démonter et vendre les pièces de valeur peut maximiser le retour." },
            { opt: "Faire enlever le véhicule gratuitement", desc: "La solution la plus simple : un service d'enlèvement prend en charge le véhicule gratuitement. Pas de tracas, pas de frais." },
            { opt: "Vendre à un garage spécialisé", desc: "Certains garages rachètent des véhicules accidentés pour les pièces ou les remettre en état." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="font-bold text-black">{item.opt}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Voiture accidentée ? Faites-la enlever gratuitement</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Demande gratuite</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
