 var http = require("http");
 var fs = require("fs");
 http.createServer(function(request, response) {
   console.log(request.url);
   response.writeHead(200, {
     "Content-Type": "text/html"
   });

   // BLOCKING:
   //var data = fs.readFileSync('package.json');
   //console.log(data.toString());

   // NON-BLOCKING:
   fs.readFile('package.json', function(err, data) {
     if (err) return console.error(err);
     console.log("readfile finished");
   });
   console.log("readfile called");

   response.end("Refresher");
   //console.log("RESPONSE", response);
 }).listen(8080);
