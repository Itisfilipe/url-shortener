'use strict';

var linkHandler = require(process.cwd() +
                          '/app/controllers/linkHandler.server.js');

module.exports = function(app, db) {
  var linkHandler = new linkHandler();

  app.route('/')
      .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/new/:link').post(linkHandler.addClick);
  app.route('/:shortPath').get(linkHandler.addClick);
};
