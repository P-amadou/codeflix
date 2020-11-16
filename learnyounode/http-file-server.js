const fs= require('fs')
const net = require('net')

const server=net.createServer((socket,result)=>{
    fs.createWriteStream(process.argv[3]).pipe(result)
})
server.listen(process.argv[2])