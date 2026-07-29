import Link from "next/link"
import { Metadata } from "next"
import { Phone, AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Enlèvement d'un véhicule accidenté, brûlé ou immobilisé",
  description: "Que faire de votre véhicule accidenté, incendié ou immobilisé ? Découvrez les solutions de remorquage gratuit vers un centre VHU partenaire.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/enlevement-vehicule-accidente-brule-immobilise" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlèvement d'un véhicule accidenté, brûlé ou immobilisé",
    description: "Guide et démarches pour le remorquage gratuit de votre épave (accidentée, brûlée, en panne) vers un centre VHU partenaire en Île-de-France.",
    url: "https://gh-epaviste.fr/blog/enlevement-vehicule-accidente-brule-immobilise",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlèvement véhicule accidenté ou brûlé" }],
  },
}

export default function ArticleVehiculeAccidenteBrule() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enlèvement d'un véhicule accidenté, brûlé ou immobilisé",
    "description": "Que faire de votre véhicule accidenté, incendié ou immobilisé ? Les solutions de remorquage gratuit vers un centre VHU partenaire.",
    "author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gh-epaviste.fr/blog/enlevement-vehicule-accidente-brule-immobilise" },
    "image": "https://gh-epaviste.fr/og-image.jpg",
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
        "name": "Que faire de mon assurance après un accident avec un véhicule épave ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Une fois l'enlèvement effectué et votre véhicule confié au centre VHU agréé partenaire, celui-ci vous transmettra un certificat de destruction. Vous pourrez envoyer ce document à votre assureur pour résilier le contrat immédiatement." }
      },
      {
        "@type": "Question",
        "name": "GH Épaviste peut-il remorquer un véhicule sans roues ou gravement accidenté ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, nos dépanneuses sont équipées pour prendre en charge des véhicules gravement endommagés ou brûlés. N'hésitez pas à nous préciser l'état du véhicule lors de la prise de contact pour que nous adaptions notre intervention." }
      },
      {
        "@type": "Question",
        "name": "Qui s'occupe de la dépollution de mon véhicule brûlé ?",
        "acceptedAnswer": { "@type": "Answer", "text": "GH Épaviste ne gère que le transport. La dépollution, le broyage et le traitement des déchets dangereux (très complexes sur un véhicule brûlé) sont réalisés de façon sécurisée et légale par notre centre VHU agréé partenaire." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Véhicule accidenté ou brûlé", url: "https://gh-epaviste.fr/blog/enlevement-vehicule-accidente-brule-immobilise" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Enlèvement d'un véhicule accidenté, brûlé ou immobilisé</h1>
          <p className="text-gray-300 text-lg">Guide pratique · 5 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Un accident grave, un incendie volontaire ou une panne immobilisant définitivement votre voiture sur la voie publique est une source de stress. Face à une épave, vous avez l'obligation légale de vous en débarrasser rapidement pour éviter des amendes ou des frais de fourrière. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous accompagne pour le remorquage de ces véhicules difficiles.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les situations nécessitant une intervention spécifique</h2>
          <p>L'enlèvement d'une voiture en parfait état de rouler est très différent du remorquage d'un véhicule lourdement endommagé. Voici les cas de figure :</p>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-black m-0">Le véhicule accidenté (VEI / VGE)</h3>
              </div>
              <p className="text-gray-600">Si un expert a déclaré votre voiture comme Véhicule Économiquement Irréparable (VEI) ou Véhicule Gravement Endommagé (VGE), la préfecture a sans doute bloqué la carte grise. Les roues peuvent être bloquées ou la direction brisée. Une dépanneuse équipée d'un treuil puissant et de patins de glissement est indispensable pour extraire le véhicule de la chaussée ou d'un fossé.</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-black m-0">Le véhicule incendié ou brûlé</h3>
              </div>
              <p className="text-gray-600">Une épave brûlée est extrêmement fragile et toxique. La structure métallique, fragilisée par les flammes, peut se disloquer lors du levage. De plus, les résidus d'hydrocarbures brûlés posent un risque écologique majeur. Son transfert requiert des précautions particulières pour éviter l'éparpillement des cendres et débris toxiques sur la voirie.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-gray-500" />
                <h3 className="text-xl font-bold text-black m-0">Le véhicule immobilisé (panne lourde)</h3>
              </div>
              <p className="text-gray-600">Une panne moteur catastrophique, une boîte de vitesse bloquée, ou un véhicule sans roues (vol) nécessitent également une logistique de remorquage lourde avec plateau basculant.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le parcours de votre épave accidentée ou brûlée</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Le transport spécialisé par GH Épaviste</h3>
          <p>GH Épaviste est un <strong>prestataire spécialisé dans l'enlèvement et le transport</strong>. Nous disposons des équipements (treuils, plateaux, chariots) pour charger tout type d'épave, même très endommagée, partout en Île-de-France.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">La dépollution en centre VHU agréé partenaire</h3>
          <p>Il est strictement interdit de dépolluer ou désosser soi-même une voiture brûlée ou accidentée. GH Épaviste achemine directement votre épave vers un <strong>centre VHU agréé partenaire</strong>. Ce dernier possède les infrastructures sécurisées pour traiter les matières toxiques, recycler ce qui peut l'être, et broyer le reste dans le strict respect des normes environnementales.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">La clôture administrative</h3>
          <p>Dès la réception de votre véhicule, notre centre VHU partenaire établira le certificat de destruction (Cerfa 14365*01). Ce document est essentiel : il permet de déclarer la cession pour destruction sur le site de l'ANTS, et d'envoyer la résiliation à votre assurance auto.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">GH Épaviste peut-il remorquer un véhicule sans roues ?</h3>
              <p className="text-gray-600 mb-0">Oui, nos dépanneuses sont équipées pour prendre en charge des véhicules dépourvus de roues ou dont la direction est totalement bloquée. N'hésitez pas à nous le préciser lors de votre appel.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Qui s'occupe de la dépollution de mon véhicule brûlé ?</h3>
              <p className="text-gray-600 mb-0">GH Épaviste ne gère que le transport. La dépollution et le traitement des déchets dangereux sont réalisés de façon sécurisée et légale par notre <strong>centre VHU agréé partenaire</strong>.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Que faire de mon assurance après un accident grave ?</h3>
              <p className="text-gray-600 mb-0">Une fois l'enlèvement effectué par nos soins, le centre VHU agréé partenaire émettra un certificat de destruction. Vous pourrez envoyer ce document à votre assureur pour résilier définitivement le contrat.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Un véhicule accidenté à remorquer ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Intervention rapide en Île-de-France pour transporter votre épave (même brûlée ou sans roues) vers notre centre VHU partenaire.</p>
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
