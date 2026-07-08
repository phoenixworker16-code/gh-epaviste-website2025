import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowDownToLine, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Enlèvement d'épave en parking souterrain : comment faire ?",
  description: "Découvrez comment faire remorquer une voiture en panne ou abandonnée dans un parking souterrain. Équipement spécialisé et transfert vers un centre VHU partenaire.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/enlevement-parking-souterrain" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlèvement d'épave en parking souterrain",
    description: "Extraction difficile ? GH Épaviste remorque votre véhicule depuis votre sous-sol pour l'acheminer vers un centre VHU agréé.",
    url: "https://gh-epaviste.fr/blog/enlevement-parking-souterrain",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlèvement véhicule en sous-sol" }],
  },
}

export default function ArticleParkingSouterrain() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enlèvement d'épave en parking souterrain : comment faire ?",
    "description": "Les méthodes et le matériel pour l'extraction d'un véhicule hors d'usage en sous-sol, suivi de son transfert vers un centre VHU agréé.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2026-07-08",
    "dateModified": "2026-07-08",
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Une dépanneuse classique peut-elle entrer dans un parking souterrain ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non, en raison de la hauteur limitée (souvent moins de 1m90), l'extraction nécessite un véhicule d'intervention ultra-bas ou un 4x4 équipé d'un treuil spécial." }
      },
      {
        "@type": "Question",
        "name": "L'enlèvement en sous-sol est-il toujours gratuit ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Nous faisons notre maximum pour maintenir la gratuité de l'intervention. Cependant, si le véhicule est situé au 3ème sous-sol sans clé et nécessite une extraction extrêmement complexe de plusieurs heures, un devis préalable gratuit vous sera proposé." }
      },
      {
        "@type": "Question",
        "name": "Qui s'occupe de la destruction après l'extraction ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Une fois extrait du parking, le véhicule est acheminé par GH Épaviste vers un centre VHU agréé partenaire, qui se charge légalement de sa dépollution et de sa destruction." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Enlèvement parking souterrain", url: "https://gh-epaviste.fr/blog/enlevement-parking-souterrain" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Enlèvement d'épave en parking souterrain : comment faire ?</h1>
          <p className="text-gray-300 text-lg">Guide technique · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Votre voiture est tombée en panne au 2ème sous-sol de votre résidence il y a plusieurs mois ? Les pneus sont à plat et le plafond est très bas ? L'extraction d'un véhicule dans un parking souterrain ou un box étroit est l'une des interventions les plus techniques. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous explique comment se déroule cette opération délicate.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les difficultés spécifiques au sous-sol</h2>
          <p>L'abandon d'un véhicule dans un sous-sol de copropriété pose de nombreux problèmes (risque d'incendie, manque de place). Cependant, pour l'épaviste, plusieurs défis techniques doivent être surmontés :</p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <ArrowDownToLine className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">La hauteur limitée</h3>
              <p className="text-gray-600 text-sm">Les parkings souterrains franciliens sont souvent limités à 1m90, empêchant le passage des dépanneuses plateaux classiques.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <ArrowDownToLine className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Pentes et angles de braquage</h3>
              <p className="text-gray-600 text-sm">Les rampes hélicoïdales (en colimaçon) très serrées rendent la manœuvre d'un véhicule inerte très complexe.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Notre équipement spécialisé pour l'extraction</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Véhicules d'intervention ultra-bas</h3>
          <p>Pour intervenir, GH Épaviste utilise un <strong>véhicule d'intervention 4x4 extra-bas</strong> spécialement conçu pour évoluer dans les parkings confinés. Équipé d'un treuil puissant, ce véhicule nous permet de tracter l'épave jusqu'à la sortie.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">L'utilisation de chariots et patins</h3>
          <p>Si la voiture n'a plus ses clés (direction bloquée) ou que les roues sont manquantes/crevées, nos techniciens glissent des chariots de manutention ("go-jacks") sous les roues. Cela permet de faire pivoter le véhicule sur place à 360° pour le sortir de sa place de parking.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le transport vers notre centre VHU partenaire</h2>
          <p>Une fois le véhicule tracté jusqu'à la surface ou dans la rue, il est arrimé sur notre dépanneuse classique. À partir de là, notre mission de transporteur se poursuit.</p>
          <p>Nous acheminons l'épave vers un <strong>centre VHU agréé partenaire</strong>. En effet, <span className="bg-yellow-100 px-1 font-medium text-black">GH Épaviste ne réalise ni la dépollution ni la destruction des véhicules</span>. C'est le centre VHU agréé qui prend le relais pour sécuriser le véhicule, le démonter et éditer votre certificat de destruction.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Une dépanneuse classique peut-elle entrer dans un parking souterrain ?</h3>
              <p className="text-gray-600 mb-0">Non, l'extraction nécessite un véhicule d'intervention ultra-bas ou un 4x4 de remorquage en raison de la hauteur limitée de la plupart des parkings sous-terrain.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Qui s'occupe de la destruction après l'extraction ?</h3>
              <p className="text-gray-600 mb-0">Une fois extrait, le véhicule est acheminé par GH Épaviste vers un <strong>centre VHU agréé partenaire</strong>, qui se charge légalement de sa dépollution et de sa destruction.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Comment bien préparer cette intervention ?</h3>
              <p className="text-gray-600 mb-0">Rassemblez votre carte grise, le certificat de non-gage et votre pièce d'identité. Essayez de retrouver les clés du véhicule, cela facilite grandement le déblocage de la direction pour sortir du parking.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Votre épave est en sous-sol ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Nous disposons du matériel nécessaire pour l'extraire et l'acheminer vers un centre VHU partenaire.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold w-full sm:w-auto h-14 px-8 text-lg">
                Prendre Rendez-vous
              </Button>
            </Link>
            <a href="tel:+33753120793">
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full sm:w-auto h-14 px-8 text-lg">
                <Phone className="w-5 h-5 mr-2" /> 07 53 12 07 93
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
