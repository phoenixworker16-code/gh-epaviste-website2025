import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gh-epaviste.fr'
  const lastMod = new Date('2025-06-17')
  const blogDate = new Date('2025-06-01')

  return [
    // ── Pages principales ──────────────────────────────────
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/formulaire`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/guide`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vehicules`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/avis-clients`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },

    // ── Pages SEO Locales ──────────────────────────────────
    { url: `${baseUrl}/enlevement-epave-paris`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/enlevement-epave-seine-et-marne`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-yvelines`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-essonne`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-hauts-de-seine`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-seine-saint-denis`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-val-de-marne`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enlevement-epave-val-d-oise`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },

    // ── Blog ──────────────────────────────────────────────
    { url: `${baseUrl}/blog`, lastModified: blogDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/comment-faire-enlever-une-epave-gratuitement`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/documents-necessaires-enlevement-epave`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/enlever-voiture-sans-carte-grise`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/combien-vaut-voiture-accidentee`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/comment-vendre-voiture-en-panne`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/epave-brulee-que-faire`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/vehicule-immobilise-solutions`, lastModified: blogDate, changeFrequency: 'monthly', priority: 0.7 },

    // ── Légal ─────────────────────────────────────────────
    { url: `${baseUrl}/mentions-legales`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ]
}