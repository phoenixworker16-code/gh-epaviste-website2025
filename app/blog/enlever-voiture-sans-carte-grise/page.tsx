import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Enlever une voiture sans carte grise : est-ce possible ?",
  description: "Vous avez perdu la carte grise de votre épave ? Découvrez les solutions pour faire enlever votre véhicule même sans ce document.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/enlever-voiture-sans-carte-grise" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlever une voiture sans carte grise : est-ce possible ?",
    description: "Vous avez perdu la carte grise de votre épave ? Découvrez les solutions pour faire enlever votre véhicule même sans ce document.",
    url: "https://gh-epaviste.fr/blog/enlever-voiture-sans-carte-grise",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlever une voiture sans carte grise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlever une voiture sans carte grise : est-ce possible ?",
    description: "Vous avez perdu la carte grise de votre épave ? Découvrez les solutions pour faire enlever votre véhicule même sans ce document.",
    images: ["/og-image.jpg"],
  },
}

export default function ArticleSansCarteGrise() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enlever une voiture sans carte grise : est-ce possible ?",
    "description": "Solutions pour faire enlever votre épave même sans carte grise.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-03-05",
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
          <h1 className="text-4xl font-bold text-white mb-4">Enlever une voiture sans carte grise : est-ce possible ?</h1>
          <p className="text-gray-200">Cas particuliers · 4 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">La carte grise est normalement indispensable lors de la cession d&apos;un véhicule. Mais que faire si vous l&apos;avez perdue, si le véhicule a été hérité ou si la situation est complexe ?</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm"><strong>Information importante :</strong> Chaque cas est différent. Nous vous conseillons de nous contacter directement pour évaluer votre situation spécifique avant toute démarche.</p>
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Les cas les plus fréquents</h2>
        <div className="space-y-4">
          {[
            { title: "Carte grise perdue ou volée", text: "Vous pouvez effectuer une demande de duplicata auprès de l'ANTS (ants.gouv.fr). La démarche est entièrement en ligne. Comptez généralement quelques jours ouvrés pour recevoir le duplicata." },
            { title: "Véhicule hérité (succession)", text: "Si vous avez hérité d'un véhicule, vous pouvez en devenir propriétaire sans carte grise à votre nom en présentant un certificat de succession (acte notarié ou certificat d'hérédité). Contactez-nous pour connaître les démarches adaptées à votre situation." },
            { title: "Véhicule d'occasion sans documents", text: "Si vous avez acheté un véhicule sans carte grise, la situation est plus complexe. Contactez la préfecture ou le service immatriculation pour régulariser la situation avant de faire appel à un service d'enlèvement." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" /> {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Comment nous pouvons vous aider</h2>
        <p>Chez GH Épaviste, nous avons l&apos;habitude de traiter des situations variées. Appelez-nous pour nous expliquer votre cas. Nous vous orienterons vers la solution la plus adaptée, en toute transparence.</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Cas particulier ? Parlez-nous-en !</h2>
          <p className="text-gray-600 mb-6">Nous étudions chaque situation individuellement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
