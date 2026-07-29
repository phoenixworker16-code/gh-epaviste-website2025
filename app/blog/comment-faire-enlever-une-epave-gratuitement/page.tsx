import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Comment se déroule un enlèvement d'épave gratuit en Île-de-France ?",
  description: "Découvrez comment faire enlever votre épave gratuitement. Étapes, documents obligatoires et informations sur la mise au rebut en centre VHU agréé partenaire.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Comment se déroule un enlèvement d'épave gratuit en Île-de-France ?",
    description: "Guide complet pour l'enlèvement gratuit de votre véhicule hors d'usage et son transfert vers un centre VHU agréé partenaire.",
    url: "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Comment faire enlever une épave gratuitement" }],
  },
}

export default function ArticleEnleverEpaveGratuitement() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment se déroule un enlèvement d'épave gratuit en Île-de-France ?",
    "description": "Guide complet sur la procédure d'enlèvement d'épave gratuit, les documents à fournir et le rôle de l'épaviste transporteur vers le centre VHU agréé.",
    "author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement" },
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
        "name": "L'enlèvement est-il vraiment 100% gratuit ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, le remorquage est totalement gratuit en Île-de-France si le véhicule est complet (avec son moteur et ses roues) et accessible pour une dépanneuse." }
      },
      {
        "@type": "Question",
        "name": "Qui s'occupe de la destruction du véhicule ?",
        "acceptedAnswer": { "@type": "Answer", "text": "La destruction physique et la dépollution sont exclusivement réalisées par un centre VHU agréé partenaire. GH Épaviste n'intervient qu'en tant que prestataire spécialisé pour l'enlèvement et le transport sécurisé vers ce centre." }
      },
      {
        "@type": "Question",
        "name": "Qui me remet le certificat de destruction ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le certificat de destruction est établi et délivré par le centre VHU agréé partenaire qui prend en charge votre véhicule après notre remorquage. Ce document vous permet de résilier votre assurance." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Enlèvement d'épave gratuit", url: "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Comment se déroule un enlèvement d'épave gratuit en Île-de-France ?</h1>
          <p className="text-gray-300 text-lg">Guide pratique · 5 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Vous possédez un vieux véhicule qui ne roule plus, une voiture accidentée ou une épave encombrante ? La loi française est stricte : il est interdit de laisser une épave sur la voie publique ou même dans un jardin en raison des risques de pollution. Heureusement, vous pouvez faire appel à un service de transport spécialisé comme <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> pour un enlèvement gratuit.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Pourquoi faire enlever son épave ?</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Les risques liés à l'abandon</h3>
          <p>Un Véhicule Hors d'Usage (VHU) est considéré comme un déchet dangereux. Les batteries au plomb, les huiles de moteur et les liquides de refroidissement peuvent gravement polluer les sols. L'abandon d'une épave est d'ailleurs sanctionné par la loi (jusqu'à 1 500 € d'amende et mise en fourrière à vos frais).</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">La solution : le transfert vers un centre VHU agréé</h3>
          <p>Pour vous débarrasser légalement de votre véhicule, celui-ci doit obligatoirement être acheminé vers un <strong>centre VHU agréé par la préfecture</strong>. <span className="bg-yellow-100 px-1 font-medium text-black">Attention : GH Épaviste n'est pas un centre VHU agréé et ne détruit pas les véhicules.</span> Notre métier est d'assurer l'enlèvement et le transport sécurisé de votre épave depuis votre domicile (ou lieu de panne) jusqu'au centre VHU agréé partenaire, qui se chargera de la dépollution et du recyclage.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les étapes de l'enlèvement gratuit avec GH Épaviste</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0 text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2 mt-0">La prise de contact et le rendez-vous</h3>
                <p className="text-gray-600 mb-0">Vous nous contactez par téléphone ou via notre <Link href="/formulaire" className="text-yellow-600 font-bold hover:underline">formulaire en ligne</Link>. Nous évaluons la situation (accessibilité, état du véhicule) et fixons un rendez-vous selon vos disponibilités, y compris le week-end, partout en Île-de-France.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0 text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2 mt-0">Le remorquage de votre véhicule</h3>
                <p className="text-gray-600 mb-0">Le jour J, notre dépanneuse se présente sur place. Nos techniciens vérifient vos documents administratifs et procèdent au chargement de l'épave en toute sécurité. <strong>Ce service de transport est 100% gratuit</strong> si le véhicule est complet.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0 text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2 mt-0">Le transfert vers le centre VHU partenaire</h3>
                <p className="text-gray-600 mb-0">Nous acheminons directement votre véhicule vers un de nos <strong>centres VHU agréés partenaires</strong>, conformément à la réglementation. C'est ce centre qui prendra en charge les opérations de dépollution.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les documents administratifs obligatoires</h2>
          <p>Avant l'arrivée de la dépanneuse, selon les directives officielles de l'administration française, vous devrez préparer :</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>La carte grise originale</strong> : Barrée avec la mention « cédée le [date/heure] pour destruction » et signée.</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Un certificat de non-gage</strong> (certificat de situation administrative) datant de moins de 15 jours.</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Une pièce d'identité</strong> valide ou un passeport.</span></li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Que se passe-t-il après le remorquage ?</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">La dépollution et le recyclage</h3>
          <p>Le centre VHU agréé partenaire réceptionne le véhicule. Ses équipes spécialisées retirent les batteries, les huiles, et les éléments polluants avant de recycler les métaux et les pièces pouvant être réutilisées.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">La délivrance du certificat de destruction</h3>
          <p>Une fois la prise en charge effectuée, <strong>le centre VHU agréé édite le certificat de destruction</strong>. Ce document officiel vous décharge de toute responsabilité envers le véhicule et vous permet de résilier votre assurance auto et de faire les démarches de déclaration de cession sur le site de l'ANTS.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">L'enlèvement est-il vraiment 100% gratuit ?</h3>
              <p className="text-gray-600 mb-0">Oui, le remorquage par GH Épaviste est totalement gratuit en Île-de-France, sous réserve que le véhicule soit complet (moteur et roues présents) et qu'il soit accessible pour notre dépanneuse.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Qui s'occupe de la destruction physique de ma voiture ?</h3>
              <p className="text-gray-600 mb-0">La destruction, la dépollution et le broyage sont <strong>exclusivement réalisés par un centre VHU agréé partenaire</strong>. GH Épaviste n'intervient qu'en tant que prestataire logistique pour assurer l'enlèvement et le transport sécurisé.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Qui me remet le certificat de destruction ?</h3>
              <p className="text-gray-600 mb-0">Le certificat de destruction est établi et délivré par le centre VHU agréé partenaire qui prend en charge votre véhicule. GH Épaviste s'assure du bon transfert pour que vous puissiez recevoir ce document essentiel.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Besoin d'un enlèvement rapide ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Confiez le transport de votre véhicule à GH Épaviste. Nous l'acheminons gratuitement vers un centre VHU partenaire en Île-de-France.</p>
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
