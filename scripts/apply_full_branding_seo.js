const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Copy kanso images to qreatino images in assets/
const assetsDir = path.join(rootDir, 'assets');
const kansoImages = ['kanso_aren.jpg', 'kanso_forma.jpg', 'kanso_lune.jpg', 'kanso_oko.jpg', 'kanso_oura.jpg', 'kanso_velin.jpg'];
kansoImages.forEach(img => {
  const src = path.join(assetsDir, img);
  const dest = path.join(assetsDir, img.replace('kanso_', 'qreatino_'));
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});
console.log('Copied kanso image assets to qreatino image assets.');

// 2. Page SEO Metadata definitions
const DOMAIN = 'https://qreatino.vercel.app';
const DEFAULT_OG_IMAGE = `${DOMAIN}/assets/69c583bf736f299d664865f5_open-graph-image.jpg`;

const pagesConfig = {
  'index.html': {
    title: 'Qreatino — Creative Design & Branding Studio',
    description: 'Qreatino is an award-winning creative design and branding studio crafting iconic brand identities, digital experiences, and strategic visual systems.',
    url: `${DOMAIN}/`,
    image: DEFAULT_OG_IMAGE
  },
  'about/index.html': {
    title: 'Studio — About Qreatino | Elite Branding & Digital Design',
    description: 'Discover the philosophy, team, and creative vision behind Qreatino Studio — empowering visionary brands through purposeful design and strategy.',
    url: `${DOMAIN}/about`,
    image: DEFAULT_OG_IMAGE
  },
  'projects/index.html': {
    title: 'Case Studies & Selected Works — Qreatino Studio',
    description: 'Explore selected projects, brand identity systems, and digital design case studies delivered by Qreatino Studio for industry-leading brands.',
    url: `${DOMAIN}/projects`,
    image: DEFAULT_OG_IMAGE
  },
  'services/index.html': {
    title: 'Services — Brand Strategy, Visual Identity & Digital Design | Qreatino',
    description: 'From comprehensive brand identity and positioning strategy to digital design and art direction, discover how Qreatino elevates forward-thinking businesses.',
    url: `${DOMAIN}/services`,
    image: DEFAULT_OG_IMAGE
  },
  'contact/index.html': {
    title: 'Start a Project — Contact Qreatino Studio',
    description: 'Have an ambitious project in mind? Connect with the Qreatino team to start building an iconic brand identity, website, or digital experience.',
    url: `${DOMAIN}/contact`,
    image: DEFAULT_OG_IMAGE
  },
  'blog/index.html': {
    title: 'Insights & Perspectives — Qreatino Design Journal',
    description: 'Thought leadership, design essays, and strategic branding insights from the creative directors and strategists at Qreatino Studio.',
    url: `${DOMAIN}/blog`,
    image: DEFAULT_OG_IMAGE
  },
  'blog-post/building-brands-that-stand-out-today/index.html': {
    title: 'Building Brands That Stand Out Today — Qreatino Journal',
    description: 'In crowded markets, strong branding helps companies communicate unique value, differentiate from competitors, and drive authentic loyalty.',
    url: `${DOMAIN}/blog-post/building-brands-that-stand-out-today`,
    image: `${DOMAIN}/assets/69b45f9db54d2fe4cdd985bf_blog-02.jpg`
  },
  'blog-post/how-design-shapes-modern-brand-experiences/index.html': {
    title: 'How Design Shapes Brand Perception — Qreatino Journal',
    description: 'Explore how thoughtful design decisions, micro-interactions, and visual harmony play a key role in shaping meaningful brand perception.',
    url: `${DOMAIN}/blog-post/how-design-shapes-modern-brand-experiences`,
    image: `${DOMAIN}/assets/69b45faf4be9d2023715c644_blog-04.jpg`
  },
  'blog-post/how-strong-branding-builds-trust-and-recognition/index.html': {
    title: 'Building Trust Through Branding — Qreatino Journal',
    description: 'Discover how a clear, cohesive brand identity helps businesses build credibility, establish market authority, and deeply connect with audiences.',
    url: `${DOMAIN}/blog-post/how-strong-branding-builds-trust-and-recognition`,
    image: `${DOMAIN}/assets/69b45fbd877d483ced758e48_blog-06.jpg`
  },
  'blog-post/key-elements-behind-memorable-and-effective-brands/index.html': {
    title: 'Key Elements Of Memorable Brands — Qreatino Journal',
    description: 'Learn the fundamental pillars that empower brands to stand out, command attention, and remain memorable across every touchpoint.',
    url: `${DOMAIN}/blog-post/key-elements-behind-memorable-and-effective-brands`,
    image: `${DOMAIN}/assets/69b45fb6963dcfbb37f02d7a_blog-05.jpg`
  },
  'blog-post/the-role-of-storytelling-in-branding/index.html': {
    title: 'The Role Of Storytelling In Branding — Qreatino Journal',
    description: 'Discover how strategic storytelling connects emotionally with audiences and communicates brand mission with clarity and resonance.',
    url: `${DOMAIN}/blog-post/the-role-of-storytelling-in-branding`,
    image: `${DOMAIN}/assets/69b45f94fdb752364028c020_blog-01.jpg`
  },
  'blog-post/why-brand-strategy-matters-for-business-growth/index.html': {
    title: 'Why Brand Strategy Drives Growth — Qreatino Journal',
    description: 'A well-crafted brand strategy aligns business goals with customer desires, driving scalable long-term growth and sustainable market dominance.',
    url: `${DOMAIN}/blog-post/why-brand-strategy-matters-for-business-growth`,
    image: `${DOMAIN}/assets/69b45fa652d900ca7e7486df_blog-03.jpg`
  },
  'project/beyond/index.html': {
    title: 'Beyond — Brand Identity & Visual System | Qreatino Case Study',
    description: 'A modern, high-impact brand identity and packaging system designed by Qreatino to stand out and reflect unique brand values.',
    url: `${DOMAIN}/project/beyond`,
    image: `${DOMAIN}/assets/69b1c8414e2b6e0f0c18d5ee_project-img-02.jpg`
  },
  'project/elevate/index.html': {
    title: 'Elevate — Digital Platform & Visual Experience | Qreatino Case Study',
    description: 'A cohesive visual system and responsive web design developed by Qreatino that strengthens market recognition and drives engagement.',
    url: `${DOMAIN}/project/elevate`,
    image: `${DOMAIN}/assets/69b5aaa4ba5e05b459dc1ed1_project-img-03.jpg`
  },
  'project/horizon/index.html': {
    title: 'Horizon — Strategic Brand Foundation & Visual Direction | Qreatino Case Study',
    description: 'Strategic brand foundation and digital art direction crafted by Qreatino to support ambitious growth and foster meaningful customer connections.',
    url: `${DOMAIN}/project/horizon`,
    image: `${DOMAIN}/assets/69b1c837ec8660081ea3b9fc_project-img-01.jpg`
  },
  'project/origin/index.html': {
    title: 'Origin — Distinctive Brand Strategy & Identity | Qreatino Case Study',
    description: 'Distinctive visual identity, typography system, and brand guidelines built by Qreatino to communicate clarity and connect deeply.',
    url: `${DOMAIN}/project/origin`,
    image: `${DOMAIN}/assets/69b29df108e3c109b1ae9c8e_project-img-04.jpg`
  },
  'template-info/style-guide/index.html': {
    title: 'Design System & Style Guide — Qreatino Studio',
    description: 'Explore the typography, color palette, component design, and responsive layout specifications powering Qreatino Studio.',
    url: `${DOMAIN}/template-info/style-guide`,
    image: DEFAULT_OG_IMAGE
  },
  'template-info/licenses/index.html': {
    title: 'Asset Licenses & Font Credits — Qreatino Studio',
    description: 'Licensing details and commercial use credits for typography, photography, and graphical assets used on Qreatino Studio.',
    url: `${DOMAIN}/template-info/licenses`,
    image: DEFAULT_OG_IMAGE
  },
  'template-info/changelog/index.html': {
    title: 'Changelog & Updates — Qreatino Studio',
    description: 'Latest product releases, visual updates, performance optimizations, and enhancements to Qreatino Studio.',
    url: `${DOMAIN}/template-info/changelog`,
    image: DEFAULT_OG_IMAGE
  },
  '401.html': {
    title: 'Protected Content — Qreatino Studio',
    description: 'This page is password protected. Enter your credentials to access confidential Qreatino client presentations.',
    url: `${DOMAIN}/401`,
    image: DEFAULT_OG_IMAGE
  },
  '404.html': {
    title: 'Page Not Found (404) — Qreatino Studio',
    description: 'The page you are looking for does not exist or has been moved. Explore the Qreatino creative showcase.',
    url: `${DOMAIN}/404`,
    image: DEFAULT_OG_IMAGE
  }
};

