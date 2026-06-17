import Link from "next/link"
import { Metadata } from "next"
import { Phone, Shield, Users, MapPin, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "À Propos de GH Épaviste | Service Professionnel en Île-de-France",
  description:
    "Découvrez GH Épaviste : notre histoire, nos valeurs et notre engagement pour un enlèvement d'épave gratuit, rapide et respectueux de l'environnement en Île-de-France.",
  alternates: { canonical: "https://gh-epaviste.fr/a-propos" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "À Propos de GH Épaviste | Service Professionnel en Île-de-France",
    description:
      "Découvrez GH Épaviste : notre histoire, nos valeurs et notre engagement pour un enlèvement d'épave gratuit, rapide et respectueux de l'environnement en Île-de-France.",
    url: "https://gh-epaviste.fr/a-propos",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "À Propos de GH Épaviste" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos de GH Épaviste | Service Professionnel en Île-de-France",
    description:
      "Découvrez GH Épaviste : notre histoire, nos valeurs et notre engagement pour un enlèvement d'épave gratuit, rapide et respectueux de l'environnement en Île-de-France.",
    images: ["/og-image.jpg"],
  },
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-20" aria-labelledby="apropos-hero-heading">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="apropos-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de <span className="text-yellow-500">GH Épaviste</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Votre partenaire de confiance pour l&apos;enlèvement d&apos;épaves gratuit en Île-de-France. Rapide, professionnel et respectueux de l&apos;environnement.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Notre histoire */}
        <section className="py-16 bg-white" aria-labelledby="qui-sommes-nous-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="qui-sommes-nous-heading" className="text-3xl font-bold text-black mb-6">Qui sommes-nous ?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  GH Épaviste est un service professionnel spécialisé dans l&apos;enlèvement gratuit de véhicules hors d&apos;usage (épaves) en Île-de-France. Nous intervenons dans les 8 départements de la région — Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et Val-d&apos;Oise.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Notre mission est simple : vous permettre de vous débarrasser de votre véhicule hors d&apos;usage rapidement, sans frais et en toute sérénité. Que votre véhicule soit accidenté, brûlé, en panne ou simplement inutilisable, nous nous occupons de tout.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chaque véhicule collecté est confié à des filières spécialisées de traitement et de recyclage, dans le respect de la réglementation environnementale en vigueur.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Service professionnel", value: "Garanti" },
                  { icon: Users, label: "Clients satisfaits", value: "500+" },
                  { icon: MapPin, label: "Départements couverts", value: "8" },
                  { icon: Star, label: "Disponibilité", value: "24h/24" },
                ].map((stat, i) => (
                  <div key={i} className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-center">
                    <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 bg-gray-50" aria-labelledby="engagements-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="engagements-heading" className="text-3xl font-bold text-center text-black mb-12">Nos Engagements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Gratuité totale", desc: "L'enlèvement de votre épave est entièrement gratuit, sans frais de déplacement ni frais cachés. Aucune mauvaise surprise." },
                { title: "Rapidité", desc: "Nous nous engageons à intervenir sous 24h après votre demande, souvent le jour même pour les cas urgents." },
                { title: "Respect de l'environnement", desc: "Les véhicules collectés sont remis à des filières spécialisées conformes aux exigences environnementales en vigueur." },
              ].map((v, i) => (
                <Card key={i} className="border-2 border-yellow-100 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-6">
                    <CheckCircle className="w-10 h-10 text-yellow-500 mb-4" aria-hidden="true" />
                    <h3 className="font-bold text-black text-lg mb-3">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-white" aria-labelledby="zone-intervention-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="zone-intervention-heading" className="text-3xl font-bold text-black mb-6">Notre Zone d&apos;Intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              GH Épaviste intervient dans l&apos;ensemble de l&apos;Île-de-France, couvrant les 8 départements de la région.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {["Paris (75)", "Seine-et-Marne (77)", "Yvelines (78)", "Essonne (91)", "Hauts-de-Seine (92)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Val-d'Oise (95)"].map((dept) => (
                <span key={dept} className="bg-black text-yellow-500 px-4 py-2 rounded-full font-semibold text-sm">{dept}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-yellow-500" aria-labelledby="apropos-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="apropos-cta-heading" className="text-3xl font-bold text-black mb-4">Faire appel à GH Épaviste</h2>
            <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit, rapide et professionnel</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Demander un Enlèvement</Button></Link>
              <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" aria-hidden="true" /> 07 53 12 07 93</Button></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
