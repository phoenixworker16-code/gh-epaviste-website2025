const https = require('https');

async function testOverpass() {
  const query = '[out:json];area["name"~"Levallois-Perret",i]["boundary"="administrative"]->.searchArea;node["place"~"suburb"](area.searchArea);out;';
  
  // Test 1: fetch with User-Agent
  const url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);
  console.log('Testing Overpass URL:', url);
  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'GHEpaviste-SEO-Script/1.0 (contact@domain.com)'
      }
    });
    console.log('Fetch status:', res.status, res.statusText);
    const text = await res.text();
    console.log('Fetch response length:', text.length);
  } catch(e) {
    console.log('Fetch error:', e.message, e.cause);
  }

  // Test 2: Wikipedia API
  const wikiUrl = 'https://fr.wikipedia.org/w/api.php?action=query&prop=extracts|links&titles=Levallois-Perret&format=json&exintro=1';
  try {
    const res2 = await fetch(wikiUrl);
    const j = await res2.json();
    console.log('Wiki success:', Object.keys(j.query.pages)[0] !== "-1");
  } catch(e) {
    console.log('Wiki error:', e.message);
  }
}
testOverpass();
