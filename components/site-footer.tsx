import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Globe } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-8 pb-4 border-t border-gray-800 relative overflow-hidden">
      {/* Lueur de fond décorative subtile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 font-light leading-snug">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-4">

          {/* Colonne 1 : Marque (Prend 4 colonnes sur 12) */}
          <div className="lg:col-span-4">
            <Image
              src="/images/gh-logo-white.png"
              alt="GH Épaviste - Enlèvement d'Épaves en Île-de-France"
              width={160}
              height={80}
              className="mb-3 drop-shadow-lg"
              style={{ height: '80px', width: 'auto' }}
              loading="lazy"
            />
            <p className="text-gray-300 mb-4 text-sm max-w-sm leading-tight">
              Spécialiste de l&apos;enlèvement d&apos;épaves gratuit en Île-de-France.{" "}
              Intervention rapide, service professionnel, et recyclage respectueux de l&apos;environnement.
            </p>
            {/* Icônes réseaux sociaux — Facebook & Instagram uniquement (WhatsApp est géré par le bouton flottant) */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook GH Épaviste"
                className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram GH Épaviste"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
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
                { name: "Blog & Conseils", href: "/blog" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Avis Clients", href: "/avis-clients" },
                { name: "Nous Contacter", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="py-1 text-gray-300 hover:text-yellow-500 transition-all duration-300 flex items-center group"
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
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <div>
                  <a
                    href="tel:+33753120793"
                    className="inline-flex items-center gap-2 border-2 border-[#FFC42B] text-[#FFC42B] px-4 py-2 rounded-lg hover:bg-[#FFC42B] hover:text-black transition-all duration-200 font-bold text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    07 53 12 07 93
                  </a>
                  <span className="block text-xs text-gray-400 mt-1">Disponible 24h/24 et 7j/7</span>
                </div>
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  Intervention Gratuite sur<br />
                  toute l&apos;Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
                </span>
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  94190 Villeneuve-Saint-Georges<br />
                  France
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
                  className="py-1 block text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="py-1 block text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="py-1 block text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Foire Aux Questions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Zones d'intervention SEO */}
        <div className="border-t border-gray-800/60 pt-4 mt-4 mb-2">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-gray-300 text-xs sm:text-sm text-center">
            <span className="py-2 font-semibold text-[#FFC42B]">Nos zones d&apos;intervention en Île-de-France :</span>
            <Link href="/enlevement-epave-paris" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Paris 75</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-seine-et-marne" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Seine-et-Marne 77</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-yvelines" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Yvelines 78</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-essonne" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Essonne 91</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-hauts-de-seine" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Hauts-de-Seine 92</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-seine-saint-denis" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Seine-Saint-Denis 93</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-val-de-marne" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Val-de-Marne 94</Link> <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/enlevement-epave-val-d-oise" className="whitespace-nowrap px-2 py-0.5 rounded transition-colors hover:bg-white hover:text-black">Épaviste Val-d&apos;Oise 95</Link>
          </div>
        </div>

        {/* Ligne Séparatrice & Copyright */}
        <div className="border-t border-gray-800/60 pt-3 mt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p className="text-gray-300 text-xs">
            &copy; {new Date().getFullYear()} GH Épaviste. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs font-medium">
            Powered By <span className="text-yellow-600">PhOeNiX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
