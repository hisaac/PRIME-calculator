var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// routes
var index = require('./routes/index');
var calculate = require ('./routes/calculate.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/calculate', calculate);
app.use('/', index);

app.listen(port);
console.log("Listening on port: ", port);
