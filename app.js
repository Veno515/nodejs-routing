var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Listen for Requests on Port 3000
app.listen(3000);

// Handling Get Requests
app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/profile/:name', function(req, res) {
  var data = {age: 26, job: 'developer'};
  res.render('profile', {person: req.params.name, data: data});
});

// Handle Non-existing Routes in express
app.get('/error', function(req, res) {
  res.render('error');
});
