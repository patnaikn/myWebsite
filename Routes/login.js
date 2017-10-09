var express = require('express');

var loginRoute = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mongodb://mongouser:mongouser@ds115035.mlab.com:15035/userdatastore');

loginRoute.get('/login', function(req,res){

  res.render('index.html');

});

module.exports = loginRoute;
