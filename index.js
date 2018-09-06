import express from "express";

var app = express();

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("hello world");
});

app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}/`);
});

// below was using build in http above we are now using express

// import { createServer } from 'http';
// const port = process.env.PORT || 3000;

// const server = createServer((req, res) => {
//   // res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/plain');
//   // res.end('Gday Git Deploy!\n');
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!\n');
// });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
