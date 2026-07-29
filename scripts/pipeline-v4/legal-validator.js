const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..', '..');
const BLACKLIST_PATH = path.join(PROJECT_ROOT, 'scripts', 'legal-blacklist.json');

function auditLegal(pageData) {
  const blacklist = JSON.parse(fs.readFileSync(BLACKLIST_PATH, 'utf-8'));
  const textContent = JSON.stringify(pageData).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const errors = [];

  for (const rule of blacklist.rules) {
    if (rule.regex) {
      const regex = new RegExp(rule.pattern, 'gi');
      const match = regex.exec(textContent);
      if (match) {
        // Check against allowlist
        const isAllowed = (blacklist.allowlist || []).some(allowed => {
          const normalizedAllowed = allowed.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          const idx = textContent.indexOf(normalizedAllowed);
          return idx !== -1 && match.index >= idx && match.index < idx + normalizedAllowed.length;
        });

        if (!isAllowed && rule.level === 'ERROR') {
          errors.push(`Legal ERROR [${rule.id}]: "${match[0]}" — ${rule.reason}`);
        }
      }
    }
  }

  return {
    success: errors.length === 0,
    errors
  };
}

module.exports = { auditLegal };
