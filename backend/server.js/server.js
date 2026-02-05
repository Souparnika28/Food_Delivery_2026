// Food Delivery Backend with MongoDB
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('../config/database');

// Import Models
const User = require('../models/User');
const Order = require('../models/Order');
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Connect to MongoDB Database
connectDB();

// ==================== Middleware ====================

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// ==================== Authentication Routes ====================

// Signup route - Create new user account
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    const newUser = new User({
      username,
      password: hashedPassword,
      email
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// Login route - Authenticate user and return JWT token
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create JWT token for authenticated user
    const accessToken = jwt.sign(
      { username: user.username, id: user._id },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      accessToken,
      username: user.username
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// ==================== Order Routes ====================

// Create new order (protected route - requires login)
app.post('/api/orders', authenticateToken, async (req, res) => {
  try {
    const { items, total } = req.body;

    // Create new order in database
    const newOrder = new Order({
      user: req.user.username,
      items,
      total,
      status: 'pending'
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});

// Get all orders for logged-in user (protected route)
app.get('/api/orders', authenticateToken, async (req, res) => {
  try {
    // Find all orders for this user
    const orders = await Order.find({ user: req.user.username })
      .sort({ createdAt: -1 }); // Sort by newest first

    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

// Get single order by ID (protected route)
app.get('/api/orders/:id', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Make sure user can only see their own orders
    if (order.user !== req.user.username) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ message: 'Failed to fetch order' });
  }
});

// ==================== Restaurant Routes ====================

// Get all restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ rating: -1 });
    res.json(restaurants);
  } catch (error) {
    console.error('Get restaurants error:', error);
    res.status(500).json({ message: 'Failed to fetch restaurants' });
  }
});

// Get single restaurant by ID
app.get('/api/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    console.error('Get restaurant error:', error);
    res.status(500).json({ message: 'Failed to fetch restaurant' });
  }
});

// Get menu items for a restaurant
app.get('/api/restaurants/:id/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ restaurantId: req.params.id });
    res.json(menuItems);
  } catch (error) {
    console.error('Get menu error:', error);
    res.status(500).json({ message: 'Failed to fetch menu items' });
  }
});

// ==================== Server Start ====================

// Only skip listening on Vercel serverless (not on Render or local)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Make sure MongoDB is running!`);
  });
}

// Export for Vercel serverless
module.exports = app;
