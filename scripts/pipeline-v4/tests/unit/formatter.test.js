const { escapeString, quote, indent, newline, formatArrayOfStrings } = require('../../formatter');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

// escapeString
assert(escapeString("l'épave") === "l\\'épave", 'escapes single quotes');
assert(escapeString('back\\slash') === 'back\\\\slash', 'escapes backslashes');
assert(escapeString('') === '', 'empty string');
assert(escapeString(null) === '', 'null returns empty');
assert(escapeString(123) === '', 'non-string returns empty');
assert(escapeString('no special') === 'no special', 'no-op on clean string');

// quote
assert(quote('hello') === "'hello'", 'quotes a string');
assert(quote("it's") === "'it\\'s'", 'quotes with escape');

// indent
assert(indent('line1\nline2', 4) === '    line1\n    line2', 'indents lines');
assert(indent('', 2) === '', 'empty returns empty');
assert(indent(null, 2) === '', 'null returns empty');
assert(indent('single') === '  single', 'default 2 spaces');

// newline
assert(newline() === '\n', 'newline returns \\n');

// formatArrayOfStrings
assert(formatArrayOfStrings([]) === '[]', 'empty array');
assert(formatArrayOfStrings(null) === '[]', 'null array');
assert(formatArrayOfStrings(['a', 'b']).includes("'a'"), 'formats items');
assert(formatArrayOfStrings(['x'], 2).startsWith('['), 'starts with bracket');

if (fail > 0) process.exit(1);
