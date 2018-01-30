var http = require("http");
var map = require("through2-map");

var port = Number(process.argv[2]);
var server = http.createServer(function(req, res){
    if(req.method != "POST"){
        console.error("I need a POST\n");
        return;
    }
    
    { // it should be only POST msg now.
        var src = req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        }));
        // return back to client
        src.pipe(res);
    }
});
// listening to the port
server.listen(port);