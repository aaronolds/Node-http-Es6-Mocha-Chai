'use strict';

var _http = require('http');

var port = process.env.PORT || 3000;

var server = (0, _http.createServer)(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Gday Git Deploy!\n');
});

server.listen(port, function () {
  console.log('Server running on http://localhost:' + port + '/');
});