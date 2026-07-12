const fs = require('fs');
const path = require('path');

function generateReport(departmentCode, stats) {
  const reportsDir = path.join(__dirname, '../reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const date = new Date().toISOString();
  
  // JSON Report
  const jsonReport = {
    department: departmentCode,
    date: date,
    stats: stats
  };
  fs.writeFileSync(
    path.join(reportsDir, `${departmentCode}-report.json`),
    JSON.stringify(jsonReport, null, 2),
    'utf8'
  );

  // Markdown Report
  const mdReport = `Département ${departmentCode}

Pages générées : ${stats.pagesGenerated}
Pages validées : ${stats.pagesValidated}
SEO : ${stats.seoScore}/${stats.pagesGenerated}
Build : ${stats.buildStatus} — sortie réelle dans ${departmentCode}-build.log
Lint : ${stats.lintStatus} — sortie réelle dans ${departmentCode}-lint.log
TypeScript : ${stats.tsStatus} — sortie réelle dans ${departmentCode}-ts.log
Hydration : ${stats.hydrationStatus}
Console : ${stats.consoleStatus}
HTTP : ${stats.httpScore}/${stats.pagesGenerated}
Images : ${stats.imagesStatus}
Liens internes : ${stats.linksStatus}
Similarité moyenne : ${stats.avgSimilarity} %
Similarité maximale : ${stats.maxSimilarity} %
Hallucinations détectées : ${stats.hallucinations}
Warnings : ${stats.warnings}
Errors : ${stats.errors}
Ready : ${stats.errors === 0 && stats.buildStatus === 'OK' ? 'YES' : 'NO'}
`;

  fs.writeFileSync(
    path.join(reportsDir, `${departmentCode}-report.md`),
    mdReport,
    'utf8'
  );
  
  console.log(`✅ Rapports générés dans reports/ (${departmentCode}-report.md, ${departmentCode}-report.json)`);
}

// CLI usage (mock data for testing)
if (require.main === module) {
  const dept = process.argv[2] || '92';
  const mockStats = {
    pagesGenerated: 38,
    pagesValidated: 38,
    seoScore: 38,
    buildStatus: 'OK',
    lintStatus: 'OK',
    tsStatus: 'OK',
    hydrationStatus: 'OK',
    consoleStatus: 'OK',
    httpScore: 38,
    imagesStatus: 'OK',
    linksStatus: 'OK',
    avgSimilarity: 41,
    maxSimilarity: 58,
    hallucinations: 0,
    warnings: 0,
    errors: 0
  };
  generateReport(dept, mockStats);
}

module.exports = { generateReport };
