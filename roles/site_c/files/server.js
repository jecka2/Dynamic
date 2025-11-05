const http = require('http');
const server = http.createServer((req, res) => {
 
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=UTF-8'
  });
  res.end('Hello, world!');
});
 
server.listen(3000, '127.0.0.1', () => {
  console.log('Start NodeJS Server on http://127.0.0.1:3000/');
});