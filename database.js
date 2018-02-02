// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

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

var books = [
  {
    title: 'Hop on Pop',
    author_id: 1,
    read: false,
    tags: ['childrens', 'early-reader']
  }, {
    title: 'Cat in the Hat',
    author_id: 1,
    read: true,
    tags: ['childrens', 'early-reader']
  },
  {
    title: 'Game of Thrones',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  }, {
    title: 'A Feast for Crows',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  },
  {
    title: 'The Andromeda Strain',
    author_id: 3,
    read: true,
    tags: ['sci-fi']
  },
  {
    title: 'The Winds of Winter',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  },
  {
    title: 'A Dance with Dragons',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  },
  {
    title: 'A Clash of Kings',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  },
  {
    title: 'A Storm of Swords',
    author_id: 2,
    read: true,
    tags: ['fantasy']
  },
  {
    title: 'The Hobbit',
    author_id: 4,
    read: true,
    tags: ['childrens','fantasy']
  },
  {
    title: 'Fellowship of the Rings',
    author_id: 4,
    read: true,
    tags: ['childrens','fantasy']
  },
  {
    title: 'The Two Towers',
    author_id: 4,
    read: true,
    tags: ['childrens','fantasy']
  },
  {
    title: 'Return of the King',
    author_id: 4,
    read: true,
    tags: ['childrens','fantasy']
  },
  {
    title: 'Jurassic Park',
    author_id: 3,
    read: true,
    tags: ['sci-fi','paleontology']
  },
  {
    title: 'Sphere',
    author_id: 3,
    read: true,
    tags: ['sci-fi', 'oceanography']
  },
  {
    title: 'Congo',
    author_id: 3,
    read: true,
    tags: ['sci-fi', 'primatology']
  },
  {
    title: 'The Lorax',
    author_id: 1,
    read: true,
    tags: ['childrens', 'early-reader']
  }
];

module.exports = books;
