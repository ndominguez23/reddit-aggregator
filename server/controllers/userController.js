const User = require('../data/db');

const userController = {};

// userController.createUser = (req, res, next) => {};
userController.createUser = (req, res, next) => {
  console.log(JSON.stringify(req.body));
  console.log('creating user');
  const { username } = req.body;
  const { password } = req.body;
  console.log(`username is ${username}`);
  User.create({
    username,
    password,
    subreddits: [{ name: undefined, url: undefined }],
  }, (err, user) => {
    if (err) return next(err);

    res.locals.subreddit = user.subreddit[0];
    console.log('user successfully created');
    return next();
  });
};

userController.loginUser = (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  User.findOne({ username, password }, (err, user) => {
    if (user.username) {
      console.log(user);
      if (user.subreddits.length > 0) {
        res.locals.name = user.username;
      }
      // only get the first subreddit; contains name and url
      console.log('user has logged in');
    }
    return next();
  });
};

module.exports = userController;
