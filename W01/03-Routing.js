const http = require('http');
const fs = require('fs');
const handleNumbers = require('./03-NumberCounter');

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


http.createServer((req, res) => {
    if(req.url.indexOf('/numbers') === 0)  // begins with '/numbers'
        handleNumbers(req,res);
    if (req.url === "/file")
        handleFile(req, res);
})
    .listen(8080)
    .on('error', (e) => {console.error(`Got error: ${e.message}`)})