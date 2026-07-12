const axios = require('axios');

async function run() {
  try {
    const geoRes = await axios.post('https://overpass-api.de/api/interpreter', 'data=' + encodeURIComponent(`[out:json];rel["name"="Levallois-Perret"]["admin_level"="8"];out bb;`));
    const rel = geoRes.data.elements[0];
    if (!rel) return console.log('No relation found');
    const bbox = `${rel.bounds.minlat},${rel.bounds.minlon},${rel.bounds.maxlat},${rel.bounds.maxlon}`;
    console.log('BBox:', bbox);

    const query = `[out:json][bbox:${bbox}];
    (
      node["place"~"suburb|neighbourhood|quarter"];
      node["railway"~"station|halt|tram_stop"];
      way["railway"~"station|halt"];
      node["public_transport"~"stop_position|station"]["subway"="yes"];
      way["leisure"~"park|garden"];
      relation["leisure"~"park|garden"];
      node["amenity"="hospital"];
      node["amenity"="clinic"];
      node["shop"~"mall|department_store"];
      way["shop"~"mall|department_store"];
      node["historic"~"monument|memorial"];
      way["historic"~"monument|memorial"];
    );
    out center tags;`;

    console.time('POI query');
    const res = await axios.post('https://overpass-api.de/api/interpreter', 'data=' + encodeURIComponent(query));
    console.timeEnd('POI query');
    console.log(res.status, res.data.elements.length);
  } catch (e) {
    console.error(e.message);
  }
}
run();
