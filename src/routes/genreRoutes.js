var express = require('express');
var genreRouter = express.Router();
var colors = require('colors');

var url = 'mongodb://localhost:27017';
var dbName = 'libraryapp';
var {
  MongoClient,
  ObjectId
} = require('mongodb');

var router = (nav, client) => {
  // genreRouter.route('/').get((req, res, next) => {
  //   var dbValues = client.query(`SELECT book.*, author.name AS author FROM
  //       book, author WHERE author.id = book.author_id;`, (error, result) => {
  //
  //     MongoClient.connect(url, (err, client) => {
  //       if (err) {
  //         console.log('EROR', err);
  //       } else if (client) {
  //         console.log(colors.green('CONNECTED'));
  //       };
  //
  //       var db = client.db(dbName);
  //       var mongoCollection = db.collection('tags');
  //       var booksArray = mongoCollection.find().toArray((err, mongoResults) => {
  //         findBook = (mongoVal) => {
  //           return result.rows.find((sqlVal) => {
  //             return mongoVal === sqlVal.title;
  //           });
  //         };
  //
  //         req.books = mongoResults.map((r) => {
  //           return Object.assign({}, findBook(r.title), r);
  //         });
  //         next();
  //       });
  //     });
  //   });
  // }).get((req, res) => {
  //   res.render('books', {
  //     title: 'all the books',
  //     nav,
  //     books: req.books
  //   });
  // });

  genreRouter.route('/:genre_id').all(function(req, res, next) {
    var genre = req.params.genre;

    MongoClient.connect(url, (err, client) => {
      if (err) {
        console.log('EROR', err);
      } else if (client) {
        console.log(colors.green('CONNECTED'));
      };

      var db = client.db(dbName);
      var collection = db.collection('tags');
      var books = collection.find({'tags': genre});
      console.log(books);
      res.render('genre', {nav, books: books, genre: genre});
    });
  });
  return genreRouter;
};

module.exports = router;
