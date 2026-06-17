import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Phone, Car, CheckCircle, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ScrollToTop from "@/components/scroll-to-top";
import { StructuredData } from "@/components/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services d'Enlèvement d'Épaves - GH Épaviste Île-de-France",
  description: "Découvrez nos services d'enlèvement gratuit d'épaves en Île-de-France : voitures, motos, utilitaires. Intervention rapide 24/7.",
  keywords: "services épaviste, enlèvement épave gratuit, Île-de-France",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Services d'Enlèvement d'Épaves - GH Épaviste",
    description: "Services professionnels d'enlèvement gratuit d'épaves en Île-de-France. Intervention rapide 24/7 dans tous les départements.",
    url: "https://gh-epaviste.fr/services",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Services d'Enlèvement d'Épaves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services d'Enlèvement d'Épaves - GH Épaviste",
    description: "Services professionnels d'enlèvement gratuit d'épaves en Île-de-France. Intervention rapide 24/7 dans tous les départements.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gh-epaviste.fr/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData 
        type="Service" 
        data={{
          name: "Services d'enlèvement d'épaves",
          description: "Services professionnels d'enlèvement gratuit d'épaves automobiles en Île-de-France",
          url: "https://gh-epaviste.fr/services"
        }}
      />
      <BreadcrumbNav aria-label="Chemin de navigation" />

      <main id="main-content">
        {/* Hero Services */}
        <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0d1017] to-transparent text-white overflow-hidden border-b border-gray-800" aria-labelledby="hero-services-heading">
          {/* Côté DROIT : Image Complète en fond sur la moitié droite */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 hidden lg:block">
            <Image
              src="/images/services.jpg"
              alt="Dépanneur professionnel complètement visible et son camion remorquage en intervention"
              fill
              className="object-cover object-[80%_center]"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dégradé de fondu sur la gauche de l'image (bords) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1017] to-transparent pointer-events-none"></div>
          </div>

          <div className="container relative mx-auto px-6 lg:px-12 xl:px-20 z-10 flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[600px]">
            {/* Côté GAUCHE : Texte */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center py-16 lg:py-24 text-left lg:pr-16">
              <div className="border-l-4 border-yellow-500 pl-6 mb-8">
                <h1 id="hero-services-heading" className="text-5xl lg:text-6xl xl:text-[4.5rem] font-sans font-bold text-white leading-tight tracking-tight">
                  Nos Services <br className="hidden sm:block" /> d&apos;Enlèvement
                </h1>
              </div>

              <p className="text-xl xl:text-2xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                GH Épaviste vous propose une gamme complète de services pour l&apos;enlèvement gratuit de tous types de véhicules en Île-de-France.
              </p>

              <div className="mt-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/formulaire" aria-label="Demander un enlèvement gratuit de votre épave">
                    DEMANDER UN ENLÈVEMENT
                  </Link>
                </Button>
              </div>
            </div>

            {/* Version mobile de l'image */}
            <div className="w-full relative h-[400px] lg:hidden mt-8 mb-12 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/images/services.jpg"
                alt="Dépanneur professionnel complètement visible et son camion remorquage en intervention"
                fill
                className="object-cover object-[80%_center]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Services Principaux */}
        <section className="py-16 bg-gray-50" aria-labelledby="main-services-heading">
          <div className="container mx-auto px-4">
            <h2 id="main-services-heading" className="text-3xl font-bold text-center mb-12 text-black">Nos Services Principaux</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Truck className="w-8 h-8 text-black" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-center text-black">Enlèvement Gratuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Enlèvement de votre véhicule hors d&apos;usage sans aucun frais, où que vous soyez en Île-de-France.
                  </p>
                  <ul className="space-y-2 text-sm" aria-label="Avantages de l&apos;enlèvement gratuit">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Aucun coût pour vous</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Intervention rapide</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Équipe professionnelle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Shield className="w-8 h-8 text-black" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl text-center text-black">Service Professionnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Service professionnel et sécurisé pour l&apos;enlèvement de votre véhicule.
                  </p>
                  <ul className="space-y-2 text-sm" aria-label="Avantages du service professionnel">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Équipe qualifiée</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Matériel adapté</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      <span>Intervention sécurisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types de Véhicules Détaillés */}
        <section className="py-16 bg-white" aria-labelledby="vehicle-types-heading">
          <div className="container mx-auto px-4">
            <h2 id="vehicle-types-heading" className="text-3xl font-bold text-center mb-12 text-black">Véhicules Pris en Charge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Car className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Véhicules Légers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-black mb-2">Types :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Types de véhicules légers enlevés">
                        <li>• Berlines</li>
                        <li>• Breaks</li>
                        <li>• Coupés</li>
                        <li>• Cabriolets</li>
                        <li>• SUV</li>
                        <li>• 4x4</li>
                        <li>• Citadines</li>
                        <li>• Monospaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">États pris en charge :</h4>
                      <div className="space-y-2">
                        <Badge variant="outline" className="w-full text-center border-red-300 text-red-600">
                          Accidentés
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-orange-300 text-orange-600">
                          Brûlés
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-gray-300 text-gray-600">
                          Abandonnés / Épaves
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-blue-300 text-blue-600">
                          Non roulants
                        </Badge>
                        <Badge variant="outline" className="w-full text-center border-purple-300 text-purple-600">
                          Sans carte grise
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Truck className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Autres Véhicules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-black mb-2">Types :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Autres types de véhicules enlevés">
                        <li>• Motos</li>
                        <li>• Scooters</li>
                        <li>• Quads</li>
                        <li>• Utilitaires légers</li>
                        <li>• Camionnettes</li>
                        <li>• Fourgons</li>
                        <li>• Pick-up</li>
                        <li>• Caravanes (petites)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-2">Spécialités :</h4>
                      <ul className="space-y-1 text-sm text-gray-600" aria-label="Spécialités d&apos;enlèvement de véhicules">
                        <li>• Véhicules de collection</li>
                        <li>• Véhicules de luxe</li>
                        <li>• Véhicules anciens</li>
                        <li>• Véhicules modifiés ou tunés</li>
                        <li>• Véhicules agricoles (sur demande)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Zone d'Intervention */}
        <section className="py-16 bg-gray-50" aria-labelledby="intervention-zone-heading">
          <div className="container mx-auto px-4">
            <h2 id="intervention-zone-heading" className="text-3xl font-bold text-center mb-4 text-black">Zone d'Intervention</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base">
              Besoin d'un <strong>épaviste en Île-de-France</strong> ? Nous assurons l'<strong>enlèvement d'épave gratuit</strong> et l'<strong>enlèvement de voiture hors d'usage</strong> (VHU) sous 24h. Nous intervenons dans tous les départements d'Île-de-France et confions chaque véhicule aux filières spécialisées de traitement conformément à la réglementation.
            </p>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-black flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-500 mr-3" aria-hidden="true" />
                    Île-de-France - Tous Départements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6" role="list" aria-label="Liste des départements de l'Île-de-France couverts">
                    {[
                      { code: "75", name: "Épaviste Paris" },
                      { code: "77", name: "Épaviste 77" },
                      { code: "78", name: "Épaviste 78" },
                      { code: "91", name: "Épaviste 91" },
                      { code: "92", name: "Épaviste 92" },
                      { code: "93", name: "Épaviste 93" },
                      { code: "94", name: "Épaviste 94" },
                      { code: "95", name: "Épaviste 95" },
                    ].map((dept) => (
                      <div key={dept.code} className="text-center p-3 bg-yellow-50 rounded-lg" role="listitem">
                        <div className="text-2xl font-bold text-yellow-600">{dept.code}</div>
                        <div className="text-sm text-gray-700 font-semibold">{dept.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Intervention rapide et gratuite dans <strong>toute l'Île-de-France</strong>, y compris les zones urbaines denses,
                      périurbaines et rurales. Nous gérons l'intégralité du processus d'enlèvement de votre véhicule hors d'usage (VHU).
                    </p>
                    <div className="flex justify-center flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">Zones Urbaines</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Zones Périurbaines</Badge>
                      <Badge className="bg-orange-100 text-orange-800">Zones Rurales</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Accès difficile</Badge>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Image
                        src="/images/ma-carte-idf-speciale.png"
                        alt="Carte Île-de-France"
                        width={420}
                        height={420}
                        className="rounded shadow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-black text-white" aria-labelledby="final-cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="final-cta-heading" className="text-3xl font-bold mb-6">
              Besoin d&apos;un <span className="text-yellow-500">Enlèvement Rapide</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez GH Épaviste dès maintenant pour un service professionnel et gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full sm:w-auto" asChild>
                <Link href="/formulaire" aria-label="Demander un enlèvement d&apos;épave via le formulaire">
                  DEMANDER UN ENLÈVEMENT
                </Link>
              </Button>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold w-full sm:w-auto shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="tel:+33753120793" aria-label="Appeler GH Épaviste au 00 33 7 53 12 07 93" className="flex justify-center items-center">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  00 33 7 53 12 07 93
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}