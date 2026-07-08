import Link from "next/link"
import { Metadata } from "next"
import { Phone, FileCheck, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Quels documents pour faire enlever une épave ?",
  description: "Carte grise, certificat de non-gage, pièce d'identité : la liste complète des documents à fournir pour le remorquage de votre véhicule vers un centre VHU.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/documents-necessaires-enlevement-epave" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Documents nécessaires pour l'enlèvement d'une épave",
    description: "Tout savoir sur les démarches administratives et les documents obligatoires pour mettre un véhicule à la casse légalement.",
    url: "https://gh-epaviste.fr/blog/documents-necessaires-enlevement-epave",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Documents nécessaires enlèvement épave" }],
  },
}

export default function ArticleDocumentsNecessaires() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Quels documents pour faire enlever une épave ?",
    "description": "Liste exhaustive des documents administratifs requis par les centres VHU partenaires pour la destruction légale d'un véhicule.",
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
        "name": "Puis-je confier ma voiture si la carte grise n'est pas à mon nom ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non. Le titulaire de la carte grise doit obligatoirement signer le document de cession. Si vous n'avez pas refait la carte grise après l'achat, le centre VHU partenaire refusera la destruction." }
      },
      {
        "@type": "Question",
        "name": "De quand doit dater le certificat de non-gage ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le certificat de situation administrative (non-gage) doit dater de moins de 15 jours à la date exacte de l'enlèvement." }
      },
      {
        "@type": "Question",
        "name": "GH Épaviste conserve-t-il les documents ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non. Notre rôle de transporteur est de collecter les documents originaux lors du remorquage pour les transmettre physiquement au centre VHU agréé partenaire qui validera le dossier." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Documents pour enlèvement", url: "https://gh-epaviste.fr/blog/documents-necessaires-enlevement-epave" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Quels documents pour faire enlever une épave ?</h1>
          <p className="text-gray-300 text-lg">Administratif · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Pour que votre véhicule hors d'usage (VHU) soit dépollué et broyé en toute légalité, un dossier administratif rigoureux doit être constitué. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous détaille les 3 documents obligatoires à préparer avant notre intervention.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les 3 documents obligatoires pour les particuliers</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">1. La carte grise originale</h3>
              </div>
              <p className="text-gray-600">Le certificat d'immatriculation prouve que vous êtes bien le propriétaire. Le jour de l'enlèvement, la carte grise devra être barrée d'un trait diagonal indélébile avec la mention obligatoire : <strong>« Cédé le [date] à [heure] pour destruction »</strong>, suivie de votre signature.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">2. Le certificat de situation administrative (non-gage)</h3>
              </div>
              <p className="text-gray-600">Ce document, communément appelé <Link href="/blog/comment-obtenir-certificat-non-gage" className="text-blue-600 underline hover:text-blue-800">certificat de non-gage</Link>, doit dater de <strong>moins de 15 jours</strong>. Il garantit au centre VHU partenaire qu'aucune opposition légale (PV impayés, saisie d'huissier, crédit en cours) n'empêche la destruction du véhicule.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">3. Une pièce d'identité valide</h3>
              </div>
              <p className="text-gray-600">Une copie recto-verso de votre carte d'identité, passeport ou titre de séjour est exigée. L'identité doit correspondre parfaitement à celle inscrite sur la carte grise.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le circuit de vos documents et le rôle des intervenants</h2>
          <p>GH Épaviste intervient exclusivement en tant que <strong>transporteur logistique spécialisé</strong>. Lors du remorquage, notre chauffeur contrôlera la conformité de vos documents, car notre responsabilité est de transporter l'épave vers un site agréé.</p>
          <p>Nous remettons ensuite votre dossier physique complet à notre <strong>centre VHU agréé partenaire</strong>. C'est l'administration de ce centre de dépollution qui validera définitivement le dossier et vous délivrera le <strong>Cerfa n°14365*01 (certificat de destruction)</strong>.</p>
          
          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Et pour les cas particuliers ?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Sociétés / Utilitaires :</strong> Vous devrez fournir en plus un Kbis de moins de 3 mois et la pièce d'identité du gérant. (<Link href="/blog/enlevement-vehicule-utilitaire-societe" className="text-blue-600 underline">Voir les détails</Link>)</li>
            <li><strong>Perte de la carte grise :</strong> Il faudra fournir la déclaration officielle de perte ou de vol (Cerfa n°13753*04) visée par les forces de l'ordre. (<Link href="/blog/enlever-voiture-sans-carte-grise" className="text-blue-600 underline">Guide sans carte grise</Link>)</li>
          </ul>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Puis-je confier ma voiture si la carte grise n'est pas à mon nom ?</h3>
              <p className="text-gray-600 mb-0">Non. Le titulaire de la carte grise doit obligatoirement signer la cession. Si vous venez d'acheter le véhicule et n'avez pas refait la carte à votre nom, le centre VHU partenaire refusera la destruction.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">De quand doit dater le certificat de non-gage ?</h3>
              <p className="text-gray-600 mb-0">Le document officiel délivré par le site de l'État (HistoVec) doit obligatoirement dater de moins de 15 jours le jour exact du remorquage.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Puis-je vous envoyer les documents par photo ?</h3>
              <p className="text-gray-600 mb-0">Non, l'administration française (préfecture et centre VHU) exige les originaux barrés. Les documents physiques sont récupérés par notre technicien lors de l'enlèvement pour être transmis au centre partenaire.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Vos documents sont prêts ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Planifiez l'enlèvement gratuit de votre véhicule en Île-de-France. Nous l'acheminerons en toute légalité vers notre centre VHU partenaire.</p>
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
