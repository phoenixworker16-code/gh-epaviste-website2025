const logger = require('../../logger');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

// Check that logger has all required methods
assert(typeof logger.info === 'function', 'info is a function');
assert(typeof logger.pass === 'function', 'pass is a function');
assert(typeof logger.warn === 'function', 'warn is a function');
assert(typeof logger.error === 'function', 'error is a function');

// Check that methods don't throw
try { logger.info('test info'); pass++; console.log('✅ PASS: info does not throw'); } catch(e) { fail++; console.error('❌ FAIL: info threw'); }
try { logger.pass('test pass'); pass++; console.log('✅ PASS: pass does not throw'); } catch(e) { fail++; console.error('❌ FAIL: pass threw'); }
try { logger.warn('test warn'); pass++; console.log('✅ PASS: warn does not throw'); } catch(e) { fail++; console.error('❌ FAIL: warn threw'); }
try { logger.error('test error'); pass++; console.log('✅ PASS: error does not throw'); } catch(e) { fail++; console.error('❌ FAIL: error threw'); }

if (fail > 0) process.exit(1);
