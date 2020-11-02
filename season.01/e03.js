const fs=require('fs')
const callback="error"
module.exports= function(filePath){
    fs.readFile(filePath,'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
      });
      /*reader=fs.readFile(filePath,'utf8', function (err, data) {
    if (err) throw err;

console.log(data);
});
console.log(reader);*/
    }

