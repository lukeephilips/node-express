var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var app = express();
var session = require('express-session');

const connectionString = 'postgres://localhost:5432/books';
const { Client } = require('pg');
var client = new Client(connectionString);
client.connect();

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
var genreRouter = require('./src/routes/genreRoutes')(nav, client);
var adminRouter = require('./src/routes/adminRoutes')(nav, client);
var authRouter = require('./src/routes/authRoutes')(nav, client);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session(
  {secret: 'library'
}));
require('./src/config/passport')(app, client);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/genre', genreRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome',
    nav
  });
});

app.listen(port, (err) => {
  console.log(colors.rainbow('running server on ' + port));
});

module.exports = client;
