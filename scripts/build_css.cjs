const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const stylesDir = path.join(srcDir, 'styles');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });
if (!fs.existsSync(stylesDir)) fs.mkdirSync(stylesDir, { recursive: true });

let css = fs.readFileSync(path.join(__dirname, '..', 'css', 'qreatino.webflow.shared.css'), 'utf8');

// Strip out any webflow badge rules and generator references
css = css.replace(/\.w-webflow-badge[^}]*}/g, '');
css = css.replace(/font-family:\s*webflow-icons[^;]*;/g, 'font-family: inherit;');

const customNavbarCss = `
/* =================================================================
   QREATINO MODERN REACT STYLING & GLASSY SCROLL POP-UP NAVBAR
   ================================================================= */
.navbar {
  position: fixed !important;
  inset: 0% 0% auto !important;
  top: 0.75rem !important;
  z-index: 999 !important;
  transition: top 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.navbar.is-scrolled {
  top: 0.85rem !important;
}

.nav-content-wrapper {
  padding: 0.55rem 1.6rem !important;
}

.nav-background {
  border-radius: 18px !important;
  background: rgba(255, 255, 255, 0.78) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02) !important;
  transition: opacity 0.32s ease, transform 0.38s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.navbar:not(.is-scrolled) .nav-background {
  opacity: 0 !important;
  transform: translateY(-8px) scale(0.97) !important;
  pointer-events: none !important;
  box-shadow: none !important;
  border-color: transparent !important;
}

.navbar.is-scrolled .nav-background {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
  pointer-events: auto !important;
}

.brand-link {
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  cursor: pointer !important;
}

.brand-name-text {
  font-family: 'Creato Display', 'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  font-size: 1.38rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.025em !important;
  line-height: 1 !important;
  transition: color 0.25s ease, opacity 0.25s ease !important;
  display: inline-block !important;
}
.brand-link:hover .brand-name-text {
  opacity: 0.75 !important;
}

.left-nav-menu, .right-nav-menu {
  display: flex !important;
  gap: 1.6rem !important;
  align-items: center !important;
}

.navbar .nav-link,
.navbar .nav-link-block,
.navbar .nav-text {
  transform: none !important;
  translate: none !important;
  text-decoration: none !important;
}
.navbar .nav-link-block {
  height: auto !important;
  overflow: visible !important;
  display: inline-block !important;
}

.nav-link {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0.2rem 0.2rem !important;
  position: relative !important;
  box-shadow: none !important;
  cursor: pointer !important;
}
.nav-text {
  font-size: 0.94rem !important;
  font-weight: 500 !important;
  text-transform: none !important;
  letter-spacing: -0.01em !important;
  transition: color 0.25s ease, opacity 0.25s ease !important;
  line-height: 1.3 !important;
}

/* TOP ON DARK PAGES */
.navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-text {
  color: #ffffff !important;
  opacity: 0.95 !important;
}
.navbar[data-theme-top="dark"]:not(.is-scrolled) .brand-name-text {
  color: #ffffff !important;
}
.navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-link:hover .nav-text {
  opacity: 1 !important;
  color: #ffffff !important;
}

/* SOLID WHITE CTA BUTTON */
.navbar[data-theme-top="dark"]:not(.is-scrolled) a[href*="/contact"].nav-link,
.navbar[data-theme-top="dark"]:not(.is-scrolled) .right-nav-menu .nav-link-overflow:last-child .nav-link {
  background-color: #ffffff !important;
  border-radius: 9999px !important;
  padding: 0.52rem 1.15rem !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22) !important;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease !important;
}
.navbar[data-theme-top="dark"]:not(.is-scrolled) a[href*="/contact"].nav-link .nav-text,
.navbar[data-theme-top="dark"]:not(.is-scrolled) .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text {
  color: #0b0c10 !important;
  font-weight: 600 !important;
}

/* SCROLLED DOWN */
.navbar.is-scrolled .nav-text,
.navbar:not([data-theme-top="dark"]) .nav-text {
  color: #111111 !important;
}
.navbar.is-scrolled .brand-name-text,
.navbar:not([data-theme-top="dark"]) .brand-name-text {
  color: #111111 !important;
}
.navbar.is-scrolled .nav-link:hover .nav-text,
.navbar:not([data-theme-top="dark"]) .nav-link:hover .nav-text {
  color: #000000 !important;
  opacity: 0.65 !important;
}
.navbar.is-scrolled a[href*="/contact"].nav-link,
.navbar:not([data-theme-top="dark"]) a[href*="/contact"].nav-link,
.navbar.is-scrolled .right-nav-menu .nav-link-overflow:last-child .nav-link,
.navbar:not([data-theme-top="dark"]) .right-nav-menu .nav-link-overflow:last-child .nav-link {
  background-color: #111111 !important;
  border-radius: 9999px !important;
  padding: 0.48rem 1.05rem !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.navbar.is-scrolled a[href*="/contact"].nav-link .nav-text,
.navbar:not([data-theme-top="dark"]) a[href*="/contact"].nav-link .nav-text,
.navbar.is-scrolled .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text,
.navbar:not([data-theme-top="dark"]) .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text {
  color: #ffffff !important;
  font-weight: 600 !important;
}

/* MOBILE RESPONSIVE DRAWER */
@media screen and (max-width: 991px) {
  .left-nav-menu, .right-nav-menu {
    display: none !important;
  }
  .menu-button {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    padding: 0.5rem !important;
  }
}

.mobile-menu-drawer {
  position: fixed !important;
  top: 4.6rem !important;
  left: 1rem !important;
  right: 1rem !important;
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(28px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  border-radius: 20px !important;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2) !important;
  padding: 1.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 1.2rem !important;
  z-index: 1000 !important;
  animation: slideDown 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}

.mobile-nav-link {
  font-size: 1.15rem !important;
  font-weight: 600 !important;
  color: #111111 !important;
  text-decoration: none !important;
  padding: 0.4rem 0 !important;
}
`;

fs.writeFileSync(path.join(stylesDir, 'qreatino.css'), css + '\n' + customNavbarCss);
console.log('src/styles/qreatino.css written successfully!');
