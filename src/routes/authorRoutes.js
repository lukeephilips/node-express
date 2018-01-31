var express = require('express');
var authorRouter = express.Router();

var router = (nav, client) => {
  authorRouter.route('/')
    .get(function(req, res) {
      res.render('index', {
        title: 'authors',
        nav,
      });
    });
  return authorRouter;
};

module.exports = router;
