import Link from "next/link"
import { Metadata } from "next"
import { Phone, FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Comment faire enlever une voiture sans carte grise ?",
  description: "Vous avez perdu la carte grise de votre véhicule ? Découvrez les documents de remplacement acceptés pour un enlèvement d'épave légal.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/enlever-voiture-sans-carte-grise" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Comment faire enlever une voiture sans carte grise ?",
    description: "Perte ou vol de carte grise : les démarches pour faire remorquer votre véhicule hors d'usage vers un centre VHU partenaire.",
    url: "https://gh-epaviste.fr/blog/enlever-voiture-sans-carte-grise",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Comment faire enlever une voiture sans carte grise" }],
  },
}

export default function ArticleSansCarteGrise() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment faire enlever une voiture sans carte grise ?",
    "description": "Les démarches officielles pour confier un véhicule sans carte grise à un transporteur spécialisé vers un centre VHU agréé.",
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
        "name": "Peut-on mettre une voiture à la casse sans carte grise ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est possible à condition de fournir un document officiel de remplacement (déclaration de perte/vol, avis de retrait de la police, ou justificatif de propriété pour les véhicules de plus de 30 ans)." }
      },
      {
        "@type": "Question",
        "name": "Qui vérifie ces documents ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Notre équipe vérifie les documents lors de l'enlèvement, puis les transmet au centre VHU agréé partenaire qui valide officiellement la destruction du véhicule." }
      },
      {
        "@type": "Question",
        "name": "L'enlèvement sans carte grise est-il payant ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non, le remorquage par GH Épaviste reste totalement gratuit en Île-de-France, même en l'absence de la carte grise, tant que vous disposez des documents de substitution légaux." }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
        { name: "Enlèvement sans carte grise", url: "https://gh-epaviste.fr/blog/enlever-voiture-sans-carte-grise" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Comment faire enlever une voiture sans carte grise ?</h1>
          <p className="text-gray-300 text-lg">Administratif · 4 min de lecture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-xl text-gray-800 font-medium">Vous souhaitez vous débarrasser d'un véhicule hors d'usage (VHU) mais vous avez égaré la carte grise ? Rassurez-vous : confier l'enlèvement de votre véhicule à un transporteur professionnel comme <Link href="/" className="text-yellow-600 font-bold hover:underline">GH Épaviste</Link> reste tout à fait possible et légal, à condition de suivre une procédure précise.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Pourquoi la carte grise est-elle normalement obligatoire ?</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-6">Un enjeu de traçabilité légale</h3>
          <p>La carte grise (certificat d'immatriculation) est le document qui prouve que vous êtes bien le propriétaire du véhicule. Sa présentation vise à lutter contre le trafic de véhicules volés. Lorsqu'un centre VHU agréé partenaire reçoit une épave, il doit s'assurer de sa provenance légale avant de procéder à la dépollution et d'émettre un certificat de destruction.</p>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Les 3 cas de figure pour un enlèvement sans carte grise</h2>
          <p>Si vous ne disposez plus de la carte grise originale, l'administration française autorise des documents de remplacement selon votre situation :</p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">Cas n°1 : Perte ou vol de la carte grise</h3>
              </div>
              <p className="text-gray-600">Vous devez vous rendre en gendarmerie ou au commissariat de police pour remplir un formulaire de <strong>déclaration de perte ou de vol (Cerfa n°13753*04)</strong>. Ce document officiel remplace la carte grise et permettra au centre VHU partenaire d'accepter votre épave.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">Cas n°2 : Retrait par les forces de l'ordre</h3>
              </div>
              <p className="text-gray-600">Si votre véhicule a été gravement accidenté (procédure VEI ou VGE) et que les forces de l'ordre ont saisi la carte grise, vous devez fournir <strong>l'avis de retrait du certificat d'immatriculation</strong> qui vous a été remis par la police ou la gendarmerie.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-black m-0">Cas n°3 : Véhicule ancien (plus de 30 ans)</h3>
              </div>
              <p className="text-gray-600">Pour les véhicules très anciens (souvent des "sorties de grange"), vous devez fournir un <strong>justificatif de propriété</strong> (comme une facture d'achat originale ou un document notarié) confirmant que le véhicule vous appartient bien.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Le rôle du centre VHU et de l'épaviste</h2>
          <p>La règle est claire : GH Épaviste intervient uniquement comme <strong>prestataire de remorquage spécialisé</strong>. Lors de notre intervention gratuite, notre technicien vérifiera vos documents de substitution (déclaration de perte, etc.) en plus de votre pièce d'identité et du certificat de non-gage.</p>
          <p>Nous transportons ensuite le véhicule de manière sécurisée vers un de nos <strong>centres VHU agréés partenaires</strong>. C'est ce centre agréé par la préfecture qui valide définitivement le dossier, réalise la dépollution physique de l'épave et vous délivre le fameux certificat de destruction.</p>

          <hr className="my-12 border-gray-200" />

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-black mb-8">Foire Aux Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Peut-on mettre une voiture à la casse sans carte grise ?</h3>
              <p className="text-gray-600 mb-0">Oui, c'est possible à condition de fournir un document officiel de remplacement (déclaration de perte/vol, avis de retrait de la police, ou justificatif de propriété pour les véhicules de plus de 30 ans).</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">Puis-je faire enlever la voiture de quelqu'un d'autre sans la carte grise ?</h3>
              <p className="text-gray-600 mb-0">Non. Seul le titulaire de la carte grise peut demander la destruction d'un véhicule, même en cas de perte. Une exception existe si vous disposez d'une procuration légale écrite, accompagnée d'une copie de la pièce d'identité du propriétaire légitime.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-black mb-2">L'enlèvement sans carte grise est-il payant ?</h3>
              <p className="text-gray-600 mb-0">Non, le remorquage par GH Épaviste reste totalement gratuit en Île-de-France, même en l'absence de la carte grise, tant que vous disposez des documents de substitution légaux exigés par les centres VHU partenaires.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Un enlèvement en règle ?</h2>
          <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">Vous avez les documents de remplacement ? Contactez GH Épaviste pour planifier le transport gratuit de votre véhicule vers notre centre VHU partenaire.</p>
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
