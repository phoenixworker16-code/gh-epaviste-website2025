/**
 * Code Generator (Générateur TS pur)
 * Transforme un objet PageData en code TypeScript.
 * 
 * RÈGLES :
 * - Fonction pure, sans I/O (aucun require('fs'), aucun console.log).
 * - 100% déterministe.
 * - Validation défensive intégrée.
 */

const { serializeBlock } = require('./serializers');
const { quote, formatArrayOfStrings } = require('./formatter');

function generateTypeScript(pageData) {
  // Validation défensive
  if (!pageData) throw new Error('pageData is undefined or null');
  if (typeof pageData.slug !== 'string' || !pageData.slug) throw new Error('pageData.slug is invalid');
  if (!pageData.blocks) throw new Error('pageData.blocks is undefined');
  if (!Array.isArray(pageData.blocks)) throw new Error('pageData.blocks is not an array');
  if (pageData.blocks.length === 0) throw new Error('pageData.blocks is empty');

  // Construire le nom de la variable d'export camelCase
  const varName = pageData.slug
    .split('-')
    .map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1))
    .join('') + 'Data';

  // Sérialiser les blocks de manière déterministe
  const blocksStr = pageData.blocks.map(serializeBlock).join(',\n');

  // Propriétés ordonnées strictement (ordre figé)
  const props = [
    `  slug: ${quote(pageData.slug)},`,
    `  entityType: ${quote(pageData.entityType)},`,
    `  metaTitle: ${quote(pageData.metaTitle)},`,
    `  metaDescription: ${quote(pageData.metaDescription)},`,
    `  relatedServicesSlugs: ${formatArrayOfStrings(pageData.relatedServicesSlugs || [], 2)},`,
    `  relatedCitiesSlugs: ${formatArrayOfStrings(pageData.relatedCitiesSlugs || [], 2)},`,
    `  blocks: [\n${blocksStr}\n  ]`
  ];

  const code = `import { PageData } from '../types'\n\nexport const ${varName}: PageData = {\n${props.join('\n')}\n}\n`;

  return code;
}

module.exports = {
  generateTypeScript
};
