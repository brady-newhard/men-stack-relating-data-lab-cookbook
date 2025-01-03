const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    image: String
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: {
    type: [foodSchema],
    required: true,
 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


