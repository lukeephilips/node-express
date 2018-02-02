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
  bookRouter.route('/').get((req, res) => {
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

          var combined = mongoResults.map((r) => {
            return Object.assign({}, findBook(r.title), r);
          });
          res.render('books', {
            title: 'all the books',
            nav,
            books: combined
          });
        });
      });
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
          console.log(db);
          // var mongoItem = db.collection.find({});
        //   var booksArray = mongoCollection.find().toArray((err, mongoResults) => {
        //     findBook = (mongoVal) => {
        //       return result.rows.find((sqlVal) => {
        //         return mongoVal === sqlVal.title;
        //       });
        //     };
        //
        //     var combined = mongoResults.map((r) => {
        //       return Object.assign({}, findBook(r.title), r);
        //     });
        //     res.render('book', {
        //       title: 'all the books',
        //       nav,
        //       books: combined
        //     });
        //   });
        });

        req.book = result.rows[0];
        next();
      }
    });
  }).get((req, res) => {
    res.render('book', {nav, book: req.book});
  });
  return bookRouter;
};

module.exports = router;
