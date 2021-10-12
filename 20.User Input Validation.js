// 20.User Input Validation With Express and JOI

// npm install joi

const express = require('express');
 const path = require('path');
 const Joi = require('joi');
 const bodyParser = require('body-parser');
const { errorMonitor } = require('events');
 const app = express();
 
 app.use(express.static('static'));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'static', 'index.html'));
 });
 
 app.post('/', (req, res) => {
     console.log(req.body);  

     const schema = Joi.object().keys({
         email: Joi.string().trim().email().required(),
         password: Joi.string().min(5).max(10).required()
     });

     Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('An error has occured');
        }
        console.log(result);  // { email: 'queryravindra@gmail.com', password: '123456' }
        res.send('successfully posted data');
     });

    // const { error } = schema.validate(req.body);
    // if (error) {
    //     console.log(error);
    //     res.send('An error has occured');
    //     res.json({ ErrorMessage: error.details[0].message });
    // } else {
    //     console.log(result);
    //     res.send('successfully posted data');
    //     res.json({ message: "valid data" });
    // }
 });
 
 app.listen(3000);
 