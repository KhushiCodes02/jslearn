var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('form1.abc', function(err,data){
        res.writeHead(200,
            {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8090);