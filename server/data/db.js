const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config()
// Use the global promise objects to avoid deprecation warnings
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI,
  {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
      console.log('Connected');
    },
    (err) => {
      console.log('Connection Error: ', err);
  });

// const subRedditSchema = new Schema({
//   name: String,
//   url: String,
  
// });

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subreddits: [],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
