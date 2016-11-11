//---------------------------------- SETUP -----------------------------------//

var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());






app.use('/', index);

app.listen(port);
console.log("Listening on port: ", port);
