'use strict';

var LinkHandler = require(process.cwd() +
                          '/app/controllers/linkHandler.server.js');

module.exports = function(app) {
  var linkHandler = new LinkHandler();

  // creating short links with a middleware
  app.use('/new/', linkHandler.addShortURL);

  app.route('/')
      .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/:shortUrl').get(linkHandler.getFullURL);

};
