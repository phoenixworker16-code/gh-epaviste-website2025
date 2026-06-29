import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = [
  ...walkSync(path.join(process.cwd(), 'app')),
  ...walkSync(path.join(process.cwd(), 'components'))
];

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
const links = new Set();
const linkToFile = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[0];
    if (url.startsWith('http://localhost') || url.includes('gh-epaviste.fr')) continue;
    links.add(url);
    if (!linkToFile.has(url)) linkToFile.set(url, []);
    linkToFile.get(url).push(file);
  }
}

console.log(`Found ${links.size} unique external links.`);

const checkUrl = (url) => {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 5000 }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    }).on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'TIMEOUT' });
    });
  });
};

async function run() {
  const brokenLinks = [];
  let checked = 0;
  
  for (const url of Array.from(links)) {
    const result = await checkUrl(url);
    checked++;
    if (result.status >= 400 || result.status === 'ERROR' || result.status === 'TIMEOUT') {
      brokenLinks.push(result);
      console.log(`[BROKEN] ${result.status} - ${url}`);
      linkToFile.get(url).forEach(f => console.log(`  -> found in: ${f}`));
    }
    if (checked % 10 === 0) console.log(`Checked ${checked}/${links.size}`);
  }

  console.log(`\nScan complete. Found ${brokenLinks.length} broken links.`);
}

run();
