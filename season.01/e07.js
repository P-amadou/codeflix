const fs=require('fs')
const path= require ('path')

module.exports= function (input) {
    let inputPath=path.resolve(input)
    let file=fs.statSync(inputPath)
    let directory=fs.statSync(inputPath)
    if (file.isFile()) {
        return 'The argument [ '+input+' ] is a file'
    }else if (directory.isDirectory()) {
        return 'The argument [ '+input+' ] is a directory'
    }else {
        return 'The argument [ '+input+' ] is another unix things'
    }
            
}