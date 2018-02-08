var express = require('express');
var authRouter = express.Router();

var router = (nav, client) => {
  var authController = require('../controllers/authController')
  (null, nav, client);
  authRouter.route('/signUp').post(authController.signUp);
  authRouter.route('/signIn').post(authController.signIn);
  authRouter.route('/profile').get(authController.profile);

  return authRouter;
};

module.exports = router;
