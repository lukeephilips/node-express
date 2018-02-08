var express = require('express');
var authorRouter = express.Router();

var router = (nav, client) => {
  var authorController = require('../controllers/authorController')
  (null, nav, client);

  authorRouter.route('/')
  .get(authorController.getIndex);

  authorRouter.route('/:id')
  .get(authorController.getById);
  return authorRouter;
};

module.exports = router;
