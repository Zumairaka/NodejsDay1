// console.log(__filename);

// console.log(__dirname);
// console.log(console);

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log(pathObj.name);
var path1 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(path1);