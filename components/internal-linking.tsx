import React from 'react'
import Link from 'next/link'
import { FileText, MapPin, Search } from 'lucide-react'
import servicesData from '@/data/services.json'

interface InternalLinkingProps {
  relatedServicesSlugs: string[]
  relatedCitiesSlugs: string[]
  currentSlug: string
  entityType: 'Department' | 'City'
}

// Fonction pour récupérer le nom d'un département à partir de son slug ou inversement
// Note: Dans une application réelle, on importerait une liste de départements. 
// Ici on gère un dictionnaire basique.
const depts: Record<string, string> = {
  "paris": "Paris (75)",
  "seine-et-marne": "Seine-et-Marne (77)",
  "yvelines": "Yvelines (78)",
  "essonne": "Essonne (91)",
  "hauts-de-seine": "Hauts-de-Seine (92)",
  "seine-saint-denis": "Seine-Saint-Denis (93)",
  "val-de-marne": "Val-de-Marne (94)",
  "val-d-oise": "Val-d'Oise (95)"
}

export function InternalLinking({ relatedServicesSlugs, relatedCitiesSlugs, currentSlug, entityType }: InternalLinkingProps) {
  
  const relatedServices = servicesData.filter(s => relatedServicesSlugs.includes(s.slug))
  
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
          <Search className="w-6 h-6 text-yellow-500" />
          Poursuivre votre navigation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bloc Services */}
          {relatedServices.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-400" />
                Services associés
              </h3>
              <div className="flex flex-col gap-3">
                {relatedServices.map(service => (
                  <Link 
                    key={service.slug} 
                    href={`/services/${service.slug}`}
                    className="block bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-yellow-400 hover:bg-yellow-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900 text-sm">{service.title}</div>
                    <div className="text-gray-500 text-xs mt-1 line-clamp-1">{service.intro}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bloc Maillage Local */}
          {relatedCitiesSlugs.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                {entityType === 'Department' ? 'Communes majeures desservies' : 'Secteur départemental'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedCitiesSlugs.map(slug => {
                  const isDept = depts[slug] !== undefined;
                  const label = isDept ? depts[slug] : slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
                  const href = isDept ? `/enlevement-epave-${slug}` : `/epaviste-gratuit-${slug}`;
                  
                  return (
                    <Link 
                      key={slug} 
                      href={href}
                      className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-black hover:text-yellow-500 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {label}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  )
}
