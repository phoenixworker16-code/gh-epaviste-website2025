import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Lueur de fond décorative subtile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Colonne 1 : Marque (Prend 4 colonnes sur 12) */}
          <div className="lg:col-span-4">
            <Image
              src="/images/gh-logo-white.png"
              alt="GH Épaviste Agréé"
              width={200}
              height={100}
              className="h-20 w-auto mb-6 drop-shadow-lg"
              loading="lazy"
            />
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Spécialiste de l&apos;enlèvement d&apos;épaves gratuit en Île-de-France.{" "}
              Une intervention rapide, un service professionnel, et un recyclage respectueux de l&apos;environnement.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides (Prend 3 colonnes sur 12) */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos Services", href: "/services" },
                { name: "Véhicules Occasion", href: "/vehicules" },
                { name: "Guide d'Enlèvement", href: "/services/guide" },
                { name: "Formulaire en Ligne", href: "/formulaire" },
                { name: "Foire Aux Questions", href: "/faq" },
                { name: "Nous Contacter", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="py-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 flex items-center group min-h-[44px]"
                  >
                    <span className="w-0 overflow-hidden text-yellow-500 transition-all duration-300 group-hover:w-4 group-hover:mr-2">
                      ▸
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact & Horaires (Prend 3 colonnes sur 12) */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Contact &amp; Horaires
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+33753120793"
                    className="block font-bold text-lg text-white hover:text-yellow-500 transition-colors min-h-[44px] flex items-center"
                  >
                    07 53 12 07 93
                  </a>
                  <span className="text-sm">Disponible 24h/24 et 7j/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  Intervention Gratuite sur<br />
                  toute l&apos;Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
                </span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Légal (Prend 2 colonnes sur 12) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-sm"></span>
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mentions-legales"
                  className="py-2 inline-flex items-center min-h-[44px] text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="py-2 inline-flex items-center min-h-[44px] text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-2 inline-flex items-center min-h-[44px] text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne Séparatrice & Copyright */}
        <div className="border-t border-gray-800/60 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GH Épaviste. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-sm font-medium">
            Powered By <span className="text-yellow-600">PhOeNiX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
