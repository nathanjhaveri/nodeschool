var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        var data = list.filter(function(filename) {
            return path.extname(filename) === "." + filter;
        });

        callback(null, data);
    });
}

