const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

client.connect();

function queryDb(author) {
  client.query(`INSERT INTO authors (name)
  VALUES ('${author}'`, (err, res) => {
    console.log(err ? err.stack : res.rows[0]);
  });
};

var books = [
  {
    title: 'Hop on Pop',
    author: 'Dr. Seuss',
    genre: 'childrens',
    read: false
  }, {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
    genre: 'childrens',
    read: true
  },
  {
    title: 'Game of Thrones',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
  }, {
    title: 'A Feast for Crows',
    author: 'George RR Martin',
    genre: 'fantasy',
    read: true
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
addAuthor = () => {
  books.forEach((book, i) => {
    queryDb(book.author);
  });
  client.close();
};

module.exports = books;
