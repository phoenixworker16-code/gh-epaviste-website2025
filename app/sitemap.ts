import { MetadataRoute } from 'next'
import villes from '@/data/villes.json' // Ajuste le chemin selon ton architecture

// Interface attendue pour le fichier villes.json (à adapter selon ta structure réelle)
interface Ville {
  slug: string
  departementSlug?: string // ex: "paris", "essonne", "yvelines"
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gh-epaviste.fr'

  // OPTIMISATION 1 : Date stable au format ISO (YYYY-MM-DD) 
  // Évite les millisecondes dynamiques qui perturbent les robots de Google
  const stableDate = new Date().toISOString().split('T')[0]
  const lastModDate = new Date(stableDate)
  const blogModDate = new Date('2025-06-01')

  // 1. Pages statiques principales
  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastModDate, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/formulaire`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/guide`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vehicules`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/avis-clients`, lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`, lastModified: lastModDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: lastModDate, changeFrequency: 'yearly', priority: 0.3 },
    // Blog
    { url: `${baseUrl}/blog`, lastModified: blogModDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/comment-faire-enlever-une-epave-gratuitement`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/documents-necessaires-enlevement-epave`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/enlever-voiture-sans-carte-grise`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/combien-vaut-voiture-accidentee`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/comment-vendre-voiture-en-panne`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/epave-brulee-que-faire`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/vehicule-immobilise-solutions`, lastModified: blogModDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // OPTIMISATION 2 : Extraction unique des départements pour éviter les doublons
  const typedVilles = villes as Ville[]
  const uniqueDepartements = Array.from(
    new Set(typedVilles.map((v) => v.departementSlug).filter(Boolean))
  )

  // 2. Pages Départements (Priorité forte pour le SEO local)
  const departmentPages: MetadataRoute.Sitemap = uniqueDepartements.map((depSlug) => ({
    url: `${baseUrl}/enlevement-epave-${depSlug}`,
    lastModified: lastModDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 3. Pages Villes (Génération de masse optimisée)
  const cityPages: MetadataRoute.Sitemap = typedVilles.map((ville) => ({
    url: `${baseUrl}/epaviste-gratuit-${ville.slug}`,
    lastModified: lastModDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Fusion de toutes les routes dans le sitemap final
  return [...mainPages, ...departmentPages, ...cityPages]
}