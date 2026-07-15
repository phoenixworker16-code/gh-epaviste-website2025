const cheerio = require('cheerio');

function normalizeHtml(html) {
  if (!html) return '';
  const $ = cheerio.load(html);

  // Retirer les commentaires
  $('*').contents().each(function() {
    if (this.type === 'comment') {
      $(this).remove();
    }
  });

  // Retirer attributs instables et IDs React
  $('*').each(function() {
    const attribs = this.attribs || {};
    for (const attr in attribs) {
      if (attr.startsWith('data-react') || attr.startsWith('data-n-') || attr === 'nonce') {
        $(this).removeAttr(attr);
      }
    }
    // IDs dynamiques (ex: contenant un hash ou uuid)
    if (attribs.id && attribs.id.match(/-[a-f0-9]{8,}/i)) {
      $(this).removeAttr('id');
    }

    // Retirer les timestamps dans les scripts json
    if (this.tagName === 'script') {
      let content = $(this).html();
      if (content) {
        content = content.replace(/"createdAt":\s*"[^"]*"/g, '"createdAt":null');
        content = content.replace(/"generatedAt":\s*"[^"]*"/g, '"generatedAt":null');
        $(this).html(content);
      }
    }
  });

  // Sérialiser et retirer les espaces inutiles
  let normalized = $.html();
  normalized = normalized
    .replace(/\s+/g, ' ')      
    .replace(/>\s+</g, '><')   
    .trim();

  return normalized;
}

module.exports = { normalizeHtml };
