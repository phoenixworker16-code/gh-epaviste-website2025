#!/usr/bin/env node
// ============================================================
// fetch-local-data.js — Moteur enrichi de collecte de données locales
// ============================================================

const fs = require('fs');
const path = require('path');

let cheerio;
let axios;
try {
  cheerio = require('cheerio');
  axios = require('axios');
} catch {
  console.error('[ERREUR] cheerio et axios sont requis. Installez-les avec : npm install cheerio axios');
  process.exit(1);
}

// ─── Configuration ────────────────────────────────────────────
const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://z.overpass-api.de/api/interpreter'
];

// Timeouts par source (recommandation utilisateur)
const SOURCE_TIMEOUTS = {
  overpass_poi: 30000,
  overpass_geo: 30000,
  wikipedia_html: 10000,
  wikipedia_api: 10000,
  ban: 5000
};
const REQUEST_DELAY = 1500;
const BAN_URL = 'https://api-adresse.data.gouv.fr/search/';

// ─── Chronométrage par source ─────────────────────────────────
class SourceTimer {
  constructor() { this.timings = {}; }
  start(name) { this.timings[name] = { start: Date.now(), duration: null, status: 'RUNNING' }; }
  end(name, status = 'OK') {
    if (this.timings[name]) {
      this.timings[name].duration = ((Date.now() - this.timings[name].start) / 1000).toFixed(1);
      this.timings[name].status = status;
    }
  }
  print(cityName) {
    console.log('\n' + '═'.repeat(60));
    console.log(`  CHRONOMÉTRAGE — ${cityName}`);
    console.log('═'.repeat(60));
    for (const [name, t] of Object.entries(this.timings)) {
      const dur = t.duration ? `${t.duration} s` : 'N/A';
      const pad = name.padEnd(25, '.');
      console.log(`  ${pad} ${dur.padStart(8)}  [${t.status}]`);
    }
    console.log('═'.repeat(60));
  }
  toJSON() {
    const result = {};
    for (const [name, t] of Object.entries(this.timings)) {
      result[name] = { durationSec: parseFloat(t.duration) || 0, status: t.status };
    }
    return result;
  }
}

const CATEGORIES = [
  'quartiers', 'rues', 'stations_metro', 'gares', 'parcs',
  'hopitaux', 'cliniques', 'centres_commerciaux', 'zones_activites',
  'ponts', 'quais', 'monuments', 'batiments_publics', 'communes_limitrophes'
];

// ─── Utilitaires ──────────────────────────────────────────────
const wait = (ms) => new Promise(r => setTimeout(r, ms));

function makeAreaClause(cityName) {
  const escaped = cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexName = escaped.replace(/[-\s]+/g, '[- ]');
  return `area["name"~"^${regexName}$",i]["boundary"="administrative"]["admin_level"~"^[89]$"]->.searchArea;`;
}

