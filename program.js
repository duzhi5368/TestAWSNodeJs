// import modules.
var mymodule = require('./mymodule.js') 

// params from args.
var dirName = process.argv[2];
var extName = process.argv[3];

var myCallbackFunc = function(err, list){
    if(err){
        console.error(err);
        throw err;
    }
    
    list.forEach(function(file){
       console.log(file); 
    });
}

// Main enterance.
mymodule(dirName, extName, myCallbackFunc);