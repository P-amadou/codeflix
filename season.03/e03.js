const http = require('http');
const fs= require('fs')
let filePath='./index.html'
let port=process.argv[2]
if (port==null) {
    port=4242
}else{
  port  
}
http.createServer(function (req, res) {
  let file=fs.readFileSync(filePath,'utf8')
  res.write(file);
  res.end();
}).listen(port);
console.log(`Server is running at port ${port}`);