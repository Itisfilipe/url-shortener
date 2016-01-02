'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myLink = Schema({
  originalURL: {type: String, required: true, unique: true},
  shortPath: {type: String, unique: true}
});

module.exports = mongoose.model('Link', myLink);
