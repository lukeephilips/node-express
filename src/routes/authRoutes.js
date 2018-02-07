var express = require('express');
var colors = require('colors');
var passport = require('passport');

var authRouter = express.Router();

var router = (nav, client) => {
  authRouter.route('/signUp')
    .post((req, res) => {
      var newUser = client.query(
        `INSERT INTO lib_user (username, password)
         VALUES('${req.body.username}',
         '${req.body.password}')
         RETURNING *`, (error, result) => {

          if (error) {
            console.log(colors.red(error));
          } else if (result) {
            console.log(colors.green('SQL CALL'));
          }
          console.log(result.rows[0]);
          req.login(result.rows[0], () => {
            res.redirect('/auth/profile');
          });
        }
      );
    });
  authRouter.route('/signIn')
    .post(passport.authenticate('local', {
      failureRedirect: '/'
    }), (req, res) => {
      res.redirect('/auth/profile');
    });
  authRouter.route('/profile')
  .get((req, res) => {
    console.log(req.user);
    res.json(req.user);
  });
  return authRouter;
};

module.exports = router;
