const fs=require('fs')
const path= require ('path')

module.exports=function (input) {
    let inputPath=path.resolve(input)
    fs.access(inputPath,fs.constants.R_OK | fs.constants.W_OK,(err) =>{
        if ((err)) {
            console.log('I can read or write the file '+input);
        }else {
            console.log("I don't have access to the file "+input);
        }
    })
}