const User = require('../data/db');

const userController = {};

userController.updateUserSubs = (req, res, next) => {
  if (req.body.username && req.body.subName) {
    const url = `https://www.reddit.com/${req.body.subName}/`;

    let newSubList = req.body.subList.map((sub) => ({ name: sub.name, url: sub.url }));
    newSubList = [...newSubList, { name: req.body.subName, url }];
    console.log(`new sublist ${JSON.stringify(newSubList)}`);
    User.findOneAndUpdate({ username: req.body.username }, { subreddits: newSubList },
      (err, user) => {
        if (user !== null) {
          res.locals.subreddits = newSubList;
          console.log(res.locals.subreddits);
        } else {
          return next({
            log: 'User not found, could not update subscriptions',
            message: {
              err: 'Could not update subscriptions',
            },
          });
        }
      });
  }
  return next();
};

userController.createUser = (req, res, next) => {
  console.log('creating user...');
  if (!(req.body.username && req.body.password)) {
    res.locals.errCode = 403; // this indicates a missing login credential
    return next();
  }
  const { username } = req.body;
  const { password } = req.body;
  User.create({
    username,
    password,
  }, (err, user) => {
    if (err) {
      res.locals.errCode = err.code; // duplicates will return an error code of 11000
    } else res.locals.user = user;

    return next();
  });
};

userController.login = async (req, res, next) => {
  console.log('logging in...');
  if (!(req.body.username && req.body.password)) {
    return next({
      log: 'Missing username or password',
      message: {
        err: 'Invalid login credentials',
      },
    });
  }
  const { username, password } = req.body;
  const user = User.findOne({ username, password });
  console.log(user);
};

module.exports = userController;
