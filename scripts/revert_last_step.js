const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');

// 1. Get previous media block directly from git show HEAD:index.html
const headIndex = execSync('git show HEAD:index.html', { encoding: 'utf8' });
const headMatch = headIndex.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
if (!headMatch) {
  console.error('Could not find glassy-navbar-style in HEAD:index.html');
  process.exit(1);
}
const headCss = headMatch[1];
const prevMediaIdx = headCss.indexOf('/* Mobile & Tablet responsive navbar */');
const previousMobileBlock = headCss.substring(prevMediaIdx).trim();

// Files to revert
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

let revertedFiles = 0;

files.forEach(f => {
  const filePath = path.join(rootDir, f);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');
  const styleMatch = html.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
  if (!styleMatch) return;

  const currentCss = styleMatch[1];
  const marker = '/* Mobile & Tablet responsive navbar */';
  const markerIdx = currentCss.indexOf(marker);

  if (markerIdx !== -1) {
    const baseCss = currentCss.substring(0, markerIdx).trimEnd();
    const restoredCss = baseCss + '\n\n' + previousMobileBlock + '\n';
    const newHtml = html.replace(currentCss, restoredCss);
    fs.writeFileSync(filePath, newHtml, 'utf8');
    revertedFiles++;
    console.log(`Reverted HTML style in: ${f}`);
  }
});

// 2. Revert css/qreatino.styles.css back to previous end block
const headQreatinoCss = execSync('git show HEAD:css/qreatino.styles.css', { encoding: 'utf8' });
const headQreatinoMarker = headQreatinoCss.indexOf('/* Mobile & Tablet responsive navbar */');
const headQreatinoEnd = headQreatinoCss.substring(headQreatinoMarker).trim();

const curQreatinoPath = path.join(rootDir, 'css', 'qreatino.styles.css');
let curQreatino = fs.readFileSync(curQreatinoPath, 'utf8');
const curQreatinoMarker = curQreatino.indexOf('/* Mobile & Tablet responsive navbar */');
if (curQreatinoMarker !== -1) {
  const curQreatinoBase = curQreatino.substring(0, curQreatinoMarker).trimEnd();
  curQreatino = curQreatinoBase + '\n\n' + headQreatinoEnd + '\n';
  fs.writeFileSync(curQreatinoPath, curQreatino, 'utf8');
  console.log('Reverted css/qreatino.styles.css');
}

// 3. Revert css/ctrnsvzg.styles.css
const headCtrPath = path.join(rootDir, 'css', 'ctrnsvzg.styles.css');
if (fs.existsSync(headCtrPath)) {
  let curCtr = fs.readFileSync(headCtrPath, 'utf8');
  const curCtrMarker = curCtr.indexOf('/* Mobile & Tablet responsive navbar */');
  if (curCtrMarker !== -1) {
    const curCtrBase = curCtr.substring(0, curCtrMarker).trimEnd();
    curCtr = curCtrBase + '\n\n' + headQreatinoEnd + '\n';
    fs.writeFileSync(headCtrPath, curCtr, 'utf8');
    console.log('Reverted css/ctrnsvzg.styles.css');
  }
}

console.log(`Successfully reverted ${revertedFiles} HTML files and CSS stylesheets.`);
