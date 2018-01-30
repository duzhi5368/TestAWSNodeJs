var http = require('http');
var addr = process.argv[2];

http.get(addr, function(response){
   response.setEncoding("utf8");
   response.on("data", function(data){
       console.log(data);
   });
   response.resume();
}).on("error", (e) => {
    console.log("Error: ${e.message}"); 
});