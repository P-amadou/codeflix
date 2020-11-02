const fs=require('fs')
const path= require ('path')
//const e01 = require('./e01')
//const e02 = require ('./e02')
//const e03=require('./e03')
//const e04=require('./e04')
//const e05=require('./e05')
//const e06=require('./e06')
//const e07=require('./e07')
const e08=require('./e08')

//let extension=e02(process.argv[2]);
//let readFile=e04(process.argv[2])
//let createFile=e05(process.argv[2],process.argv[3])
//let removeFile=e06(process.argv[2])
//let checkInput=e07(process.argv[2])
let accessInput=e08(process.argv[2])

//ex1 console.log(e01())
/*ex2 autre version 
let name=path.basename(__filename);
let extension=path.extname(__filename);
e02("name :"+ name +", extension : "+ extension)
*/

//console.log("Extension :",extension);// ex2 bis version majdi 
//console.log(readFile);
//console.log(createFile);
//console.log(removeFile);
//console.log(checkInput);
console.log(accessInput);


