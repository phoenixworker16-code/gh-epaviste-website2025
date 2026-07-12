const { JSDOM } = require('jsdom');

async function testWikiScraper(cityName) {
  console.log('Fetching Wikipedia for:', cityName);
  try {
    const res = await fetch(`https://fr.wikipedia.org/wiki/${encodeURIComponent(cityName)}`);
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const data = { quartiers: [], gares_stations: [], parcs: [], communes_limitrophes: [] };

    // 1. Communes limitrophes from Infobox or specific table
    // Usually in a table with class "infobox_v2" or specific maps
    // A reliable way is to find the table cell near "Communes limitrophes"
    const allThs = document.querySelectorAll('th, td');
    for (let th of allThs) {
      if (th.textContent.includes('Communes limitrophes')) {
        const td = th.nextElementSibling || th.parentElement.querySelector('td');
        if (td) {
          const links = td.querySelectorAll('a');
          links.forEach(a => {
            if (a.title && !a.title.includes('Wikipedia') && !a.title.includes('modifier')) {
              data.communes_limitrophes.push(a.title);
            }
          });
        }
      }
    }
    
    // Sometimes it's in a specific compass table
    const compassTable = document.querySelector('table.cadrancardinal');
    if (compassTable) {
      compassTable.querySelectorAll('a').forEach(a => {
        if (a.title) data.communes_limitrophes.push(a.title);
      });
    }

    // 2. Sections (Transports, Espaces verts, Quartiers)
    const sectionsToFind = [
      { id: /transports|voies/i, target: data.gares_stations, filter: /(gare|métro|station|tram|rer|transilien)/i },
      { id: /espaces_verts|parcs/i, target: data.parcs, filter: /(parc|jardin|square|promenade)/i },
      { id: /quartiers/i, target: data.quartiers, filter: null }
    ];

    document.querySelectorAll('h2, h3').forEach(heading => {
      const title = heading.textContent;
      for (let sec of sectionsToFind) {
        if (sec.id.test(title)) {
          let next = heading.nextElementSibling;
          // Gather text and links until next heading
          while (next && !['H2', 'H3'].includes(next.tagName)) {
            if (next.tagName === 'UL') {
              next.querySelectorAll('li').forEach(li => {
                const text = li.textContent.trim().split('\n')[0]; // first line
                if (sec.filter) {
                  if (sec.filter.test(text)) sec.target.push(text);
                } else {
                  sec.target.push(text);
                }
              });
            } else if (next.tagName === 'P') {
              next.querySelectorAll('a').forEach(a => {
                if (a.title && sec.filter && sec.filter.test(a.title)) {
                   sec.target.push(a.title);
                }
              });
            }
            next = next.nextElementSibling;
          }
        }
      }
    });

    // Remove duplicates
    data.communes_limitrophes = [...new Set(data.communes_limitrophes)];
    data.gares_stations = [...new Set(data.gares_stations)];
    data.parcs = [...new Set(data.parcs)];

    console.log(JSON.stringify(data, null, 2));

  } catch(e) {
    console.error(e);
  }
}

testWikiScraper('Levallois-Perret');
