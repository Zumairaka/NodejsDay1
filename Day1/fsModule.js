// Reading Directory

const fs = require('fs');

// const files = fs.readdirSync('./');  //reading files synchronous way

const files = fs.readdir('./',function(err,files){  //readdir is asynchronous so to make synchronous
   if(err) console.log('error',err);
   else console.log('result',files);
});