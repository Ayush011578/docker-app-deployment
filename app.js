const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Docker container!\n');
}).listen(PORT, () => {
  console.log(`hello Server running at http://localhost:${PORT}`);
});
