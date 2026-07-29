import { MetadataRoute } from 'next'
import villes from '@/data/villes.json'
import { MAJOR_CITY_SLUGS } from '@/data/major-cities'
import servicesData from '@/data/services.json'

interface Ville {
  slug: string
  departement: string
  depNumber: string
}

/** Génère un slug URL à partir du nom de département */
function slugifyDepartement(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/'/g, '-')
    .replace(/\s+/g, '-')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gh-epaviste.fr'

  // Date fixe de la dernière modification réelle du contenu
  // À mettre à jour manuellement lors de modifications significatives
  const lastModDate = new Date('2026-07-28')
  const blogModDate = new Date('2025-06-01')

  // 1. Pages statiques principales
  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                                           lastModified: lastModDate, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`,                             lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/formulaire`,                           lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/guide`,                       lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vehicules`,                            lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,                              lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`,                                  lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`,                             lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/avis-clients`,                         lastModified: lastModDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`,                     lastModified: lastModDate, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/confidentialite`,                      lastModified: lastModDate, changeFrequency: 'yearly',  priority: 0.3 },
    // Blog
    { url: `${baseUrl}/blog`,                                                             lastModified: blogModDate, changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/blog/comment-faire-enlever-une-epave-gratuitement`,               lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/documents-necessaires-enlevement-epave`,                     lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/enlever-voiture-sans-carte-grise`,                           lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/combien-vaut-voiture-accidentee`,                            lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/comment-vendre-voiture-en-panne`,                            lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/epave-brulee-que-faire`,                                     lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/blog/vehicule-immobilise-solutions`,                              lastModified: blogModDate, changeFrequency: 'monthly',  priority: 0.7 },
  ]

  const typedVilles = villes as Ville[]
  const uniqueDepartements = Array.from(
    new Set(typedVilles.map((v) => slugifyDepartement(v.departement)).filter(Boolean))
  )

  // 2. Pages Départements (8 — priorité haute)
  const departmentPages: MetadataRoute.Sitemap = uniqueDepartements.map((depSlug) => ({
    url: `${baseUrl}/enlevement-epave-${depSlug}`,
    lastModified: lastModDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 3. Pages Services (19 pages — priorité haute)
  const servicePages: MetadataRoute.Sitemap = (servicesData as { slug: string }[]).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastModDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // 4. Pages Villes — UNIQUEMENT les communes majeures (~120 communes)
  // Les ~1 100 communes secondaires sont en noindex:follow et exclues du sitemap
  // → optimisation du budget de crawl Googlebot
  const majorCityPages: MetadataRoute.Sitemap = typedVilles
    .filter((ville) => MAJOR_CITY_SLUGS.has(ville.slug))
    .map((ville) => ({
      url: `${baseUrl}/epaviste-gratuit-${ville.slug}`,
      lastModified: lastModDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...mainPages, ...departmentPages, ...servicePages, ...majorCityPages]
}