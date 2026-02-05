// Simple MongoDB Connection Configuration
const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from .env file
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
