/**
 * Formatter for TypeScript code generation.
 * Pure functions, no side effects.
 */

function escapeString(str) {
  if (typeof str !== 'string') return '';
  // Échappe les single quotes et les backslashes
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function quote(str) {
  return `'${escapeString(str)}'`;
}

function indent(text, spaces = 2) {
  if (!text) return '';
  const prefix = ' '.repeat(spaces);
  return text.split('\n').map(line => line.length > 0 ? prefix + line : line).join('\n');
}

function newline() {
  return '\n';
}

function formatArrayOfStrings(arr, baseIndent = 4) {
  if (!Array.isArray(arr) || arr.length === 0) return '[]';
  const prefix = ' '.repeat(baseIndent + 2);
  const items = arr.map(item => `${prefix}${quote(item)}`).join(',\n');
  return `[\n${items}\n${' '.repeat(baseIndent)}]`;
}

module.exports = {
  escapeString,
  quote,
  indent,
  newline,
  formatArrayOfStrings
};
