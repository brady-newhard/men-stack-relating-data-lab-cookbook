const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  pantry: {
    type: [foodSchema],
    default: []
 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


