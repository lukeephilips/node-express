var express = require('express');
var adminRouter = express.Router();
var colors = require('colors');
var { MongoClient } = require('mongodb');

var books = require('../../database');

var router = (nav) => {
  adminRouter.route('/addBooks')
    .get((req, res) => {
      var url = 'mongodb://localhost:27017';
      var dbName = 'libraryapp';
      MongoClient.connect(url, (err, client) => {
        if (err) {
          console.log(err);
        } else if (client) {
          console.log(colors.green('CONNECTED'));
        };

        var db = client.db(dbName);
        var collection = db.collection('books');
        collection.insertMany(books, (err, results) => {
          res.send(results);
          db.close();
        });
      });
    });
  return adminRouter;
};

module.exports = router;
