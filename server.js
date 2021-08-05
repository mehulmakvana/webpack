var path = require('path');
var express = require('express');
var fallback = require('express-history-api-fallback')


var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'assets')));

var root = __dirname + '/dist'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

app.set('port', process.env.PORT || 7000);



var server = app.listen(app.get('port'), function() {
  console.log('http://localhost:7000',server.address().port);
});