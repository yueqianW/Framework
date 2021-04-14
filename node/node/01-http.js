const http = require('http');

http
  .createServer((req, res) => {
    console.log('req', req.url);
    res.writeHead(200, { 'Content-type': 'text/html;charset="utf-8"' });
    res.write('你好 uiui');
    res.end();
  })
  .listen(3001);
