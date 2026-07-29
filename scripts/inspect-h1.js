const http = require('http');

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  // Wait for server
  await new Promise(r => setTimeout(r, 3000));

  for (const page of ['/confidentialite', '/mentions-legales']) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`PAGE: ${page}`);
    console.log('='.repeat(60));

    const html = await fetchPage(page);

    // Find all h1 occurrences
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
    let match;
    let count = 0;
    while ((match = h1Regex.exec(html)) !== null) {
      count++;
      const pos = match.index;
      // Get 20 lines before and after
      const before = html.substring(Math.max(0, pos - 500), pos);
      const after = html.substring(pos, Math.min(html.length, pos + match[0].length + 500));
      
      console.log(`\n--- H1 #${count} trouvé à position ${pos} ---`);
      console.log('CONTENU BRUT du H1:', JSON.stringify(match[0]));
      console.log('TEXTE EXTRAIT:', match[1].replace(/<[^>]+>/g, '').trim() || '(VIDE)');
      console.log('\n--- CONTEXTE HTML (avant) ---');
      console.log(before);
      console.log('\n--- CONTEXTE HTML (h1 + après) ---');
      console.log(after);
    }

    if (count === 0) {
      console.log('AUCUN H1 TROUVÉ sur cette page !');
    } else {
      console.log(`\nTOTAL: ${count} balise(s) H1 sur ${page}`);
    }
  }

  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
