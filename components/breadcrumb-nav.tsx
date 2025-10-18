"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

export default function BreadcrumbNav() {
  const pathname = usePathname()

  const getBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ name: "Accueil", href: "/" }]

    const pathMap: { [key: string]: string } = {
      services: "Services",
      formulaire: "Formulaire d'Enlèvement",
      contact: "Contact",
      "mentions-legales": "Mentions Légales",
      confidentialite: "Politique de Confidentialité",
      vehicules: "Nos Véhicules",
    }

    paths.forEach((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/")
      breadcrumbs.push({
        name: pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1),
        href,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  if (pathname === "/") return null

  return (
    <nav className="bg-gray-100 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index === 0 && <Home className="w-4 h-4 mr-1" />}
              {index < breadcrumbs.length - 1 ? (
                <Link href={breadcrumb.href} className="text-yellow-600 hover:text-yellow-700 font-medium">
                  {breadcrumb.name}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{breadcrumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
