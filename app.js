var express = require('express');
var colors = require('colors');

var app = express();
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
