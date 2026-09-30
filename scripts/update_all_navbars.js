const fs = require('fs');
const path = require('path');

const newMobileBlock = `/* Mobile & Tablet responsive navbar */
.mobile-nav-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  z-index: 9998 !important;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}
.mobile-nav-backdrop.is-open {
  display: block !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}

/* Base Menu Toggle Button - Completely Transparent (No background, No circle, No square box) */
.menu-button,
.w-nav-button,
.navbar .menu-button,
.navbar .w-nav-button,
.navbar[data-theme-top="dark"] .menu-button,
.navbar:not([data-theme-top="dark"]) .menu-button,
.navbar.is-scrolled .menu-button,
.navbar[data-theme-top="dark"]:not(.is-scrolled) .menu-button,
.menu-button-wrapper,
.background-glass.menu-button,
.menu-button-block,
.menu-toggle-wrapper {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  outline: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.menu-button,
.w-nav-button {
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  z-index: 10000 !important;
  -webkit-tap-highlight-color: transparent !important;
}

.menu-toggle-wrapper {
  width: 32px !important;
  height: 32px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: transparent !important;
  pointer-events: none !important;
}

.menu-toggle-svg {
  width: 26px !important;
  height: 26px !important;
  display: block !important;
  stroke: currentColor !important;
  fill: none !important;
  overflow: visible !important;
  transform-origin: 16px 16px !important;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease !important;
}

.menu-toggle-path-loop {
  stroke-dasharray: 12 63 !important;
  stroke-dashoffset: 0 !important;
  transition: stroke-dasharray 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              stroke-dashoffset 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.menu-toggle-path-mid {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* Light / Scrolled / Default theme */
.navbar:not([data-theme-top="dark"]) .menu-toggle-svg,
.navbar.is-scrolled .menu-toggle-svg {
  color: #111111 !important;
}

/* Dark top navbar */
.navbar[data-theme-top="dark"]:not(.is-scrolled) .menu-toggle-svg {
  color: #ffffff !important;
}

/* Open state: morphs to X and rotates -45deg */
.menu-button.w--open .menu-toggle-svg,
.menu-button.is-open .menu-toggle-svg {
  transform: rotate(-45deg) !important;
}

.navbar:not([data-theme-top="dark"]) .menu-button.w--open .menu-toggle-svg,
.navbar:not([data-theme-top="dark"]) .menu-button.is-open .menu-toggle-svg,
.navbar.is-scrolled .menu-button.w--open .menu-toggle-svg,
.navbar.is-scrolled .menu-button.is-open .menu-toggle-svg {
  color: #111111 !important;
}

.navbar[data-theme-top="dark"]:not(.is-scrolled) .menu-button.w--open .menu-toggle-svg,
.navbar[data-theme-top="dark"]:not(.is-scrolled) .menu-button.is-open .menu-toggle-svg {
  color: #ffffff !important;
}

.menu-button.w--open .menu-toggle-path-loop,
.menu-button.is-open .menu-toggle-path-loop {
  stroke-dasharray: 20 300 !important;
  stroke-dashoffset: -32.42px !important;
}

@media screen and (max-width: 991px) {
  /* Slim Mobile Navbar Header */
  .navbar {
    top: 0.45rem !important;
  }
  .navbar.is-scrolled {
    top: 0.45rem !important;
  }

  .nav-content-wrapper {
    background: transparent !important;
    border: 1px solid transparent !important;
    border-radius: 14px !important;
    box-shadow: none !important;
    padding: 0.45rem 1rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    box-sizing: border-box !important;
  }

  .navbar.is-scrolled .nav-content-wrapper {
    background: rgba(255, 255, 255, 0.92) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06) !important;
  }

  .brand-name-text {
    font-size: 1.2rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.02em !important;
  }

  /* Completely Transparent Menu Button (No background, No circle, No square box) */
  .menu-button,
  .w-nav-button,
  .navbar .menu-button,
  .navbar .w-nav-button,
  .navbar[data-theme-top="dark"] .menu-button,
  .navbar[data-theme-top="dark"]:not(.is-scrolled) .menu-button,
  .navbar:not([data-theme-top="dark"]) .menu-button,
  .navbar.is-scrolled .menu-button,
  .menu-button-wrapper,
  .background-glass.menu-button {
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    outline: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
    min-height: 36px !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    z-index: 10000 !important;
  }

  /* Mobile Navigation Drawer Card - Clean Solid White, NO full-screen blur */
  .nav-menu {
    display: none !important;
    flex-direction: column !important;
    position: fixed !important;
    top: 4.4rem !important;
    left: 0.85rem !important;
    right: 0.85rem !important;
    width: calc(100% - 1.7rem) !important;
    max-width: 440px !important;
    margin: 0 auto !important;
    height: auto !important;
    max-height: calc(100vh - 5.5rem) !important;
    background: #ffffff !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    border-radius: 20px !important;
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.06) !important;
    padding: 1.25rem 1.15rem 1.35rem !important;
    overflow-y: auto !important;
    z-index: 9999 !important;
    box-sizing: border-box !important;

    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translateY(-8px) scale(0.98) !important;
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                visibility 0.25s !important;
  }

  /* Drawer Open State */
  .nav-menu.is-open,
  .nav-menu.w--open,
  .nav-component-grid:has(.menu-button.w--open) .nav-menu,
  .nav-component-grid:has(.menu-button.is-open) .nav-menu {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: translateY(0) scale(1) !important;
  }

  /* Drawer Content */
  .nav-menu-content,
  .nav-component-grid:has(.menu-button.w--open) .nav-menu-content {
    position: static !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 0.35rem !important;
    width: 100% !important;
    height: auto !important;
    padding: 0 !important;
    background: transparent !important;
  }

  .navbar-background-wrap {
    display: none !important;
  }

  .left-nav-menu, .right-nav-menu {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.25rem !important;
    width: 100% !important;
  }

  .nav-link-overflow {
    overflow: visible !important;
    height: auto !important;
    width: 100% !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .nav-link-block {
    height: auto !important;
    display: block !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .nav-link {
    transform: none !important;
    padding: 0.75rem 1rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    background: transparent !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: background 0.18s ease, transform 0.18s ease !important;
  }

  .nav-link:hover {
    background: rgba(0, 0, 0, 0.05) !important;
    transform: translateX(4px) !important;
  }

  /* CRITICAL FIX: Explicit High-Specificity Solid Dark Color for all Drawer Links */
  .navbar .nav-menu .nav-text,
  .navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-menu .nav-text,
  .navbar[data-theme-top="dark"] .nav-menu .nav-text,
  .navbar.is-scrolled .nav-menu .nav-text,
  .navbar:not([data-theme-top="dark"]) .nav-menu .nav-text,
  .nav-menu .nav-text,
  .nav-menu-content .nav-text {
    font-size: 1.15rem !important;
    font-weight: 600 !important;
    color: #0a0a0a !important;
    text-align: left !important;
    letter-spacing: -0.015em !important;
    line-height: 1.3 !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .navbar .nav-menu .nav-link.w--current .nav-text,
  .navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-menu .nav-link.w--current .nav-text {
    color: #0a0a0a !important;
    font-weight: 700 !important;
    border-bottom: none !important;
  }

  /* Bottom CTA: Start a Project → */
  .nav-menu .right-nav-menu .nav-link-overflow:last-child {
    margin-top: 0.65rem !important;
    padding-top: 0.65rem !important;
    border-top: 1px solid #eeeeee !important;
    width: 100% !important;
  }

  .nav-menu .right-nav-menu .nav-link-overflow:last-child .nav-link {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 0.85rem 1.25rem !important;
    background-color: #0a0a0a !important;
    border-radius: 12px !important;
    transform: none !important;
    transition: background-color 0.2s ease, transform 0.2s ease !important;
  }

  .nav-menu .right-nav-menu .nav-link-overflow:last-child .nav-link:hover {
    background-color: #de362a !important;
    transform: translateY(-1px) !important;
  }

  .navbar .nav-menu .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text,
  .navbar[data-theme-top="dark"]:not(.is-scrolled) .nav-menu .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text,
  .nav-menu .right-nav-menu .nav-link-overflow:last-child .nav-link .nav-text {
    color: #ffffff !important;
    font-weight: 600 !important;
    font-size: 1rem !important;
    text-align: center !important;
    border-bottom: none !important;
  }
}
`;

