import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Comment obtenir un certificat de non-gage gratuitement ?",
  description: "Démarches pour télécharger rapidement et gratuitement votre certificat de situation administrative (non-gage), obligatoire pour l'enlèvement de votre épave.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/comment-obtenir-certificat-non-gage" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Obtenir un certificat de non-gage pour sa voiture",
    description: "Le guide pour télécharger le document officiel HistoVec et comprendre les cas d'opposition avant la mise à la casse.",
    url: "https://gh-epaviste.fr/blog/comment-obtenir-certificat-non-gage",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Certificat de non-gage HistoVec" }],
  },
}

export default function ArticleCertificatNonGage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment obtenir un certificat de non-gage pour votre voiture ?",
    "description": "Explications claires pour obtenir gratuitement son certificat de situation administrative, document indispensable pour confier un véhicule à un centre VHU.",
    "author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://gh-epaviste.fr/blog/comment-obtenir-certificat-non-gage" },
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
        "name": "Où obtenir le certificat de non-gage ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le document officiel se télécharge gratuitement sur le site HistoVec du gouvernement. Attention aux sites frauduleux qui font payer ce service gratuit." }
      },
      {
        "@type": "Question",
        "name": "Puis-je faire enlever une voiture avec des amendes impayées ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non. S'il y a une opposition du Trésor Public pour des PV impayés, vous devez d'abord régler l'amende pour lever l'opposition avant que le centre VHU partenaire puisse accepter l'épave." }
      },
      {
        "@type": "Question",
        "name": "Quelle est la durée de validité du document ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le certificat de situation administrative doit dater de moins de 15 jours le jour de l'enlèvement du véhicule." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Certificat de non-gage", url: "https://gh-epaviste.fr/blog/comment-obtenir-certificat-non-gage" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Comment obtenir un certificat de non-gage pour votre voiture ?</h1>
          <p className="text-gray-300 text-lg">Administratif · 3 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Vous vous apprêtez à faire enlever votre épave ? Parmi les <Link href="/blog/documents-necessaires-enlevement-epave" className="text-blue-600 underline">documents obligatoires</Link>, le certificat de situation administrative, communément appelé certificat de non-gage, est indispensable. <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> vous explique comment l'obtenir gratuitement en 2 minutes.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Qu'est-ce que le certificat de non-gage ?</h2>
          <p>Le certificat de situation administrative est un document délivré par le Ministère de l'Intérieur. Il prouve officiellement que rien ne s'oppose à la cession ou à la destruction de votre véhicule. Il vérifie deux choses :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>L'absence de gage :</strong> Vous avez fini de payer le crédit qui a éventuellement servi à acheter le véhicule.</li>
            <li><strong>L'absence d'opposition :</strong> Le véhicule n'est pas signalé volé, il n'y a pas d'amendes impayées au Trésor Public, et il n'est pas saisi par un huissier.</li>
          </ul>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Où et comment l'obtenir gratuitement ?</h2>
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-black mb-3 mt-0">Le site officiel (HistoVec)</h3>
            <p className="text-gray-700 mb-0">Le seul et unique site officiel, gratuit et sécurisé pour télécharger ce document est le portail gouvernemental <strong>HistoVec</strong> (ou l'ancien SIV). Ne payez jamais sur un site tiers pour ce document public !</p>
          </div>

          <p>Munissez-vous de votre carte grise actuelle et saisissez les informations suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La plaque d'immatriculation du véhicule.</li>
            <li>La date de première immatriculation.</li>
            <li>L'identité exacte du titulaire (avec l'orthographe précise de la carte grise).</li>
          </ul>
          <p>Le document est généré en PDF instantanément.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Que faire si le véhicule est gagé ?</h2>
          <p>Si votre document affiche une "opposition", la destruction est légalement bloquée. Vous devez résoudre le problème avant notre intervention :</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <p><strong>Opposition du Trésor Public :</strong> Vous devez contacter le centre des amendes et régler vos contraventions impayées pour lever l'opposition.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <p><strong>Opposition d'huissier ou organisme de crédit :</strong> Vous devez solder la dette auprès de l'huissier ou de la banque concernée.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <p><strong>Opposition VEI/VGE (Accident) :</strong> L'expert bloque la carte grise, mais la cession pour <em>destruction</em> à un centre VHU reste la seule exception légalement autorisée.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le rôle du centre VHU partenaire</h2>
          <p>Le jour J, le chauffeur de GH Épaviste récupérera ce document. En tant que transporteur, nous nous assurons que le dossier est complet.</p>
          <p>C'est ensuite le <strong>centre VHU agréé partenaire</strong> qui saisira les données sur l'ANTS. Si le certificat présente une opposition non levée, la préfecture refusera informatiquement d'enregistrer la destruction, rendant impossible la délivrance du certificat Cerfa 14365*01 par le centre partenaire.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Puis-je faire enlever une voiture avec des amendes impayées ?</h3>
              <p className="text-gray-600 mb-0">Non. La préfecture bloquant la destruction tant que les amendes ne sont pas payées, le centre VHU partenaire ne pourra pas accepter l'épave. Vous devez régler la dette au Trésor Public en amont.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Quelle est la durée de validité du document ?</h3>
              <p className="text-gray-600 mb-0">La loi impose que le certificat de situation administrative ait été édité il y a <strong>moins de 15 jours</strong> à la date du remorquage.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Votre certificat est en règle ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Contactez-nous pour planifier l'enlèvement gratuit de votre véhicule vers notre centre VHU partenaire en Île-de-France.</p>
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
