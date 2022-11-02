const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'https://glacial-inlet-73070.herokuapp.com/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