const rootDir = path.join(__dirname, '..');
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

let updatedCount = 0;

files.forEach(f => {
  const filePath = path.join(rootDir, f);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping missing file:', f);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  const styleMatch = html.match(/<style id="glassy-navbar-style">([\s\S]*?)<\/style>/);
  if (!styleMatch) {
    console.log('No glassy navbar style found in:', f);
    return;
  }

  const oldCss = styleMatch[1];
  const mediaIdx = oldCss.indexOf('@media screen and (max-width: 991px)');
  if (mediaIdx === -1) {
    console.log('No media query found in:', f);
    return;
  }

  // Also check if there's mobile-nav-backdrop or menu-toggle-svg before mediaIdx
  let baseCss = oldCss.substring(0, mediaIdx);
  // Remove any previously inserted mobile-nav-backdrop or menu-button rules right before mediaIdx if present
  const mbCommentIdx = baseCss.indexOf('/* Mobile & Tablet responsive navbar */');
  if (mbCommentIdx !== -1) {
    baseCss = baseCss.substring(0, mbCommentIdx);
  }

  const updatedCss = baseCss.trimEnd() + '\n\n' + newMobileBlock.trim() + '\n';
  const newHtml = html.replace(oldCss, updatedCss);
  fs.writeFileSync(filePath, newHtml, 'utf8');
  updatedCount++;
  console.log(`Updated ${f}`);
});

console.log(`Successfully updated ${updatedCount} files.`);
