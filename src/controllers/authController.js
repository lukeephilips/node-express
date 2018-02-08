var colors = require('colors');
var passport = require('passport');

var authController = (authService, nav, client) => {
  var signUp = (req, res) => {
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
        req.login(result.rows[0], () => {
          res.redirect('/auth/profile');
        });
      }
    );
  };
  var signIn = function(req, res) {
    console.log('ding');
    passport.authenticate('local', {
      failureRedirect: '/'
    }, (req, res) => {
      console.log('dong');
      if (err, reslt) {
        console.log('err');
        console.log(err);
      } else if (reslt) {
        console.log('reslt');
        console.log(reslt);
      }
      res.redirect('/auth/profile');
    });
  };

  var profile = (req, res) => {
    if (!req.user) {
      res.redirect('/');
    }
    res.render('profile', {
      nav,
      user: req.user
    });
  };

  return {
    signUp,
    signIn,
    profile
  };
};

module.exports = authController;
