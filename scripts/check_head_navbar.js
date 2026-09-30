const { execSync } = require('child_process');
const fs = require('fs');

const headContent = execSync('git show HEAD:index.html', { encoding: 'utf8' });
const headMatch = headContent.match(/<div id="w-node-_60bd0169-52c8-beb7-3a44-8e85dffb52ff-dffb52c4"[\s\S]*?<\/div>\s*<\/div>/);
console.log('HEAD menu-button markup:');
console.log(headMatch ? headMatch[0] : 'not found');

const curContent = fs.readFileSync('index.html', 'utf8');
const curMatch = curContent.match(/<div id="w-node-_60bd0169-52c8-beb7-3a44-8e85dffb52ff-dffb52c4"[\s\S]*?<\/div>\s*<\/div>/);
console.log('\nCURRENT menu-button markup:');
console.log(curMatch ? curMatch[0] : 'not found');
