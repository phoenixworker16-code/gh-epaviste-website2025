import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Comment faire enlever une épave gratuitement ? | GH Épaviste",
  description: "Guide complet pour faire enlever votre épave gratuitement en Île-de-France. Étapes, documents, conditions et conseils pratiques.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Comment faire enlever une épave gratuitement ? | GH Épaviste",
    description: "Guide complet pour faire enlever votre épave gratuitement en Île-de-France. Étapes, documents, conditions et conseils pratiques.",
    url: "https://gh-epaviste.fr/blog/comment-faire-enlever-une-epave-gratuitement",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Comment faire enlever une épave gratuitement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment faire enlever une épave gratuitement ? | GH Épaviste",
    description: "Guide complet pour faire enlever votre épave gratuitement en Île-de-France. Étapes, documents, conditions et conseils pratiques.",
    images: ["/og-image.jpg"],
  },
}

export default function ArticleEnleverEpaveGratuitement() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment faire enlever une épave gratuitement ?",
    "description": "Guide complet pour faire enlever votre épave gratuitement en Île-de-France.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-01-15",
    "dateModified": "2025-06-01",
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Comment faire enlever une épave gratuitement ?</h1>
          <p className="text-gray-300">Guide pratique · 5 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">Vous avez un vieux véhicule qui ne roule plus, une voiture accidentée ou une épave qui prend la place dans votre garage ou votre cour ? Bonne nouvelle : il est tout à fait possible de faire enlever ce véhicule <strong>gratuitement et légalement</strong>.</p>

          <h2 className="text-2xl font-bold text-black mt-8">Qu'est-ce qu'une épave ?</h2>
          <p>Une épave au sens réglementaire désigne un <strong>véhicule hors d'usage (VHU)</strong> : un véhicule que son propriétaire souhaite abandonner ou qui ne peut plus circuler de façon normale. Cela inclut les voitures accidentées, brûlées, en panne irréparable, ou tout simplement trop vieilles pour être réparées.</p>

          <h2 className="text-2xl font-bold text-black mt-8">Étapes pour faire enlever votre épave gratuitement</h2>
          <div className="space-y-4">
            {[
              { n: 1, title: "Rassemblez vos documents", desc: "Avant tout, préparez la carte grise du véhicule (barrée et signée), un certificat de non-gage (attestation de situation administrative) de moins de 15 jours et une pièce d'identité valide." },
              { n: 2, title: "Contactez un service d'enlèvement", desc: "Appelez GH Épaviste au 07 53 12 07 93 ou remplissez notre formulaire en ligne. Vous serez recontacté rapidement pour planifier l'intervention." },
              { n: 3, title: "Convenez d'un rendez-vous", desc: "Nous planifions l'enlèvement à votre convenance, du lundi au dimanche, de 8h à 22h. L'intervention est généralement réalisée sous 24h." },
              { n: 4, title: "L'enlèvement est effectué", desc: "Notre équipe se déplace à l'adresse indiquée pour prendre en charge le véhicule. Aucun frais ne vous sera demandé." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-black mt-8">Conditions pour un enlèvement gratuit</h2>
          <p>L'enlèvement est gratuit sous réserve que :</p>
          <ul className="space-y-2 mt-3">
            {["Le véhicule soit complet (sans pièces majeures retirées comme le moteur ou les roues)", "Le véhicule soit accessible (pas au fond d'une forêt ou derrière des obstacles infranchissables)", "Vous puissiez fournir les documents d'identité et de propriété du véhicule"].map((c, i) => (
              <li key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" /><span>{c}</span></li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-black mt-8">Que devient le véhicule ?</h2>
          <p>Une fois collecté, le véhicule est confié à des filières spécialisées de traitement et de recyclage conformément à la réglementation en vigueur. Les fluides sont dépollués, les pièces récupérables sont valorisées et le reste est recyclé.</p>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Prêt à faire enlever votre épave ?</h2>
          <p className="text-gray-600 mb-6">Service gratuit en Île-de-France — intervention sous 24h</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
