const fs = require('fs');
// fs.writeFileSync('test.txt','Hello World!','utf8'); // sync way 

fs.writeFile('test.txt','Hello...How are youuuu..','utf8',function(err){ //rewrite
    if(err)
        console.log(err);
    else
        console.log('Write Operation Completed');

});
fs.appendFile('test.txt','sfjsghriughrsg',function(err){ //append
    if(err) throw err;
    else console.log('saved');
})