var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function(err, list) {
    for (var i = 0; i < list.length; i++) {
        var filename = list[i];
        if (path.extname(filename) == "." + filter) {
            console.log(filename);
        }
    }
});