function cleanName(name, category) {
  if (!name) return null;
  let clean = name.trim();

  clean = clean.replace(/\s*\((?:métro de Paris|métro|station de métro|commune|gare|parc|jardin|Hauts-de-Seine|Seine-Saint-Denis|Val-de-Marne|Val-d'Oise|Essonne|Seine-et-Marne|Yvelines|Île-de-France|France|Paris)[^)]*\)/gi, '');

  if (category === 'stations_metro') {
    clean = clean.replace(/^station\s+(de\s+)?/i, '');
  }
  if (category === 'gares') {
    clean = clean.replace(/^gare\s+d[e']\s*/i, '');
    clean = clean.replace(/^gare\s+de\s+/i, '');
    clean = clean.replace(/^gare\s+/i, '');
  }

  clean = clean.trim();
  return clean.length > 1 ? clean : null;
}

// ─── Rapport de collecte ──────────────────────────────────────
class CollectionReport {
  constructor() {
    this.entries = [];
  }

  add(source, category, rawItems, keptItems, exclusions = []) {
    this.entries.push({
      source,
      categorie: category,
      trouves: rawItems.length,
      retenus: keptItems.length,
      ignores: rawItems.length - keptItems.length,
      raisons_exclusion: exclusions
    });
  }

  print() {
    console.log('\n' + '═'.repeat(90));
    console.log('  RAPPORT DE COLLECTE — DÉTAIL PAR SOURCE');
    console.log('═'.repeat(90));
    
    // Table Header
    console.log(`  ${'SOURCE'.padEnd(20)} | ${'CATÉGORIE'.padEnd(22)} | ${'TROUVÉS'.padStart(8)} | ${'RETENUS'.padStart(8)} | ${'IGNORÉS'.padStart(8)}`);
    console.log('  ' + '-'.repeat(74));

    for (const entry of this.entries) {
      console.log(`  ${entry.source.padEnd(20)} | ${entry.categorie.padEnd(22)} | ${String(entry.trouves).padStart(8)} | ${String(entry.retenus).padStart(8)} | ${String(entry.ignores).padStart(8)}`);
    }

    console.log('\n  --- Exclusions notables ---');
    for (const entry of this.entries) {
      if (entry.raisons_exclusion.length > 0) {
        console.log(`  [${entry.source} - ${entry.categorie}]`);
        const shown = entry.raisons_exclusion.slice(0, 3);
        for (const ex of shown) {
          console.log(`    ↳ "${ex.nom}" → ${ex.raison}`);
        }
        if (entry.raisons_exclusion.length > 3) {
          console.log(`    ↳ ... et ${entry.raisons_exclusion.length - 3} autre(s)`);
        }
      }
    }
    console.log('═'.repeat(90));
  }

  toJSON() {
    const reportObj = {};
    for (const entry of this.entries) {
      if (!reportObj[entry.source]) reportObj[entry.source] = {};
      reportObj[entry.source][entry.categorie] = {
        trouves: entry.trouves,
        retenus: entry.retenus,
        ignores: entry.ignores,
        exclusions: entry.raisons_exclusion
      };
    }
    return reportObj;
  }
}

// ─── Requête Overpass ─────────────────────────────────────────
async function fetchOverpass(query, timeout = OVERPASS_TIMEOUT) {
  const fullQuery = `[out:json][timeout:${Math.floor(timeout / 1000)}];${query}`;
  
  for (const endpoint of OVERPASS_ENDPOINTS) {
    const url = `${endpoint}?data=${encodeURIComponent(fullQuery)}`;
    try {
      const response = await axios.get(url, {
        timeout: timeout + 5000,
        headers: { 'Accept': 'application/json', 'User-Agent': 'GHEpaviste-SEO/2.0 (contact@gh-epaviste.fr)' }
      });
      return response.data.elements || [];
    } catch (error) {
      const msg = error.code === 'ECONNABORTED' ? 'Timeout dépassé' : error.message;
      console.log(`    ⚠️  Overpass (${new URL(endpoint).hostname}): ${msg}`);
      // Continuer à la prochaine URL
    }
  }
  return [];
}

// ─── Catégorisation des éléments OSM ──────────────────────────
function categorizeElement(tags) {
  if (!tags) return null;

  if (tags.place && /suburb|neighbourhood|quarter/.test(tags.place)) return 'quartiers';
  if (tags.railway === 'station' && (tags.station === 'subway' || tags.subway === 'yes')) return 'stations_metro';
  if (tags.public_transport === 'stop_position' && tags.subway === 'yes') return 'stations_metro';
  if (tags.station === 'subway') return 'stations_metro';
  if ((tags.railway === 'station' || tags.railway === 'halt') && tags.station !== 'subway') return 'gares';
  if (tags.railway === 'tram_stop') return 'gares';
  if (tags.leisure && /park|garden/.test(tags.leisure)) return 'parcs';
  if (tags.amenity === 'hospital' || tags.healthcare === 'hospital') return 'hopitaux';
  if (tags.amenity === 'clinic' || tags.healthcare === 'clinic') return 'cliniques';
  
  if (tags.shop && /mall|department_store/.test(tags.shop)) {
    if (tags.office !== 'yes') return 'centres_commerciaux';
  }
  
  if (tags.landuse && /industrial|commercial/.test(tags.landuse)) return 'zones_activites';
  if (tags.man_made === 'bridge') return 'ponts';
  if (tags.man_made === 'quay' || tags.waterway === 'dock') return 'quais';
  if (tags.historic && /monument|memorial/.test(tags.historic)) return 'monuments';
  if (tags.tourism === 'attraction') return 'monuments';
  if (tags.amenity && /townhall|community_centre|library|courthouse|police|fire_station|post_office/.test(tags.amenity)) return 'batiments_publics';
  if (tags.building === 'public') return 'batiments_publics';

  return null;
}

function filterElement(tags, category) {
  const name = tags?.name || tags?.['name:fr'];
  if (!name || name.trim() === '') return { keep: false, reason: 'Élément sans nom' };
  
  const lowerName = name.toLowerCase();

  if (category === 'stations_metro' || category === 'gares') {
    if (tags.network || tags.line || tags.route) {
      if (/^ligne\s/i.test(name) || /^m\d+/i.test(name) || tags.route) return { keep: false, reason: 'Ligne ou réseau, pas une station' };
    }
  }

  if (category === 'hopitaux' || category === 'cliniques') {
    if (/cabinet\s+infirmier|cabinet\s+médical|dentiste/i.test(lowerName)) {
      return { keep: false, reason: 'Cabinet médical/dentiste exclu' };
    }
  }

  if (category === 'monuments') {
    if (/monument\s+inconnu/i.test(lowerName)) return { keep: false, reason: 'Monument inconnu' };
  }
  
  if (category === 'centres_commerciaux') {
    if (tags.office === 'yes') return { keep: false, reason: 'Ce sont des bureaux (office=yes)' };
  }

  if (category === 'rues') {
    if (/sans\s+nom|unnamed|private|voie\s+privée|accès\s+privé/i.test(lowerName)) {
      return { keep: false, reason: 'Voie sans nom ou privée' };
    }
  }

  return { keep: true };
}

// ═══════════════════════════════════════════════════════════════
// SOURCE 1 : Overpass API — Requête combinée POI
// ═══════════════════════════════════════════════════════════════
async function collectFromOverpass(cityName, report, timer) {
  console.log('\n📡 [Source 1] Overpass API — POI combinés...');
  timer.start('overpass_poi');
  const areaClause = makeAreaClause(cityName);
  const query = `
    ${areaClause}
    (
      node["place"~"suburb|neighbourhood|quarter"](area.searchArea);
      node["railway"~"station|halt|tram_stop"](area.searchArea);
      way["railway"~"station|halt"](area.searchArea);
      node["public_transport"~"stop_position|station"]["subway"="yes"](area.searchArea);
      way["leisure"~"park|garden"](area.searchArea);
      relation["leisure"~"park|garden"](area.searchArea);
      node["amenity"="hospital"](area.searchArea);
      way["amenity"="hospital"](area.searchArea);
      node["healthcare"="hospital"](area.searchArea);
      node["amenity"="clinic"](area.searchArea);
      way["amenity"="clinic"](area.searchArea);
      node["healthcare"="clinic"](area.searchArea);
      node["shop"~"mall|department_store"](area.searchArea);
      way["shop"~"mall|department_store"](area.searchArea);
      way["landuse"~"industrial|commercial"]["name"](area.searchArea);
      way["man_made"="bridge"](area.searchArea);
      node["man_made"="quay"](area.searchArea);
      way["man_made"="quay"](area.searchArea);
      node["historic"~"monument|memorial"](area.searchArea);
      way["historic"~"monument|memorial"](area.searchArea);
      node["tourism"="attraction"](area.searchArea);
      node["amenity"~"townhall|community_centre|library|courthouse|police|fire_station|post_office"](area.searchArea);
      way["amenity"~"townhall|community_centre|library|courthouse|police|fire_station|post_office"](area.searchArea);
      way["building"="public"]["name"](area.searchArea);
    );
    out center tags;
  `;

  const elements = await fetchOverpass(query, SOURCE_TIMEOUTS.overpass_poi);
  console.log(`  → ${elements.length} éléments bruts reçus`);

  const results = {};
  const rawByCategory = {};
  const exclusionsByCategory = {};

  for (const cat of CATEGORIES) {
    results[cat] = new Set();
    rawByCategory[cat] = [];
    exclusionsByCategory[cat] = [];
  }

  for (const el of elements) {
    const category = categorizeElement(el.tags);
    if (!category || !results[category]) continue;

    const rawName = el.tags?.name || el.tags?.['name:fr'] || '';
    rawByCategory[category].push(rawName);

    const filterResult = filterElement(el.tags, category);
    if (filterResult.keep) {
      const cleaned = cleanName(rawName, category);
      if (cleaned) {
        results[category].add(cleaned);
      } else {
        exclusionsByCategory[category].push({ nom: rawName || '(vide)', raison: 'Nom invalide après nettoyage' });
      }
    } else {
      exclusionsByCategory[category].push({ nom: rawName || '(vide)', raison: filterResult.reason });
    }
  }

  for (const cat of CATEGORIES) {
    if (cat === 'communes_limitrophes' || cat === 'rues') continue;
    const kept = Array.from(results[cat]);
    report.add('Overpass API', cat, rawByCategory[cat], kept, exclusionsByCategory[cat]);
  }

  timer.end('overpass_poi', elements.length > 0 ? 'OK' : 'EMPTY');
  return results;
}

// ═══════════════════════════════════════════════════════════════
// SOURCE 2 : Overpass Géométrie — Communes limitrophes (fiable)
// ═══════════════════════════════════════════════════════════════
async function collectCommunesLimitrophes(cityName, report, timer) {
  console.log('\n🗺️  [Source 2] Overpass Géométrie — Communes limitrophes...');
  timer.start('overpass_geo');
  await wait(REQUEST_DELAY);

  const escaped = cityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexName = escaped.replace(/[-\s]+/g, '[- ]');

  // Requête : Trouver les relations adjacentes qui partagent des ways (frontières)
  const query = `
    rel["name"~"^${regexName}$",i]["boundary"="administrative"]["admin_level"~"^[89]$"]->.target;
    way(r.target)->.bounds;
    rel(bw.bounds)["boundary"="administrative"]["admin_level"~"^[89]$"];
    out tags;
  `;

  const elements = await fetchOverpass(query, SOURCE_TIMEOUTS.overpass_geo);

  const rawItems = [];
  const keptItems = [];
  const exclusions = [];
  const normalizedTarget = cityName.toLowerCase().replace(/[-\s]/g, '');

  for (const el of elements) {
    const name = el.tags?.name;
    if (!name) continue;
    rawItems.push(name);

    const normalized = name.toLowerCase().replace(/[-\s]/g, '');
    if (normalized === normalizedTarget) {
      exclusions.push({ nom: name, raison: 'Commune cible elle-même' });
      continue;
    }

    const adminLevel = parseInt(el.tags?.admin_level || '0');
    if (adminLevel < 8) {
      exclusions.push({ nom: name, raison: `Niveau admin ${el.tags.admin_level} (département/région)` });
      continue;
    }

    let cleanedName = name;
    if (adminLevel === 9 && /paris/i.test(name)) {
      cleanedName = name.replace(/\s*arrondissement/i, '').trim();
    }

    keptItems.push(cleanedName);
  }

  const uniqueItems = [...new Set(keptItems)];
  report.add('Overpass Géométrie', 'communes_limitrophes', rawItems, uniqueItems, exclusions);
  console.log(`  → ${uniqueItems.length} commune(s) limitrophe(s) identifiée(s)`);

  timer.end('overpass_geo', uniqueItems.length > 0 ? 'OK' : 'EMPTY');
  return uniqueItems;
}

// ═══════════════════════════════════════════════════════════════
// SOURCE 3 : Wikipedia HTML — Scraping structuré (cheerio)
// ═══════════════════════════════════════════════════════════════
async function collectFromWikipediaHTML(cityName, existingResults, report, timer) {
  console.log('\n📖 [Source 3] Wikipedia HTML — Scraping structuré...');
  timer.start('wikipedia_html');
  try {
    const wikiTitle = cityName.replace(/\s/g, '_');
    const url = `https://fr.wikipedia.org/wiki/${encodeURIComponent(wikiTitle)}`;

    const response = await axios.get(url, {
      timeout: SOURCE_TIMEOUTS.wikipedia_html,
      headers: { 'User-Agent': 'GHEpaviste-SEO/2.0 (contact@gh-epaviste.fr)' }
    });
    const html = response.data;
    const $ = cheerio.load(html);

    const wikiResults = {};
    for (const cat of CATEGORIES) wikiResults[cat] = [];

    const communesRaw = [];
    $('table').each((_, table) => {
      const $table = $(table);
      const tableClass = ($table.attr('class') || '').toLowerCase();
      const tableHtml = ($table.html() || '').toLowerCase();
      if (tableClass.includes('cadran') || tableHtml.includes('communes limitrophes')) {
        $table.find('a').each((_, a) => {
          const title = $(a).attr('title');
          const text = $(a).text().trim();
          if (title && !title.includes('modifier') && !title.includes('Fichier:') && !title.startsWith('Aide:') && text.length > 1 && !/^(N|S|E|O|NE|NO|SE|SO|Nord|Sud|Est|Ouest)$/i.test(text)) {
            communesRaw.push(title);
          }
        });
      }
    });

    if (communesRaw.length === 0) {
      $('th, td').each((_, el) => {
        if (/communes?\slimitrophes?/i.test($(el).text())) {
          const $next = $(el).next('td');
          if ($next.length) {
            $next.find('a').each((_, a) => {
              const title = $(a).attr('title');
              if (title && !title.includes('modifier') && !title.includes('Fichier:')) communesRaw.push(title);
            });
          }
          $(el).closest('tr').find('a').each((_, a) => {
            const title = $(a).attr('title');
            if (title && !title.includes('modifier') && !title.includes('Fichier:') && !communesRaw.includes(title)) communesRaw.push(title);
          });
        }
      });
    }
    wikiResults.communes_limitrophes = [...new Set(communesRaw)];

    const sectionRules = [
      {
        headingPattern: /transport|voies?\s+de\s+communication|desserte/i,
        extractors: [
          { category: 'gares', match: /gare|transilien|rer|sncf|ter|intercit/i },
          { category: 'stations_metro', match: /métro|subway/i },
          { category: 'gares', match: /tramway|tram\s/i }
        ]
      },
      {
        headingPattern: /espaces?\s*verts?|parcs?\s|jardin|environnement/i,
        extractors: [{ category: 'parcs', match: /parc|jardin|square|promenade|bois\s/i }]
      },
      {
        headingPattern: /quartier|lieu.?dit|toponym/i,
        extractors: [{ category: 'quartiers', match: null }]
      },
      {
        headingPattern: /patrimoine|monument|lieu.?\set\s|culture|tourisme/i,
        extractors: [{ category: 'monuments', match: /monument|église|château|musée|mémorial|statue|fontaine|chapelle|temple|abbaye|cathédrale/i }]
      },
      {
        headingPattern: /santé|hôpita/i,
        extractors: [
          { category: 'hopitaux', match: /hôpital|centre\s+hospitalier|chu|chru/i },
          { category: 'cliniques', match: /clinique|polyclinique|maison\s+de\s+santé/i }
        ]
      }
    ];

    $('h2, h3').each((_, heading) => {
      const headingText = $(heading).text().replace(/\[modifier.*?\]/g, '').trim();
      for (const rule of sectionRules) {
        if (!rule.headingPattern.test(headingText)) continue;
        let $next = $(heading).next();
        while ($next.length && !$next.is('h2, h3')) {
          if ($next.is('ul, ol')) {
            $next.find('> li').each((_, li) => {
              const $a = $(li).find('a').first();
              const itemName = $a.length ? ($a.attr('title') || $a.text().trim()) : $(li).text().trim().split('\n')[0].split(',')[0];
              if (itemName && itemName.length > 1 && itemName.length < 120) {
                for (const ext of rule.extractors) {
                  if (ext.match === null || ext.match.test(itemName)) {
                    const cleaned = cleanName(itemName, ext.category);
                    if (cleaned) wikiResults[ext.category].push(cleaned);
                  }
                }
              }
            });
          }
          if ($next.is('p')) {
            $next.find('a').each((_, a) => {
              const title = $(a).attr('title');
              if (title && title.length > 1) {
                for (const ext of rule.extractors) {
                  if (ext.match && ext.match.test(title)) {
                    const cleaned = cleanName(title, ext.category);
                    if (cleaned) wikiResults[ext.category].push(cleaned);
                  }
                }
              }
            });
          }
          $next = $next.next();
        }
      }
    });

    for (const cat of CATEGORIES) wikiResults[cat] = [...new Set(wikiResults[cat])];

    for (const cat of CATEGORIES) {
      const wikiItems = wikiResults[cat] || [];
      if (wikiItems.length === 0) continue;
      const existingArr = existingResults[cat] ? Array.from(existingResults[cat]) : [];
      const newItems = wikiItems.filter(item => !existingArr.some(e => e.toLowerCase().replace(/[-\s]/g, '') === item.toLowerCase().replace(/[-\s]/g, '')));
      const dupes = wikiItems.filter(item => !newItems.includes(item));
      report.add('Wikipedia HTML', cat, wikiItems, newItems, dupes.map(d => ({ nom: d, raison: 'Déjà trouvé' })));
      if (existingResults[cat]) for (const item of newItems) existingResults[cat].add(item);
    }
    console.log(`  → Scraping réussi`);
    timer.end('wikipedia_html', 'OK');
    return wikiResults;
  } catch (error) {
    console.log(`  ⚠️  Wikipedia HTML: ${error.message}`);
    report.add('Wikipedia HTML', 'communes_limitrophes', [], [], [{ nom: '-', raison: error.message }]);
    timer.end('wikipedia_html', 'FAIL');
    return {};
  }
}

// ═══════════════════════════════════════════════════════════════
// SOURCE 4 : Data.gouv.fr BAN — Rues
// ═══════════════════════════════════════════════════════════════
async function collectFromBAN(cityName, report, timer) {
  console.log('\n🏛️  [Source 4] Data.gouv.fr BAN — Rues...');
  timer.start('ban');
  const searchName = cityName.replace(/-/g, ' ');
  const rawItems = [];
  const keptItems = [];
  const exclusions = [];

  try {
    const banUrl = `${BAN_URL}?q=${encodeURIComponent(searchName)}&type=street&limit=50`;
    const response = await axios.get(banUrl, { timeout: SOURCE_TIMEOUTS.ban, headers: { 'User-Agent': 'GHEpaviste-SEO/2.0 (contact@gh-epaviste.fr)' } });
    const banData = response.data;
    const normalizedSearch = searchName.toLowerCase().replace(/[-\s]/g, '');

    for (const f of (banData.features || [])) {
      const props = f.properties;
      if (!props || !props.name) continue;
      rawItems.push(props.name);

      const banCity = (props.city || '').toLowerCase().replace(/[-\s]/g, '');
      if (banCity !== normalizedSearch) {
        exclusions.push({ nom: props.name, raison: `Commune différente: ${props.city}` });
        continue;
      }
      
      const filterResult = filterElement({ name: props.name }, 'rues');
      if (filterResult.keep) {
        keptItems.push(props.name);
      } else {
        exclusions.push({ nom: props.name, raison: filterResult.reason });
      }
    }
    console.log(`  → ${keptItems.length} rues retenues sur ${rawItems.length} résultats`);
  } catch (error) {
    console.log(`  ⚠️  BAN: ${error.message}`);
    exclusions.push({ nom: '-', raison: error.message });
  }

  report.add('Data.gouv.fr BAN', 'rues', rawItems, keptItems, exclusions);
  timer.end('ban', keptItems.length > 0 ? 'OK' : 'EMPTY');
  return keptItems;
}

// ═══════════════════════════════════════════════════════════════
// SOURCE 5 : Wikipedia API — Enrichissement fallback
// ═══════════════════════════════════════════════════════════════
async function collectFromWikipediaAPI(cityName, existingResults, report, timer) {
  console.log('\n📚 [Source 5] Wikipedia API — Enrichissement fallback...');
  timer.start('wikipedia_api');
  try {
    const searchName = cityName.replace(/-/g, ' ');
    const url = `https://fr.wikipedia.org/w/api.php?action=query&prop=links&titles=${encodeURIComponent(searchName)}&format=json&pllimit=max`;
    const response = await axios.get(url, { timeout: SOURCE_TIMEOUTS.wikipedia_api, headers: { 'User-Agent': 'GHEpaviste-SEO/2.0 (contact@gh-epaviste.fr)' } });
    const data = response.data;

    const pages = data.query?.pages;
    if (!pages) throw new Error('Pas de pages trouvées');
    const pageId = Object.keys(pages)[0];
    if (pageId === '-1') throw new Error('Page Wikipedia introuvable');

    const links = (pages[pageId].links || []).map(l => l.title);
    const wikiMappings = [
      { match: /^gare\s+d/i, category: 'gares' },
      { match: /métro/i, category: 'stations_metro' },
      { match: /^parc\s|^square\s|^jardin\s/i, category: 'parcs' },
      { match: /^hôpital\s|^centre\s+hospitalier/i, category: 'hopitaux' },
      { match: /^clinique\s/i, category: 'cliniques' },
      { match: /^centre\s+commercial/i, category: 'centres_commerciaux' },
      { match: /^zone\s+(industrielle|d'activité|commerciale)/i, category: 'zones_activites' },
      { match: /^pont\s/i, category: 'ponts' },
      { match: /^quai\s/i, category: 'quais' },
      { match: /^quartier\s/i, category: 'quartiers' },
      { match: /^monument\s|^église\s|^château\s|^musée\s/i, category: 'monuments' },
      { match: /^mairie\s|^hôtel\s+de\s+ville|^bibliothèque\s/i, category: 'batiments_publics' }
    ];

    const foundByCategory = {};
    for (const cat of CATEGORIES) foundByCategory[cat] = [];

    for (const link of links) {
      for (const mapping of wikiMappings) {
        if (mapping.match.test(link)) {
          const cleaned = cleanName(link, mapping.category);
          if (cleaned) foundByCategory[mapping.category].push(cleaned);
          break;
        }
      }
    }

    for (const cat of CATEGORIES) {
      const items = foundByCategory[cat];
      if (items.length === 0) continue;
      const existingArr = existingResults[cat] ? Array.from(existingResults[cat]) : [];
      const newItems = items.filter(item => !existingArr.some(e => e.toLowerCase().replace(/[-\s]/g, '') === item.toLowerCase().replace(/[-\s]/g, '')));
      const dupes = items.filter(i => !newItems.includes(i));
      report.add('Wikipedia API', cat, items, newItems, dupes.map(d => ({ nom: d, raison: 'Déjà trouvé' })));
      if (existingResults[cat]) for (const item of newItems) existingResults[cat].add(item);
    }
    console.log(`  → ${links.length} liens analysés`);
    timer.end('wikipedia_api', 'OK');
  } catch (error) {
    console.log(`  ⚠️  Wikipedia API: ${error.message}`);
    timer.end('wikipedia_api', 'FAIL');
  }
}

// ═══════════════════════════════════════════════════════════════
// FONCTION PRINCIPALE
// ═══════════════════════════════════════════════════════════════
function getCommuneFromSlug(slug) {
  const cataloguePath = path.resolve(__dirname, '..', 'data', 'villes.json');
  const communes = JSON.parse(fs.readFileSync(cataloguePath, 'utf-8'));
  const commune = communes.find(item => item.slug === slug);

  if (!commune) {
    throw new Error(`Slug inconnu dans data/villes.json : ${slug}`);
  }

  return commune;
}

async function fetchLocalData(slug) {
  const { ville: cityName, depNumber: departmentCode } = getCommuneFromSlug(slug);
  const totalStart = Date.now();
  console.log('╔' + '═'.repeat(88) + '╗');
  console.log(`║  COLLECTE DE DONNÉES LOCALES — ${cityName.toUpperCase()} (${departmentCode})`.padEnd(89) + '║');
  console.log('╚' + '═'.repeat(88) + '╝');

  // ── Cache permanent : skip si déjà valide ──
  const outDir = path.resolve(__dirname, '..', 'data', 'local-data');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}.json`);

  if (fs.existsSync(outFile)) {
    try {
      const cached = JSON.parse(fs.readFileSync(outFile, 'utf-8'));
      if (cached.validation && cached.validation.status === 'SUCCESS') {
        console.log(`  [CACHE] ${cityName} already collected and validated. Skipping.`);
        return cached;
      }
    } catch(e) { /* cache corrupted, re-fetch */ }
  }

  const report = new CollectionReport();
  const timer = new SourceTimer();
  const results = {};
  for (const cat of CATEGORIES) results[cat] = new Set();

  // ── Source 1 : Overpass POI (graceful) ──
  try {
    const overpassResults = await collectFromOverpass(cityName, report, timer);
    for (const cat of CATEGORIES) {
      if (overpassResults[cat]) for (const item of overpassResults[cat]) results[cat].add(item);
    }
  } catch(err) {
    console.log(`  ⚠️  Overpass POI failed: ${err.message}`);
    timer.end('overpass_poi', 'FAIL');
  }

  // ── Source 2 : Overpass Géométrie (graceful) ──
  try {
    const communesLimitrophes = await collectCommunesLimitrophes(cityName, report, timer);
    for (const c of communesLimitrophes) results.communes_limitrophes.add(c);
  } catch(err) {
    console.log(`  ⚠️  Overpass Géométrie failed: ${err.message}`);
    timer.end('overpass_geo', 'FAIL');
  }

  // ── Source 3 : Wikipedia HTML (graceful) ──
  try {
    await collectFromWikipediaHTML(cityName, results, report, timer);
  } catch(err) {
    console.log(`  ⚠️  Wikipedia HTML failed: ${err.message}`);
    timer.end('wikipedia_html', 'FAIL');
  }

  // ── Source 4 : BAN (graceful) ──
  try {
    const rues = await collectFromBAN(cityName, report, timer);
    for (const r of rues) results.rues.add(r);
  } catch(err) {
    console.log(`  ⚠️  BAN failed: ${err.message}`);
    timer.end('ban', 'FAIL');
  }

  // ── Source 5 : Wikipedia API (graceful) ──
  try {
    await collectFromWikipediaAPI(cityName, results, report, timer);
  } catch(err) {
    console.log(`  ⚠️  Wikipedia API failed: ${err.message}`);
    timer.end('wikipedia_api', 'FAIL');
  }

  const finalData = {};
  for (const cat of CATEGORIES) finalData[cat] = Array.from(results[cat]).sort();

  report.print();
  timer.print(cityName);

  // ── Calcul du score de qualité ──
  const sourcesStatus = timer.toJSON();
  const successfulSources = Object.values(sourcesStatus).filter(s => s.status === 'OK').length;
  const totalSources = Object.keys(sourcesStatus).length;
  
  const hasRues = finalData.rues.length >= 1;
  const hasLimitrophes = finalData.communes_limitrophes.length >= 1;
  
  let quality;
  if (hasRues && hasLimitrophes && successfulSources >= 4) {
    quality = 'FULL';
  } else if (hasRues || hasLimitrophes) {
    quality = 'PARTIAL';
  } else {
    quality = 'MINIMAL';
  }

  console.log('\n' + '═'.repeat(90));
  console.log('  CONTRÔLE DE COHÉRENCE');
  console.log('═'.repeat(90));
  console.log(`  Rues ................. ${finalData.rues.length}`);
  console.log(`  Communes limitrophes . ${finalData.communes_limitrophes.length}`);
  console.log(`  Sources OK ........... ${successfulSources}/${totalSources}`);
  console.log(`  Qualité .............. ${quality}`);
  console.log('═'.repeat(90));

  const totalDuration = ((Date.now() - totalStart) / 1000).toFixed(1);

  // ── Construire l'objet de sortie complet ──
  const output = {
    city: cityName,
    department: departmentCode,
    ...finalData,
    sources: report.toJSON(),
    timing: sourcesStatus,
    validation: {
      status: 'SUCCESS',
      quality: quality,
      schemaVersion: '1.0',
      fetched: true,
      sources: {
        overpass_poi: (sourcesStatus.overpass_poi || {}).status === 'OK',
        overpass_geo: (sourcesStatus.overpass_geo || {}).status === 'OK',
        wikipedia_html: (sourcesStatus.wikipedia_html || {}).status === 'OK',
        wikipedia_api: (sourcesStatus.wikipedia_api || {}).status === 'OK',
        ban: (sourcesStatus.ban || {}).status === 'OK'
      },
      totalDurationSec: parseFloat(totalDuration)
    }
  };

  fs.writeFileSync(outFile, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\n💾 JSON sauvegardé : ${outFile}`);
  console.log(`   Qualité : ${quality} | Durée totale : ${totalDuration}s`);

  return output;
}

if (require.main === module) {
  const slug = process.argv[2];

  if (!slug) {
    console.error('Usage: node scripts/fetch-local-data.js <slug>');
    console.error('Exemple: node scripts/fetch-local-data.js levallois-perret');
    process.exit(1);
  }

  fetchLocalData(slug)
    .then(output => {
      console.log(`\n✅ Collecte terminée pour ${output.city}.`);
      console.log(`   Fichier JSON : data/local-data/${slug}.json`);
    })
    .catch(err => {
      console.error(`\n❌ Erreur fatale: ${err.message}`);
      console.error(err.stack);
      process.exit(1);
    });
}

module.exports = { fetchLocalData, getCommuneFromSlug };
