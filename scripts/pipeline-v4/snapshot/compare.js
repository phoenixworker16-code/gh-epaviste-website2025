const cheerio = require('cheerio');

function extractStructure(html) {
  const $ = cheerio.load(html);
  const elements = [];
  
  if ($('main').length > 0) elements.push('main');
  if ($('h1').length > 0) elements.push('h1');
  if ($('title').length > 0) elements.push('title');
  if ($('link[rel="canonical"]').length > 0) elements.push('canonical');
  
  if ($('details').length > 0 || (html.includes('FAQPage') && html.includes('application/ld+json'))) {
    elements.push('FAQ');
  }
  if ($('table').length > 0) elements.push('table');
  if ($('nav[aria-label="breadcrumb"]').length > 0 || $('.breadcrumb').length > 0) elements.push('Breadcrumb');
  
  const h2Count = $('h2').length;
  const h3Count = $('h3').length;
  const sectionCount = $('section').length;
  
  return { elements, h2Count, h3Count, sectionCount };
}

function compareStructure(oldStruct, newStruct) {
  const diffs = [];
  let status = 'PASS';
  
  const oldElements = new Set(oldStruct.elements || []);
  const newElements = new Set(newStruct.elements || []);
  
  const critical = ['main', 'h1', 'title', 'canonical', 'table', 'FAQ', 'Breadcrumb'];
  
  for (const item of critical) {
    if (oldElements.has(item) && !newElements.has(item)) {
      status = 'FAIL';
      diffs.push(`Suppression de ${item}`);
    }
  }
  
  if (status !== 'FAIL') {
    if (newStruct.sectionCount > oldStruct.sectionCount) {
      status = 'WARNING';
      diffs.push(`Ajout d'une nouvelle section`);
    }
    if (newStruct.h3Count > oldStruct.h3Count) {
      status = 'WARNING';
      diffs.push(`Ajout d'un nouveau H3`);
    }
    if (!oldElements.has('FAQ') && newElements.has('FAQ')) {
      status = 'WARNING';
      diffs.push(`Ajout d'une FAQ`);
    }
    
    // minor reorganizations
    if (diffs.length === 0 && (newStruct.h2Count !== oldStruct.h2Count || newStruct.sectionCount !== oldStruct.sectionCount)) {
      status = 'WARNING';
      diffs.push('Réorganisation mineure');
    }
  }
  
  return { status, diffs };
}

module.exports = { extractStructure, compareStructure };