Object.keys(pagesConfig).forEach(relPath => {
  const filePath = path.join(rootDir, relPath.replace(/\//g, path.sep));
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  const cfg = pagesConfig[relPath];

  // 1. Remove all Webflow data-wf-page and data-wf-site from <html> tag
  html = html.replace(/<html\s+([^>]*?)data-wf-page="[^"]*"\s*([^>]*?)>/gi, '<html $1$2>');
  html = html.replace(/<html\s+([^>]*?)data-wf-site="[^"]*"\s*([^>]*?)>/gi, '<html $1$2>');
  html = html.replace(/<html\s+lang="en"\s*>/gi, '<html lang="en">');

  // 2. Remove any lingering Cfdasdrg / template branding text
  html = html.replace(/Cfdasdrg template/gi, 'Qreatino Studio');
  html = html.replace(/Cfdasdrg/gi, 'Qreatino');

  // 3. In projects/index.html: Replace kanso references with qreatino
  if (relPath === 'projects/index.html') {
    html = html.replace(/kanso_([a-z0-9_-]+\.jpg)/gi, 'qreatino_$1');
    html = html.replace(/kanso-([a-z0-9_-]+)/gi, 'qreatino-$1');
    html = html.replace(/kansoProjectsSection/gi, 'qreatinoProjectsSection');
    html = html.replace(/kansoProjectsGrid/gi, 'qreatinoProjectsGrid');
    html = html.replace(/Kanso Projects Section/gi, 'Qreatino Projects Section');
  }

  // 4. Replace generic alt="Template Image" with SEO descriptive alt
  html = html.replace(/alt="Template Image\s*-\s*[^"]*"/gi, 'alt="Qreatino Creative Studio — Branding & Digital Design Showcase"');
  html = html.replace(/alt="Template Image"/gi, 'alt="Qreatino Creative Studio — Visual Identity & Brand Design"');

  // 5. Build clean, complete SEO head block
  // Replace <title>...</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${cfg.title}</title>`);

  // Replace or add <meta name="description" ...>
  if (html.match(/<meta\s+content="[^"]*"\s+name="description"/i)) {
    html = html.replace(/<meta\s+content="[^"]*"\s+name="description"\s*\/?>/i, `<meta name="description" content="${cfg.description}"/>`);
  } else if (html.match(/<meta\s+name="description"\s+content="[^"]*"/i)) {
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${cfg.description}"/>`);
  }

  // Remove existing OG and Twitter tags to inject unified, complete metadata
  html = html.replace(/<meta\s+[^>]*?property="og:title"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?property="og:description"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?property="og:image"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?property="og:url"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?property="og:type"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?property="og:site_name"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="twitter:title"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="twitter:description"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="twitter:image"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="twitter:card"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="author"[^>]*?>/gi, '');
  html = html.replace(/<meta\s+[^>]*?name="keywords"[^>]*?>/gi, '');
  html = html.replace(/<link\s+[^>]*?rel="canonical"[^>]*?>/gi, '');

  const seoBlock = `
<link rel="canonical" href="${cfg.url}"/>
<meta name="author" content="Qreatino Studio"/>
<meta name="keywords" content="Qreatino, creative studio, design agency, brand identity, art direction, digital design, UI UX, web design, strategy"/>
<meta property="og:site_name" content="Qreatino Studio"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="${cfg.title}"/>
<meta property="og:description" content="${cfg.description}"/>
<meta property="og:url" content="${cfg.url}"/>
<meta property="og:image" content="${cfg.image}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${cfg.title}"/>
<meta name="twitter:description" content="${cfg.description}"/>
<meta name="twitter:image" content="${cfg.image}"/>
`;

  // Inject seoBlock right after </title>
  html = html.replace(/<\/title>/i, `</title>${seoBlock}`);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated branding & SEO in: ${relPath}`);
});

console.log('All 21 HTML files updated with complete Qreatino branding and SEO!');
