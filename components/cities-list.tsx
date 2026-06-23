import Link from "next/link"
import villes from "@/data/villes.json"

export function CitiesList({ depNumber, departementName }: { depNumber: string, departementName: string }) {
  const departementVilles = villes.filter(ville => ville.depNumber === depNumber)

  if (departementVilles.length === 0) return null

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Villes desservies dans le {departementName}
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {departementVilles.map((ville) => (
            <Link 
              key={ville.slug} 
              href={`/epaviste-gratuit-${ville.slug}`}
              className="bg-yellow-500 border border-yellow-500 text-black hover:bg-yellow-50 hover:text-yellow-800 hover:border-yellow-200 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-sm"
            >
              {ville.ville}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
