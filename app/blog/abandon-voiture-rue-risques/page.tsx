import Link from "next/link"
import { Metadata } from "next"
import { Phone, AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Peut-on abandonner une voiture dans la rue ? Les risques",
  description: "Quels sont les risques et sanctions encourus en cas d'abandon de véhicule (épave) sur la voie publique ? Découvrez l'alternative légale et gratuite.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/abandon-voiture-rue-risques" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Abandon d'une voiture dans la rue : sanctions et risques",
    description: "La loi est stricte : l'abandon d'une épave est lourdement sanctionné. Apprenez pourquoi vous devez faire appel à un spécialiste pour le remorquage.",
    url: "https://gh-epaviste.fr/blog/abandon-voiture-rue-risques",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Risques abandon véhicule sur voie publique" }],
  },
}

export default function ArticleAbandonVoiture() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Peut-on abandonner une voiture dans la rue ? Les risques",
    "description": "Explication des sanctions pénales liées à l'abandon d'une épave sur la voie publique et présentation de l'alternative de l'enlèvement gratuit.",
    "author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gh-epaviste.fr/blog/abandon-voiture-rue-risques" },
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
        "name": "Quelle est l'amende pour abandon de véhicule ?",
        "acceptedAnswer": { "@type": "Answer", "text": "L'abandon d'une épave est qualifié de délit de dépôt illégal de déchets. Il est passible d'une amende pouvant atteindre 75 000 euros et de 2 ans d'emprisonnement." }
      },
      {
        "@type": "Question",
        "name": "Une voiture garée devant chez moi depuis 6 mois est-elle considérée comme abandonnée ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, le code de la route considère qu'un véhicule laissé en stationnement ininterrompu au même endroit sur la voie publique pendant plus de 7 jours est en stationnement abusif, passible de mise en fourrière." }
      },
      {
        "@type": "Question",
        "name": "Qui paye les frais de fourrière ?",
        "acceptedAnswer": { "@type": "Answer", "text": "C'est le titulaire de la carte grise qui sera redevable des frais d'enlèvement et des frais de garde journaliers de la fourrière." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Abandon de véhicule", url: "https://gh-epaviste.fr/blog/abandon-voiture-rue-risques" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Peut-on abandonner une voiture dans la rue ? Les risques</h1>
          <p className="text-gray-300 text-lg">Conseils · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Votre vieille voiture ne démarre plus et vous l'avez laissée garée sur une place de parking publique ou le long du trottoir ? Attention, la loi est intransigeante à ce sujet. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous alerte sur les sanctions encourues en cas d'abandon de véhicule et vous propose la solution légale.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">L'abandon d'un véhicule : un délit environnemental</h2>
          <p>Un véhicule hors d'usage (VHU) n'est pas un simple objet inerte. Il contient des fluides toxiques : huile moteur, liquide de refroidissement, liquide de frein, acide de batterie et gaz de climatisation. Ces substances, en se répandant dans les sols ou les égouts, causent une pollution sévère.</p>
          <p>C'est pourquoi le Code de l'environnement (article L541-46) assimile une épave à un déchet dangereux. L'abandonner est donc considéré comme un <strong>délit de dépôt illégal de déchets</strong>.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Quelles sont les sanctions encourues ?</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-black m-0">La mise en fourrière (Stationnement abusif)</h3>
              </div>
              <p className="text-gray-600">Le Code de la route stipule qu'un stationnement ininterrompu au même endroit pendant plus de 7 jours est abusif. La police municipale peut alors ordonner la mise en fourrière. Le titulaire de la carte grise devra payer les frais d'enlèvement (environ 120€) et les frais de garde journaliers, en plus de l'amende contraventionnelle.</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-black m-0">Les sanctions pénales sévères</h3>
              </div>
              <p className="text-gray-600">Si le véhicule est clairement identifié comme une épave abandonnée causant une pollution (ou un risque d'incendie), les sanctions pénales peuvent aller jusqu'à <strong>2 ans de prison et 75 000 euros d'amende</strong> pour atteinte à l'environnement.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">La seule alternative légale</h2>
          <p>La législation (directive européenne et code de l'environnement) impose à tout propriétaire de remettre son VHU à des professionnels agréés.</p>
          
          <p>En tant que transporteur spécialisé, <span className="bg-yellow-100 px-1 font-medium text-black">GH Épaviste vous aide à éviter toutes ces sanctions</span>. Nous proposons le remorquage rapide et entièrement gratuit de votre véhicule (qu'il soit dans la rue ou dans votre garage) pour le confier à un <strong>centre VHU agréé partenaire</strong>.</p>
          <p>C'est ce centre VHU qui aura l'exclusivité d'opérer la dépollution physique et la destruction de la voiture. Il enregistrera alors la destruction en préfecture et vous remettra le certificat officiel qui vous disculpera définitivement aux yeux de la loi.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Une voiture garée devant chez moi depuis 6 mois est-elle considérée comme abandonnée ?</h3>
              <p className="text-gray-600 mb-0">Oui. Le stationnement est considéré comme abusif passé 7 jours au même emplacement sur la voie publique, ce qui justifie une mise en fourrière par les forces de l'ordre.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Puis-je abandonner mon épave dans un terrain privé ?</h3>
              <p className="text-gray-600 mb-0">Non. La loi interdit le stockage de véhicules hors d'usage non dépollués même sur un terrain privé en raison des risques de pollution des sols. Seuls les centres VHU partenaires ont le droit de les stocker de manière sécurisée.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Évitez les amendes et la fourrière</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Ne risquez pas de sanctions. Confiez-nous gratuitement le transport de votre véhicule vers notre centre VHU partenaire.</p>
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
