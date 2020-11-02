const stream = require('stream');
const fs = require('fs');
const path= require('path')
const {Transform}=require('stream')
function duplicate(filename) {
    const{name,ext}=path.parse(filename)
    const readable = fs.createReadStream(filename);
    // create writable stream
    const writable = fs.createWriteStream(`${name}.copy ${ext}`);
    // use pipe to copy readable to writable
    readable.pipe(writable);
    console.log('File:',filename,'successfully duplicated!')
}
function transform(filename,re,fn,in_stdout = false) {
    const transformer = new Transform({
        transform(chunk, _,callback){
            this.push(chunk.toString().replace(re,fn))

            callback()
        }
    })
    const readable = fs.createReadStream(filename);
    if ( in_stdout == true) {
        readable.pipe(transformer).pipe(process.stdout)   
    }else{
        const{name,ext}=path.parse(filename)
        const writable = fs.createWriteStream(`${name}.transform ${ext}`);
        readable.pipe(transformer).pipe(writable);
        console.log('File:',filename,'successfully transform!')  
    }
    
}
module.exports={
    duplicate,
    transform
}