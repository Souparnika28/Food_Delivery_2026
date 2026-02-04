# 🍔 Food Delivery App

A simple food delivery application built with React, Node.js, Express, and MongoDB.

## 📋 Features

- User registration and login
- Browse restaurants by cuisine
- View restaurant menus
- Add items to cart
- Place orders
- View order history

## 🛠️ Technologies Used

### Frontend
- React 19
- React Router
- Vite

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup MongoDB
- Install MongoDB locally OR use MongoDB Atlas (cloud)
- Update `.env` file with your MongoDB connection string

### 3. Add Sample Data (Optional)
```bash
npm run seed
```

### 4. Start Backend Server
```bash
npm start
```

### 5. Start Frontend (New Terminal)
```bash
npm run dev
```

### 6. Open Browser
Visit: http://localhost:5173

## 📖 Detailed Setup Guide

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for complete setup instructions for beginners.

## 📂 Project Structure

```
Food_Delivery-master/
│
├── backend/
│   ├── config/
│   │   └── database.js         # MongoDB connection
│   ├── models/
│   │   ├── User.js             # User schema
│   │   ├── Order.js            # Order schema
│   │   ├── Restaurant.js       # Restaurant schema
│   │   └── MenuItem.js         # MenuItem schema
│   ├── server.js/
│   │   └── server.js           # Main server file
│   └── seedData.js             # Sample data script
│
├── src/                        # React frontend
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── Restaurant.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── OrderSuccess.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── .env                        # Environment variables
├── .env.example                # Environment template
├── package.json                # Dependencies
├── vite.config.js              # Vite config
└── README.md                   # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/signup` - Register new user
- `POST /api/login` - Login user

### Orders (Protected)
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get specific order

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/food_delivery
PORT=4000
JWT_SECRET=your_secret_key_here
```

## 📝 NPM Scripts

- `npm run dev` - Start frontend development server
- `npm start` - Start backend server
- `npm run server` - Start backend server
- `npm run seed` - Add sample data to database
- `npm run build` - Build frontend for production

## 🎯 Usage

1. Register a new account
2. Login with your credentials
3. Browse restaurants
4. Add items to your cart
5. Place an order
6. View your order history

## 🤝 For Beginners

This project is beginner-friendly! Here's what you'll learn:

- How to connect Node.js with MongoDB
- Creating REST APIs with Express
- User authentication with JWT
- React state management with Context
- React Router for navigation
- Frontend-Backend integration

## 📚 Learning Resources

- [MongoDB Tutorial](https://www.mongodb.com/docs/)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)

## 🐛 Troubleshooting

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for common issues and solutions.

## 📄 License

ISC

## 👨‍💻 Original Repository

https://github.com/Souparnika28/Food_Delivery

---

Made with ❤️ for learning purposes
