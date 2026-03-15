import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/images';
const files = [
  'carte-idf.png',
  'epaviste-enlevement-epave-ile-de-france.jpg',
  'rachat-vehicule.jpg',
  'services.jpg'
];

async function optimize() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${file} - not found`);
      continue;
    }
    const ext = path.extname(file).toLowerCase();
    const tempPath = filePath + '.opt' + ext;
    
    try {
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .resize(1920, null, { withoutEnlargement: true })
          .jpeg({ quality: 65, progressive: true, mozjpeg: true })
          .toFile(tempPath);
      } else if (ext === '.png') {
        await sharp(filePath)
          .resize(800, null, { withoutEnlargement: true }) // carte is just a map, doesn't need to be huge
          .png({ quality: 70, compressionLevel: 9, effort: 10 })
          .toFile(tempPath);
      }
      
      const beforeSize = fs.statSync(filePath).size;
      const afterSize = fs.statSync(tempPath).size;
      console.log(`Optimized ${file}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`);
      
      fs.renameSync(tempPath, filePath);
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err);
    }
  }
}

optimize();
