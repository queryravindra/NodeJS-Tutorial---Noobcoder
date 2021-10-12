// 19.Working with JSON Data with Express and the Body Parser Module

const express = require('express');
 const path = require('path');
 const bodyParser = require('body-parser');
 const app = express();
 
 // app.use('/public', express.static(path.join(__dirname, 'static')));
 app.use(express.static('static'));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'static', 'index.html'));
 });
 
 app.post('/', (req, res) => {
     console.log(req.body);  
    //  [
    //     { name: 'email', value: 'queryravindra14@gmail.com' },
    //     { name: 'password', value: '1234' }
    //   ]
    
     // some databse call here
     res.json({success : true});
 });
 
 app.listen(3000);
 