var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    var buff = data.toString();
    console.log(buff.split('\n').length - 1);
});

