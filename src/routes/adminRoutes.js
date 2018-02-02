// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

var express = require('express');
var adminRouter = express.Router();
var colors = require('colors');
var { MongoClient } = require('mongodb');

const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

var books = require('../../database');

var router = (nav, client) => {
  adminRouter.route('/addTags')
    .get((req, res) => {
      var sqlValues = client.query(
        `SELECT book.*, author.name AS author FROM
        book, author WHERE author.id = book.author_id;`, (error, result) => {

        var url = 'mongodb://localhost:27017';
        var dbName = 'libraryapp';
        MongoClient.connect(url, (err, client) => {
          if (err) {
            console.log(err);
          } else if (client) {
            console.log(colors.green('CONNECTED'));
          };

          var db = client.db(dbName);
          var collection = db.collection('tags');

          findBook = (mongoVal) => {
            return result.rows.find((sqlVal) => {
              return mongoVal.title === sqlVal.title;
            });
          };
          var bookTags = books.map(function(b) {
            var obj = Object.assign({}, findBook(b), {tags: b.tags});
            return obj;
          });
          console.log(bookTags, 'ZZZZZZZZZZZZ');
          collection.insertMany(bookTags, (err, results) => {
            res.send(results);
          });
        });
      });
    });

  adminRouter.route('/addBooks')
    .get((req, res) => {
      client.connect();
      console.log('connected');
      function queryDb(book) {
        console.log('SQL', book.title);
        client.query(
          `INSERT INTO book (title, author_id, read)
          VALUES ('${book.title}', '${book.author_id}', '${book.read}')`
        , (err, res) => {
          console.log(err ? err.stack : res.rows[0]);
        });
      };
      books.forEach((book, i) => {
        queryDb(book);
        console.log('querying', book.title);
      });
    });

  adminRouter.route('/addAuthors')
    .get((req, res) => {
      client.connect();
      console.log('connected');
      function queryDb(author) {
        console.log('SQL', author);
        client.query(`INSERT INTO author (name)
        VALUES ('${author}')`, (err, res) => {
          console.log(err ? err.stack : res.rows[0]);
        });
      };
      function removeDuplicatesBy(keyFn, array) {
        var mySet = new Set();
        return array.filter(function(x) {
          var key = keyFn(x);
          var isNew = !mySet.has(key);
          if (isNew) {mySet.add(key);};
          return isNew;
        });
      }
      var uniqueAuthors = removeDuplicatesBy(x => x.author, books);
      console.log(uniqueAuthors);
      uniqueAuthors.forEach((book, i) => {
        queryDb(book.author);
        console.log('querying', uniqueAuthors.author);
      });

    });
  return adminRouter;
};

module.exports = router;
