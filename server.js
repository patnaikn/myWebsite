var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

 var app = express();

var index = require('./Routes/index');
var logInPage = require('./Routes/login');
var usersListPage = require('./Routes/userlist');

var port = 8000;

//View Engine

app.set('views',path.join(__dirname, 'Views'));
app.set('view Engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set Static folder to put all the angular files

app.use(express.static(path.join(__dirname, 'dist')));

//set up Body Parser MiddleWare

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Routes

app.use('/',index);
app.use('/login',logInPage);
app.use('/users',usersListPage);

app.get('*',function(req,res){

  res.sendFile(path.join(__dirname,'dist/index.html'));

});

 app.listen(port, function(){

   console.log('Server Started listening on port '+port);

 });
