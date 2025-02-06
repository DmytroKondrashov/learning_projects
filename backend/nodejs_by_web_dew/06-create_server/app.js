const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method, req.headers);

  // Return html page
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<head><link rel="stylesheet" href="styles.css"></head>');
  // res.write('<h1>Hello world!</h1>');

  // Return json
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({
    name: 'John',
    age: 30
  }));
  res.end();
})

server.listen(port, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${port}`);
})
