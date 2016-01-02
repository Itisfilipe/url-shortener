'use strict';

require('dotenv').load();
var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/url_shortener_fcc');

//app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(5000, function() {
  console.log('Node.js listening on port 5000...');
});
