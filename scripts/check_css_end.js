const { execSync } = require('child_process');
const fs = require('fs');

const headLines = execSync('git show HEAD:css/qreatino.styles.css', { encoding: 'utf8' }).split('\n');
console.log('HEAD lines from 10270 to end:');
console.log(headLines.slice(10269).join('\n'));
