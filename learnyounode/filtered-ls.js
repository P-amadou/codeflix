const fs = require('fs')
let dirPath=process.argv[2]
let fileExt=process.argv[3]
fs.readdir(dirPath,(error,dirFiles)=>{
    if(error){
        return console.error(error);
} 
   
   dirFiles.filter((file)=>{
       if (file.endsWith(`.${fileExt}`)) {
           return file
       }
    }).forEach(file =>{
        console.log(file);
    }) 
});
