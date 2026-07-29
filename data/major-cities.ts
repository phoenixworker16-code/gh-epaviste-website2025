/**
 * Liste des communes majeures en index:true pour gh-epaviste.fr
 * Validée le 2026-07-08 — Critères : population, densité, importance admin, axes routiers, potentiel SEO
 * 
 * Toutes les autres communes (non listées ici) seront en noindex:true, follow:true
 * pour préserver le budget de crawl Googlebot.
 * 
 * Source : villes.json + analyse démographique INSEE + GSC data
 */

export const MAJOR_CITY_SLUGS = new Set<string>([
  // ─── Paris (75) ─────────────────────────────────────────────────────────
  "paris",

  // ─── Seine-et-Marne (77) — 15 communes ──────────────────────────────────
  "meaux",
  "melun",
  "chelles",
  "pontault-combault",
  "savigny-le-temple",
  "torcy",
  "lognes",
  "noisiel",
  "moissy-cramayel",
  "brie-comte-robert",
  "ozoir-la-ferriere",
  "fontainebleau",
  "provins",
  "montereau-fault-yonne",
  "coulommiers",

  // ─── Yvelines (78) — 15 communes ─────────────────────────────────────────
  "versailles",
  "saint-germain-en-laye",
  "sartrouville",
  "mantes-la-jolie",
  "conflans-sainte-honorine",
  "poissy",
  "chatou",
  "houilles",
  "maisons-laffitte",
  "rambouillet",
  "guyancourt",
  "velizy-villacoublay",
  "montigny-le-bretonneux",
  "trappes",
  "le-vesinet",

  // ─── Essonne (91) — 15 communes ──────────────────────────────────────────
  "evry-courcouronnes",
  "corbeil-essonnes",
  "massy",
  "palaiseau",
  "gif-sur-yvette",
  "les-ulis",
  "longjumeau",
  "juvisy-sur-orge",
  "ris-orangis",
  "athis-mons",
  "draveil",
  "viry-chatillon",
  "sainte-genevieve-des-bois",
  "etampes",
  "arpajon",

  // ─── Hauts-de-Seine (92) — 15 communes ───────────────────────────────────
  "boulogne-billancourt",
  "nanterre",
  "courbevoie",
  "colombes",
  "rueil-malmaison",
  "levallois-perret",
  "asnieres-sur-seine",
  "antony",
  "montrouge",
  "clamart",
  "issy-les-moulineaux",
  "clichy",
  "sceaux",
  "chatenay-malabry",
  "garches",

  // ─── Seine-Saint-Denis (93) — TOUTES 39 communes (département dense) ─────
  "aubervilliers",
  "aulnay-sous-bois",
  "bagnolet",
  "le-blanc-mesnil",
  "bobigny",
  "bondy",
  "le-bourget",
  "clichy-sous-bois",
  "coubron",
  "la-courneuve",
  "drancy",
  "dugny",
  "epinay-sur-seine",
  "gagny",
  "gournay-sur-marne",
  "lile-saint-denis",
  "les-lilas",
  "livry-gargan",
  "montfermeil",
  "montreuil",
  "neuilly-plaisance",
  "neuilly-sur-marne",
  "noisy-le-grand",
  "noisy-le-sec",
  "pantin",
  "les-pavillons-sous-bois",
  "le-pre-saint-gervais",
  "le-raincy",
  "romainville",
  "rosny-sous-bois",
  "saint-denis",
  "saint-ouen-sur-seine",
  "sevran",
  "stains",
  "tremblay-en-france",
  "vaujours",
  "villemomble",
  "villepinte",
  "villetaneuse",

  // ─── Val-de-Marne (94) — 15 communes ─────────────────────────────────────
  "creteil",
  "vincennes",
  "champigny-sur-marne",
  "saint-maur-des-fosses",
  "vitry-sur-seine",
  "ivry-sur-seine",
  "alfortville",
  "maisons-alfort",
  "villeneuve-saint-georges",
  "choisy-le-roi",
  "fontenay-sous-bois",
  "nogent-sur-marne",
  "charenton-le-pont",
  "joinville-le-pont",
  "boissy-saint-leger",

  // ─── Val-d'Oise (95) — 15 communes ───────────────────────────────────────
  "cergy",
  "argenteuil",
  "pontoise",
  "saint-ouen-laumone",
  "sarcelles",
  "garges-les-gonesse",
  "gonesse",
  "eragny-sur-oise",
  "herblay-sur-seine",
  "montmorency",
  "enghien-les-bains",
  "ermont",
  "bezons",
  "taverny",
  "marines",
])

/**
 * Retourne true si le slug donné correspond à une commune majeure (index:true)
 * Retourne false si la commune doit être en noindex:true, follow:true
 */
export function isMajorCity(slug: string): boolean {
  return MAJOR_CITY_SLUGS.has(slug)
}

export const MAJOR_CITIES_COUNT = MAJOR_CITY_SLUGS.size
