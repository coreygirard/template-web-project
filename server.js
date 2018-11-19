var http = require("http");
var url = require("url");

function routeMain(res) {
  res.write("Hello world");
  res.end();
}

var server = http.createServer();
server.on("request", function(req, res) {
  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (page == "/") {
    routeMain(res);
  }
});
server.listen(8080);
