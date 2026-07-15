const { quote, formatArrayOfStrings } = require('../formatter');

const BLOCK_PROPS = {
  Hero: ['type', 'title', 'subtitle', 'badge', 'bgType'],
  Introduction: ['type', 'title', 'content'],
  ZfeAlert: ['type', 'title', 'content', 'level'],
  UndergroundParking: ['type', 'title', 'content', 'maxHeight'],
  DocsPreparation: ['type', 'title', 'intro', 'specialCase'],
  TipsAndMistakes: ['type', 'title', 'tips', 'mistakes'],
  LocalCoverage: ['type', 'title', 'intro', 'zones'],
  Copropriety: ['type', 'title', 'content'],
  VhuCompliance: ['type', 'title', 'content'],
  VehicleTypes: ['type', 'title', 'accepted'],
  FaqLocal: ['type', 'title', 'questions'],
  Cta: ['type', 'title', 'subtitle']
};

function formatValue(val, indentLevel) {
  if (val === undefined || val === null) return undefined;
  if (typeof val === 'string') return quote(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    // Test if array of objects (like zones or questions) or array of strings
    if (typeof val[0] === 'string') {
      return formatArrayOfStrings(val, indentLevel);
    }
    // Array of objects
    const prefix = ' '.repeat(indentLevel + 2);
    const items = val.map(obj => {
      const props = Object.keys(obj).map(k => {
        const v = obj[k];
        if (v === undefined) return undefined;
        return `${k}: ${formatValue(v, indentLevel + 4)}`;
      }).filter(Boolean).join(', ');
      return `${prefix}{ ${props} }`;
    }).join(',\n');
    return `[\n${items}\n${' '.repeat(indentLevel)}]`;
  }
  if (typeof val === 'object') {
     // fallback
     return JSON.stringify(val);
  }
  return String(val);
}

function serializeGenericBlock(block, type) {
  if (!block) throw new Error(`Block of type ${type} is undefined`);
  
  const order = BLOCK_PROPS[type];
  if (!order) throw new Error(`Unknown block type: ${type}`);

  const lines = [];
  lines.push('    {');
  
  for (const key of order) {
    if (block[key] !== undefined) {
      const val = formatValue(block[key], 6);
      if (val !== undefined) {
        lines.push(`      ${key}: ${val},`);
      }
    }
  }
  
  lines.push('    }');
  return lines.join('\n');
}

function serializeHero(block) { return serializeGenericBlock(block, 'Hero'); }
function serializeIntroduction(block) { return serializeGenericBlock(block, 'Introduction'); }
function serializeZfeAlert(block) { return serializeGenericBlock(block, 'ZfeAlert'); }
function serializeUndergroundParking(block) { return serializeGenericBlock(block, 'UndergroundParking'); }
function serializeDocsPreparation(block) { return serializeGenericBlock(block, 'DocsPreparation'); }
function serializeTipsAndMistakes(block) { return serializeGenericBlock(block, 'TipsAndMistakes'); }
function serializeLocalCoverage(block) { return serializeGenericBlock(block, 'LocalCoverage'); }
function serializeCopropriety(block) { return serializeGenericBlock(block, 'Copropriety'); }
function serializeVhuCompliance(block) { return serializeGenericBlock(block, 'VhuCompliance'); }
function serializeVehicleTypes(block) { return serializeGenericBlock(block, 'VehicleTypes'); }
function serializeFaqLocal(block) { return serializeGenericBlock(block, 'FaqLocal'); }
function serializeCta(block) { return serializeGenericBlock(block, 'Cta'); }

function serializeBlock(block) {
  if (!block || !block.type) throw new Error('Block is missing or missing type property');
  switch (block.type) {
    case 'Hero': return serializeHero(block);
    case 'Introduction': return serializeIntroduction(block);
    case 'ZfeAlert': return serializeZfeAlert(block);
    case 'UndergroundParking': return serializeUndergroundParking(block);
    case 'DocsPreparation': return serializeDocsPreparation(block);
    case 'TipsAndMistakes': return serializeTipsAndMistakes(block);
    case 'LocalCoverage': return serializeLocalCoverage(block);
    case 'Copropriety': return serializeCopropriety(block);
    case 'VhuCompliance': return serializeVhuCompliance(block);
    case 'VehicleTypes': return serializeVehicleTypes(block);
    case 'FaqLocal': return serializeFaqLocal(block);
    case 'Cta': return serializeCta(block);
    default:
      throw new Error(`Unknown block type: ${block.type}`);
  }
}

module.exports = {
  serializeBlock
};
