import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = walkSync(path.join(process.cwd(), 'app')).filter(f => f.includes('enlevement-epave-'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Add import villes if not exists
  if (!content.includes('import villes from "@/data/villes.json"')) {
    content = content.replace(
      'import { CitiesList } from "@/components/cities-list"',
      'import { CitiesList } from "@/components/cities-list"\nimport villes from "@/data/villes.json"'
    );
  }

  // Find the exact depNumber
  const match = content.match(/<CitiesList depNumber="(\d+)" departementName="([^"]+)" \/>/);
  if (match) {
    const depNumber = match[1];
    const depName = match[2];

    const newComponentCall = `{/* Variables passées en props (calculées côté serveur) */}
      <CitiesList 
        cities={villes.filter(v => v.depNumber === "${depNumber}").map(v => ({ slug: v.slug, ville: v.ville }))} 
        departementName="${depName}" 
      />`;

    content = content.replace(match[0], newComponentCall);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
