import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckSquare, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Cession pour destruction : Les démarches sur l'ANTS",
  description: "Comment déclarer la cession de son véhicule pour destruction sur le site de l'ANTS ? Découvrez le rôle du centre VHU agréé dans cette démarche.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/demarches-ants-apres-enlevement" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cession pour destruction sur l'ANTS",
    description: "Guide étape par étape pour régulariser la destruction de votre véhicule auprès de la préfecture via le site de l'ANTS.",
    url: "https://gh-epaviste.fr/blog/demarches-ants-apres-enlevement",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Démarches ANTS après enlèvement épave" }],
  },
}

export default function ArticleDemarchesANTS() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Déclaration de cession pour destruction : Les démarches sur l'ANTS",
    "description": "Comprendre la procédure de déclaration de destruction d'un véhicule sur l'ANTS et le transfert de responsabilité vers le centre VHU agréé.",
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
        "name": "Dois-je déclarer la destruction sur l'ANTS moi-même ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le centre VHU agréé partenaire enregistre informatiquement la déclaration d'achat pour destruction. Cependant, pour sécuriser totalement votre dossier, il est conseillé de vous connecter sur l'ANTS pour finaliser la déclaration de cession de votre côté." }
      },
      {
        "@type": "Question",
        "name": "Quel document dois-je conserver ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Vous devez conserver le volet détachable de la carte grise (si ancien format) ou l'accusé d'enregistrement de cession, ainsi que la copie du Cerfa 14365*01." }
      },
      {
        "@type": "Question",
        "name": "Quand ma responsabilité est-elle annulée ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Dès lors que la date et l'heure de la cession sont enregistrées sur la carte grise barrée et que le centre VHU partenaire valide le dossier sur le SIV (Système d'Immatriculation des Véhicules)." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Démarches ANTS", url: "https://gh-epaviste.fr/blog/demarches-ants-apres-enlevement" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Déclaration de cession pour destruction : Les démarches sur l'ANTS</h1>
          <p className="text-gray-300 text-lg">Administratif · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Votre véhicule a été remorqué par <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> ? La procédure physique est terminée, mais il reste une étape administrative incontournable : officialiser la destruction auprès de l'État via l'ANTS (Agence Nationale des Titres Sécurisés).</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Pourquoi déclarer la cession pour destruction ?</h2>
          <p>Tant que la préfecture n'est pas informée de la destruction, le véhicule est légalement considéré comme étant toujours sous votre responsabilité en circulation. Enregistrer la cession pour destruction permet de :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vous dégager de toute responsabilité pénale (en cas d'usurpation de plaques par exemple).</li>
            <li>Stopper l'émission de contraventions automatiques à votre nom.</li>
            <li>Justifier officiellement la <Link href="/blog/resilier-assurance-auto-apres-destruction" className="text-blue-600 underline">résiliation de votre assurance auto</Link>.</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Comment fonctionne la déclaration sur l'ANTS ?</h2>
          <p>La déclaration de destruction se fait conjointement entre vous et le centre agréé.</p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <CheckSquare className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">1. L'enregistrement par le centre VHU partenaire</h3>
              </div>
              <p className="text-gray-600">GH Épaviste transporte votre véhicule vers notre <strong>centre VHU agréé partenaire</strong>. Dès sa réception, c'est ce centre qui se connecte au SIV (Système d'Immatriculation des Véhicules) pour déclarer la prise en charge pour destruction. Il émet alors le fameux certificat de destruction (Cerfa 14365*01).</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <CheckSquare className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">2. Votre validation sur l'ANTS</h3>
              </div>
              <p className="text-gray-600">Bien que le centre VHU fasse la déclaration administrative d'achat pour destruction, la loi vous oblige (en tant que vendeur) à finaliser la déclaration. Connectez-vous sur le site de l'ANTS, rubrique "Vendre ou donner son véhicule", et déclarez la cession au profit du centre VHU dont le numéro d'agrément figure sur votre Cerfa.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le rôle strict de GH Épaviste</h2>
          <p>Pour éviter toute confusion : GH Épaviste n'intervient pas sur l'ANTS. Notre entreprise agit exclusivement en tant que <strong>transporteur agréé et prestataire logistique</strong>.</p>
          <p>Nous faisons le lien physique entre vous et le centre de dépollution. Les démarches administratives de radiation de l'immatriculation sont du ressort exclusif du <strong>centre VHU partenaire</strong> habilité par la préfecture et de vous-même via votre espace ANTS personnel.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Dois-je déclarer la destruction sur l'ANTS moi-même ?</h3>
              <p className="text-gray-600 mb-0">Oui, même si le centre VHU partenaire l'enregistre de son côté, finaliser la démarche sur votre compte ANTS garantit la fermeture définitive de votre dossier en préfecture.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Quel document dois-je conserver ?</h3>
              <p className="text-gray-600 mb-0">Vous devez conserver précieusement l'accusé d'enregistrement de cession généré par l'ANTS, ainsi que la copie du Cerfa 14365*01 remis par le centre VHU partenaire.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Besoin de faire enlever un véhicule ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Confiez le remorquage de votre épave à GH Épaviste. Nous l'acheminerons en toute sécurité vers un centre VHU partenaire pour destruction légale.</p>
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
