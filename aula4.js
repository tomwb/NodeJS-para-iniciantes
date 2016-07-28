var http = require('http')
	,arquivo = require('fs');

var server = http.createServer(function(request,response){

	response.writeHead(200, {"Content-Type": "text/html"});		
	if (request.url == '/'){
		arquivo.readFile(__dirname + '/arquivos/index.html',function(err, html){						
			if (err) response.write('Arquivo index.html nao encontrado.');	
			response.write(html);	
			response.end();			
		});		
	}else if(request.url == '/contatos'){
		arquivo.readFile(__dirname + '/arquivos/contatos.html',function(err, html){						
			if (err) response.write('Arquivo index.html nao encontrado.');	
			response.write(html);				
			response.end();
		});		
	}else{
		response.write('Pagina nao encontrada.');	
		response.end();
	}		
});

server.listen(3000, function(){
	console.log('Servidor rodando!');	
	console.log(__dirname);	
});