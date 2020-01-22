const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  email: String
})

module.exports = mongoose.model('User', userschema)