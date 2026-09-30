const fs = require('fs');
const path = require('path');

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

files.forEach(f => {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
  if (match) {
    const hasMedia = match[1].includes('@media screen and (max-width: 991px)');
    const hasWhiteText = match[1].includes('.nav-text {\n    font-size: 1.05rem');
    const hasButtonBg = match[1].includes('.menu-button {\n    background: rgba');
    console.log(`${f}: hasMedia=${hasMedia}, hasWhiteText=${hasWhiteText}, hasButtonBg=${hasButtonBg}`);
  }
});
