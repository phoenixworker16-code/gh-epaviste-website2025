// scripts/analyze-city-vars.js
const fs = require('fs');
const path = require('path');

const citiesDir = path.resolve(__dirname, '..', 'data', 'cities');
const report = [];

fs.readdirSync(citiesDir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  const filePath = path.join(citiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const hasCityName = /\bconst\s+cityName\b/.test(content) || /export\s+const\s+cityName\b/.test(content);
  const hasSlugConst = /\bconst\s+slug\b/.test(content) || /export\s+const\s+slug\b/.test(content);
  report.push({file, hasCityName, hasSlugConst});
});

fs.writeFileSync(path.resolve('analysis_report.json'), JSON.stringify(report, null, 2));
console.log('Analysis completed, report written to analysis_report.json');
