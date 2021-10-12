// 17.Serving Static files with Express

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(express.static('static'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/', (req, res) => {
    res.send("Hello Wolrd!");
});

app.listen(3000);