const fs=require('fs')
const path= require ('path')
module.exports= function(fileName){
    return path.extname(fileName)
    }
