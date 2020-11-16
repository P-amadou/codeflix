const http = require('http');

let port=process.argv[2]

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('<h1>Hello World!</h1>');
  res.end();
}).listen(port);
console.log(`Server is running at port ${port}`);