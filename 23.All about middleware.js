// 23.How does Middleware Work and Creating Custom Middleware

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());

// app.use((req, res, next) => {
//     console.log(req.url, req.method);  //  --> /  GET
//     next();
// });

// app.use('/example', (req, res, next) => {
//     console.log(req.url, req.method);  
//     next();
// });

app.use((req, res, next) => {
    req.banana = 'banana';  
    next();
});

app.get('/', (req, res) => {
    console.log(req.banana);  // banana
    res.send('Middleware');
});

app.listen(3000);
 