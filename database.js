<<<<<<< HEAD
// const { Client } = require('pg');
// const connectionString = 'postgres://localhost:5432/books';
// const client = new Client(connectionString);
//
// client.connect();
//
// function queryDb(title, genre, read) {
//   client.query(`INSERT INTO books (title, genre, read)
//   VALUES ('${title}', '${genre}', ${read})`, (err, res) => {
//     console.log(err ? err.stack : res.rows[0]);
//   });
// };
=======
const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

client.connect();

function queryDb(title, genre, read) {
  client.query(`INSERT INTO books (title, genre, read)
  VALUES ('${title}', '${genre}', ${read})`, (err, res) => {
    console.log(err ? err.stack : res.rows[0]);
  });
};
>>>>>>> sql

var books = [
  {
    title: 'Hop on Pop',
    author: 'Dr. Seuss',
    genre: 'childrens',
<<<<<<< HEAD
    read: false
=======
    read: false,
    id: 0
>>>>>>> sql
  }, {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
    genre: 'childrens',
<<<<<<< HEAD
    read: true
=======
    read: true,
    id: 0
>>>>>>> sql
  },
  {
    title: 'Game of Thrones',
    author: 'George RR Martin',
    genre: 'fantasy',
<<<<<<< HEAD
    read: true
=======
    read: true,
    id: 0
>>>>>>> sql
  }, {
    title: 'A Feast for Crows',
    author: 'George RR Martin',
    genre: 'fantasy',
<<<<<<< HEAD
    read: true
=======
    read: true,
    id: 0
>>>>>>> sql
  },
  {
    title: 'The Andromeda Strain',
    author: 'Michael Crichton',
    genre: 'sci-fi',
    read: true
  },
  {
    title: 'The Winds of Winter',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'A Dance with Dragons',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'A Clash of Kings',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'A Storm of Swords',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'The Hobbit',
    author: 'JR Tolkien',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'Fellowship of the Rings',
    author: 'JR Tolkien',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'The Two Towers',
    author: 'JR Tolkien',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'Return of the King',
    author: 'JR Tolkien',
    genre: 'fantasy',
    read: true
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    genre: 'sci-fi',
    read: true
  },
  {
    title: 'Sphere',
    author: 'Michael Crichton',
    genre: 'sci-fi',
    read: true
  },
  {
    title: 'Congo',
    author: 'Michael Crichton',
    genre: 'sci-fi',
    read: true
  },
  {
    title: 'The Lorax',
    author: 'Dr. Seuss',
    genre: 'childrens',
    read: true
  }
];
// books.forEach((book, i) => {
//   // queryDb(book.title, book.genre, book.read);
// });

module.exports = books;
