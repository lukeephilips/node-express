
var authorController = (authorService, nav, client) => {
  var getIndex = (req, res) => {
    var dbValues = client.query(`SELECT author.name FROM
    author;`, (error, result) => {
      res.render('authors', {
        title: 'all the authors',
        nav,
        authors: result.rows
      });
    });
  };

  var getById = (req, res) => {
    var id = req.params.id;

    var dbValues = client.query(
      `SELECT book.*, author.name AS author from book, author
      where author.id = ${id} AND book.author_id= ${id}`,
      (error, result) => {
      if (result.rows.length === 0) {
        res.status(404).send('Author not found');
      } else {
        res.render('author',
        {nav, author: result.rows[0].author, books: result.rows});
      }
    });
  };

  return {
    getIndex,
    getById
  };
};

module.exports = authorController;
