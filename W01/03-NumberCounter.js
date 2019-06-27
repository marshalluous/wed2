let url = require('url');

let from = 0;
let to = 50;

module.exports = function(req, res) {
    let query = url.parse(req.url, true).query;
    if (query != null) {
        from = query.von != null ? parseInt(query.von) : 0;
        to = query.bis != null ? parseInt(query.bis) : 50;
    }
    let current = from;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    while (current !== to+1)
    {
        res.write(`${current++}` + ` `)
    }
    res.end();
};