const fs = require('fs');
const path = require('path');

// Extract only the editorial content (strip code, footer, etc.)
function extractEditorialContent(content) {
  // Very basic extraction: get text inside <p>, <h2>, <h3>, <li>
  // In a real scenario, this would parse JSX to string, but regex works for a static script
  let editorial = '';
  const matches = content.match(/<(p|h2|h3|li)[^>]*>(.*?)<\/\1>/gi);
  if (matches) {
    editorial = matches.map(m => m.replace(/<[^>]+>/g, '').trim()).join(' ');
  }
  
  // Remove common generic phrases that skew similarity
  const exclude = [
    'contactez-nous',
    'mentions légales',
    'enlèvement d\'épave gratuit',
    'centre vhu agréé',
    'certificat de destruction'
  ];
  
  let cleanText = editorial.toLowerCase();
  for (const ex of exclude) {
    cleanText = cleanText.split(ex).join(' ');
  }
  
  return cleanText;
}

// Calculate Jaccard similarity between two strings
function calculateSimilarity(text1, text2) {
  const getBigrams = (str) => {
    const words = str.match(/[a-zà-ÿ0-9]+/g) || [];
    const bigrams = new Set();
    for (let i = 0; i < words.length - 1; i++) {
      bigrams.add(words[i] + ' ' + words[i+1]);
    }
    return bigrams;
  };

  const set1 = getBigrams(text1);
  const set2 = getBigrams(text2);
  
  if (set1.size === 0 && set2.size === 0) return 0;
  
  let intersection = 0;
  for (const bg of set1) {
    if (set2.has(bg)) intersection++;
  }
  
  const union = set1.size + set2.size - intersection;
  return intersection / union;
}

function detectDuplicates(newFilePath, existingFilesDir) {
  const newContent = fs.readFileSync(newFilePath, 'utf8');
  const text1 = extractEditorialContent(newContent);
  
  let maxSimilarity = 0;
  let mostSimilarFile = '';
  
  const files = fs.readdirSync(existingFilesDir).filter(f => f.endsWith('.ts'));
  
  for (const file of files) {
    const existingPath = path.join(existingFilesDir, file);
    if (existingPath === newFilePath) continue;
    
    const existingContent = fs.readFileSync(existingPath, 'utf8');
    const text2 = extractEditorialContent(existingContent);
    
    const sim = calculateSimilarity(text1, text2);
    if (sim > maxSimilarity) {
      maxSimilarity = sim;
      mostSimilarFile = file;
    }
  }
  
  return {
    maxSimilarity: Math.round(maxSimilarity * 100),
    mostSimilarFile,
    passed: maxSimilarity <= 0.65 // 65% strict max
  };
}

if (require.main === module) {
  const newFile = process.argv[2];
  const dir = process.argv[3] || path.join(__dirname, '../data/cities_new');
  if (!newFile) {
    console.error('Usage: node detect-duplicates.js <new-file.ts> [dir-to-compare]');
    process.exit(1);
  }
  const result = detectDuplicates(newFile, dir);
  console.log(JSON.stringify(result, null, 2));
}

module.exports = { detectDuplicates, calculateSimilarity };
