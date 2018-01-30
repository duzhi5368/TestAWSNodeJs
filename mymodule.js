// get stardard module object.
var fs = require("fs");
var path = require("path");

// my core interface.
module.exports = function(dirName, extStr, callbackFunc){
    fs.readdir(dirName, function(err, list){    // asysc foreach the dir.
       if(err){
           callbackFunc(err, null);
           return;
       } 
       
       // filter.
       list = list.filter(function(file){
          if(path.extname(file) === "." + extStr){
              return true;
          } 
       });
       
       return callbackFunc(null, list); // no errors.
    });
}