const express = require('express');

const app = express();
const path = require('path');

// route handlers go in here
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});


app.listen(3000);
