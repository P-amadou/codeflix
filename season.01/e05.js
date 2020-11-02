const fs=require('fs')

module.exports= function(fileName,data){
let writer=fs.writeFile(fileName, data, 'utf8', (err) => {
  return 'Fichier bien créé'
});

}