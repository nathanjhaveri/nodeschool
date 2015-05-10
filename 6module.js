var mymodule = require('./6mymodule.js');


var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function(err, data) {
    data.forEach(function(item) {
        console.log(item);
    });
});

