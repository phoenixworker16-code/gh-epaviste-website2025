const path = require("node:path");

const ROOT = path.resolve(__dirname, "../../../");

const config = {
  root: ROOT,
  paths: {
    types: path.join(ROOT, "data/types.ts"),
    schema: path.join(ROOT, "data/schemas/pageDataSchema.ts"),
    legalRules: path.join(ROOT, "scripts/legal-blacklist.json"),
    seoRules: path.join(ROOT, "scripts/seo-rules.json"),
    reports: path.join(ROOT, "reports"),
    snapshots: path.join(ROOT, "snapshots"),
    versions: path.join(__dirname, "versions.json")
  }
};

module.exports = config;
