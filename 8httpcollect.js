var http = require('http');

http.get(process.argv[2], function(response) {
    var stuff = "";
    response.on("data", function(chunk) {
        stuff += chunk.toString();
    });

    response.on("end", function() { 
        console.log(stuff.length);
        console.log(stuff); 
    });
});
