const fs = require('fs')
const readline = require('readline');
let filePath=process.argv[2]
/*const input = fs.createReadStream(filePath)
const rl = readline.createInterface({input})
let lineCount = -1
rl.on('line', (line) => {
    lineCount++
})
rl.on('close', function () {
    console.log(lineCount);
});*/
let fileRead =  fs.readFileSync(filePath);
let toStringFile = fileRead.toString();
let splitLines = toStringFile.split("\n");
console.log(splitLines.length-1);