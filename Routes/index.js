var express = require('express');

var indexRoute = express.Router();

// Angular 2

indexRoute.get('/', function(req,res){

  res.render('index.html',App);

});

module.exports = indexRoute;
