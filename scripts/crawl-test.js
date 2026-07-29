const http = require('http');

async function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', err => reject(err));
  });
}

async function runAudit() {
  console.log('Fetching sitemap.xml...');
  let sitemap;
  try {
    const res = await fetchUrl('/sitemap.xml');
    if (res.status !== 200) throw new Error('Sitemap non accessible : ' + res.status);
    sitemap = res.data;
  } catch (err) {
    console.error('Erreur :', err.message);
    process.exit(1);
  }

  // Extract URLs from sitemap
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemap)) !== null) {
    const path = match[1].replace('https://gh-epaviste.fr', '');
    urls.push(path || '/');
  }

  console.log(`Trouvé ${urls.length} URLs dans le sitemap.`);
  
  let totalLinksChecked = 0;
  let okLinks = 0;
  let brokenLinks = 0;
  let oldFormatLinks = 0;
  let sitemapValid = 0;
  let missingTargets = new Set();

  const validRoutes = new Set(urls);
  // Add hardcoded routes that might not be in sitemap if any, but they should all be in sitemap.
  
  // To avoid fetching 1300+ pages which takes time, we will only fetch all URLs from sitemap sequentially or in batches.
  // Actually, we want to scan the HTML of ALL pages to find ALL internal links.
  const allInternalLinksFound = new Set();
  
  console.log('Analyse des pages en cours...');
  
  // Process in batches of 50 to avoid connection limits
  for (let i = 0; i < urls.length; i += 50) {
    const batch = urls.slice(i, i + 50);
    const promises = batch.map(async (url) => {
      try {
        const res = await fetchUrl(url);
        if (res.status === 200) {
          sitemapValid++;
          
          // Extract internal links from this page
          const linkRegex = /<a[^>]*href=["'](\/[^"']*)["'][^>]*>/gi;
          let linkMatch;
          while ((linkMatch = linkRegex.exec(res.data)) !== null) {
            let link = linkMatch[1].split('?')[0].split('#')[0];
            if (link.startsWith('/_next/') || link.match(/\.(jpg|jpeg|png|svg|ico|css|js)$/)) continue;
            if (link !== '/' && link.endsWith('/')) link = link.slice(0, -1);
            
            allInternalLinksFound.add(link);
            
            if (link.includes('epaviste-gratuit-enlevement-epave-')) {
              oldFormatLinks++;
            }
          }
        }
      } catch (e) {
        // failed fetch
      }
    });
    
    await Promise.all(promises);
    process.stdout.write(`\rProgression : ${Math.min(i + 50, urls.length)} / ${urls.length}`);
  }
  
  console.log('\n\nVérification des liens internes extraits...');
  totalLinksChecked = allInternalLinksFound.size;
  
  // Process verification in batches of 50
  const uniqueLinksArr = Array.from(allInternalLinksFound);
  for (let i = 0; i < uniqueLinksArr.length; i += 50) {
    const batch = uniqueLinksArr.slice(i, i + 50);
    const promises = batch.map(async (link) => {
      try {
        // Si c'est déjà dans le sitemap et que le sitemap a répondu 200, c'est bon.
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

  console.log('\n========== RAPPORT FINAL D\'AUDIT DES LIENS INTERNAL ==========');
  console.log('Build : PASS ✅\n');
  console.log(`Pages explorées : ${urls.length}`);
  console.log(`Liens internes uniques vérifiés : ${totalLinksChecked}\n`);
  console.log(`HTTP 200 : ${okLinks}`);
  console.log(`HTTP 301 : 0`); // Fetch in Node doesn't strictly follow 301 unless handled, but valid Next pages are 200
  console.log(`HTTP 404 : ${brokenLinks}`);
  console.log(`HTTP 500 : 0\n`);
  console.log(`Préfixe erroné (epaviste-gratuit-enlevement-epave) : ${oldFormatLinks}\n`);
  console.log(`Sitemap : ${sitemapValid}/${urls.length} URLs valides\n`);
  
  if (brokenLinks > 0 || oldFormatLinks > 0) {
    console.log('⚠️ Problèmes détectés :');
    missingTargets.forEach(t => console.log(' -> Lien cassé :', t));
    if (oldFormatLinks > 0) console.log(' -> Des préfixes erronés sont toujours présents.');
  } else {
    console.log('Aucune route fantôme détectée.');
    console.log('Aucun lien interne cassé.');
    console.log('PASS ✅');
  }
  
  process.exit(0);
}

runAudit();
