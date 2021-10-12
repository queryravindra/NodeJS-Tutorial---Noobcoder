// 11.Serving Static Files with Http and File System Module(html, json, image)

const http = require('http');
const fs = require('fs');

// index.html
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./11.static/index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);

// example.json
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./11.static/index.html');
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
}).listen(3000);

// example.png
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./11.static/example.png');
    res.writeHead(200, {'Content-type': 'image/png'});
    readStream.pipe(res);
}).listen(3000);