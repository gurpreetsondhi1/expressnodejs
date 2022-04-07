const http = require("http");
http.createServer(function(request, response){
    response.write("HelloWorld");
    response.write("<h1>Good</h1>");
    let user = {name:"abc", age:20,dept:"csr"}
    response.write(JSON.stringify(user))
    response.end();
}).listen(3000)