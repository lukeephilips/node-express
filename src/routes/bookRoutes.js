var express = require('express');
var bookRouter = express.Router();
var colors = require('colors');

var router = (nav, client) => {
  var bookController = require('../controllers/bookController')
  (null, nav, client);

  bookRouter.route('/')
    .get(bookController.getIndex);

  bookRouter.route('/:id')
    .get(bookController.getById);

  return bookRouter;
};

module.exports = router;
