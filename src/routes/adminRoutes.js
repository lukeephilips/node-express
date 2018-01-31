var express = require('express');
var adminRouter = express.Router();
var colors = require('colors');
var { MongoClient } = require('mongodb');

const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

var books = require('../../database');

var router = (nav) => {
  adminRouter.route('/addBooks')
    .get((req, res) => {
      var url = 'mongodb://localhost:27017';
      var dbName = 'libraryapp';
      MongoClient.connect(url, (err, client) => {
        if (err) {
          console.log(err);
        } else if (client) {
          console.log(colors.green('CONNECTED'));
        };

        var db = client.db(dbName);
        var collection = db.collection('books');
        collection.insertMany(books, (err, results) => {
          res.send(results);
          db.close();
        });
      });
    });
  adminRouter.route('/addAuthor')
    .get((req, res) => {
      client.connect();
      console.log('connected');
      function queryDb(author) {
        console.log('SQL', author);
        client.query(`INSERT INTO authors (name)
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
      uniqueAuthors.forEach((book, i) => {
        queryDb(book.author);
        console.log('querying', uniqueAuthors.author);
      });

    });
  return adminRouter;
};

module.exports = router;
