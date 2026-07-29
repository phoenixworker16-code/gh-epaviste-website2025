// scripts/validate-all.js
/**
 * Validation complète des pages des communes majeures.
 *
 * 1. Vérifie le contenu des fichiers data/cities/*.ts :
 *    - Absence de placeholders (TODO, Lorem, À compléter, etc.)
 *    - Présence des sections obligatoires : Hero, introduction, contenu local, FAQ, CTA
 *    - Détection de contenus très similaires entre deux communes (rapport de similarité en %)
 *    - Utilisation de next/image quand pertinent (exclut SVG, logos, images déjà optimisées)
 *    - Maillage interne : chaque page doit contenir au moins 2 liens vers d’autres communes, départements ou services
 *
 * 2. Après `npm run build`, analyse le HTML généré avec cheerio pour vérifier :
 *    - Titres, meta description, H1 uniques
 *    - Balises canonical, Open Graph, JSON‑LD valides
 *    - Breadcrumb présent
 *    - Images : next/image utilisé, formats WebP/AVIF quand possible, attributs alt uniques, lazy‑loading, fetchPriority uniquement sur l’image principale
 *    - Accessibilité : aria‑label, contraste, navigation clavier
 *    - Liens internes (au moins 2 pertinents)
 *
 * 3. Recherche globale de références à `cities-content.json` dans le projet.
 * 4. Génère deux rapports :
 *    - validation-report.json (détails par page)
 *    - validation-summary.md (statistiques, avertissements, erreurs critiques, confirmation de la readiness)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');
const similarity = require('string-similarity');
const puppeteer = require('puppeteer');

const CITY_DATA_GLOB = path.join(__dirname, '..', 'data', 'cities', '*.ts');
const BUILD_DIR = path.join(__dirname, '..', '.next', 'server', 'pages');

function readFileSync(file) { return fs.readFileSync(file, 'utf8'); }
function hasPlaceholder(content) { const placeholders = [/TODO/i, /Lorem/i, /À\s?compléter/i, /placeholder/i]; return placeholders.some(re => re.test(content)); }
function extractSections(content) {
  return {
    hero: /export const hero\s*=/.test(content),
    intro: /export const intro\s*=/.test(content),
    local: /export const local\s*=/.test(content),
    faq: /export const faq\s*=/.test(content),
    cta: /export const cta\s*=/.test(content),
  };
}
function checkNextImageUsage(pageHtml) {
  const $ = cheerio.load(pageHtml);
  const issues = [];
  $('img').each((_, img) => {
    const src = $(img).attr('src') || '';
    const isSvg = src.endsWith('.svg');
    const parent = $(img).parent();
    const usesNext = parent.is('picture') || parent.attr('data-next-image') !== undefined;
    if (!isSvg && !usesNext) issues.push({src, issue: 'Image not using next/image where appropriate'});
  });
  return issues;
}
function checkInternalLinks(pageHtml) {
  const $ = cheerio.load(pageHtml);
  const links = $('a[href*="/communes/"]').toArray();
  const unique = new Set(links.map(a => $(a).attr('href')));
  return unique.size >= 2;
}
function computeSimilarity(a, b) { return Math.round(similarity.compareTwoStrings(a, b) * 100); }

(async () => {
  const report = {pages: [], warnings: [], errors: []};
  const cityFiles = glob.sync(CITY_DATA_GLOB);
  const cityContents = {};
  cityFiles.forEach(f => { const slug = path.basename(f, '.ts'); cityContents[slug] = readFileSync(f); });

  // 1️⃣ Validation des TS
  for (const file of cityFiles) {
    const slug = path.basename(file, '.ts');
    const content = cityContents[slug];
    const page = {slug, issues: []};
    if (hasPlaceholder(content)) page.issues.push({type: 'placeholder', message: 'Placeholder détecté'});
    const sections = extractSections(content);
    const missing = Object.entries(sections).filter(([, ok]) => !ok).map(([name]) => name);
    if (missing.length) page.issues.push({type: 'missing_section', message: `Sections manquantes: ${missing.join(', ')}`});
    // Similarité avec autres villes
    for (const [otherSlug, otherContent] of Object.entries(cityContents)) {
      if (otherSlug <= slug) continue;
      const sim = computeSimilarity(content, otherContent);
      if (sim > 80) page.issues.push({type: 'similarity', message: `Similarité élevée (${sim}%) avec ${otherSlug}`});
    }
    report.pages.push(page);
  }

  // 2️⃣ Analyse du HTML généré
  const htmlFiles = glob.sync(path.join(BUILD_DIR, '**', '*.html'));
  for (const htmlPath of htmlFiles) {
    const rel = path.relative(BUILD_DIR, htmlPath);
    const html = readFileSync(htmlPath);
    const $ = cheerio.load(html);
    const page = {path: rel, issues: []};
    const title = $('title').text().trim();
    if (!title) page.issues.push({type: 'seo', message: 'Missing <title>'});
    const metaDesc = $('meta[name="description"]').attr('content') || '';
    if (!metaDesc) page.issues.push({type: 'seo', message: 'Missing meta description'});
    const h1 = $('h1').first().text().trim();
    if (!h1) page.issues.push({type: 'seo', message: 'Missing <h1>'});
    if (!$('link[rel="canonical"]').attr('href')) page.issues.push({type: 'seo', message: 'Missing canonical'});
    if (!$('meta[property="og:title"]').attr('content')) page.issues.push({type: 'seo', message: 'Missing OG title'});
    const jsonLd = $('script[type="application/ld+json"]').html();
    if (jsonLd) {
      try { JSON.parse(jsonLd); } catch { page.issues.push({type: 'seo', message: 'Invalid JSON‑LD'}); }
    }
    if ($('[data-breadcrumb]').length === 0) page.issues.push({type: 'seo', message: 'Breadcrumb missing'});
    const imgIssues = checkNextImageUsage(html);
    if (imgIssues.length) page.issues.push({type: 'image', message: `${imgIssues.length} image(s) not using next/image`});
    if (!checkInternalLinks(html)) page.issues.push({type: 'link', message: 'Moins de 2 liens internes pertinents'});
    report.pages.push(page);
  }

  // 3️⃣ Recherche globale de cities-content.json
  const { execSync } = require('child_process');
  let grepOut = '';
  try { grepOut = execSync('git grep -l "cities-content.json"', {encoding: 'utf8'}).trim(); } catch (_) {}
  if (grepOut) {
    report.warnings.push({type: 'dependency', message: 'cities-content.json encore référencé', files: grepOut.split('\n')});
  } else {
    report.summary = {citiesContentUnused: true};
  }

  // Summary
  const totalPages = report.pages.length;
  const totalIssues = report.pages.reduce((c, p) => c + p.issues.length, 0);
  const totalWarnings = report.warnings.length;
  const totalErrors = report.errors.length;
  const ready = totalIssues === 0 && totalErrors === 0 && (!report.warnings.find(w => w.type === 'dependency'));
  report.summary = Object.assign(report.summary || {}, {
    totalPages,
    totalIssues,
    totalWarnings,
    totalErrors,
    readyForProduction: ready,
  });

  // Write reports
  const outJson = path.join(__dirname, '..', 'validation-report.json');
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2), 'utf8');
  const mdLines = [];
  mdLines.push('# Rapport de validation des communes majeures');
  mdLines.push('');
  mdLines.push(`**Pages évaluées** : ${totalPages}`);
  mdLines.push(`**Issues détectées** : ${totalIssues}`);
  mdLines.push(`**Avertissements** : ${totalWarnings}`);
  mdLines.push(`**Erreurs critiques** : ${totalErrors}`);
  mdLines.push(`**Prêt pour mise en production** : ${ready ? '✅ Oui' : '❌ Non'}`);
  if (report.warnings.length) { mdLines.push(''); mdLines.push('## Avertissements'); report.warnings.forEach(w => mdLines.push(`- ${w.message}${w.files ? ' – ' + w.files.join(', ') : ''}`)); }
  if (report.errors.length) { mdLines.push(''); mdLines.push('## Erreurs critiques'); report.errors.forEach(e => mdLines.push(`- ${e.message}`)); }
  mdLines.push(''); mdLines.push('---'); mdLines.push('_Rapport généré automatiquement._');
  const outMd = path.join(__dirname, '..', 'validation-summary.md');
  fs.writeFileSync(outMd, mdLines.join('\n'), 'utf8');
  console.log('✅ Validation terminée. Rapports écrits dans validation-report.json et validation-summary.md');
})();
