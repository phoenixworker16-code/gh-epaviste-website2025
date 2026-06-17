import Link from "next/link"
import { Metadata } from "next"
import { Star, Phone, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Avis Clients GH Épaviste | Témoignages Enlèvement d'Épave",
  description:
    "Découvrez les avis de nos clients satisfaits en Île-de-France. GH Épaviste : enlèvement gratuit d'épaves noté 5 étoiles. Intervention rapide et professionnelle.",
  alternates: { canonical: "https://gh-epaviste.fr/avis-clients" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Avis Clients GH Épaviste | Témoignages Enlèvement d'Épave",
    description:
      "Découvrez les avis de nos clients satisfaits en Île-de-France. GH Épaviste : enlèvement gratuit d'épaves noté 5 étoiles. Intervention rapide et professionnelle.",
    url: "https://gh-epaviste.fr/avis-clients",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Avis Clients GH Épaviste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis Clients GH Épaviste | Témoignages Enlèvement d'Épave",
    description:
      "Découvrez les avis de nos clients satisfaits en Île-de-France. GH Épaviste : enlèvement gratuit d'épaves noté 5 étoiles. Intervention rapide et professionnelle.",
    images: ["/og-image.jpg"],
  },
}

const reviews = [
  {
    name: "Mohamed B.",
    location: "Paris 19e",
    rating: 5,
    date: "Avril 2025",
    text: "Service impeccable ! J'avais une vieille Peugeot 206 qui prenait la poussière depuis 2 ans. Appel le lundi, enlèvement le mercredi. Équipe sérieuse, ponctuelle et très professionnelle. Je recommande vivement !",
  },
  {
    name: "Sophie M.",
    location: "Créteil (94)",
    rating: 5,
    date: "Mars 2025",
    text: "Ma voiture avait été brûlée dans le parking de ma résidence. GH Épaviste a tout pris en charge rapidement. Ils ont même aidé pour les démarches. Service gratuit et sans stress, merci !",
  },
  {
    name: "Karim D.",
    location: "Bobigny (93)",
    rating: 5,
    date: "Février 2025",
    text: "Très bonne expérience. J'ai rempli le formulaire en ligne le soir, j'ai été rappelé le lendemain matin et l'enlèvement a eu lieu dans les 24h. Rien à redire, service au top.",
  },
  {
    name: "Isabelle T.",
    location: "Versailles (78)",
    rating: 5,
    date: "Janvier 2025",
    text: "Mon vieux monospace accidenté encombrait mon garage depuis des mois. GH Épaviste est venu rapidement et a tout enlevé proprement. Personnel courtois et efficace.",
  },
  {
    name: "Rachid A.",
    location: "Nanterre (92)",
    rating: 5,
    date: "Décembre 2024",
    text: "Je craignais des complications car mon véhicule était dans une ruelle étroite. Aucun problème pour l'équipe qui avait le matériel adapté. Enlèvement gratuit et sans accroc.",
  },
  {
    name: "Lucie F.",
    location: "Melun (77)",
    rating: 5,
    date: "Novembre 2024",
    text: "Excellent service, je n'aurais pas pensé que c'était aussi simple ! Le formulaire sur le site est très clair, la prise de contact rapide et l'intervention efficace. Merci GH Épaviste !",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GH Épaviste",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
    "reviewBody": r.text,
  })),
}

export default function AvisClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-yellow-500 text-yellow-500" />)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Avis de nos <span className="text-yellow-500">Clients</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les témoignages de clients ayant fait appel à GH Épaviste pour l&apos;enlèvement gratuit de leur véhicule en Île-de-France.
          </p>
        </div>
      </section>

      {/* Note globale */}
      <section className="py-10 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-6xl font-bold text-black">5.0</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
              </div>
              <div className="text-gray-600 text-sm mt-1">Note moyenne sur 6 avis</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-300"></div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Rapidité", note: "5/5" },
                { label: "Professionnalisme", note: "5/5" },
                { label: "Service gratuit", note: "5/5" },
              ].map((c, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-yellow-600">{c.note}</div>
                  <div className="text-sm text-gray-600">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <Card key={i} className="border-2 border-gray-100 hover:border-yellow-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-bold text-black text-lg">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location} · {review.date}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-yellow-400 mb-3" />
                  <p className="text-gray-700 leading-relaxed text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: "Le service est-il vraiment gratuit ?", a: "Oui, l'enlèvement de votre épave est totalement gratuit partout en Île-de-France, sans frais de déplacement ni coût caché." },
              { q: "Combien de temps prend l'intervention ?", a: "Après réception de votre demande, nous vous contactons sous 2h et planifions l'intervention dans les 24h." },
              { q: "Que devient mon véhicule après l'enlèvement ?", a: "Il est confié à des filières spécialisées de traitement et de recyclage conformément à la réglementation en vigueur." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Rejoignez nos clients satisfaits !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit en Île-de-France — intervention sous 24h</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Faire une Demande</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
