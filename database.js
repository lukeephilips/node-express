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
books.forEach((book, i) => {
  queryDb(book.title, book.genre, book.read);
});
