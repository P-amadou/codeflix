const {empty,withArgs} = require ('./eventbox')
const {duplicate,transform} = require ('./streambox')
//empty()
//withArgs(tabNames=['Luffy','Zoro','Nami','Sanji','Ussop','Ch0pper','Robin'])


/*if (process.argv.length !== 3) {
    console.log(`usage: node main.js <FILENAME>`)
    process.exit(1)
}
duplicate(process.argv[2])*/

transform('./toto.txt',/[a-z]/g,(letter)=> letter.toUpperCase())
