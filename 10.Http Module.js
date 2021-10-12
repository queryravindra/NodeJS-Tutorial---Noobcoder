// 10.Creating a Http Server using the Http Module

const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello world from nodejs');
    res.end();
});

// --------------------------------------------

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world from nodejs');
        res.end();
    } else {
        res.write('using some other domain');
        res.end();
    }
});

server.listen('3000');