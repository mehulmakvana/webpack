var path = require('path');
var express = require('express');
var connect = require("connect");


var app = express();

app.use(express.static(path.join(__dirname, 'assets')));

var app = connect.createServer().use(connect.static(__dirname + '/dist'));

app.set('port', process.env.PORT || 8080);



var server = app.listen(app.get('port'), function() {
  console.log('http://localhost:',server.address().port);
});