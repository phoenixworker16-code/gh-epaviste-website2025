import Link from "next/link"
import { Metadata } from "next"
import { Phone, Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Enlèvement d'un véhicule utilitaire ou de société : les démarches",
  description: "Artisans et professionnels, découvrez les démarches pour faire enlever un fourgon ou un véhicule de société vers un centre VHU partenaire.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/enlevement-vehicule-utilitaire-societe" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlèvement d'un véhicule utilitaire ou de société",
    description: "Comment se débarrasser légalement d'un Véhicule Utilitaire Léger (VUL) ou d'une flotte d'entreprise hors d'usage.",
    url: "https://gh-epaviste.fr/blog/enlevement-vehicule-utilitaire-societe",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlèvement véhicule utilitaire professionnel" }],
  },
}

export default function ArticleVehiculeUtilitaire() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enlèvement d'un véhicule utilitaire ou de société : les démarches",
    "description": "Démarches spécifiques et documents pour le remorquage des utilitaires et flottes d'entreprise vers un centre VHU agréé.",
    "author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gh-epaviste.fr/blog/enlevement-vehicule-utilitaire-societe" },
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
        "name": "Quels documents supplémentaires sont exigés pour une société ?",
        "acceptedAnswer": { "@type": "Answer", "text": "En plus de la carte grise et du certificat de non-gage, vous devez fournir un extrait Kbis de moins de 3 mois et la pièce d'identité du gérant." }
      },
      {
        "@type": "Question",
        "name": "GH Épaviste peut-il transporter de gros fourgons ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, notre flotte de dépanneuses peut remorquer des Véhicules Utilitaires Légers (VUL) comme des fourgons surélevés ou rallongés." }
      },
      {
        "@type": "Question",
        "name": "Qui me fournit le document pour ma comptabilité ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le centre VHU agréé partenaire vers lequel nous acheminons votre utilitaire éditera le certificat de destruction officiel, indispensable pour sortir le véhicule de vos immobilisations comptables." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Utilitaires et Sociétés", url: "https://gh-epaviste.fr/blog/enlevement-vehicule-utilitaire-societe" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Comment se débarrasser d'un véhicule utilitaire ou de société hors d'usage ?</h1>
          <p className="text-gray-300 text-lg">Professionnels · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Artisans, commerçants ou gestionnaires de flotte : votre fourgon ou véhicule de fonction est en panne définitive ou accidenté ? L'enlèvement d'un Véhicule Utilitaire Léger (VUL) ou d'une voiture de société implique des démarches administratives spécifiques. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous accompagne dans le transport de ces véhicules professionnels.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les spécificités techniques d'un utilitaire</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Un gabarit hors norme</h3>
          <p>Les utilitaires de type Renault Master, Peugeot Boxer ou Fiat Ducato (souvent en version L2H2 ou L3H3) sont beaucoup plus lourds et imposants qu'une citadine classique. Ils dépassent parfois les 2 tonnes à vide et mesurent plus de 2,50 mètres de haut. Une dépanneuse classique plateau standard n'est pas toujours adaptée. Chez GH Épaviste, nous disposons de dépanneuses à forte capacité de charge pour assurer ce remorquage lourd en toute sécurité.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Les véhicules floqués</h3>
          <p>La plupart des véhicules d'entreprise sont recouverts de flocages publicitaires. Rassurez-vous, une fois acheminé vers notre centre VHU partenaire, le véhicule sera broyé, garantissant qu'aucune tierce personne n'utilisera un véhicule à vos couleurs sur la voie publique.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les documents administratifs pour une société</h2>
          <p>Parce que la carte grise est au nom d'une personne morale (votre entreprise), les documents requis pour l'enlèvement diffèrent de ceux d'un particulier. Préparez :</p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">Extrait Kbis et Pièce d'identité</h3>
              </div>
              <p className="text-gray-600">Un extrait Kbis de l'entreprise datant de moins de 3 mois est obligatoire pour prouver l'existence légale de la société. La copie de la pièce d'identité du gérant (ou de la personne dûment mandatée) doit être jointe.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">Carte grise signée</h3>
              </div>
              <p className="text-gray-600">Le certificat d'immatriculation original doit être barré, porter la mention « Cédé le [date/heure] pour destruction », signé par le représentant légal et comporter <strong>le cachet (tampon) de l'entreprise</strong>.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le transport vers un centre VHU agréé partenaire</h2>
          <p>Les professionnels, au même titre que les particuliers, ont l'obligation légale de confier la destruction de leurs VHU à des installations agréées par l'État pour éviter toute pollution environnementale.</p>
          <p>En tant que transporteur spécialisé, <span className="bg-yellow-100 px-1 font-medium text-black">GH Épaviste ne détruit pas les véhicules</span>. Nous venons charger votre utilitaire ou vos voitures de fonction, puis nous les acheminons vers un <strong>centre VHU agréé partenaire</strong>. C'est ce centre qui procédera à la dépollution (retrait de la batterie, vidange des huiles) et qui émettra le <strong>certificat de destruction officiel (Cerfa 14365*01)</strong>.</p>
          <p>Ce certificat est vital pour votre comptabilité : il vous permettra de sortir le véhicule de vos immobilisations comptables et d'arrêter le paiement de votre assurance flotte.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Pouvons-nous vous confier plusieurs véhicules à la fois ?</h3>
              <p className="text-gray-600 mb-0">Oui. Pour le renouvellement de votre flotte B2B, GH Épaviste peut organiser des rotations logistiques pour enlever plusieurs véhicules (utilitaires ou de fonction) en une ou plusieurs journées.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">L'enlèvement d'un gros fourgon est-il gratuit ?</h3>
              <p className="text-gray-600 mb-0">L'enlèvement par GH Épaviste est gratuit en Île-de-France, sous réserve que le véhicule soit complet et accessible pour notre dépanneuse de gros gabarit.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Qui me fournit la preuve de destruction pour ma comptabilité ?</h3>
              <p className="text-gray-600 mb-0">C'est le <strong>centre VHU agréé partenaire</strong>, qui réceptionne l'utilitaire après notre transport, qui vous transmettra le certificat de destruction Cerfa exigé par votre comptable.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Besoin de renouveler votre flotte ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Professionnels, confiez-nous l'enlèvement logistique de vos utilitaires. Nous les transporterons rapidement vers un centre VHU partenaire.</p>
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
