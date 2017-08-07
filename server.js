var express = require('express');
var jsonSample = require('./Data/sample.json')

var app = express();
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get('/sample', function(req, res) {
    jsonSample['patent-document']['-title'] = 'Method of packaging articles';
    setTimeout(function() {
        res.send(jsonSample);
    }, 3000);
});
app.listen(3001);
console.log('API Server Listening on port 3001...');