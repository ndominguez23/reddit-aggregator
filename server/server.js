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

// route handlers go in here
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/api/signup', userController.createUser, (req, res) => res.sendStatus(200));
app.post('/api/login', userController.loginUser, (req, res) => res.json(res.locals.subreddits));
app.post('/api/addSub', userController.updateUserSubs, (req, res) => res.json(res.locals.subreddits));


app.listen(3000);
