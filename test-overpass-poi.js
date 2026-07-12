const axios = require('axios');

async function run() {
  try {
    const query = `[out:json][timeout:25];
    area["name"~"^Levallois-Perret$",i]["boundary"="administrative"]["admin_level"~"^[89]$"]->.searchArea;
    (
      node["place"~"suburb|neighbourhood|quarter"](area.searchArea);
      node["railway"~"station|halt|tram_stop"](area.searchArea);
      way["railway"~"station|halt"](area.searchArea);
      node["public_transport"~"stop_position|station"]["subway"="yes"](area.searchArea);
      way["leisure"~"park|garden"](area.searchArea);
      relation["leisure"~"park|garden"](area.searchArea);
      node["amenity"="hospital"](area.searchArea);
      node["amenity"="clinic"](area.searchArea);
      node["shop"~"mall|department_store"](area.searchArea);
      way["shop"~"mall|department_store"](area.searchArea);
      node["historic"~"monument|memorial"](area.searchArea);
      way["historic"~"monument|memorial"](area.searchArea);
    );
    out center tags;`;

    const res = await axios.post('https://overpass-api.de/api/interpreter', 'data=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'GHEpaviste-SEO/2.0' }
    });
    console.log(res.status, res.data.elements.length);
  } catch (e) {
    console.error(e.response ? e.response.status + ' ' + JSON.stringify(e.response.data) : e.message);
  }
}
run();
