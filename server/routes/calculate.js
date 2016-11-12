var express = require('express');
var router = express.Router();
var path = require('path');

// modules
var add = require('../modules/add')
var subtract = require('../modules/subtract')
var multiply = require('../modules/multiply')
var divide = require('../modules/divide')

var answer = {};

router.post('/add', function(req, res){
  answer.value = add(req.body.firstValue, req.body.secondValue);
  res.sendStatus(201);
});

router.post('/subtract', function(req, res){
  answer.value = subtract(req.body.firstValue, req.body.secondValue);
  res.sendStatus(201);
});

router.post('/multiply', function(req, res){
  answer.value = multiply(req.body.firstValue, req.body.secondValue);
  res.sendStatus(201);
});

router.post('/divide', function(req, res){
  answer.value = divide(req.body.firstValue, req.body.secondValue);
  res.sendStatus(201);
});

router.get('/', function(req, res){
  res.send(answer);
});

module.exports = router;
