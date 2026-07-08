import Link from "next/link"
import { Metadata } from "next"
import { Phone, ShieldX, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Résilier son assurance auto après la destruction d'une épave",
  description: "Découvrez la procédure et les documents nécessaires pour résilier rapidement votre assurance auto après l'enlèvement de votre véhicule hors d'usage.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/resilier-assurance-auto-apres-destruction" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Résiliation assurance auto après enlèvement d'épave",
    description: "Guide pour utiliser votre certificat de destruction et suspendre ou résilier définitivement votre contrat d'assurance.",
    url: "https://gh-epaviste.fr/blog/resilier-assurance-auto-apres-destruction",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Résilier assurance auto après enlèvement" }],
  },
}

export default function ArticleResilierAssurance() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Que faire de son assurance auto après la destruction d'une épave ?",
    "description": "Les démarches pour informer votre assureur de la destruction de votre véhicule par un centre VHU et clôturer votre contrat d'assurance.",
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
        "name": "Faut-il assurer une voiture qui ne roule plus ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, selon la loi (loi Badinter), tout véhicule terrestre à moteur doit être assuré au moins au tiers, même s'il est stationné et ne roule plus, jusqu'à sa destruction physique par un centre VHU agréé." }
      },
      {
        "@type": "Question",
        "name": "Quel document envoyer à mon assureur ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Vous devez envoyer une copie du certificat de destruction (Cerfa 14365*01) qui vous sera remis par notre centre VHU partenaire après l'enlèvement." }
      },
      {
        "@type": "Question",
        "name": "La résiliation de l'assurance est-elle immédiate ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, la résiliation prend effet le lendemain du jour de la destruction figurant sur le certificat, ou immédiatement si vous suspendez le contrat." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Résiliation assurance", url: "https://gh-epaviste.fr/blog/resilier-assurance-auto-apres-destruction" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Que faire de son assurance auto après la destruction d'une épave ?</h1>
          <p className="text-gray-300 text-lg">Administratif · 3 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Une fois votre véhicule hors d'usage remorqué par <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link>, il est temps de régulariser la situation avec votre compagnie d'assurance pour stopper les prélèvements. Voici comment procéder.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">L'obligation d'assurer un véhicule immobilisé</h2>
          <p>La loi est très claire : même en panne au fond d'un jardin, une voiture doit être assurée au moins au titre de la responsabilité civile (au tiers). Le risque d'incendie (court-circuit) ou le fait qu'elle puisse causer un dommage accidentel à autrui justifie cette obligation.</p>
          <p>Le seul moyen légal d'arrêter définitivement de payer l'assurance pour ce véhicule est de procéder à son enlèvement et sa destruction dans les règles de l'art.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">La procédure de résiliation</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <ShieldX className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">L'obtention de la preuve de destruction</h3>
              </div>
              <p className="text-gray-600">GH Épaviste se charge du remorquage gratuit de l'épave jusqu'à un <strong>centre VHU agréé partenaire</strong>. Dès sa réception, ce centre agréé (le seul habilité par la préfecture pour le faire) émettra votre <strong>certificat de destruction (Cerfa 14365*01)</strong>.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <ShieldX className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">L'envoi à votre assureur</h3>
              </div>
              <p className="text-gray-600">Vous devez envoyer une copie de ce certificat par lettre recommandée avec accusé de réception (ou via votre espace client en ligne) à votre compagnie d'assurance. Précisez que vous demandez la résiliation de la police d'assurance pour cause de destruction du véhicule.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Suspension ou résiliation ?</h2>
          <p>L'article L121-11 du Code des assurances précise que le contrat d'assurance est <strong>suspendu de plein droit le lendemain à 0 heure</strong> du jour de la vente ou de la cession pour destruction.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Si vous ne rachetez pas de véhicule, vous pouvez demander la <strong>résiliation définitive</strong> (elle intervient avec un préavis de 10 jours après l'envoi du courrier). L'assureur devra vous rembourser la part de la cotisation payée d'avance pour la période où le véhicule n'est plus assuré.</li>
            <li>Si vous rachetez un nouveau véhicule, vous pouvez demander le <strong>transfert de l'assurance</strong> sur votre nouvelle voiture.</li>
          </ul>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Faut-il assurer une voiture qui ne roule plus ?</h3>
              <p className="text-gray-600 mb-0">Oui. La législation impose qu'un véhicule soit assuré jusqu'à ce que sa destruction physique et légale soit attestée par un centre VHU agréé.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">GH Épaviste prévient-il mon assurance ?</h3>
              <p className="text-gray-600 mb-0">Non. En tant que transporteur, notre mission est de confier votre épave au centre VHU partenaire. C'est à vous d'effectuer la démarche auprès de votre assurance avec le certificat qui vous sera remis.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Besoin d'un enlèvement gratuit ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Contactez GH Épaviste pour remorquer votre véhicule vers un centre VHU partenaire et stopper rapidement vos frais d'assurance.</p>
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
