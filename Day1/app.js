// console.log("hello");
// function multiply(num1,num2){
//     var result = num1*num2;
//     console.log(result);
// }
// multiply(5,6);

// single import
// var logger = require('./logger.js'); //now logger itself is a function
// logger("Hello");

//multiple import

// var logger = require('./logger.js');
// logger.print("helloooo");
// console.log(logger.link);


// var dateTime = require('./dateModule.js');
// console.log(dateTime());

var os = require('os');
console.log(os);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.type());