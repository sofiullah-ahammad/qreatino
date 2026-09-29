const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts) {
  let list = [];
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.git') continue;
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      list = list.concat(getAllFiles(fullPath, exts));
    } else if (exts.some(ext => entry.endsWith(ext))) {
      list.push(fullPath);
    }
  }
  return list;
}

console.log('=== Step 1: Processing HTML files ===');
const htmlFiles = getAllFiles('.', ['.html']);
console.log('Found', htmlFiles.length, 'HTML files to clean.');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Remove comments mentioning Webflow
  content = content.replace(/<!-- This site was created in Webflow[\s\S]*?-->/gi, '<!-- Qreatino Creative Studio -->');
  content = content.replace(/<!-- Last Published:[\s\S]*?-->/gi, '');

  // 2. Clean <html> tag
  content = content.replace(/<html\s+([^>]*?)>/i, (match, attrs) => {
    let cleanAttrs = attrs
      .replace(/\s*data-wf-page="[^"]*"/gi, '')
      .replace(/\s*data-wf-site="[^"]*"/gi, '')
      .replace(/\s*data-wf-domain="[^"]*"/gi, '')
      .replace(/\s*data-wf-collection="[^"]*"/gi, '')
      .replace(/\s*data-wf-item-slug="[^"]*"/gi, '')
      .trim();
    if (!/lang=/i.test(cleanAttrs)) {
      cleanAttrs = 'lang="en" ' + cleanAttrs;
    }
    return cleanAttrs ? `<html ${cleanAttrs}>` : `<html lang="en">`;
  });

  // 3. Remove generator meta tag
  content = content.replace(/<meta\s+content="Webflow"\s+name="generator"\s*\/?>/gi, '<meta name="generator" content="Qreatino Studio"/>');
  content = content.replace(/<meta\s+name="generator"\s+content="Webflow"\s*\/?>/gi, '<meta name="generator" content="Qreatino Studio"/>');

  // 4. Remove cdn.prod.website-files.com preconnect
  content = content.replace(/<link\s+href="https:\/\/cdn\.prod\.website-files\.com"[^>]*\/?>/gi, '');

  // 5. Replace Webflow references in meta descriptions
  content = content.replace(/Qreatino is a modern Webflow template designed for agencies/gi, 'Qreatino is a modern design studio website created');
  content = content.replace(/Webflow template/gi, 'creative agency portfolio');

  // 6. Update CSS links to qreatino.styles.css
  content = content.replace(/\/css\/qreatino\.webflow\.shared\.css[^"']*/gi, '/css/qreatino.styles.css?v=20260930');
  content = content.replace(/\/css\/ctrnsvzg\.webflow\.shared\.css[^"']*/gi, '/css/ctrnsvzg.styles.css?v=20260930');

  // 7. Update JS script tags to qreatino chunks
  content = content.replace(/\/js\/webflow\.schunk\.1\.js/gi, '/js/qreatino.chunk1.js');
  content = content.replace(/\/js\/webflow\.schunk\.2\.js/gi, '/js/qreatino.chunk2.js');
  content = content.replace(/\/js\/webflow\.main\.js/gi, '/js/qreatino.main.js');

  // 8. Replace image alt text
  content = content.replace(/alt="Template Image - Qreatino Webflow Template"/gi, 'alt="Qreatino Studio"');

  // 9. Add detector guard script at top of head if not present
  if (!content.includes('__qreatino_shield__')) {
    const shieldScript = `<script id="__qreatino_shield__">
(function() {
  try {
    Object.defineProperty(window, 'Webflow', {
      get: function() { return undefined; },
      set: function() {},
      configurable: false
    });
  } catch(e) {}
})();
</script>`;
    content = content.replace(/<head>/i, '<head>' + shieldScript);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Cleaned:', file);
});

console.log('=== Step 2: Processing JS files ===');
const chunk2File = path.join('js', 'qreatino.chunk2.js');
if (fs.existsSync(chunk2File)) {
  let chunk2 = fs.readFileSync(chunk2File, 'utf8');
  // Remove 1.6.0-Webflow version string
  chunk2 = chunk2.replace(/"1\.6\.0-Webflow"/g, '"2.5.0"');
  chunk2 = chunk2.replace(/"1\.6\.0"/g, '"2.5.0"');
  // Replace window.Webflow with window.Qreatino
  chunk2 = chunk2.replace(/window\.Webflow\s*=\s*o/g, 'window.Qreatino=o');
  chunk2 = chunk2.replace(/window\.Webflow\|\|\[\]/g, 'window.Qreatino||[]');
  chunk2 = chunk2.replace(/window\.Webflow/g, 'window.Qreatino');
  chunk2 = chunk2.replace(/window\.WebflowEditor/g, 'window.QreatinoEditor');
  chunk2 = chunk2.replace(/\.webflow/g, '.qreatino');
  chunk2 = chunk2.replace(/https:\/\/editor-api\.webflow\.com/g, 'https://api.qreatino.com');
  chunk2 = chunk2.replace(/https:\/\/webflow\.com/g, 'https://qreatino.com');
  fs.writeFileSync(chunk2File, chunk2, 'utf8');
  console.log('Cleaned js/qreatino.chunk2.js');
}

const mainJsFile = path.join('js', 'qreatino.main.js');
if (fs.existsSync(mainJsFile)) {
  let mainJs = fs.readFileSync(mainJsFile, 'utf8');
  mainJs = mainJs.replace(/Webflow\.require/g, 'window.Qreatino.require');
  fs.writeFileSync(mainJsFile, mainJs, 'utf8');
  console.log('Cleaned js/qreatino.main.js');
}

console.log('=== Step 3: Processing CSS files ===');
const cssFiles = getAllFiles('css', ['.css']);
cssFiles.forEach(file => {
  let css = fs.readFileSync(file, 'utf8');
  css = css.replace(/webflow-icons/gi, 'qreatino-icons');
  css = css.replace(/\/\* Disable Webflow \//gi, '/* Disable');
  fs.writeFileSync(file, css, 'utf8');
  console.log('Cleaned:', file);
});

console.log('=== All Webflow footprints removed successfully! ===');
