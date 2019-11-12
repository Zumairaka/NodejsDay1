var url = 'http://ictkerala.org/';
function print(message){
    console.log(message);
}
//single export
// module.exports = print; // return an object

//multiple export
module.exports.print = print;
module.exports.link = url;