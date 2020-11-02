const fs=require('fs')
module.exports= function(filePath){
    let reader=fs.readFileSync(filePath,'utf8');
      /*reader=fs.readFile(filePath,'utf8', function (err, data) {
    if (err) throw err;

console.log(data);
});*/
console.log(reader);
    }

