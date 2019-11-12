var http = require('http');
var server = http.createServer(function(req,res){
    res.write('<h1>Hello World!</h1>');
    res.end('hiii');
});
server.listen();
console.log(server.address());
console.log(server.);