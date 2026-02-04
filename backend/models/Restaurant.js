// Restaurant Model - Stores restaurant information
const mongoose = require('mongoose');

// Define the structure of a Restaurant
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cuisine: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  deliveryTime: {
    type: String,
    default: '30-40 min'
  },
  deliveryFee: {
    type: String,
    default: 'Free'
  },
  minOrder: {
    type: Number,
    default: 100
  },
  image: {
    type: String,
    default: ''
  },
  specialties: [{
    type: String
  }],
  priceRange: {
    type: String,
    default: '₹₹'
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  discount: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Restaurant model
module.exports = mongoose.model('Restaurant', restaurantSchema);
