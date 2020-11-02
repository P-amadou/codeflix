const fs=require('fs')
const path= require ('path')

module.exports=function (fileName) {
    let filePath=path.resolve(fileName)
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        return 'Fichier a bien supprimé'
    })
}