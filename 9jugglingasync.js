var http = require('http');

var urls = process.argv.slice(2); // Supposed to be 3, but let's make it work with more

var responses = [];
for (var i = 0; i < urls.length; i++) {
    responses.push(null);
}

function finished(i, data) {
    responses[i] = data;
    if (!responses.some(function (a) { return a == null; })) {
        responses.forEach(function (resp) { console.log(resp); });
    }
}

urls.forEach(function(url, i) {
    http.get(url, function(response) {
        var data = "";
        response.on('data', function(chunk) {
            data += chunk.toString();
        });

        response.on('end', function() {
            finished(i, data);
        });
    });
});


