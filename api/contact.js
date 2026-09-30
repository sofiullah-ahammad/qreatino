// Vercel Serverless Function for Contact Form
module.exports = (req, res) => {
  if (req.method === 'POST') {
    let body = req.body;
    // In case body is a string
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch(e) {}
    }
    console.log('[Contact Form] Received message:', body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, message: 'Message received successfully!' }));
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
  }
};
