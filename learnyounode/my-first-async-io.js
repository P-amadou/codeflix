const fs = require('fs')
const readline = require('readline');
let filePath=process.argv[2]
const input = fs.createReadStream(filePath)
const rl = readline.createInterface({input})
let lineCount = -1
rl.on('line', (line) => {
    lineCount++
})
rl.on('close', () => {
    console.log(lineCount);
});