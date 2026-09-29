const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');

// Clean dist directory
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });

// Folders and files to copy
const itemsToCopy = [
  'index.html',
  '401.html',
  '404.html',
  'about',
  'projects',
  'services',
  'contact',
  'blog',
  'blog-post',
  'project',
  'template-info',
  'css',
  'js',
  'assets'
];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

for (const item of itemsToCopy) {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(DIST, item);
  copyRecursive(srcPath, destPath);
}

console.log('Build completed successfully: all files copied to dist/');
