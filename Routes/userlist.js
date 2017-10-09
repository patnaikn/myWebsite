var express = require('express');

var userRoute = express.Router();

var mongoose = require('mongoose');

var db = 'mongodb://mongouser:mongouser@ds115035.mlab.com:15035/userdatastore';

mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true}, function(err){
  if(err){
    console.error("Error! "+err);
  }
});

// userRoute.get('/', function(req,res){
//
//   db.users.find(function(err,data){
//     if(err){
//       res.send(err);
//     }
//     //res.render('userlist.ejs', {users: data});
//
//     res.json(data);
//   });
//
// });

module.exports = userRoute;
