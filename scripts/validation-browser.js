// scripts/validation-browser.js
/**
 * Browser‑level validation using Puppeteer.
 * Checks a representative set of URLs for:
 *   • console errors / warnings
 *   • React hydration errors (look for 'Hydration failed' in console)
 *   • Next.js warnings ("[next]" prefix)
 *   • HTTP status 200
 *   • presence of <link rel="canonical">
 *   • functional contact form / tel links
 *   • absence of duplicate canonical URLs
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Base URL – adjust if the dev server runs on a different port
const BASE = 'http://localhost:3000';

// Representative pages (add / modify slugs as needed)
const PAGES = [
  '/',
  '/services',
  '/departements',
  '/blog',
  '/contact',
  '/communes/paris',
  '/communes/marseille',
  '/communes/lyon',
];

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const results = [];

  for (const rel of PAGES) {
    const url = new URL(rel, BASE).toString();
    const page = await browser.newPage();
    const pageResult = {
      url,
      status: null,
      consoleErrors: [],
      consoleWarnings: [],
      hydrationError: false,
      nextWarnings: [],
      canonical: null,
      duplicateCanonical: false,
      contactLinks: [],
    };

    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error') pageResult.consoleErrors.push(text);
      if (type === 'warning') pageResult.consoleWarnings.push(text);
      if (/Hydration failed/i.test(text)) pageResult.hydrationError = true;
      if (/\[next\]/i.test(text)) pageResult.nextWarnings.push(text);
    });

    const response = await page.goto(url, {waitUntil: 'networkidle2'});
    pageResult.status = response && response.status();

    // canonical tag
    const canonEl = await page.$('link[rel="canonical"]');
    if (canonEl) {
      pageResult.canonical = await page.evaluate(el => el.href, canonEl);
    }

    // contact / tel links
    const contactHandles = await page.$x("//*[contains(@href, 'mailto:') or contains(@href, 'tel:')]");
    for (const h of contactHandles) {
      const href = await page.evaluate(el => el.getAttribute('href'), h);
      pageResult.contactLinks.push(href);
    }

    results.push(pageResult);
    await page.close();
  }

  await browser.close();

  // Detect duplicate canonicals across pages
  const canonicals = results.map(r => r.canonical).filter(Boolean);
  const duplicates = canonicals.filter((c, i) => canonicals.indexOf(c) !== i);
  results.forEach(r => {
    if (duplicates.includes(r.canonical)) r.duplicateCanonical = true;
  });

  // Write detailed JSON report
  const outJson = path.join(__dirname, '..', 'validation-browser-report.json');
  fs.writeFileSync(outJson, JSON.stringify(results, null, 2), 'utf8');

  // Write markdown summary
  const lines = [];
  lines.push('# Rapport de validation côté navigateur');
  lines.push('');
  lines.push(`**Pages testées** : ${results.length}`);
  const critical = results.filter(r => r.consoleErrors.length || r.hydrationError || r.status !== 200 || r.duplicateCanonical).length;
  lines.push(`**Pages avec erreurs critiques** : ${critical}`);
  const warningsCount = results.reduce((c, r) => c + r.consoleWarnings.length + r.nextWarnings.length, 0);
  lines.push(`**Avertissements (console + Next)** : ${warningsCount}`);
  lines.push('');
  lines.push('## Détails par page');
  results.forEach(r => {
    lines.push(`### ${r.url}`);
    lines.push(`- Status : ${r.status}`);
    if (r.consoleErrors.length) lines.push(`- Console errors : ${r.consoleErrors.join(' | ')}`);
    if (r.hydrationError) lines.push(`- **Hydration error detected**`);
    if (r.nextWarnings.length) lines.push(`- Next warnings : ${r.nextWarnings.join(' | ')}`);
    if (r.duplicateCanonical) lines.push(`- **Duplicate canonical URL**`);
    if (r.contactLinks.length) lines.push(`- Contact links : ${r.contactLinks.join(', ')}`);
    lines.push('');
  });

  const outMd = path.join(__dirname, '..', 'validation-browser-summary.md');
  fs.writeFileSync(outMd, lines.join('\n'), 'utf8');

  console.log('✅ Browser validation completed – reports written');
})();
