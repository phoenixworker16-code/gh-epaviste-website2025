const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../app/blog');
const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

let count = 0;
for (const dir of dirs) {
  const file = path.join(blogDir, dir, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if it's an article
    if (content.includes('jsonLdArticle')) {
      const url = `https://gh-epaviste.fr/blog/${dir}`;
      
      let modified = content;
      
      if (!modified.includes('"author"')) {
        modified = modified.replace(
          /"publisher":/,
          `"author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },\n    "publisher":`
        );
      }
      
      if (!modified.includes('"mainEntityOfPage"')) {
        modified = modified.replace(
          /"publisher":/,
          `"mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },\n    "publisher":`
        );
      }
      
      if (!modified.includes('"image"')) {
        modified = modified.replace(
          /"publisher":/,
          `"image": "https://gh-epaviste.fr/og-image.jpg",\n    "publisher":`
        );
      }
      
      if (content !== modified) {
        fs.writeFileSync(file, modified);
        count++;
        console.log(`Updated ${dir}`);
      }
    } else if (content.includes('jsonLd')) {
        // Some might just use jsonLd instead of jsonLdArticle
        const url = `https://gh-epaviste.fr/blog/${dir}`;
        let modified = content;
        
        if (modified.includes('"@type": "Article"')) {
            if (!modified.includes('"author"')) {
                modified = modified.replace(
                /"publisher":/,
                `"author": { "@type": "Organization", "name": "GH Épaviste", "url": "https://gh-epaviste.fr" },\n    "publisher":`
                );
            }
            
            if (!modified.includes('"mainEntityOfPage"')) {
                modified = modified.replace(
                /"publisher":/,
                `"mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },\n    "publisher":`
                );
            }
            
            if (!modified.includes('"image"')) {
                modified = modified.replace(
                /"publisher":/,
                `"image": "https://gh-epaviste.fr/og-image.jpg",\n    "publisher":`
                );
            }

            if (content !== modified) {
                fs.writeFileSync(file, modified);
                count++;
                console.log(`Updated ${dir}`);
            }
        }
    }
  }
}
console.log(`Done. Updated ${count} files.`);
