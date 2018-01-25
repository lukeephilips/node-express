var express = require('express');
var colors = require('colors');

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
  res.send('ding dong');
});
app.get('/ding', function(req, res) {
  res.send('dong');
});

app.listen(port, function(err) {
  console.log(colors.rainbow('running server on ' + port));
});
