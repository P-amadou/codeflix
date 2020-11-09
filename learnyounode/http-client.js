const http= require('http')
let urlLink=process.argv[2]
http.get(urlLink,(response)=>{
    response.on('data',(data)=>{
        console.log(data.toString());
    })
})