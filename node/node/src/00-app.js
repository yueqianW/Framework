const http = require('http');
const url = require('url');
// const tools = require('./module/tools');
// const tools = require('axios');
const tools = require('db');

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html;charset:"utf-8"' });
    var link = 'http://www.baidu.com/?name=ccc';
    if (request.url != '/favicon.ico') {
      var value = url.parse(link, true).query;
      console.log(`name: ${value.name}`);
      console.log(`tools`, tools);
      response.write(`name: ${value.name}`);
    }
    response.end();
  })
  .listen(3001);
