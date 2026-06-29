import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Comment vendre une voiture en panne ?",
  description: "Votre voiture est en panne et vous souhaitez vous en débarrasser ? Découvrez toutes les options pour vendre ou faire enlever un véhicule en panne.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/comment-vendre-voiture-en-panne" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Comment vendre une voiture en panne ?",
    description: "Votre voiture est en panne et vous souhaitez vous en débarrasser ? Découvrez toutes les options pour vendre ou faire enlever un véhicule en panne.",
    url: "https://gh-epaviste.fr/blog/comment-vendre-voiture-en-panne",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Comment vendre une voiture en panne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment vendre une voiture en panne ?",
    description: "Votre voiture est en panne et vous souhaitez vous en débarrasser ? Découvrez toutes les options pour vendre ou faire enlever un véhicule en panne.",
    images: ["/og-image.jpg"],
  },
}

export default function ArticleVoitureEnPanne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment vendre une voiture en panne ?",
    "description": "Options pour se débarrasser ou vendre une voiture en panne.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-04-08",
    "dateModified": "2025-06-01",
  }

  const options = [
    { title: "Réparer puis vendre", pros: "Valeur maximale récupérée", cons: "Coût de réparation potentiellement élevé", icon: "🔧" },
    { title: "Vendre en l'état", pros: "Pas de frais de réparation", cons: "Prix de vente réduit, acheteur difficile à trouver", icon: "🚗" },
    { title: "Vendre pour pièces", pros: "Bonne valorisation des organes sains", cons: "Long et nécessite des connaissances techniques", icon: "⚙️" },
    { title: "Faire enlever gratuitement", pros: "Sans frais, rapide, sans stress", cons: "Aucune compensation financière directe", icon: "🚚" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Comment vendre une voiture en panne ?</h1>
          <p className="text-gray-200">Guide pratique · 5 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">Votre voiture est tombée en panne et la réparation coûte plus cher que ce que vaut le véhicule ? Vous n&apos;êtes pas seul dans cette situation. Voici un comparatif honnête de toutes vos options.</p>

        <h2 className="text-2xl font-bold text-black mt-8">Comparatif des options disponibles</h2>
        <div className="grid sm:grid-cols-2 gap-5 mt-3">
          {options.map((opt, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="text-3xl mb-3">{opt.icon}</div>
              <h3 className="font-bold text-black mb-3">{opt.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-green-700"><span className="font-semibold">✅ Avantage :</span> {opt.pros}</div>
                <div className="flex items-start gap-2 text-red-600"><span className="font-semibold">❌ Inconvénient :</span> {opt.cons}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Notre recommandation</h2>
        <p>Si votre véhicule est en panne irréparable ou si le coût de réparation dépasse sa valeur marchande, la solution la plus simple et la moins coûteuse reste <strong>l&apos;enlèvement gratuit</strong>. Vous vous libérez d&apos;un véhicule qui encombre, sans débourser un centime.</p>

        <div className="flex gap-3 items-start bg-blue-50 border border-blue-200 rounded-xl p-5">
          <Wrench className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm"><strong>Astuce :</strong> Si votre voiture démarre encore ou peut être remorquée facilement, pensez à obtenir un devis de réparation avant de vous décider. La différence entre le coût de réparation et la valeur marchande vous aidera à prendre la meilleure décision.</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Voiture en panne ? On s&apos;en occupe gratuitement</h2>
          <p className="text-gray-600 mb-6">Intervention rapide en Île-de-France — 7j/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Demande gratuite</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
