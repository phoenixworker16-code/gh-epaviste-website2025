const crypto = require('crypto');
const fs = require('fs');

/**
 * Calcule le SHA-256 d'un fichier.
 */
function hashFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

/**
 * Calcule le SHA-256 d'une chaîne de caractères.
 */
function hashString(str) {
  const hashSum = crypto.createHash('sha256');
  hashSum.update(str);
  return hashSum.digest('hex');
}

/**
 * Normalise le HTML pour éviter les faux positifs (espaces, retours à la ligne).
 */
function normalizeHtml(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

/**
 * Normalise et hashe le HTML.
 */
function hashNormalizedHtml(html) {
  return hashString(normalizeHtml(html));
}

module.exports = {
  hashFile,
  hashString,
  normalizeHtml,
  hashNormalizedHtml
};
