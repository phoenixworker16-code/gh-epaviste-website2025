import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Shield, Clock, Leaf, Euro, Phone, ChevronDown, Car, Bike, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollToTop from "@/components/ScrollToTop"

export default function HomePage() {
  return (
    <>
      {/* NE PAS METTRE DE HEADER ICI - IL EST DÉJÀ DANS LE LAYOUT */}
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="/images/tow-truck-hero.jpg"
            alt="Dépanneuse GH Épaviste transportant un véhicule accidenté"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="container mx-auto px-4 relative z-20 flex items-center justify-center min-h-[600px]">
            <div className="max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-500">GH Épaviste Agréé</span>
                <br />
                Enlèvement Gratuit & Rapide d'Épaves en Île-de-France
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Votre solution pour un débarras sans frais, partout en Île-de-France.
              </p>
              <Link href="/formulaire">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 mb-4"
                >
                  DEMANDER UN ENLÈVEMENT GRATUIT
                </Button>
              </Link>
              <p className="text-sm text-gray-300">Intervention 24/7 sur demande</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
            <ChevronDown className="w-8 h-8 text-yellow-500" />
          </div>
        </section>

        {/* Nos Avantages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Pourquoi Choisir GH Épaviste ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Euro className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Service Gratuit</h3>
                  <p className="text-gray-600">Enlèvement sans frais, aucun coût caché. Nous nous occupons de tout.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Intervention Rapide</h3>
                  <p className="text-gray-600">Prise en charge sous 24h, intervention d'urgence possible.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Service Professionnel</h3>
                  <p className="text-gray-600">
                    Enlèvement professionnel et sécurisé de votre véhicule.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Respect de l'Environnement</h3>
                  <p className="text-gray-600">Recyclage écologique conforme aux normes environnementales.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types de Véhicules */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
              Nous Enlevons Tout Type de Véhicules
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Quel que soit leur état : accidentés, brûlés, abandonnés
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Car, title: "Voitures", desc: "Berlines, SUV, Coupés" },
                { icon: Truck, title: "Utilitaires", desc: "Camionnettes, Fourgons" },
                { icon: Bike, title: "Motos & Scooters", desc: "Tous types 2 roues" },
                { icon: Car, title: "4x4 & Pick-up", desc: "Véhicules tout-terrain" },
              ].map((vehicle, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-gray-100"
                >
                  <CardContent className="p-6">
                    <vehicle.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2 text-black">{vehicle.title}</h3>
                    <p className="text-gray-600 text-sm">{vehicle.desc}</p>
                    <div className="flex justify-center mt-3 space-x-2">
                      <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600">
                        Accidentés
                      </Badge>
                      <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600">
                        Brûlés
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comment Ça Marche */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-yellow-500">Votre Épave Enlevée</span> en 3 Étapes Simples
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Remplissez le Formulaire</h3>
                <p className="text-gray-300">Décrivez votre véhicule et votre situation en quelques clics</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Prise de Rendez-vous Rapide</h3>
                <p className="text-gray-300">Nous vous contactons sous 2h pour planifier l'intervention</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Enlèvement Rapide</h3>
                <p className="text-gray-300">Intervention rapide et professionnelle</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
              <span className="text-yellow-500">Intervention Gratuite</span> Partout en Île-de-France
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Paris (75)",
                      "Seine-et-Marne (77)",
                      "Yvelines (78)",
                      "Essonne (91)",
                      "Hauts-de-Seine (92)",
                      "Seine-Saint-Denis (93)",
                      "Val-de-Marne (94)",
                      "Val-d'Oise (95)",
                    ].map((dept, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-yellow-500" />
                        <span className="text-black font-medium">{dept}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/carte-idf.png"
                    alt="Carte Île-de-France"
                    width={220}
                    height={220}
                    className="mx-auto mb-4 rounded shadow"
                  />
                  <p className="text-gray-600 text-lg">
                    Que vous soyez à Paris, Versailles, Évry ou Melun, notre équipe intervient rapidement et sans frais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achat/Vente de Véhicules */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
              <span className="text-yellow-500">Achat & Vente</span> de Véhicules
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-yellow-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Euro className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black">Achat de Véhicules</h3>
                    <p className="text-gray-600 mb-4">
                      Nous achetons également des véhicules d'occasion en bon état ou à réparer.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                        Vendre Mon Véhicule
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-yellow-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black">Vente de Véhicules</h3>
                    <p className="text-gray-600 mb-4">
                      Découvrez notre sélection de véhicules d'occasion contrôlés et garantis.
                    </p>
                    <Link href="/vehicules">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                        Voir Nos Véhicules
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Prêt à Vous Débarrasser de Votre Épave ?</h2>
            <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un enlèvement gratuit et rapide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formulaire">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
                  DEMANDER UN ENLÈVEMENT
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+33753120793">APPELER MAINTENANT</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/gh-logo-white.png"
                alt="GH Épaviste"
                width={220}
                height={120}
                className="h-24 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-400 mb-4">
                GH Épaviste - Enlèvement Gratuit & Rapide d'Épaves en Île-de-France
              </p>
              <p className="text-yellow-500 font-bold">Enlèvement d'épaves gratuit 24/7 en Île-de-France</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/vehicules" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Nos Véhicules
                  </Link>
                </li>
                <li>
                  <Link href="/services/guide" className="text-gray-400 hover:text-[#f6ba06] transition-colors">
                    Guide étape par étape
                  </Link>
                </li>
                <li>
                  <Link href="/formulaire" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Formulaire
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  📞{" "}
                  <a href="tel:+33753120793" className="hover:text-yellow-500">
                    00 33 7 53 12 07 93
                  </a>
                </li>
                <li>✉️ contact@gh-epaviste.fr</li>
                <li>📍 Île-de-France</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Légal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Politique de Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GH Épaviste. Tous droits réservés. Powered By PhOeNiX</p>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </>
  )
}