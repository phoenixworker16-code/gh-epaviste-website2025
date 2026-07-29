const fs = require('fs');
const path = require('path');

const pagesToUpdate = [
  { file: 'vehicules/page.tsx', name: 'Nos Véhicules', url: 'https://gh-epaviste.fr/vehicules' },
  { file: 'contact/page.tsx', name: 'Contact', url: 'https://gh-epaviste.fr/contact' },
  { file: 'a-propos/page.tsx', name: 'À Propos', url: 'https://gh-epaviste.fr/a-propos' },
  { file: 'faq/page.tsx', name: 'FAQ', url: 'https://gh-epaviste.fr/faq' },
  { file: 'blog/page.tsx', name: 'Blog', url: 'https://gh-epaviste.fr/blog' },
  { file: 'formulaire/page.tsx', name: "Formulaire d'Enlèvement", url: 'https://gh-epaviste.fr/formulaire' },
  { file: 'avis-clients/page.tsx', name: 'Avis Clients', url: 'https://gh-epaviste.fr/avis-clients' },
  { file: 'mentions-legales/page.tsx', name: 'Mentions Légales', url: 'https://gh-epaviste.fr/mentions-legales' },
  { file: 'confidentialite/page.tsx', name: 'Politique de Confidentialité', url: 'https://gh-epaviste.fr/confidentialite' }
];

pagesToUpdate.forEach(({ file, name, url }) => {
  const fullPath = path.join('app', file);
  if (!fs.existsSync(fullPath)) {
    console.log('Skipping missing file:', fullPath);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes('BreadcrumbJsonLd items=')) {
    console.log('Already updated:', fullPath);
    return;
  }
  
  // 1. Add import
  if (!content.includes('BreadcrumbJsonLd')) {
    content = content.replace(/(import .*?\n)/, '$1import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld";\n');
  }

  // 2. Add component
  const breadcrumbCode = `<BreadcrumbJsonLd items={[
        { name: "Accueil", url: "https://gh-epaviste.fr/" },
        { name: "${name.replace(/"/g, '\\"')}", url: "${url}" },
      ]} />`;
  
  if (content.includes('<BreadcrumbNav />')) {
    content = content.replace('<BreadcrumbNav />', `${breadcrumbCode}\n      <BreadcrumbNav />`);
  } else if (content.includes('<BreadcrumbNav')) {
    content = content.replace(/(<BreadcrumbNav[^>]*>)/, `${breadcrumbCode}\n      $1`);
  } else if (content.includes('return (')) {
    content = content.replace(/(return\s*\(\s*<(?:div|main|Fragment)[^>]*>)/, `$1\n      ${breadcrumbCode}`);
  }
  
  fs.writeFileSync(fullPath, content);
  console.log('Updated:', fullPath);
});
