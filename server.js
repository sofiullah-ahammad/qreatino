const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};


const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/') && reqPath.length > 1) {
    reqPath = reqPath.slice(0, -1);
  }

  // Contact form submission endpoint
  if (req.method === 'POST' && reqPath === '/api/contact') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const contactsFile = path.join(ROOT, 'contacts.json');
        let contacts = [];
        if (fs.existsSync(contactsFile)) {
          try { contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8')); } catch(e) {}
        }
        contacts.push(data);
        fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2), 'utf8');
        console.log(`[Form Submission] New message from ${data.name || 'Anonymous'} (${data.email || 'no email'})`);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, message: 'Message received successfully!' }));
      } catch (err) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Invalid data' }));
      }
    });
    return;
  }

  // File resolution
  let filePath = path.join(ROOT, reqPath);

  // Check if direct file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return serveFile(filePath, res);
  }

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return serveFile(indexPath, res);
    }
  }

  // Check if reqPath + /index.html exists
  const dirIndexPath = path.join(ROOT, reqPath, 'index.html');
  if (fs.existsSync(dirIndexPath)) {
    return serveFile(dirIndexPath, res);
  }

  // Check if reqPath + .html exists
  const htmlPath = path.join(ROOT, reqPath + '.html');
  if (fs.existsSync(htmlPath)) {
    return serveFile(htmlPath, res);
  }

  // Fallback to 404.html
  const notFoundPath = path.join(ROOT, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.statusCode = 404;
    return serveFile(notFoundPath, res);
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('404 Not Found');
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('500 Internal Server Error');
      return;
    }
    res.setHeader('Content-Type', contentType);
    // No-cache during development so user edits and animations update instantly
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
