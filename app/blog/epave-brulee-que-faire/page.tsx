import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, Flame, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Épave brûlée : que faire ? | GH Épaviste",
  description: "Votre véhicule a été incendié ? Découvrez les démarches à suivre : assurance, police, enlèvement de l'épave brûlée en Île-de-France.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/epave-brulee-que-faire" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Épave brûlée : que faire ? | GH Épaviste",
    description: "Votre véhicule a été incendié ? Découvrez les démarches à suivre : assurance, police, enlèvement de l'épave brûlée en Île-de-France.",
    url: "https://gh-epaviste.fr/blog/epave-brulee-que-faire",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Épave brûlée" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Épave brûlée : que faire ? | GH Épaviste",
    description: "Votre véhicule a été incendié ? Découvrez les démarches à suivre : assurance, police, enlèvement de l'épave brûlée en Île-de-France.",
    images: ["/og-image.jpg"],
  },
}

const steps = [
  { n: 1, title: "Sécurisez la zone", desc: "Ne touchez pas au véhicule brûlé sans précaution. Attendez que les pompiers confirment que tout risque d'incendie ou de toxicité est écarté." },
  { n: 2, title: "Appelez la police ou la gendarmerie", desc: "Déposez une plainte ou une déclaration d'incendie. Un rapport de police vous sera remis — conservez-le précieusement pour votre assurance." },
  { n: 3, title: "Déclarez le sinistre à votre assurance", desc: "Contactez votre assureur dans les 5 jours ouvrés après l'incendie. Transmettez le rapport de police et les photos du véhicule sinistré." },
  { n: 4, title: "Faites enlever l'épave brûlée", desc: "Une fois les formalités accomplies, contactez GH Épaviste pour l'enlèvement gratuit de votre épave brûlée. Nous intervenons dans toute l'Île-de-France." },
]

export default function ArticleEpaveBrulee() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Épave brûlée : que faire ?",
    "description": "Démarches à suivre après l'incendie d'un véhicule.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-04-22",
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
          <h1 className="text-4xl font-bold text-white mb-4">Épave brûlée : que faire ?</h1>
          <p className="text-gray-200">Urgence & démarches · 5 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">Un incendie de véhicule est une situation traumatisante. Qu&apos;il s&apos;agisse d&apos;un acte de malveillance, d&apos;un court-circuit ou d&apos;un accident, la procédure à suivre est toujours la même.</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex gap-3 items-start">
          <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm"><strong>Danger :</strong> Un véhicule brûlé peut continuer de dégager des gaz toxiques plusieurs heures après l&apos;extinction. Ne vous approchez pas du véhicule sans autorisation des services de secours.</p>
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Les 4 étapes à suivre</h2>
        <div className="space-y-4 mt-3">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">{step.n}</div>
              <div>
                <h3 className="font-bold text-black mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mt-8">Obligations légales du propriétaire</h2>
        <p>En tant que propriétaire, vous avez l&apos;obligation de faire enlever votre épave brûlée dans les délais légaux si elle se trouve sur la voie publique, sous peine de mise en demeure par la mairie ou la préfecture. Sur une propriété privée, les délais sont plus souples, mais l&apos;épave reste votre responsabilité.</p>

        <div className="flex gap-3 items-start bg-yellow-50 border border-yellow-200 rounded-xl p-5">
          <Flame className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-900 text-sm"><strong>Bon à savoir :</strong> GH Épaviste intervient même pour les épaves brûlées les plus endommagées. Aucun supplément tarifaire n&apos;est appliqué pour ce type de véhicule.</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Enlèvement d&apos;épave brûlée — Gratuit</h2>
          <p className="text-gray-600 mb-6">Intervention rapide dans toute l&apos;Île-de-France</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Demande gratuite</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
