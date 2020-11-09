const http= require('http')
let urlLink=process.argv[2]
let result=""
http.get(urlLink,(response)=>{
    response.on("data",(data)=>{
        //data=data.toString()
        result+=data
    }).on("end",()=>{
        console.log(result.length);
        console.log(result);
    })
})

