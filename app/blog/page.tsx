import Link from "next/link"
import { Metadata } from "next"
import { BookOpen, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog Épaviste | Guide Pratique Enlèvement d'Épave — GH Épaviste",
  description:
    "Découvrez nos guides pratiques sur l'enlèvement d'épave : procédures, documents, conseils. Tout savoir sur les véhicules hors d'usage en Île-de-France.",
  alternates: { canonical: "https://gh-epaviste.fr/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blog & Guide Pratique",
    description: "Guides et conseils pratiques pour l'enlèvement d'épave en Île-de-France.",
    url: "https://gh-epaviste.fr/blog",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Blog GH Épaviste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Guide Pratique",
    description: "Guides et conseils pratiques pour l'enlèvement d'épave en Île-de-France.",
    images: ["/og-image.jpg"],
  },
}

const articles = [
  {
    slug: "comment-faire-enlever-une-epave-gratuitement",
    title: "Comment se déroule un enlèvement d'épave gratuit en Île-de-France ?",
    excerpt: "Tout ce que vous devez savoir pour faire enlever votre véhicule hors d'usage sans débourser un centime, étape par étape.",
    readTime: "5 min",
    category: "Guide pratique",
  },
  {
    slug: "enlever-voiture-sans-carte-grise",
    title: "Comment faire enlever une voiture sans carte grise ?",
    excerpt: "Vous avez perdu la carte grise de votre véhicule ? Découvrez les documents de remplacement acceptés pour un enlèvement légal.",
    readTime: "4 min",
    category: "Administratif",
  },
  {
    slug: "enlevement-vehicule-accidente-brule-immobilise",
    title: "Enlèvement d'un véhicule accidenté, brûlé ou immobilisé",
    excerpt: "Que faire de votre véhicule accidenté, incendié ou en panne définitive ? Les solutions de remorquage vers un centre VHU partenaire.",
    readTime: "5 min",
    category: "Conseils",
  },
  {
    slug: "enlevement-parking-souterrain",
    title: "Enlèvement d'épave en parking souterrain : comment faire ?",
    excerpt: "Extraction difficile ? GH Épaviste remorque votre véhicule depuis votre sous-sol avec du matériel spécialisé.",
    readTime: "4 min",
    category: "Guide pratique",
  },
  {
    slug: "enlevement-vehicule-utilitaire-societe",
    title: "Enlèvement d'un véhicule utilitaire ou de société",
    excerpt: "Artisans et professionnels, découvrez les démarches pour faire enlever un fourgon ou une flotte d'entreprise hors d'usage.",
    readTime: "4 min",
    category: "Professionnels",
  },
  {
    slug: "documents-necessaires-enlevement-epave",
    title: "Quels documents pour faire enlever une épave ?",
    excerpt: "Carte grise, certificat de non-gage, pièce d'identité : la liste complète des documents à fournir pour le remorquage.",
    readTime: "4 min",
    category: "Administratif",
  },
  {
    slug: "comment-obtenir-certificat-non-gage",
    title: "Comment obtenir un certificat de non-gage pour votre voiture ?",
    excerpt: "Démarches pour télécharger rapidement et gratuitement votre certificat de situation administrative, obligatoire pour la destruction.",
    readTime: "3 min",
    category: "Administratif",
  },
  {
    slug: "demarches-ants-apres-enlevement",
    title: "Cession pour destruction : Les démarches sur l'ANTS",
    excerpt: "Comment déclarer la cession de son véhicule pour destruction sur le site de l'ANTS après l'enlèvement.",
    readTime: "4 min",
    category: "Administratif",
  },
  {
    slug: "resilier-assurance-auto-apres-destruction",
    title: "Résilier son assurance auto après la destruction d'une épave",
    excerpt: "Les démarches pour informer votre assureur de la destruction de votre véhicule par un centre VHU et clôturer votre contrat.",
    readTime: "3 min",
    category: "Conseils",
  },
  {
    slug: "abandon-voiture-rue-risques",
    title: "Peut-on abandonner une voiture dans la rue ? Les risques",
    excerpt: "Quels sont les risques et sanctions encourus en cas d'abandon de véhicule sur la voie publique ? Découvrez l'alternative légale.",
    readTime: "4 min",
    category: "Conseils",
  },
]

const categoryColors: Record<string, string> = {
  "Guide pratique": "bg-blue-100 text-blue-700",
  "Administratif": "bg-purple-100 text-purple-700",
  "Conseils": "bg-green-100 text-green-700",
  "Professionnels": "bg-gray-800 text-white",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "Blog", url: "https://gh-epaviste.fr/blog" },
      ]} />
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" /> Blog & Guides Pratiques
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tout savoir sur l&apos;<span className="text-yellow-500">enlèvement d&apos;épave</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Guides pratiques, conseils et procédures pour comprendre l&apos;enlèvement de votre véhicule hors d&apos;usage en Île-de-France.
          </p>
        </div>
      </section>

      <main>
        {/* Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent group-hover:border-yellow-400">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center gap-1 text-yellow-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                        Lire l&apos;article <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Prêt à faire enlever votre épave ?</h2>
            <p className="text-black/80 mb-8 text-lg">Service gratuit, intervention rapide en Île-de-France</p>
            <Link href="/formulaire">
              <span className="inline-block bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
                Demander un Enlèvement Gratuit
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
