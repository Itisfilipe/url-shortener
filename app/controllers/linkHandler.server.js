'use strict';

var LinkModel = require('../models/links.js');
var Hashids = require('hashids');

var hashids = new Hashids('this is my t0p this is my t0p s3cr3t salta =p');

function testURL(url) {
  return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url);
}

function linkHandler() {
  this.getFullURL = function(req, res) {
    var shortHash = req.params.shortUrl;
    console.log(shortHash);
    LinkModel.findOne(
      {'shortUrl': shortHash},
      'originalURL',
      function(err, data) {

        if (err) {
          throw err;
        } else if (!data) {
          res.status(400).json({message: 'Url not found'});
        } else {
          res.redirect(data.originalURL);
        }
      });
  };
  this.addShortURL = function(req, res, next) {
    var link = req.url.slice(1);
    if (!link) {
      res.status(400).json({message: 'URL to be shortened is missing.'});
    } else if (!testURL(link)) {
      res.status(400).json({message: 'URL to be shortened is invalid.'});
    } else {
      var charMap = [];
      for (var i = 0; i < link.length; i++) {
        charMap.push(link.charCodeAt(i));
      }
      var hashPath = 'http://' + req.get('host') + '/' +
                      hashids.encode(parseInt(charMap.join('')));
      var linkData = LinkModel({
        originalURL: link,
        shortUrl: hashids.encode(parseInt(charMap.join('')))
      });
      linkData.save(function(err, data) {
        if (err) {
          if (err.code === 11000) {
            console.log(err);
            res.json({
              'originalURL': link,
              'shortUrl': hashPath
            });
          } else {
            res.json(err);
          }

        } else {
          res.json({
            'originalURL': link,
            'shortUrl': hashPath
          });
        }
      });
    }
  };
}

module.exports = linkHandler;
