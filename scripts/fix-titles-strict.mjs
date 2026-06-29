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

const files = walkSync(path.join(process.cwd(), 'app'));
let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Regex for titles: we want to capture everything before ` | ` or ` - ` followed by "GH Épaviste" or "Service Professionnel"
  // Example matches to remove: " | GH Épaviste", " - GH Épaviste", " | Service Professionnel en Île-de-France", " | Enlèvement d'épave gratuit" IF it's tacked on unnecessarily
  // Actually, the user says: "Le titre final doit strictement ressembler à : [Nom de la Page] - GH Épaviste"
  // So we just want to remove any " | [anything]" or " - GH Épaviste [anything]" that is present inside the title string.
  
  content = content.replace(/title:\s*["']([^|]+?)\s*(?:\|| - GH Épaviste).*?["']/g, 'title: "$1"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated title in ${file}`);
    updatedCount++;
  }
}

console.log(`Done. Updated ${updatedCount} files.`);
