var express = require('express');
var bookRouter = express.Router();

const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

var router = (nav) => {
  bookRouter.route('/')
    .get((req, res) => {
      console.log('ding');
      client.connect();

      var dbValues = client.query(`SELECT * FROM books`, (error, result) => {
        res.render('books', {
          title: 'all the books',
          nav,
          books: result.rows,
        });
      });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      var id = req.params.id;
      res.render('book', {
        title: books[id].title,
        nav,
        book: books[id]
      });
    });

  return bookRouter;
};
module.exports = router;
