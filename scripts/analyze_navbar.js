const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const match = content.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
const lines = match[1].split('\n');
console.log(lines.slice(229, 353).join('\n'));
