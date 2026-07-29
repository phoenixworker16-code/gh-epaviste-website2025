const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Extraire le contenu éditorial d'un objet PageData
function getEditorialTextFromObject(pageData) {
  let text = '';
  const blocksToKeep = ['Introduction', 'LocalCoverage', 'VhuCompliance', 'DocsPreparation'];
  
  if (pageData && pageData.blocks) {
    for (const block of pageData.blocks) {
      if (blocksToKeep.includes(block.type)) {
        if (block.content) text += block.content + ' ';
        if (block.intro) text += block.intro + ' ';
        if (block.title) text += block.title + ' ';
        if (block.zones) {
          block.zones.forEach(z => {
             text += (z.name || '') + ' ' + (z.specificities || '') + ' ';
          });
        }
        if (block.specialCase) text += block.specialCase + ' ';
      }
    }
  }
  return text.toLowerCase().replace(/[^a-z0-9à-ÿœæç]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Créer un hash de l'empreinte éditoriale
function getEditorialHash(pageData) {
  const text = getEditorialTextFromObject(pageData);
  return crypto.createHash('sha256').update(text).digest('hex').substring(0, 8);
}

// Calculer la similarité Jaccard sur les bigrammes
function calculateSimilarity(text1, text2) {
  const getBigrams = (str) => {
    const words = str.split(' ').filter(w => w.length > 0);
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

module.exports = { 
  getEditorialTextFromObject, 
  getEditorialHash, 
  calculateSimilarity 
};
