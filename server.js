const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
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
  '.eot': 'application/vnd.ms-fontobject',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8'
};

function getRoot() {
  if (fs.existsSync(path.join(__dirname, 'dist', 'index.html'))) {
    return path.join(__dirname, 'dist');
  }
  return __dirname;
}

function handleRequest(req, res) {
  const ROOT = getRoot();
  let reqPath = decodeURI((req.url || '/').split('?')[0]);
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
        const contactsFile = path.join(__dirname, 'contacts.json');
        let contacts = [];
        if (fs.existsSync(contactsFile)) {
          try { contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8')); } catch(e) {}
        }
        contacts.push(data);
        try { fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2), 'utf8'); } catch(e) {}
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

  // Helper to serve a file
  function serveFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('500 Internal Server Error');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.end(data);
    });
  }

  // 1. Direct file resolution in ROOT
  let filePath = path.join(ROOT, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return serveFile(filePath);
  }

  // 2. Directory with index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return serveFile(indexPath);
    }
  }

  // 3. reqPath + /index.html
  const dirIndexPath = path.join(ROOT, reqPath, 'index.html');
  if (fs.existsSync(dirIndexPath)) {
    return serveFile(dirIndexPath);
  }

  // 4. reqPath + .html
  const htmlPath = path.join(ROOT, reqPath + '.html');
  if (fs.existsSync(htmlPath)) {
    return serveFile(htmlPath);
  }

  // 5. Fallback to __dirname if ROOT was dist
  if (ROOT !== __dirname) {
    let rootFilePath = path.join(__dirname, reqPath);
    if (fs.existsSync(rootFilePath) && fs.statSync(rootFilePath).isFile()) {
      return serveFile(rootFilePath);
    }
    const rootDirIndex = path.join(__dirname, reqPath, 'index.html');
    if (fs.existsSync(rootDirIndex)) {
      return serveFile(rootDirIndex);
    }
  }

  // 6. 404 Fallback
  const notFoundPath = path.join(ROOT, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.statusCode = 404;
    return serveFile(notFoundPath);
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('404 Not Found');
}

// Local server execution
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(handleRequest);
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is already in use.`);
    } else {
      console.error('Server error:', err);
    }
  });
  server.listen(PORT, () => {
    console.log(`Qreatino Server running on http://localhost:${PORT}`);
  });
}

// Export handler function for Vercel Serverless Function compatibility
module.exports = handleRequest;
