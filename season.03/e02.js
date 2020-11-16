const http = require('http');

let port=process.argv[2]
/*let data=""
let req=new URL("http://localhost:4242")
let opt1,opt2
opt1= {
    hostname: 'localhost',
    port: port,
    path: 'http://',
    method: 'POST'
};
opt2= {
    hostname: 'localhost',
    port: port,
    path: 'http://',
    method: 'POST'
};*/


http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
if (req.method === "GET") {
  res.write('<h1>Hello World!</h1>');
}else if (req.method==="POST") {
    res.write('Heisenberg')
   /* let data=""
    let test
    test=http.request(req,res =>{
        res.on("data",d=>{
            data+='Heisenberg'
        })
        res.on("end",()=>{
            res.write(data)
        })
    })*/
}
res.end();
}).listen(port);

console.log(`Server is running at port ${port}`);
