const { normalizeHtml } = require('../../snapshot/normalizer');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

// Empty / null
assert(normalizeHtml('') === '', 'empty string');
assert(normalizeHtml(null) === '', 'null');

// Whitespace compression
const html1 = '<div>  <p>  Hello  </p>  </div>';
const norm1 = normalizeHtml(html1);
assert(!norm1.includes('  '), 'no double spaces after normalization');

// Comment removal
const html2 = '<div><!-- comment --><p>Text</p></div>';
const norm2 = normalizeHtml(html2);
assert(!norm2.includes('comment'), 'comments removed');

// React attributes removed
const html3 = '<div data-reactroot="" data-n-head="true" nonce="abc123"><p>Hi</p></div>';
const norm3 = normalizeHtml(html3);
assert(!norm3.includes('data-reactroot'), 'data-reactroot removed');
assert(!norm3.includes('nonce'), 'nonce removed');

// Dynamic IDs removed
const html4 = '<div id="widget-a1b2c3d4e5f6"><p>Content</p></div>';
const norm4 = normalizeHtml(html4);
assert(!norm4.includes('a1b2c3d4e5f6'), 'dynamic id removed');

// Idempotent
const norm5a = normalizeHtml('<main><h1>Title</h1></main>');
const norm5b = normalizeHtml(norm5a);
assert(norm5a === norm5b, 'normalization is idempotent');

// Stable: same input = same output
const html6 = '<html><head><title>Test</title></head><body><main><p>Hello</p></main></body></html>';
assert(normalizeHtml(html6) === normalizeHtml(html6), 'deterministic normalization');

if (fail > 0) process.exit(1);
