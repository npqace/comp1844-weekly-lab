const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end()
;});
server.listen(8080);
console.log('Node.js web server at port 8080 is running')