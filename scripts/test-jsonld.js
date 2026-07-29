const fs = require('fs');

async function test() {
  const http = require('http');
  http.get('http://localhost:3000/', (res) => {
    let html = '';
    res.on('data', c => html += c);
    res.on('end', () => {
      const jsonldRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let jsonldMatch;
      let count = 0;
      while ((jsonldMatch = jsonldRegex.exec(html)) !== null) {
        count++;
        console.log(`Match ${count}:`);
        console.log(jsonldMatch[1].substring(0, 50) + '...');
        try {
          const data = JSON.parse(jsonldMatch[1]);
          console.log('Parsed successfully! Types:', Array.isArray(data['@type']) ? data['@type'] : [data['@type']]);
        } catch(e) {
          console.log('Parse failed', e.message);
        }
      }
    });
  });
}
test();
