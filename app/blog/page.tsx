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
    title: "Comment faire enlever une épave gratuitement ?",
    excerpt: "Tout ce que vous devez savoir pour faire enlever votre véhicule hors d'usage sans débourser un centime en Île-de-France.",
    readTime: "5 min",
    category: "Guide pratique",
  },
  {
    slug: "documents-necessaires-enlevement-epave",
    title: "Documents nécessaires pour l'enlèvement d'une épave",
    excerpt: "Carte grise, certificat de non-gage, pièce d'identité... Voici la liste complète des documents à préparer avant l'enlèvement.",
    readTime: "4 min",
    category: "Administratif",
  },
  {
    slug: "enlever-voiture-sans-carte-grise",
    title: "Peut-on enlever une voiture sans carte grise ?",
    excerpt: "Vous avez perdu la carte grise de votre véhicule ? Découvrez les démarches possibles pour faire quand même enlever votre épave.",
    readTime: "4 min",
    category: "Guide pratique",
  },
  {
    slug: "combien-vaut-voiture-accidentee",
    title: "Combien vaut une voiture accidentée ?",
    excerpt: "Valeur vénale, rachat par l'assurance, vente à un épaviste... Comment évaluer la valeur de votre véhicule accidenté.",
    readTime: "6 min",
    category: "Conseils",
  },
  {
    slug: "comment-vendre-voiture-en-panne",
    title: "Comment vendre une voiture en panne ?",
    excerpt: "Votre voiture est en panne et ne démarre plus ? Plusieurs solutions s'offrent à vous. On vous explique tout.",
    readTime: "5 min",
    category: "Conseils",
  },
  {
    slug: "epave-brulee-que-faire",
    title: "Épave brûlée : que faire ?",
    excerpt: "Votre véhicule a été incendié ? Démarches administratives, déclaration à l'assurance et enlèvement : le guide complet.",
    readTime: "5 min",
    category: "Guide pratique",
  },
  {
    slug: "vehicule-immobilise-solutions",
    title: "Véhicule immobilisé : quelles solutions ?",
    excerpt: "Voiture en panne, accidentée ou qui ne peut plus rouler ? Découvrez toutes les options pour vous en débarrasser.",
    readTime: "4 min",
    category: "Conseils",
  },
]

const categoryColors: Record<string, string> = {
  "Guide pratique": "bg-blue-100 text-blue-700",
  "Administratif": "bg-purple-100 text-purple-700",
  "Conseils": "bg-green-100 text-green-700",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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
