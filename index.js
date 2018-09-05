import { createServer } from 'http';
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Gday Git Deploy!\n');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n'); 
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});