const http= require('http')
let urlLinkList = [];
urlLinkList.push(process.argv[2],process.argv[3],process.argv[4])
let results=[]
let count=0
function getUrl(i) {
  http.get(urlLinkList[i],(response)=>{ 
      let result={}
      result[i]=""
      data=data.toString()
      response.on('error', (error)=>{
        console.log(error);
      });
      response.on("data",(data)=>{  
        result[i]+=data
      })
      response.on("end",()=>{
        results[i]=result
        count++
        if (count==urlLinkList.length) {
          for (let i = 0; i < urlLinkList.length; i++) {
            console.log(results[i][i]);
          }
        }
      })
  })
}

for (let k = 0; k < urlLinkList.length; k++)
    getUrl(k);

/*var urlList = [];
urlList.push(process.argv[2]);
urlList.push(process.argv[3]);
urlList.push(process.argv[4]);
var results = []
var count = 0

function getURLdata (index) {
    http.get(urlList[index], function(response){
        var data = {};
        data[index] = '';      
        response.setEncoding('utf-8');
        response.on('error', function(err){
            console.log(err);
        });
        response.on('data', function(chunk){
            data[index] += chunk;
        });


        response.on('end', function(){
            results[index] = data;
            count++;
            if (count == urlList.length){
                for (var i = 0; i < urlList.length; i++){
                    console.log(results[i][i]);
                } 
            }s
        });

    });
}

for (var i = 0; i < urlList.length; i++)
    getURLdata(i);
*/