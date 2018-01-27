var express = require('express');
var colors = require('colors');
var app = express();

// var sql = require('mssql');
// const config = {
//   user: 'luke',
//   password: null,
//   server: 'localhost:5432', // You can use 'localhost\\instance' to connect to named instance
//   database: 'books',
// };
//
// sql.connect(config, function(err) {
//   console.log(err);
// });

const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/books';
const client = new Client(connectionString);

var port = process.env.PORT;

var nav = [{
  link: '/books',
  text: 'Books'
}, {
  link: '/authors',
  text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/authors', authorRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hobo Library',
    nav
  });
});

app.listen(port, (err) => {
  console.log(colors.rainbow('running server on ' + port));
});
