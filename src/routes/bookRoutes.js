var express = require('express');
var bookRouter = express.Router();

var router = (nav, client) => {
  bookRouter.route('/')
    .get((req, res) => {
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

      var dbValues = client.query(`SELECT * FROM books
        WHERE id= ${id}`, (error, result) => {
        console.log(result.rows[0].title);
        res.render('book', {
          nav,
          book: result.rows[0],
        });
      });
    });

  return bookRouter;
};
module.exports = router;
