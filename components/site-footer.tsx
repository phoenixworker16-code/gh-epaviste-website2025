import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-8 pb-4 border-t border-gray-800 relative overflow-hidden">
      {/* Lueur de fond décorative subtile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 font-light leading-snug">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-6">

          {/* Colonne 1 : Marque (Prend 4 colonnes sur 12) */}
          <div className="lg:col-span-4">
            <Image
              src="/images/gh-logo-white.png"
              alt="GH Épaviste Agréé"
              width={160}
              height={80}
              className="h-12 w-auto mb-3 drop-shadow-lg"
              loading="lazy"
            />
            <p className="text-gray-400 mb-2 text-sm max-w-sm leading-tight">
              Spécialiste de l&apos;enlèvement d&apos;épaves gratuit en Île-de-France.{" "}
              Intervention rapide, service professionnel, et recyclage respectueux de l&apos;environnement.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides (Prend 3 colonnes sur 12) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-3 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-yellow-500 rounded-sm"></span>
              Navigation
            </h3>
            <ul className="space-y-0 text-sm">
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
                    className="py-1 text-gray-400 hover:text-yellow-500 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 overflow-hidden text-yellow-500 transition-all duration-300 group-hover:w-3 group-hover:mr-1.5">
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
            <h3 className="text-base font-bold mb-3 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-yellow-500 rounded-sm"></span>
              Contact &amp; Horaires
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+33753120793"
                    className="block font-bold text-base text-white hover:text-yellow-500 transition-colors"
                  >
                    07 53 12 07 93
                  </a>
                  <span className="text-xs">Disponible 24h/24 et 7j/7</span>
                </div>
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  Intervention Gratuite sur<br />
                  toute l&apos;Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
                </span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Légal (Prend 2 colonnes sur 12) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-3 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-yellow-500 rounded-sm"></span>
              Légal
            </h3>
            <ul className="space-y-0 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="py-1 block text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="py-1 block text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-1 block text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne Séparatrice & Copyright */}
        <div className="border-t border-gray-800/60 pt-4 mt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} GH Épaviste. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs font-medium">
            Powered By <span className="text-yellow-600">PhOeNiX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
