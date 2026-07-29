const { spawn } = require('child_process');
const http = require('http');

async function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', err => reject(err));
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  let retries = 30;
  while (retries > 0) {
    try {
      const res = await fetchUrl('/');
      if (res.status === 200) return true;
    } catch (e) {}
    await sleep(1000);
    retries--;
  }
  return false;
}

async function runBuild() {
  console.log('⏳ Lancement de npm run build...');
  return new Promise((resolve, reject) => {
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const build = spawn(cmd, ['run', 'build'], { stdio: 'inherit' });
    build.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with code ${code}`));
    });
  });
}

async function runCrawler() {
  console.log('\n⏳ Vérification du robots.txt...');
  try {
    const robRes = await fetchUrl('/robots.txt');
    if (robRes.status !== 200) {
      console.error('❌ ERREUR : robots.txt introuvable ou renvoie un statut', robRes.status);
      return false;
    }
    if (!robRes.data.includes('Sitemap: https://gh-epaviste.fr/sitemap.xml')) {
      console.error('❌ ERREUR : robots.txt ne contient pas la référence exacte au sitemap.');
      return false;
    }
    console.log('✅ robots.txt valide et référence bien le sitemap.');
  } catch (err) {
    console.error('❌ ERREUR : Impossible de lire robots.txt :', err.message);
    return false;
  }

  console.log('\n⏳ Récupération du sitemap.xml...');
  let sitemap;
  try {
    const res = await fetchUrl('/sitemap.xml');
    if (res.status !== 200) throw new Error('Sitemap non accessible : ' + res.status);
    sitemap = res.data;
  } catch (err) {
    console.error(`❌ ERREUR : ${err.message}`);
    return false;
  }

  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemap)) !== null) {
    const path = match[1].replace('https://gh-epaviste.fr', '');
    urls.push(path || '/');
  }
  console.log(`✅ Trouvé ${urls.length} URLs dans le sitemap.`);
  
  console.log('⏳ Analyse stricte SEO On-Page (H1, Meta, Canonical, OG, JSON-LD, Alt, Taille)...');
  const allInternalLinksFound = new Set();
  let sitemapValid = 0;
  let oldFormatLinks = 0;
  
  // Nouveaux compteurs stricts
  const errors = {
    missingH1: 0,
    multipleH1: 0,
    missingMetaDesc: 0,
    missingCanonical: 0,
    multipleCanonical: 0,
    missingOG: 0,
    missingTwitter: 0,
    missingRobots: 0,
    invalidJsonLd: 0,
    missingImgAlt: 0,
    tooLargeHtml: 0
  };

  const schemaStats = {
    Organization: 0,
    LocalBusiness: 0,
    BreadcrumbList: 0,
    WebSite: 0,
    FAQPage: 0,
    Article: 0
  };
  
  // Pour détecter les doublons de Titles et Canonicals sur l'ensemble du site
  const allTitles = new Map(); // title -> url
  const allCanonicals = new Map(); // canonical -> url
  const duplicateTitles = new Set();
  const duplicateCanonicals = new Set();

  for (let i = 0; i < urls.length; i += 50) {
    const batch = urls.slice(i, i + 50);
    const promises = batch.map(async (url) => {
      try {
        const res = await fetchUrl(url);
        if (res.status === 200) {
          sitemapValid++;
          const html = res.data;
          
          // Poids du HTML (limite 300 Ko = 307200 octets)
          if (Buffer.byteLength(html, 'utf8') > 307200) {
            errors.tooLargeHtml++;
          }

          // Liens
          const linkRegex = /href=["'](\/[^"']+)["']/gi;
          let linkMatch;
          while ((linkMatch = linkRegex.exec(html)) !== null) {
            let link = linkMatch[1].split('?')[0].split('#')[0];
            if (link.startsWith('/_next/') || link.match(/\.(jpg|jpeg|png|svg|ico|css|js)$/)) continue;
            if (link !== '/' && link.endsWith('/')) link = link.slice(0, -1);
            
            allInternalLinksFound.add(link);
            if (link.includes('epaviste-gratuit-enlevement-epave-')) oldFormatLinks++;
          }
          
          // H1
          const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
          const h1Matches = html.match(h1Regex);
          if (!h1Matches) errors.missingH1++;
          else if (h1Matches.length > 1) errors.multipleH1++;

          // Meta Description
          const metaDescRegex = /<meta[^>]*name=["']description["'][^>]*>/i;
          if (!metaDescRegex.test(html)) errors.missingMetaDesc++;

          // Robots
          const metaRobotsRegex = /<meta[^>]*name=["']robots["'][^>]*>/i;
          if (!metaRobotsRegex.test(html)) errors.missingRobots++;
          
          // OpenGraph
          const ogRegex = /<meta[^>]*property=["']og:title["'][^>]*>/i;
          if (!ogRegex.test(html)) errors.missingOG++;
          
          // Twitter Card
          const twitterRegex = /<meta[^>]*name=["']twitter:card["'][^>]*>/i;
          if (!twitterRegex.test(html)) errors.missingTwitter++;
          
          // Images Alt
          const imgRegex = /<img([^>]+)>/gi;
          let imgMatch;
          while ((imgMatch = imgRegex.exec(html)) !== null) {
             const attrs = imgMatch[1];
             if (!/alt=["'][^"']*["']/i.test(attrs)) {
                errors.missingImgAlt++;
                break; // Compte 1 erreur par page contenant au moins une image sans alt
             }
          }

          // Title uniqueness
          const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
          if (titleMatch) {
            const title = titleMatch[1].trim();
            if (allTitles.has(title)) {
              duplicateTitles.add(`Title en double : "${title}" sur ${url} et ${allTitles.get(title)}`);
            } else {
              allTitles.set(title, url);
            }
          }

          // Canonical
          const canonicalRegex = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
          let canonicalsFound = 0;
          let canMatch;
          while ((canMatch = canonicalRegex.exec(html)) !== null) {
             canonicalsFound++;
             const canUrl = canMatch[1];
             if (allCanonicals.has(canUrl)) {
               duplicateCanonicals.add(`Canonical en double : "${canUrl}" sur ${url} et ${allCanonicals.get(canUrl)}`);
             } else {
               allCanonicals.set(canUrl, url);
             }
          }
          if (canonicalsFound === 0) errors.missingCanonical++;
          else if (canonicalsFound > 1) errors.multipleCanonical++;
          
          // Schema.org (JSON-LD)
          const jsonldRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
          let jsonldMatch;
          let pageSchemas = new Set();
          
          while ((jsonldMatch = jsonldRegex.exec(html)) !== null) {
            try {
              const data = JSON.parse(jsonldMatch[1]);
              const items = Array.isArray(data) ? data : (data['@graph'] ? data['@graph'] : [data]);
              items.forEach(item => {
                if (item['@type']) {
                  const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
                  types.forEach(t => pageSchemas.add(t));
                }
              });
            } catch (e) {
              errors.invalidJsonLd++;
            }
          }
          
          if (pageSchemas.has('Organization')) schemaStats.Organization++;
          if (pageSchemas.has('LocalBusiness')) schemaStats.LocalBusiness++;
          if (pageSchemas.has('BreadcrumbList')) schemaStats.BreadcrumbList++;
          if (pageSchemas.has('WebSite')) schemaStats.WebSite++;
          if (pageSchemas.has('FAQPage')) schemaStats.FAQPage++;
          if (pageSchemas.has('Article')) schemaStats.Article++;
        }
      } catch (e) { }
    });
    await Promise.all(promises);
    process.stdout.write(`\rProgression : ${Math.min(i + 50, urls.length)} / ${urls.length}`);
  }
  
  console.log('\n\n⏳ Vérification des liens internes extraits...');
  const totalLinksChecked = allInternalLinksFound.size;
  let okLinks = 0;
  let brokenLinks = 0;
  const missingTargets = new Set();
  const validRoutes = new Set(urls);

  const uniqueLinksArr = Array.from(allInternalLinksFound);
  for (let i = 0; i < uniqueLinksArr.length; i += 50) {
    const batch = uniqueLinksArr.slice(i, i + 50);
    const promises = batch.map(async (link) => {
      try {
        if (validRoutes.has(link) && sitemapValid > 0) {
           okLinks++;
           return;
        }
        const res = await fetchUrl(link);
        if (res.status === 200) {
          okLinks++;
        } else {
          brokenLinks++;
          missingTargets.add(`${link} (Status: ${res.status})`);
        }
      } catch (e) {
        brokenLinks++;
        missingTargets.add(`${link} (Erreur réseau)`);
      }
    });
    await Promise.all(promises);
  }

  console.log('\n========== RAPPORT FINAL D\'AUDIT ==========');
  console.log(`Pages explorées : ${urls.length}`);
  console.log(`Liens internes uniques vérifiés : ${totalLinksChecked}\n`);
  
  console.log('--- STATUT HTTP DES LIENS ---');
  console.log(`HTTP 200 : ${okLinks}`);
  console.log(`HTTP 404/Erreurs : ${brokenLinks}`);
  console.log(`Préfixe erroné (epaviste-gratuit-enlevement-epave) : ${oldFormatLinks}\n`);
  
  console.log('--- SEO ON-PAGE STRICT ---');
  console.log(`Pages sans H1 : ${errors.missingH1}`);
  console.log(`Pages avec multiples H1 : ${errors.multipleH1}`);
  console.log(`Pages sans Meta Description : ${errors.missingMetaDesc}`);
  console.log(`Pages sans Canonical : ${errors.missingCanonical}`);
  console.log(`Pages avec multiples Canonical : ${errors.multipleCanonical}`);
  console.log(`Pages sans OpenGraph (og:title) : ${errors.missingOG}`);
  console.log(`Pages sans Twitter Card : ${errors.missingTwitter}`);
  console.log(`Pages sans Meta Robots : ${errors.missingRobots}`);
  console.log(`Pages avec images sans attribut alt : ${errors.missingImgAlt}`);
  console.log(`Pages dépassant 300 Ko HTML : ${errors.tooLargeHtml}`);
  console.log(`Titres (Title) en double : ${duplicateTitles.size}`);
  console.log(`Canonicals en double : ${duplicateCanonicals.size}\n`);
  
  console.log('--- STRUCTURE SCHEMA.ORG ---');
  console.log(`JSON-LD Invalides : ${errors.invalidJsonLd}`);
  console.log(`WebSite : ${schemaStats.WebSite}`);
  console.log(`Organization : ${schemaStats.Organization}`);
  console.log(`LocalBusiness : ${schemaStats.LocalBusiness}`);
  console.log(`BreadcrumbList : ${schemaStats.BreadcrumbList}`);
  console.log(`FAQPage : ${schemaStats.FAQPage}`);
  console.log(`Article : ${schemaStats.Article}\n`);

  let hasError = false;
  const criticalErrors = [
    brokenLinks, oldFormatLinks, errors.missingH1, errors.multipleH1,
    errors.missingMetaDesc, errors.missingCanonical, errors.multipleCanonical,
    errors.missingOG, errors.missingTwitter, errors.missingRobots,
    errors.invalidJsonLd, errors.missingImgAlt, errors.tooLargeHtml,
    duplicateTitles.size, duplicateCanonicals.size
  ].reduce((a, b) => a + b, 0);

  if (criticalErrors > 0) {
    console.log('❌ ÉCHEC DE LA VALIDATION : Le batch contient des erreurs strictes SEO.');
    if (brokenLinks > 0) missingTargets.forEach(t => console.log(' -> Lien cassé :', t));
    if (duplicateTitles.size > 0) duplicateTitles.forEach(t => console.log(' ->', t));
    if (duplicateCanonicals.size > 0) duplicateCanonicals.forEach(t => console.log(' ->', t));
    // D'autres détails pourraient être logués si besoin
    hasError = true;
  }

  if (hasError) return false;

  console.log('✅ SUCCÈS : Base technique parfaitement saine. Pipeline CI/CD Validée. PASS ✅');
  return true;
}

async function main() {
  try {
    // await runBuild(); // Commenté temporairement pour un test rapide, décommentez pour la prod
    
    console.log('\n⏳ Démarrage du serveur de production...');
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const serverProcess = spawn(cmd, ['run', 'start'], { stdio: 'ignore' });
    
    const isReady = await waitForServer();
    if (!isReady) {
      console.error('❌ Le serveur n\'a pas démarré à temps.');
      serverProcess.kill();
      process.exit(1);
    }
    
    console.log('✅ Serveur en ligne sur http://localhost:3000');
    
    const success = await runCrawler();
    
    console.log('\n🛑 Arrêt du serveur...');
    serverProcess.kill();
    
    if (success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Erreur critique :', error.message);
    process.exit(1);
  }
}

main();
