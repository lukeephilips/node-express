var express = require('express');
var bookRouter = express.Router();

var colors = require('colors');
var {
  MongoClient,
  ObjectId
} = require('mongodb');

var router = (nav) => {
  bookRouter.route('/').get((req, res) => {

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
      collection.find().toArray((err, results) => {
        console.log(results[0]);
        res.render('books', {
          title: 'all the books from mongo',
          nav,
          books: results
        });
      });
    });
  });

  bookRouter.route('/:id').get((req, res) => {
    var id = new ObjectId(req.params.id);

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
      collection.findOne({
        _id: id
      }, (err, results) => {
        res.render('book', {nav, book: results});
      });
    });
  });

  return bookRouter;
};

module.exports = router;
