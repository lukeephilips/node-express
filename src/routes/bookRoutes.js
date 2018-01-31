var express = require('express');
var bookRouter = express.Router();

var colors = require('colors');
// var {
//   MongoClient,
//   ObjectId
// } = require('mongodb');

var router = (nav, client) => {
  bookRouter.route('/')
    .get((req, res) => {
      var dbValues = client.query(`SELECT book.*, author.name AS author FROM
        book, author WHERE author.id = book.author_id;`, (error, result) => {
        res.render('books', {
          title: 'all the books',
          nav,
          books: result.rows,
        });
      });
    });

  bookRouter.route('/:id')
    .all(function(req, res, next) {
      var id = req.params.id;

      var dbValues = client.query(`SELECT * FROM books
        WHERE id= ${id}`, (error, result) => {
        if (result.rows.length === 0) {
          res.status(404).send('Book not found');
        } else {
          req.book = result.rows[0];
          next();
        }
      });
    })
    .get((req, res) => {
      res.render('book', {
        nav,
        book: req.book,
      });
    });
  return bookRouter;
};

module.exports = router;
