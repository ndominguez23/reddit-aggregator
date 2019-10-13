const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
require('dotenv').config();

const app = express();

// Sending requests as JSON objects but
// keeping the urlencoded body parser to test with postman
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route handlers
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.post('/api/signup', userController.createUser, (req, res) => res.sendStatus(200));
app.post('/api/login', userController.login, (req, res) => res.json(res.locals.subreddits));
app.post('/api/addsub', userController.updateUserSubs, (req, res) => res.json(res.locals.subreddits));

// 404 handler
app.use('/*', (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Uncaught middleware error',
    status: 500,
    message: { err: 'Something went wrong' },
  };
  const errObj = { ...defaultErr, ...err };
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
