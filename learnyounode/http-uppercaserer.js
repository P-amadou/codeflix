var http = require('http');

var map = require('through2-map');

upperCase = map((chunk) => {
  return chunk.toString().toUpperCase();
});

server = http.createServer((req, response) => {
  if (req.method == 'POST') {
    req.pipe(upperCase).pipe(response);
  }
});
server.listen(process.argv[2]);