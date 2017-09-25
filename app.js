var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('main');
});

app.get('/ch/:data', function(req, res) {
  res.render(req.params.data);
});

app.use(function(err,req,res,next) {
  res.render('404');
});

var port = process.env.PORT || 3000;
app.listen(3000, function() {
  console.log('Server Started');
});
