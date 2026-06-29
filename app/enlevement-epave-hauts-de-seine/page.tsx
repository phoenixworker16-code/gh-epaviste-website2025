import Link from "next/link"
import { Metadata } from "next"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CitiesList } from "@/components/cities-list"
import villes from "@/data/villes.json"
export const metadata: Metadata = {
  title: "Enlèvement d'épave gratuit Hauts-de-Seine (92) - Service Premium",
  description:
    "Face à la forte densité urbaine du 92, stocker un véhicule en panne ou accidenté peut vite devenir un problème coûteux. GH Épaviste met à votre disposition son savoir-faire pour un enlèvement d'épave gratuit et sécurisé dans les Hauts-de-Seine.",
  alternates: { canonical: "https://gh-epaviste.fr/enlevement-epave-hauts-de-seine" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Enlèvement d'épave gratuit Hauts-de-Seine (92) - Service Premium",
    description: "Face à la forte densité urbaine du 92, stocker un véhicule en panne ou accidenté peut vite devenir un problème coûteux. GH Épaviste met à votre disposition son savoir-faire.",
    url: "https://gh-epaviste.fr/enlevement-epave-hauts-de-seine",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enlèvement d'épave gratuit Hauts-de-Seine (92)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlèvement d'épave gratuit Hauts-de-Seine (92) - Service Premium",
    description:
      "Face à la forte densité urbaine du 92, stocker un véhicule en panne ou accidenté peut vite devenir un problème coûteux. GH Épaviste met à votre disposition son savoir-faire.",
    images: ["/og-image.jpg"],
  },
}

const cities = ["Nanterre", "Boulogne-Billancourt", "Colombes", "Courbevoie", "Asnières-sur-Seine", "Rueil-Malmaison", "Levallois-Perret", "Clichy", "Issy-les-Moulineaux", "Antony"]

export default function EpavisteHautsDeSeine() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enlèvement d'épave gratuit dans les Hauts-de-Seine",
    description: "Service professionnel d'enlèvement d'épaves dans les Hauts-de-Seine (92). Intervention rapide 24h/24.",
    provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
    areaServed: { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
    serviceType: "Enlèvement d'épaves automobiles",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" /> Hauts-de-Seine — Département 92
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-500">Enlèvement d&apos;épave gratuit Hauts-de-Seine (92)</span><br />
            Service Premium
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Face à la forte densité urbaine du 92, stocker un véhicule en panne ou accidenté peut vite devenir un problème coûteux. GH Épaviste met à votre disposition son savoir-faire pour un enlèvement d&apos;épave gratuit et sécurisé dans les Hauts-de-Seine. Nous intervenons rapidement par l&apos;A86 et les grands axes pour dégager vos véhicules à Boulogne-Billancourt, Nanterre, Asnières-sur-Seine, Colombes et Courbevoie. Un service pro, rapide et conforme aux normes environnementales européennes pour le recyclage automobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8">Demander un Enlèvement Gratuit</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Notre service dans les <span className="text-yellow-500">Hauts-de-Seine</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Zone dense couverte", desc: "Nous sommes habitués aux interventions en milieu urbain dense propre au 92." },
              { title: "Enlèvement gratuit", desc: "Aucun frais de déplacement ni d'enlèvement, même dans les copropriétés." },
              { title: "Disponible 7j/7", desc: "Disponible tous les jours de la semaine, de 8h à 22h." },
            ].map((item, i) => (
              <Card key={i} className="text-center border-2 border-yellow-100 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Variables passées en props (calculées côté serveur) */}
      <CitiesList 
        cities={villes.filter(v => v.depNumber === "92").map(v => ({ slug: v.slug, ville: v.ville }))} 
        departementName="Hauts-de-Seine" 
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Questions fréquentes — Hauts-de-Seine (92)</h2>
          <div className="space-y-6">
            {[
              { q: "Intervenez-vous dans les immeubles avec parking souterrain dans le 92 ?", a: "Oui, nous intervenons dans les parkings souterrains sous réserve d'accès suffisant pour notre matériel. Contactez-nous pour évaluer la faisabilité." },
              { q: "L'enlèvement est-il gratuit même à Boulogne-Billancourt ou Levallois ?", a: "Oui, l'enlèvement est entièrement gratuit dans tout le 92, incluant les villes les plus denses comme Boulogne, Levallois ou Courbevoie." },
              { q: "Quel délai pour un enlèvement urgent dans les Hauts-de-Seine ?", a: "Appelez-nous directement au 07 53 12 07 93. En cas d'urgence, nous faisons notre maximum pour intervenir le jour même." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Épave dans le 92 ? On intervient rapidement !</h2>
          <p className="text-black/80 mb-8 text-lg">Enlèvement gratuit dans tout le département Hauts-de-Seine</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formulaire"><Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8">Formulaire en Ligne</Button></Link>
            <a href="tel:+33753120793"><Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold px-8"><Phone className="w-4 h-4 mr-2" /> 07 53 12 07 93</Button></a>
          </div>
        </div>
      </section>
    </div>
  )
}
