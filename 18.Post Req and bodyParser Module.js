// 18.Http POST Request With Express and Body Parser Module

/**
 * npm install body-parser
 */

 const express = require('express');
 const path = require('path');
 const bodyParser = require('body-parser');
 const app = express();
 
 // app.use('/public', express.static(path.join(__dirname, 'static')));
 app.use(express.static('static'));
 app.use(bodyParser.urlencoded({extended: false}));
 
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'static', 'index.html'));
 });
 
 app.post('/', (req, res) => {
     console.log(req.body);  // { email: 'queryravindra@gmail.com', password: '1234' }
     // database work here
     res.send("Successfully posted data");
 });
 
 app.listen(3000);
 
 