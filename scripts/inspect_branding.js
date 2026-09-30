const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === 'dist' || file === '.git') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(rootDir, file);
  
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = content.match(/<meta\s+content="([^"]*)"\s+name="description"/i) || content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const hasDataWf = content.includes('data-wf-');
  const templateImgCount = (content.match(/alt="Template Image/gi) || []).length;
  const webflowCount = (content.match(/webflow/gi) || []).length;
  const cfdasdrgCount = (content.match(/cfdasdrg/gi) || []).length;
  const kansoCount = (content.match(/kanso/gi) || []).length;

  console.log(`\nFile: ${rel}`);
  console.log(`  Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);
  console.log(`  Desc: ${descMatch ? descMatch[1].substring(0, 60) + '...' : 'NONE'}`);
  if (hasDataWf) console.log(`  [!] Has data-wf attributes`);
  if (templateImgCount > 0) console.log(`  [!] Has ${templateImgCount} "alt=Template Image"`);
  if (webflowCount > 0) console.log(`  [!] Has ${webflowCount} "webflow" mentions`);
  if (cfdasdrgCount > 0) console.log(`  [!] Has ${cfdasdrgCount} "cfdasdrg" mentions`);
  if (kansoCount > 0) console.log(`  [!] Has ${kansoCount} "kanso" mentions`);
});
