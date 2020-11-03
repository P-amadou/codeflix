const stream = require('stream');
const fs = require('fs');
const path= require('path')
const {Transform}=require('stream')
const readline= require('readline')

function duplicate(filename) {
    const{name,ext}=path.parse(filename)
    const readable = fs.createReadStream(filename);
    // create writable stream
    const writable = fs.createWriteStream(`${name}.copy ${ext}`);
    // use pipe to copy readable to writable
    readable.pipe(writable);
    console.log('File:',filename,'successfully duplicated!')
}

function transform(filename,re,fn,in_stdout) {
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

function csv2json(filename){
    let headers = []
    let records = []
    const input = fs.createReadStream(filename)
    const rl = readline.createInterface({input})
    
    let lineCount = 0
  
    rl.on('line', (line, i) => {
      if (lineCount === 0) {
        headers = line.split(';')
      } else {
        const record = {}
  
        line.split(';').forEach((value, i) => {
          const key = headers[i]
  
          if (value.includes(',')) {
            record[key] = value.split(',')
          } else {
            record[key] = value
          }
        })
  
        records.push(record)
      }
  
      lineCount++
    })
  
    rl.on('close', () => {
      const { name } = path.parse(filename)
  
      fs.writeFile(`${name}.json`, JSON.stringify(records, null, 2), (err) => {
        if(err) {
          return console.log(err);
        }
  
        console.log(`${filename} converted to json: ${name}.json`)
      })
    })
}

function WTFIsThisPipe() {
    /*let readFicJs,readerJs
    readFicJs=fs.readdir(__dirname, (err, files) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("Files ext .js:");
          files.forEach(file => { 
            if (path.extname(file) == ".js") 
              console.log(file); 
              readerJs=fs.readFileSync(file,'utf8');
              console.log(readerJs);
          }) 
        } 
      }) */

      fs.readdir(__dirname, (err, files) => {
      for (const filename of files.filter(filename => filename.endsWith('.js'))) {
          const input = fs.createReadStream(filename)
          const rl = readline.createInterface({input})
          
          rl.on('line', (line) => {
            if (/^[\t ]*function/g.test(line)) {
                console.log(line.replace('function','I will finish').slice(0, -2));
            } 
          })
      }
    })
}

module.exports={
    duplicate,
    transform,
    csv2json,
    WTFIsThisPipe
}