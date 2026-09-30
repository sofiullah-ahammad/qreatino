const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = [
  'index.html',
  'about/index.html',
  'projects/index.html',
  'services/index.html',
  'contact/index.html',
  'blog/index.html'
];

let allPassed = true;

files.forEach(f => {
  const p = path.join(root, f);
  const content = fs.readFileSync(p, 'utf8');

  // Check 1: No translucent box on menu-button
  const hasTranslucentBox = content.includes('.menu-button {\n    background: rgba(255, 255, 255, 0.15)');
  if (hasTranslucentBox) {
    console.error(`FAIL [${f}]: Has translucent box on menu-button!`);
    allPassed = false;
  } else {
    console.log(`PASS [${f}]: No translucent box on menu button.`);
  }

  // Check 2: Backdrop has no blur
  const hasBlurInBackdrop = content.includes('.mobile-nav-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35) !important;\n  backdrop-filter: none !important;');
  if (!hasBlurInBackdrop) {
    console.error(`FAIL [${f}]: mobile-nav-backdrop missing backdrop-filter: none !important`);
    allPassed = false;
  } else {
    console.log(`PASS [${f}]: mobile-nav-backdrop has no blur.`);
  }

  // Check 3: High specificity drawer text color
  const hasLegibleDrawerText = content.includes('.navbar .nav-menu .nav-text,\n  .navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-menu .nav-text');
  if (!hasLegibleDrawerText) {
    console.error(`FAIL [${f}]: Drawer links text color missing high specificity rule!`);
    allPassed = false;
  } else {
    console.log(`PASS [${f}]: Drawer links have explicit high-specificity solid dark text.`);
  }
});

if (allPassed) {
  console.log('\nALL VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
  console.log('\nSOME TESTS FAILED!');
  process.exit(1);
}
