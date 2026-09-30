const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'about', 'index.html'), 'utf8');
const match = content.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
if (match) {
  const css = match[1];
  const mediaIdx = css.indexOf('@media screen and (max-width: 991px)');
  console.log('From media query to end of style:');
  console.log(css.substring(mediaIdx));
}
