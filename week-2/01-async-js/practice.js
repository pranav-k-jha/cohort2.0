const fs = require("fs");

function PranavReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    })
}


function onDone(data){
    console.log(data);
}


PranavReadFile(onDone);