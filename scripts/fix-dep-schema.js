const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const dirs = fs.readdirSync(appDir).filter(f => f.startsWith('enlevement-epave-') && fs.statSync(path.join(appDir, f)).isDirectory());

let count = 0;
for (const dir of dirs) {
  const file = path.join(appDir, dir, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if it already has an array of schemas
    if (!content.includes('const jsonLd = [')) {
      const depNameMatch = content.match(/areaServed:\s*\{\s*"@type":\s*"AdministrativeArea",\s*name:\s*"([^"]+)"\s*\}/);
      const depName = depNameMatch ? depNameMatch[1] : 'Île-de-France';
      const url = `https://gh-epaviste.fr/${dir}`;
      
      const replacement = `const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: $1.metaTitle,
      description: $1.metaDescription,
      provider: { "@type": "LocalBusiness", name: "GH Épaviste", telephone: "+33753120793" },
      areaServed: { "@type": "AdministrativeArea", name: "${depName}" },
      serviceType: "Enlèvement d'épaves automobiles",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      name: "${depName.split(' ')[0]}", // to remove (91) if it exists
      url: "${url}"
    }
  ]`;
      
      let modified = content.replace(
        /const jsonLd = \{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"Service",\s*name:\s*([^.]+)\.metaTitle,\s*description:\s*\1\.metaDescription,[\s\S]*?offers:.*\}\s*,?\s*\}/,
        replacement
      );
      
      if (content !== modified) {
        fs.writeFileSync(file, modified);
        count++;
        console.log(`Updated ${dir}`);
      }
    }
  }
}
console.log(`Done. Updated ${count} files.`);
