import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Phone, CheckCircle, MapPin, ShieldCheck, Clock, ThumbsUp, Wrench, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import villes from "@/data/villes.json"

export function generateStaticParams() {
  return villes.map((ville) => ({
    slug: `epaviste-gratuit-${ville.slug}`,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (!params.slug.startsWith('epaviste-gratuit-')) {
    return {}
  }

  const citySlug = params.slug.replace('epaviste-gratuit-', '')
  const ville = villes.find((v) => v.slug === citySlug)
  
  if (!ville) {
    return {}
  }

  const title = `Épaviste Gratuit ${ville.ville} (${ville.zipCode}) | Enlèvement Épave 24h/7j`
  const description = `Besoin d'un épaviste agréé à ${ville.ville} (${ville.depNumber}) ? GH-Épaviste intervient gratuitement 24h/24 et 7j/7 pour l'enlèvement de votre véhicule hors d'usage. Appelez-nous !`

  return {
    title,
    description,
    alternates: { canonical: `https://gh-epaviste.fr/epaviste-gratuit-${ville.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `https://gh-epaviste.fr/epaviste-gratuit-${ville.slug}`,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  }
}

export default function VillePage({ params }: { params: { slug: string } }) {
  if (!params.slug.startsWith('epaviste-gratuit-')) {
    notFound()
  }

  const citySlug = params.slug.replace('epaviste-gratuit-', '')
  const ville = villes.find((v) => v.slug === citySlug)
  
  if (!ville) {
    notFound()
  }

  const index = villes.findIndex((v) => v.slug === citySlug)
  const introVariant = index % 3

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": `GH-Épaviste ${ville.ville}`,
    "description": `Service d'enlèvement d'épave gratuit à ${ville.ville} (${ville.zipCode}) et dans tout le département ${ville.departement}. Intervention rapide 24h/7j.`,
    "telephone": "+33753120793",
    "url": `https://gh-epaviste.fr/epaviste-gratuit-${ville.slug}`,
    "logo": "https://gh-epaviste.fr/logo.png",
    "image": "https://gh-epaviste.fr/logo.png",
    "priceRange": "0€",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": ville.ville
    },
    "openingHours": "Mo-Su 00:00-24:00"
  }

  const whatsappMessage = `Bonjour, je souhaite faire enlever un véhicule sur la commune de ${ville.ville} (${ville.zipCode}).`
  const whatsappUrl = `https://wa.me/33753120793?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/30 shadow-[0_0_15px_rgba(255,196,43,0.2)]">
            <MapPin className="w-4 h-4" /> {ville.ville} ({ville.zipCode}) — Intervention Rapide
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Épaviste gratuit à <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">{ville.ville}</span> ({ville.zipCode})
          </h1>
          
          {introVariant === 0 && (
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Votre véhicule est en panne, accidenté ou hors d'usage ? Notre camion de remorquage circule quotidiennement à <strong>{ville.ville}</strong> ainsi que dans tout le département du <strong>{ville.departement}</strong> pour vous débarrasser gratuitement de votre épave.
            </p>
          )}
          {introVariant === 1 && (
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Besoin de libérer rapidement de l'espace de stationnement ? Spécialiste de l'enlèvement de véhicules, notre équipe agréée se déplace à <strong>{ville.ville} ({ville.depNumber})</strong> sans aucun frais. Nous prenons en charge toutes les démarches administratives dans le <strong>{ville.departement}</strong>.
            </p>
          )}
          {introVariant === 2 && (
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ne laissez pas une épave encombrer votre terrain. GH Épaviste est le partenaire de confiance à <strong>{ville.ville}</strong> pour un enlèvement d'épave gratuit, rapide et 100% conforme à la législation en vigueur dans le <strong>{ville.departement}</strong>.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="tel:+33753120793" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(255,196,43,0.3)] transition-all transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2 animate-pulse" /> 07 53 12 07 93
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold px-8 py-6 rounded-xl transition-all">
                Contact WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Pourquoi choisir notre service à <span className="text-yellow-600">{ville.ville}</span> ?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-black text-xl mb-3">Service 100% Gratuit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aucun frais caché. Le déplacement à {ville.ville} et le remorquage de votre véhicule sont entièrement à notre charge.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-black text-xl mb-3">Intervention Rapide</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous sommes disponibles 24h/24 et 7j/7 pour intervenir dans le secteur de {ville.zipCode} dans les plus brefs délais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ThumbsUp className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-black text-xl mb-3">Démarches Simplifiées</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous nous occupons de remplir le certificat de cession et de confier votre véhicule à une filière de recyclage automobile partenaire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Véhicules Acceptés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-6">Tous types de véhicules enlevés à {ville.ville}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Qu'importe l'état de votre véhicule, notre dépanneuse est équipée pour le remorquer en toute sécurité, même dans les endroits difficiles d'accès du {ville.depNumber}.
              </p>
              <ul className="space-y-4">
                {["Voitures particulières (berlines, citadines, SUV)", "Véhicules utilitaires et fourgons", "Motos et scooters", "Véhicules accidentés, brûlés ou en panne", "Véhicules sans contrôle technique"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full bg-gray-100 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <div className="flex items-start mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black text-xl mb-2">Documents à préparer :</h3>
                  <p className="text-gray-600 text-sm mb-4">Pour que l'enlèvement à {ville.ville} se passe bien, merci de préparer :</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• La carte grise originale du véhicule</li>
                    <li>• Une pièce d'identité valide (ou passeport)</li>
                    <li>• Un certificat de non-gage de moins de 15 jours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Questions fréquentes sur {ville.ville}</h2>
            <p className="text-gray-600">Tout ce que vous devez savoir avant notre intervention.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
              <h3 className="font-bold text-black text-lg mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs mr-3">Q</div>
                Combien de temps faut-il pour qu'un épaviste arrive à {ville.ville} ?
              </h3>
              <p className="text-gray-600 pl-9">
                En général, nous pouvons intervenir dans la journée ou sous 24h maximum sur {ville.ville} et ses environs. En cas d'urgence, n'hésitez pas à nous appeler directement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
              <h3 className="font-bold text-black text-lg mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs mr-3">Q</div>
                Dois-je payer quelque chose pour le remorquage depuis le {ville.depNumber} ?
              </h3>
              <p className="text-gray-600 pl-9">
                Absolument rien. Notre service est 100% gratuit. L'enlèvement, le transport et la prise en charge de votre véhicule n'entraînent aucun frais pour vous.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
              <h3 className="font-bold text-black text-lg mb-3 flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs mr-3">Q</div>
                Est-ce que vous fournissez le certificat de destruction à {ville.ville} ?
              </h3>
              <p className="text-gray-600 pl-9">
                Oui. Lors de l'enlèvement, nous remplissons avec vous un certificat de cession pour destruction. Vous recevrez ensuite le certificat de destruction final une fois le véhicule pris en charge par notre filière partenaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'un enlèvement urgent à <span className="text-yellow-500">{ville.ville}</span> ?
          </h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Contactez notre équipe de professionnels dès maintenant. Nous sommes à votre disposition pour planifier un rendez-vous selon vos disponibilités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33753120793">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-6 rounded-xl shadow-[0_0_15px_rgba(255,196,43,0.3)]">
                Appeler le 07 53 12 07 93
              </Button>
            </a>
            <Link href="/formulaire">
              <Button size="lg" className="bg-transparent border-2 border-gray-600 text-white hover:border-yellow-500 hover:text-yellow-500 font-bold px-10 py-6 rounded-xl transition-all">
                Formulaire en Ligne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
