const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = [
  '404.html', 'about/index.html', 'blog/index.html',
  'blog-post/building-brands-that-stand-out-today/index.html',
  'blog-post/how-design-shapes-modern-brand-experiences/index.html',
  'blog-post/how-strong-branding-builds-trust-and-recognition/index.html',
  'blog-post/key-elements-behind-memorable-and-effective-brands/index.html',
  'blog-post/the-role-of-storytelling-in-branding/index.html',
  'blog-post/why-brand-strategy-matters-for-business-growth/index.html',
  'contact/index.html', 'index.html', 'project/beyond/index.html',
  'project/elevate/index.html', 'project/horizon/index.html',
  'project/origin/index.html', 'projects/index.html', 'services/index.html',
  'template-info/changelog/index.html', 'template-info/licenses/index.html'
];

const s404 = fs.readFileSync(path.join(rootDir, '404.html'), 'utf8').match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/)[1];
const sIndex = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8').match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/)[1];

console.log('In 404 but not in index:');
const lines404 = s404.split('\n');
const linesIndex = sIndex.split('\n');
lines404.forEach(l => {
  if (!sIndex.includes(l.trim()) && l.trim().length > 0) {
    console.log('+', l);
  }
});

