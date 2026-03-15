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
        <section className="relative bg-black text-white overflow-hidden min-h-[700px] lg:min-h-[750px] flex items-center">
          {/* Gradient overlay: dark on the left for text, transparent on the right to show the truck */}
          <div className="absolute inset-0 z-10 hero-gradient"></div>
          <Image
            src="/images/epaviste-enlevement-epave-ile-de-france.jpg"
            alt="Camion épaviste enlevant une voiture pour enlèvement d'épave gratuit en Île-de-France"
            title="Service d'épaviste agréé pour enlèvement d'épave gratuit"
            fill
            className="object-cover object-right-bottom"
            priority
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="container mx-auto px-4 relative z-20 py-20 lg:py-28 flex items-center">
            {/* Conteneur principal redimensionné et décalé vers la gauche */}
            <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl pr-0 md:pr-4">

              {/* Title */}
              <h1 className="hero-animate-2 font-bold mb-8 drop-shadow-xl">
                <span className="block text-yellow-500 text-5xl md:text-6xl mb-4">GH Épaviste Agréé</span>
                <span className="block text-white text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] xl:text-[2.5rem] leading-tight lg:whitespace-nowrap">
                  Enlèvement Gratuit d&apos;Épaves <span className="whitespace-nowrap">en Île-de-France</span>
                </span>
              </h1>

              {/* Arguments rapides */}
              <div className="hero-animate-4 flex flex-row items-center justify-between w-full max-w-[95%] sm:max-w-full gap-2 sm:gap-6 mb-12">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-100 flex-1 justify-center sm:justify-start">
                  <span className="flex items-center justify-center bg-yellow-500/20 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left">Enlèvement 100% gratuit</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-100 flex-1 justify-center">
                  <span className="flex items-center justify-center bg-yellow-500/20 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left">Intervention rapide</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-100 flex-1 justify-center sm:justify-end">
                  <span className="flex items-center justify-center bg-yellow-500/20 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left">Toute l&apos;Île-de-France</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-animate-5 flex flex-col sm:flex-row gap-4">
                <Link href="/formulaire">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    DEMANDER UN ENLÈVEMENT GRATUIT
                  </Button>
                </Link>
              </div>
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

        {/* Achat/Vente de Véhicules - Premium Split-Screen */}
        <section className="relative w-full bg-gradient-to-r from-[#000000] via-[#0d1017] to-transparent text-white overflow-hidden border-t-4 border-yellow-500" aria-labelledby="achat-vente-heading">
          {/* Côté DROIT : Image Complète en fond sur la moitié droite */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 hidden lg:block">
            <Image
              src="/images/rachat-vehicule.jpg"
              alt="Rachat et Vente de véhicules d'occasion - Échange avec un client"
              fill
              className="object-cover object-[80%_center]"
              priority
            />
            {/* Dégradé de fondu sur la gauche de l'image (bords) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1017] to-transparent pointer-events-none"></div>
          </div>

          <div className="container relative mx-auto px-6 lg:px-12 xl:px-20 z-10 flex flex-col lg:flex-row min-h-[85vh] lg:min-h-[600px]">
            {/* Côté GAUCHE : Texte */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center py-16 lg:py-24 text-left lg:pr-16">
              <div className="border-l-4 border-yellow-500 pl-6 mb-8">
                <h2 id="achat-vente-heading" className="text-5xl lg:text-5xl xl:text-[4rem] font-sans font-bold text-white leading-[1.1] tracking-tight">
                  <span className="text-yellow-500">Rachat</span> & Vente <br className="hidden sm:block" /> de Véhicules
                </h2>
              </div>

              <p className="text-xl xl:text-2xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                Nous achetons vos véhicules d&apos;occasion en bon état ou à réparer, et proposons une sélection de voitures contrôlées et garanties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 w-full"
                  >
                    Vendre Mon Véhicule
                  </Button>
                </Link>
                <Link href="/vehicules" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full"
                  >
                    Voir Nos Véhicules
                  </Button>
                </Link>
              </div>
            </div>

            {/* Version mobile de l'image */}
            <div className="w-full relative h-[400px] lg:hidden mt-8 mb-12 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/images/rachat-vehicule.jpg"
                alt="Rachat et Vente de véhicules d'occasion - Échange avec un client"
                fill
                className="object-cover object-[80%_center]"
                priority
              />
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

      <ScrollToTop />
    </>
  )
}