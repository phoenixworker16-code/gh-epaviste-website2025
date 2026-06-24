import fs from 'fs';
import path from 'path';

const DEPARTEMENTS = [
  { code: '75', name: 'Paris' },
  { code: '77', name: 'Seine-et-Marne' },
  { code: '78', name: 'Yvelines' },
  { code: '91', name: 'Essonne' },
  { code: '92', name: 'Hauts-de-Seine' },
  { code: '93', name: 'Seine-Saint-Denis' },
  { code: '94', name: 'Val-de-Marne' },
  { code: '95', name: "Val-d'Oise" }
];

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function fetchCommunes() {
  const allVilles = [];

  for (const dep of DEPARTEMENTS) {
    const url = `https://geo.api.gouv.fr/communes?codeDepartement=${dep.code}&fields=nom,codesPostaux&format=json`;
    console.log(`Fetching ${dep.name}...`);
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      for (const commune of data) {
        // Some communes have multiple postal codes, we just take the first one or loop
        // Often one is enough for a city page, or we create one per postal code if requested.
        // The brief says: "avec leur code postal respectif". I will use the first one.
        const zipCode = commune.codesPostaux[0];
        const villeName = commune.nom;
        const slug = slugify(removeAccents(villeName));
        
        allVilles.push({
          ville: villeName,
          slug: slug,
          zipCode: zipCode,
          departement: dep.name,
          depNumber: dep.code
        });
      }
    } catch (e) {
      console.error("Error fetching", dep.name, e);
    }
  }

  // Deduplicate by slug just in case
  const uniqueVillesMap = new Map();
  for (const v of allVilles) {
    if (!uniqueVillesMap.has(v.slug)) {
      uniqueVillesMap.set(v.slug, v);
    }
  }

  const uniqueVilles = Array.from(uniqueVillesMap.values());
  console.log(`Fetched ${uniqueVilles.length} communes in total.`);

  const destPath = path.resolve(process.cwd(), 'data/villes.json');
  fs.writeFileSync(destPath, JSON.stringify(uniqueVilles, null, 2), 'utf-8');
  console.log(`Saved to ${destPath}`);
}

fetchCommunes();
