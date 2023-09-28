var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req,res){

    var q = url.parse(req.url,true);
    var data = "." + q.pathname;

    fs.readFile(data,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("<h1>Error: 404 - File not found</h1>");
        }

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        return res.end();
    });

    
}).listen(2203);

console.log("Server running at Localhost:2203");