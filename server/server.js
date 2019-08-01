const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

// We're going to be sending our POST requests as forms, not json
app.use(bodyParser.urlencoded({ extended: true }));

// route handlers go in here
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/api/signup', userController.createUser, (req, res) => res.json(res.locals.name));
app.post('/api/login', userController.loginUser, (req, res) => res.json(res.locals.name));


app.listen(3000);
