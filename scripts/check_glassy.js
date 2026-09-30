const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'dist' && file !== 'node_modules' && file !== '.git') {
        results = results.concat(getHtmlFiles(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const rootDir = path.join(__dirname, '..');
const files = getHtmlFiles(rootDir);
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('id="glassy-navbar-style"')) {
    console.log(path.relative(rootDir, f), 'has glassy');
  }
});

