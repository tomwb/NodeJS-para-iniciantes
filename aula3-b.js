var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.write("<br>");	
	response.write("<h3>Aulas NodeJS</h3>");

	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags: 'a'});
	txt.write(request.url+'\n');

	response.end();		
});

// server.listen(3000); - // 300 - é a porta
// localhost:3000
server.listen(3000, function(){
	console.log('Servidor está rodando!');	
});