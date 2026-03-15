"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/vehicules", label: "Nos Véhicules" },
  { href: "/formulaire", label: "Formulaire d'Enlèvement" },
  { href: "/contact", label: "Contact" },
  { href: "/services/guide", label: "Guide" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Bouton hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="p-2 rounded-lg text-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Panneau de navigation */}
          <nav
            id="mobile-menu"
            role="navigation"
            aria-label="Menu mobile"
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* En-tête du menu */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="font-bold text-lg text-black">Menu</span>
              <button
                onClick={closeMenu}
                aria-label="Fermer le menu"
                className="p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Liens de navigation */}
            <ul className="flex flex-col py-4 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-black font-medium hover:bg-yellow-50 hover:text-yellow-600 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Appeler */}
            <div className="px-6 py-5 border-t border-gray-200">
              <a
                href="tel:+33753120793"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                07 53 12 07 93
              </a>
            </div>
          </nav>
        </>
      )}
    </div>
  )
}
