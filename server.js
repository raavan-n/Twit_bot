var http = require("http");
var fs  = require("fs");

function onRequest(request, response){
    if(request.method=='GET' && request.url == '/'){
      response.writeHead(200, {"Content-Type":"text/plain"});
      response.write("Home page");
      response.end();
    }
    else if(request.method == 'GET' && request.url == '/baap'){
      response.writeHead(200, {"Content-Type":"text/plain"});
      response.write("baap page");
      response.end()
    }
    else{
      response.writeHead(400, {"Content-Type":"text/plain"});
      response.write("error 404, check out..");
      response.end();
    }
}

http.createServer(onRequest).listen(8888);
