"use client"

import { useState } from "react"
import Link from "next/link"
import villes from "@/data/villes.json"

export function CitiesList({ depNumber, departementName }: { depNumber: string, departementName: string }) {
  const [showAll, setShowAll] = useState(false)
  const departementVilles = villes.filter(ville => ville.depNumber === depNumber)

  if (departementVilles.length === 0) return null

  const maxInitial = 24
  const hasMore = departementVilles.length > maxInitial
  const displayedVilles = showAll ? departementVilles : departementVilles.slice(0, maxInitial)

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Villes desservies dans le {departementName}
        </h2>
        <nav aria-label={`Villes du ${departementName}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {displayedVilles.map((ville) => (
              <Link 
                key={ville.slug} 
                href={`/epaviste-gratuit-${ville.slug}`}
                prefetch={false}
                className="bg-gray-50 border border-gray-200 text-gray-700 hover:border-yellow-500 hover:text-yellow-600 px-3 py-2 rounded-lg font-medium text-sm text-center transition-all duration-200"
              >
                {ville.ville}
              </Link>
            ))}
          </div>
        </nav>
        
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-2 rounded-full transition-colors"
            >
              {showAll ? "Voir moins" : `Voir toutes les villes de ${departementName} (+)`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

