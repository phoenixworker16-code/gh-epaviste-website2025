const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data', 'cities');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');

  // If already fixed, skip
  if (content.includes('const cityName =') || !content.includes('cityName +')) {
    return;
  }

  const mName = content.match(/name:\s*'([^']+)'/);
  const mSlug = content.match(/slug:\s*'([^']+)'/);

  if (mName && mSlug) {
    const cityName = mName[1];
    const slug = mSlug[1];

    // the buggy generation has `+ cityName +` and `+ slug` without quotes.
    // we want to declare them at the top of the file!
    const insert = `\nconst cityName = '${cityName}';\nconst slug = '${slug}';\n`;
    content = content.replace('*/\n', '*/\n' + insert);

    fs.writeFileSync(fp, content, 'utf8');
    console.log('Fixed', f);
  }
});
