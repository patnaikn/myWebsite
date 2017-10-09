const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  Name: String,
  Email: String,
  Address: String
});

module.exports = mongoose.model('user',userSchema, 'users'); //users is the name of the collection in the mongo db



