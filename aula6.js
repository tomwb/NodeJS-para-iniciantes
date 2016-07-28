zipper = require('zipper').Zipper;
//sudo npm install -g Zipper

// Diretorio e o nome do arquivo a ser gerado
var zipfile = new zipper('./arquivos/arquivos.zip');

//Arquivo / Caminho do arquivo
zipfile.addFile('aula1.js', 'aula1.js', function (err) {
	if (err) throw err;
	console.log('tudo ok');
})