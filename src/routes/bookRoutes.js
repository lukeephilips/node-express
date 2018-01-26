var express = require('express');
var bookRouter = express.Router();

var router = (nav) => {
  var books = [
    {
      title: 'Hop on Pop',
      author: 'Dr. Seuss',
      genre: 'childrens',
      read: false,
      id: 0
    }, {
      title: 'Cat in the Hat',
      author: 'Dr. Seuss',
      genre: 'childrens',
      read: true,
      id: 0
    },
    {
      title: 'Game of Thrones',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    }, {
      title: 'A Feast for Crows',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'The Andromeda Strain',
      author: 'Michael Crichton',
      genre: 'sci-fi',
      read: true,
      id: 0
    },
    {
      title: 'The Winds of Winter',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'A Dance with Dragons',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'A Clash of Kings',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'A Storm of Swords',
      author: 'George RR Martin',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'The Hobbit',
      author: 'JR Tolkien',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'Fellowship of the Rings',
      author: 'JR Tolkien',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'The Two Towers',
      author: 'JR Tolkien',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'Return of the King',
      author: 'JR Tolkien',
      genre: 'fantasy',
      read: true,
      id: 0
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
      genre: 'sci-fi',
      read: true,
      id: 0
    },
    {
      title: 'Sphere',
      author: 'Michael Crichton',
      genre: 'sci-fi',
      read: true,
      id: 0
    },
    {
      title: 'Congo',
      author: 'Michael Crichton',
      genre: 'sci-fi',
      read: true,
      id: 0
    },
    {
      title: 'The Lorax',
      author: 'Dr. Seuss',
      genre: 'childrens',
      read: true,
      id: 0
    }
  ];
  books.forEach((book, i) => book.id = i);
  bookRouter.route('/')
    .get((req, res) => {
      res.render('books', {
        title: 'all the books',
        nav,
        books: books
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
