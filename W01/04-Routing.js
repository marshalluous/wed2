const http = require('http');
const fs = require('fs');
const handleNumbers = require('./03-NumberCounter');
const port = 8080;

function handleFile(req,res){
    let date = new Date();
    let path = `03-Routing-Date-File.txt`;
    fs.writeFile(path, date, function(){
        fs.readFile(path, function(err,content){
            if (err)
                return console.error(err);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`${content}`);
        })
    });
};

function sendFile(res, fileName, contentType) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            throw err;
        }
        res.writeHeader(200, {"Content-Type": contentType});
        res.write(data);
        res.end();
    });
}

http.createServer((req, res) => {
    if(req.url.indexOf('/numbers') === 0)  // begins with '/numbers'
        handleNumbers(req,res);
    else if (req.url === "/file")
        handleFile(req, res);
    else if (req.url === "/ToSendHtml.html")
        sendFile(res, "ToSendHtml.html", "text/html");
    else if (req.url === "/ToSendJavaScript.js")
        sendFile(res, "ToSendJavaScript.js", "text/plain");
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('You requested ' + req.url);
    }
})
.listen(port)
.on('error', (e) => {console.error(`Got error: ${e.message}`)})

console.log(`Server running at http://localhost:${port}`);