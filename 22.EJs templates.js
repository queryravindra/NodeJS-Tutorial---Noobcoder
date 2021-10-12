// 22.Getting Started With EJS Templates With Express

const express = require('express');
const path = require('path');
const app = express();

// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(express.static('static'));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index')
// });

app.get('/:userQuery', (req, res) => {
    res.render('index', {data: {
                                    userQuery : req.params.userQuery, 
                                    searchResults : ['book1', 'book2', 'book3'],
                                    loggedIn : true,
                                    username : 'Ravindra'
                                }
                        }
                );
});


app.listen(3000);