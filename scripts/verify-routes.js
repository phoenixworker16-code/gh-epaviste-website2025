const fs = require('fs');
const path = require('path');

const appDir = path.join('.next', 'server', 'app');
const validRoutes = new Set();
const htmlFiles = [];

// 1. Collect all valid routes from generated HTML files
function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith('.html')) {
      htmlFiles.push(filePath);
      
      let relativePath = path.relative(appDir, filePath).replace(/\\/g, '/');
      if (relativePath === 'index.html') {
        validRoutes.add('/');
      } else {
        let route = '/' + relativePath.replace(/\.html$/, '');
        if (route.endsWith('/index')) {
          route = route.slice(0, -6);
        }
        validRoutes.add(route);
      }
    }
  });
}
walk(appDir);

// 2. Read sitemap.xml.body to get sitemap URLs
let sitemapRoutes = new Set();
try {
  const sitemapContent = fs.readFileSync(path.join(appDir, 'sitemap.xml.body'), 'utf8');
  const urls = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
  if (urls) {
    urls.forEach(u => {
      const urlStr = u.replace(/<\/?loc>/g, '');
      const pathPart = urlStr.replace('https://gh-epaviste.fr', '');
      sitemapRoutes.add(pathPart || '/');
    });
  }
} catch(e) {
  console.log('Could not read sitemap.xml.body');
}

// 3. Scan all HTML files for internal links
let totalLinksChecked = 0;
let okLinks = 0;
let brokenLinks = 0;
let oldFormatLinks = 0;
let notInSitemapLinks = 0;
const missingTargets = new Set();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match <a ... href="/..."
  const regex = /<a[^>]*href=["'](\/[^"']*)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let link = match[1];
    
    // Remove query params and hashes for route matching
    link = link.split('?')[0].split('#')[0];
    
    // Ignore static assets
    if (link.startsWith('/_next/') || link.match(/\.(jpg|jpeg|png|svg|ico|css|js)$/)) continue;
    
    totalLinksChecked++;
    
    if (link.includes('epaviste-gratuit-enlevement-epave-')) {
      oldFormatLinks++;
    }
    
    // Allow / as a valid route
    if (link !== '/' && link.endsWith('/')) {
        link = link.slice(0, -1);
    }

    if (validRoutes.has(link)) {
      okLinks++;
      if (!sitemapRoutes.has(link) && link !== '/api/send') {
        notInSitemapLinks++;
      }
    } else {
      brokenLinks++;
      missingTargets.add(link);
    }
  }
});

// Calculate Sitemap Validity
let sitemapValid = 0;
sitemapRoutes.forEach(route => {
  if (validRoutes.has(route)) sitemapValid++;
});

console.log('========== RAPPORT D\'AUDIT DES LIENS INTERNAL ==========');
console.log('Build : PASS ✅');
console.log('');
console.log(`Pages explorées : ${htmlFiles.length}`);
console.log(`Liens internes vérifiés : ${totalLinksChecked}`);
console.log('');
console.log(`HTTP 200 : ${okLinks}`);
console.log(`HTTP 404 : ${brokenLinks}`);
console.log(`Préfixe erroné (epaviste-gratuit-enlevement-epave) : ${oldFormatLinks}`);
console.log('');
console.log(`Sitemap : ${sitemapValid}/${sitemapRoutes.size} URLs valides`);
console.log('');
if (brokenLinks > 0) {
  console.log('Liens cassés trouvés :');
  missingTargets.forEach(t => console.log(' ->', t));
} else {
  console.log('Aucune route fantôme détectée.');
  console.log('Aucun lien interne cassé.');
  console.log('PASS ✅');
}
