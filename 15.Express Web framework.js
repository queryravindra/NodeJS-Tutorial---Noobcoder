// 15.Getting started with Express Web Framework

/**
 * npm init --yes (skipping all configurations i.e., yes)
 */

 const express = require('express');
 const app = express();
 
 app.get('/', (req, res) => {
     res.send("Hello Wolrd!");
 });
 
 app.listen(3000);

// --------------------------------------------------------
 
// 16.Working with Express Http GET Requests,Route Params and Query Strings
 app.get('/example', (req, res) => {
     res.send("hitting example route");
 });
 
 app.get('/example/:name/:age', (req, res) => {
     // /example/Ravindra/22
     console.log(req.params);  // { name: 'Ravindra', age: '22' }
     // res.send("example with route params");
     res.send(req.params.name + " : " + req.params.age);
 
     console.log(req.query);  // {}
     // /example/:name/:age?tutorial=paramstutorial    --> single query string
     console.log(req.query);  // { tutorial: 'paramstutorial' }
     // /example/:name/:age?tutorial=paramstutorial&sort=byage    --> multiple query strings
     console.log(req.query);  // { tutorial: 'paramstutorial', sort: 'byage' }
 });
 
 app.listen(3000);
 
 
 
 