const mymodule = require('./mymodule.js')

mymodule(process.argv[2],process.argv[3],(err,files)=>{
    files.forEach((file) => console.log(file))
});