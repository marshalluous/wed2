const http = require('http');

http.createServer(
    (req, res) => {
      res.end('Hello WED3 World!');
      })
    .listen(8080)
    .on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      });