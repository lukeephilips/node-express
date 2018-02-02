var express = require('express');
var bookRouter = express.Router();
var colors = require('colors');

var url = 'mongodb://localhost:27017';
var dbName = 'libraryapp';
var {
  MongoClient,
  ObjectId
} = require('mongodb');

var router = (nav, client) => {
  bookRouter.route('/').get((req, res, next) => {
    var dbValues = client.query(`SELECT book.*, author.name AS author FROM
        book, author WHERE author.id = book.author_id;`, (error, result) => {

      MongoClient.connect(url, (err, client) => {
        if (err) {
          console.log('EROR', err);
        } else if (client) {
          console.log(colors.green('CONNECTED'));
        };

        var db = client.db(dbName);
        var mongoCollection = db.collection('tags');
        var booksArray = mongoCollection.find().toArray((err, mongoResults) => {
          findBook = (mongoVal) => {
            return result.rows.find((sqlVal) => {
              return mongoVal === sqlVal.title;
            });
          };

          req.books = mongoResults.map((r) => {
            return Object.assign({}, findBook(r.title), r);
          });
          next();
        });
      });
    });
  }).get((req, res) => {
    res.render('books', {
      title: 'all the books',
      nav,
      books: req.books
    });
  });

  bookRouter.route('/:id').all(function(req, res, next) {
    var id = req.params.id;

    var dbValues = client.query(
      `SELECT book.*, author.name AS author from book, author
      where book.id = ${id} AND author.id = book.author_id`
      , (error, result) => {
      if (result.rows.length === 0) {
        res.status(404).send('Book not found');
      } else {

        MongoClient.connect(url, (err, client) => {
          if (err) {
            console.log('EROR', err);
          } else if (client) {
            console.log(colors.green('CONNECTED'));
          };

          var db = client.db(dbName);
          var collection = db.collection('tags');
          var mongoItem = collection.findOne({
            'title': result.rows[0].title
          }, (err, mongoResult) => {
            var test = Object.assign({}, result.rows[0], mongoResult);
            req.book = test;
            next();
          });
        });
      }
    });
  }).get((req, res) => {
    res.render('book', {nav, book: req.book});
  });
  return bookRouter;
};

module.exports = router;
