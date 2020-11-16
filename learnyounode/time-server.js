const net = require('net')

function dateNow() {
    const date=new Date();
    return date.getFullYear() +"-"+ zeroFilled(date.getMonth()+1) +"-"+ zeroFilled(date.getDate()) +" "+ zeroFilled(date.getHours()) +":"+ zeroFilled(date.getMinutes())
}
function zeroFilled(i) {
    if (i<10) {
        return '0'+i  
    }else{
        return ''+i
    }
}
const server = net.createServer((socket) => {
    // socket handling logic
    socket.end(dateNow()+"\n")
  })
  server.listen(parseInt(process.argv[2]))