// 24.Working With the Express Router

// create a new folder called routes

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(express.static('static'));
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people);

app.listen(3000);