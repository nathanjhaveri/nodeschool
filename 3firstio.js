var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var buff = file.toString();
console.log(buff.split('\n').length - 1);

