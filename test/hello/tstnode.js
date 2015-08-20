var http    = require('http');
var express = require('express');
var path    = require('path');

var app = express();

app.use(express.static(path.join(__dirname, ".")));

// the server
var server = app.listen(parseInt(process.argv[2]), function() {
  console.log('ambado - %d', server.address().port);
});

