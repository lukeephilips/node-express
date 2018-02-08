var passport = require('passport');
var colors = require('colors');
var LocalStrategy = require('passport-local').Strategy;

module.exports = (client) => {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  (username, password, done) => {
    console.log('local');
    var sqlPassword = client.query(
      `SELECT * FROM lib_user
      WHERE username = '${username}'`, (error, result) => {
        if (result.rows[0] && result.rows[0].password === password) {
          var user = result.rows[0];
          done(null, user);
        } else {
          done(null, false, {message: 'Bad password'});
        }
      }
    );

  }));
};
