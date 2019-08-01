const mongoose = require('mongoose');
const { Schema } = mongoose;
// Use the global promise objects to avoid deprecation warnings
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/reddit_aggregator',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
      console.log('Connected');
    },
    (err) => {
      console.log('Connection Error');
  });

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subreddits: [{
    name: String,
    url: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
