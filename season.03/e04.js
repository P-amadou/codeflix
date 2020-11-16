const http = require('http');
const queryString= require('querystring')
const url= require('url')
let regex=/[?&]+([^=&]+)=?([^&]*)?/gi
let host='http://localhost:4242?a=1&b=2&c=3'
let param
let port=process.argv[2]
if (port==null) {
    port=4242
}else{
  port  
}
// function getUrlParam(host) {
//     let vals={}
//     testHost.replace('/','').replace(regex,(m,key,value)=>{
//         vals[key] = value !== undefined ? value : ''
//     })
//     if ( host ) {
// 		return vals[host] ? vals[host] : null;	
// 	}
// 	return vals;
// }

http.createServer(function (req, res) {
  let testHost=process.argv[1]
  console.log(queryString.parse(req.url));
  res.write(`done`)
  res.end();
}).listen(port);
console.log(`Server is start http://localhost:${port}`);