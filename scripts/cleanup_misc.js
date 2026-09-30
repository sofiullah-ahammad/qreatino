const fs = require('fs');

['index.html', 'about/index.html', 'services/index.html', 'projects/index.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/alt="Template Image[\r\n\s]*"/gi, 'alt="Qreatino Creative Studio — Visual Identity & Brand Design"');
  c = c.replace(/initKansoFilters/g, 'initQreatinoFilters');
  fs.writeFileSync(f, c, 'utf8');
});

console.log('Cleaned up remaining alt and function names.');
