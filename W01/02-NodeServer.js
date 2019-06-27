const http = require('http');

http.createServer(
    (req, res) => {
      res.end(`You requested URL ${req.headers.host}${req.url}`);
      })
    .listen(8080)
    .on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      });