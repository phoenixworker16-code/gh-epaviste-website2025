const fs = require('fs');
const path = require('path');

const citiesDir = path.join('data', 'cities');
const files = fs.readdirSync(citiesDir);
let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(citiesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const originalContent = content;
  content = content.replace(/['"]enlevement-epave-(essonne|val-d-oise|yvelines|val-de-marne|seine-et-marne|hauts-de-seine|seine-saint-denis|paris)['"]/g, "'$1'");
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
  }
});

console.log('Fixed', fixedCount, 'city files.');
