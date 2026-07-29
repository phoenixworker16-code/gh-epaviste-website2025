const axios = require('axios');

async function run() {
  try {
    const query = `[out:json];
    rel["name"~"^Levallois-Perret$",i]["boundary"="administrative"]["admin_level"~"^[89]$"]->.target;
    way(r.target);
    rel(bw)["boundary"="administrative"]["admin_level"~"^[89]$"];
    out tags;`;

    const res = await axios.get('https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'GHEpaviste-SEO/2.0' }
    });
    console.log(res.status, res.data.elements.length);
    console.log(res.data.elements.map(e => e.tags.name));
  } catch (e) {
    console.error(e.response ? e.response.status + ' ' + JSON.stringify(e.response.data) : e.message);
  }
}
run();
