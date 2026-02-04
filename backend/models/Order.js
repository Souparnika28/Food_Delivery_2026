// Order Model - Stores customer orders
const mongoose = require('mongoose');

// Define the structure of an Order
const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true     // User who placed the order
  },
  items: [{
    id: Number,
    name: String,
    price: Number,
    quantity: Number
  }],
  total: {
    type: Number,
    required: true     // Total amount of the order
  },
  status: {
    type: String,
    default: 'pending', // Order status: pending, completed, cancelled
    enum: ['pending', 'completed', 'cancelled']
  },
  createdAt: {
    type: Date,
    default: Date.now   // When the order was placed
  }
});

// Create and export the Order model
module.exports = mongoose.model('Order', orderSchema);
