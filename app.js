var express = require('express');
var colors = require('colors');
var app = express();

const connectionString = 'postgres://localhost:5432/books';
const { Client } = require('pg');
var client = new Client(connectionString);
client.connect();

// const Sequelize = require('sequelize');
// const client = new Sequelize(connectionString);

var port = process.env.PORT;

var nav = [{
  link: '/books',
  text: 'Books'
}, {
  link: '/authors',
  text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav, client);
var authorRouter = require('./src/routes/authorRoutes')(nav, client);

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

// module.exports = client;
