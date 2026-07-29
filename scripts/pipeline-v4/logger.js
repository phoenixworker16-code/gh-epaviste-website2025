class Logger {
  info(msg) { console.log(`[INFO] ${msg}`); }
  pass(msg) { console.log(`[PASS] ${msg}`); }
  warn(msg) { console.warn(`[WARN] ${msg}`); }
  error(msg) { console.error(`[ERROR] ${msg}`); }
}
module.exports = new Logger();
