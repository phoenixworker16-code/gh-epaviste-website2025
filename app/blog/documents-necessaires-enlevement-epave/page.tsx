import Link from "next/link"
import { Metadata } from "next"
import { Phone, ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Documents nécessaires pour l'enlèvement d'une épave | GH Épaviste",
  description: "Liste complète des documents à fournir pour faire enlever votre épave : carte grise, certificat de non-gage, pièce d'identité. Guide officiel.",
  alternates: { canonical: "https://gh-epaviste.fr/blog/documents-necessaires-enlevement-epave" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Documents nécessaires pour l'enlèvement d'une épave | GH Épaviste",
    description: "Liste complète des documents à fournir pour faire enlever votre épave : carte grise, certificat de non-gage, pièce d'identité. Guide officiel.",
    url: "https://gh-epaviste.fr/blog/documents-necessaires-enlevement-epave",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Documents nécessaires pour l'enlèvement d'une épave" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documents nécessaires pour l'enlèvement d'une épave | GH Épaviste",
    description: "Liste complète des documents à fournir pour faire enlever votre épave : carte grise, certificat de non-gage, pièce d'identité. Guide officiel.",
    images: ["/og-image.jpg"],
  },
}

const docs = [
  { title: "Carte grise (certificat d'immatriculation)", detail: "La carte grise doit être barrée en diagonale et signée par le propriétaire. Inscrivez également la mention \"Cédé le [date]\" et l'heure de la cession." },
  { title: "Certificat de non-gage (attestation de situation administrative)", detail: "Ce document prouve que le véhicule n'est pas gagé (pas de crédit en cours) et qu'il ne fait l'objet d'aucune opposition. Il doit dater de moins de 15 jours et peut être obtenu gratuitement sur le site de l'ANTS (histovec.interieur.gouv.fr)." },
  { title: "Pièce d'identité valide", detail: "Carte nationale d'identité ou passeport en cours de validité. Ce document est nécessaire pour vérifier l'identité du propriétaire au moment de la remise du véhicule." },
]

export default function ArticleDocuments() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Documents nécessaires pour l'enlèvement d'une épave",
    "description": "Liste complète des documents pour faire enlever votre épave.",
    "publisher": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },
    "datePublished": "2025-02-10",
    "dateModified": "2025-06-01",
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 text-sm"><ArrowLeft className="w-4 h-4" /> Retour au blog</Link>
          <h1 className="text-4xl font-bold text-white mb-4">Documents nécessaires pour l&apos;enlèvement d&apos;une épave</h1>
          <p className="text-gray-300">Administratif · 4 min de lecture</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">Pour faire enlever votre véhicule hors d&apos;usage légalement et sans accroc, vous devez préparer certains documents. Voici la liste complète.</p>
        <h2 className="text-2xl font-bold text-black">Les 3 documents indispensables</h2>
        <div className="space-y-5">
          {docs.map((doc, i) => (
            <div key={i} className="flex gap-4 items-start bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <FileText className="w-7 h-7 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-black mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm">{doc.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-black mt-8">Et si je n&apos;ai pas tous les documents ?</h2>
        <p>Si vous avez perdu votre carte grise ou votre certificat de non-gage, il peut exister des solutions. Contactez-nous directement par téléphone pour que nous évaluions ensemble votre situation.</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-3">Vous avez vos documents ? Faites votre demande !</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
