const fs = require('fs');
// var file = fs.readFileSync('dummyfile.txt','utf8'); // Sync way of reading a file

fs.readFile('dummyfile.txt','utf8',(err,data)=>{
    if(err) throw err;
    else console.log(data);
})

// console.log(file);