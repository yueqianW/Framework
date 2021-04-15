const url = require('url');

var link = 'http://www.baidu.com/?name=aaa&time=bbb';

var value = url.parse(link, true).query;
console.log(`name: ${value.name}, time: ${value.time}`);
