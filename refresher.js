 var http = require("http");
 var fs = require("fs");
 console.log("service started");
 http.createServer(function(request, response) {  //note: hit x2 from browser - favicon.ico
   console.log(request.url);

   response.writeHead(200, {
     "Content-Type": "text/html"
   });

   // BLOCKING:
   //var data = fs.readFileSync('package.json');
   //console.log(data.toString());

   // NON-BLOCKING:
   fs.readFile('input.txt', function(err, data) {
     if (err) return console.error(err);
     console.log("readfile finished");
   });
   console.log("readfile called");

   response.end("Refresher");

 }).listen(8080);
