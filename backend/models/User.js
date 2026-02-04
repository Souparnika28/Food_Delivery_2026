
const mongoose = require('mongoose');

// Define the structure of a User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,    
    unique: true,    
    trim: true         
  },
  password: {
    type: String,
    required: true    
  },
  email: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now  
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
