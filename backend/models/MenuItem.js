
const mongoose = require('mongoose');


const menuItemSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',  
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0              
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,       
    default: 'Main Course'
  },
  available: {
    type: Boolean,
    default: true       // Is this item available for order?
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the MenuItem model
module.exports = mongoose.model('MenuItem', menuItemSchema);
