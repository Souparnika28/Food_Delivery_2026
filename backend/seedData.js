// Simple script to add sample data to MongoDB
require("dotenv").config();
const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Connection failed:", err);
    process.exit(1);
  });

// Sample data
async function addSampleData() {
  try {
    // Clear existing data
    await Restaurant.deleteMany({});
    await MenuItem.deleteMany({});
    console.log("🗑️  Cleared old data");

    // Add Restaurants with complete details
    const restaurants = await Restaurant.insertMany([
      {
        name: "Spice Villa",
        cuisine: "Indian",
        description:
          "Authentic Indian cuisine with traditional spices and flavors",
        rating: 4.5,
        reviewCount: 350,
        deliveryTime: "25-30 min",
        deliveryFee: "Free",
        minOrder: 150,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        specialties: ["Biryani", "Curry", "Tandoori"],
        priceRange: "₹₹",
        isOpen: true,
        discount: "20% OFF",
      },
      {
        name: "Pizza Hub",
        cuisine: "Italian",
        description: "Wood-fired pizzas and authentic Italian pasta dishes",
        rating: 4.3,
        reviewCount: 280,
        deliveryTime: "20-25 min",
        deliveryFee: "₹30",
        minOrder: 200,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        specialties: ["Pizza", "Pasta", "Garlic Bread"],
        priceRange: "₹₹₹",
        isOpen: true,
        discount: "15% OFF",
      },
      {
        name: "Sushi World",
        cuisine: "Japanese",
        description:
          "Fresh sushi, sashimi, and traditional Japanese delicacies",
        rating: 4.7,
        reviewCount: 420,
        deliveryTime: "30-35 min",
        deliveryFee: "Free",
        minOrder: 300,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        specialties: ["Sushi", "Ramen", "Tempura"],
        priceRange: "₹₹₹₹",
        isOpen: true,
        discount: "10% OFF",
      },
      {
        name: "Burger Palace",
        cuisine: "American",
        description: "Juicy burgers, crispy fries, and thick milkshakes",
        rating: 4.4,
        reviewCount: 510,
        deliveryTime: "15-20 min",
        deliveryFee: "Free",
        minOrder: 100,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        specialties: ["Burgers", "Fries", "Shakes"],
        priceRange: "₹₹",
        isOpen: true,
        discount: "25% OFF",
      },
      {
        name: "Thai Garden",
        cuisine: "Thai",
        description: "Authentic Thai curries, noodles, and stir-fry dishes",
        rating: 4.6,
        reviewCount: 295,
        deliveryTime: "25-30 min",
        deliveryFee: "₹40",
        minOrder: 250,
        image:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        specialties: ["Pad Thai", "Green Curry", "Tom Yum"],
        priceRange: "₹₹₹",
        isOpen: true,
        discount: null,
      },
      {
        name: "Dragon Wok",
        cuisine: "Chinese",
        description: "Delicious Chinese dishes with authentic flavors",
        rating: 4.2,
        reviewCount: 380,
        deliveryTime: "20-25 min",
        deliveryFee: "Free",
        minOrder: 180,
        image:
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
        specialties: ["Fried Rice", "Noodles", "Manchurian"],
        priceRange: "₹₹",
        isOpen: true,
        discount: "30% OFF",
      },
      {
        name: "Taco Fiesta",
        cuisine: "Mexican",
        description: "Spicy tacos, burritos, and authentic Mexican cuisine",
        rating: 4.5,
        reviewCount: 215,
        deliveryTime: "20-25 min",
        deliveryFee: "₹35",
        minOrder: 150,
        image:
          "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        specialties: ["Tacos", "Burritos", "Nachos"],
        priceRange: "₹₹",
        isOpen: false,
        discount: "15% OFF",
      },
      {
        name: "Cafe Mocha",
        cuisine: "Cafe",
        description: "Premium coffee, pastries, and light snacks",
        rating: 4.8,
        reviewCount: 625,
        deliveryTime: "15-20 min",
        deliveryFee: "Free",
        minOrder: 100,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
        specialties: ["Coffee", "Cakes", "Sandwiches"],
        priceRange: "₹₹",
        isOpen: true,
        discount: null,
      },
      {
        name: "Mediterranean Delight",
        cuisine: "Mediterranean",
        description: "Fresh Mediterranean dishes with healthy ingredients",
        rating: 4.4,
        reviewCount: 180,
        deliveryTime: "30-35 min",
        deliveryFee: "₹45",
        minOrder: 280,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        specialties: ["Falafel", "Hummus", "Kebabs"],
        priceRange: "₹₹₹",
        isOpen: true,
        discount: null,
      },
    ]);

    console.log("✅ Added 9 restaurants");

    // Add Menu Items for each restaurant
    const menuItems = [];

    // Spice Villa menu
    menuItems.push(
      {
        restaurantId: restaurants[0]._id,
        name: "Paneer Butter Masala",
        price: 180,
        description: "Creamy tomato curry with cottage cheese",
        category: "Main Course",
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Chicken Biryani",
        price: 220,
        description: "Aromatic rice with tender chicken",
        category: "Main Course",
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Masala Dosa",
        price: 90,
        description: "Crispy rice crepe with spiced potato",
        category: "Breakfast",
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Tandoori Chicken",
        price: 250,
        description: "Clay oven roasted chicken",
        category: "Starters",
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Gulab Jamun",
        price: 60,
        description: "Sweet milk dumplings",
        category: "Desserts",
      },
    );

    // Pizza Hub menu
    menuItems.push(
      {
        restaurantId: restaurants[1]._id,
        name: "Margherita Pizza",
        price: 250,
        description: "Classic pizza with tomato and mozzarella",
        category: "Pizza",
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Pasta Alfredo",
        price: 200,
        description: "Creamy white sauce pasta",
        category: "Pasta",
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Bruschetta",
        price: 150,
        description: "Grilled bread with tomatoes",
        category: "Starters",
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Pepperoni Pizza",
        price: 300,
        description: "Pizza with pepperoni slices",
        category: "Pizza",
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Tiramisu",
        price: 180,
        description: "Italian coffee dessert",
        category: "Desserts",
      },
    );

    // Sushi World menu
    menuItems.push(
      {
        restaurantId: restaurants[2]._id,
        name: "California Roll",
        price: 300,
        description: "Crab and avocado sushi",
        category: "Sushi Rolls",
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Spicy Tuna Roll",
        price: 320,
        description: "Fresh tuna with spicy mayo",
        category: "Sushi Rolls",
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Miso Soup",
        price: 100,
        description: "Traditional Japanese soup",
        category: "Soups",
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Salmon Nigiri",
        price: 280,
        description: "Fresh salmon over rice",
        category: "Nigiri",
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Tempura",
        price: 250,
        description: "Battered and fried seafood",
        category: "Appetizers",
      },
    );

    // Burger Palace menu
    menuItems.push(
      {
        restaurantId: restaurants[3]._id,
        name: "Classic Burger",
        price: 150,
        description: "Beef patty with lettuce and tomato",
        category: "Burgers",
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Cheese Burger",
        price: 180,
        description: "Burger with melted cheese",
        category: "Burgers",
      },
      {
        restaurantId: restaurants[3]._id,
        name: "French Fries",
        price: 80,
        description: "Crispy golden fries",
        category: "Sides",
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Chocolate Shake",
        price: 120,
        description: "Thick chocolate milkshake",
        category: "Drinks",
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Chicken Wings",
        price: 200,
        description: "Spicy chicken wings",
        category: "Starters",
      },
    );

    // Thai Garden menu
    menuItems.push(
      {
        restaurantId: restaurants[4]._id,
        name: "Pad Thai",
        price: 220,
        description: "Stir-fried rice noodles with peanuts",
        category: "Noodles",
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Green Curry",
        price: 240,
        description: "Spicy coconut curry with vegetables",
        category: "Curry",
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Tom Yum Soup",
        price: 150,
        description: "Hot and sour Thai soup",
        category: "Soups",
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Mango Sticky Rice",
        price: 120,
        description: "Sweet coconut rice with mango",
        category: "Desserts",
      },
      {
        restaurantId: restaurants[4]._id,
        name: "Spring Rolls",
        price: 100,
        description: "Fresh vegetable spring rolls",
        category: "Appetizers",
      },
    );

    // Dragon Wok menu
    menuItems.push(
      {
        restaurantId: restaurants[5]._id,
        name: "Veg Fried Rice",
        price: 150,
        description: "Wok-tossed rice with vegetables",
        category: "Rice",
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Chicken Noodles",
        price: 180,
        description: "Stir-fried noodles with chicken",
        category: "Noodles",
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Veg Manchurian",
        price: 160,
        description: "Deep-fried veggie balls in sauce",
        category: "Main Course",
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Honey Chilli Potato",
        price: 140,
        description: "Crispy potatoes in sweet chili sauce",
        category: "Starters",
      },
      {
        restaurantId: restaurants[5]._id,
        name: "Hot and Sour Soup",
        price: 100,
        description: "Spicy and tangy vegetable soup",
        category: "Soups",
      },
    );

    // Taco Fiesta menu
    menuItems.push(
      {
        restaurantId: restaurants[6]._id,
        name: "Chicken Tacos",
        price: 180,
        description: "Soft tacos with grilled chicken",
        category: "Tacos",
      },
      {
        restaurantId: restaurants[6]._id,
        name: "Beef Burrito",
        price: 220,
        description: "Wrapped tortilla with beef and beans",
        category: "Burritos",
      },
      {
        restaurantId: restaurants[6]._id,
        name: "Nachos Supreme",
        price: 200,
        description: "Loaded nachos with cheese and salsa",
        category: "Appetizers",
      },
      {
        restaurantId: restaurants[6]._id,
        name: "Quesadilla",
        price: 190,
        description: "Grilled tortilla with cheese filling",
        category: "Main Course",
      },
      {
        restaurantId: restaurants[6]._id,
        name: "Churros",
        price: 100,
        description: "Fried dough with cinnamon sugar",
        category: "Desserts",
      },
    );

    // Cafe Mocha menu
    menuItems.push(
      {
        restaurantId: restaurants[7]._id,
        name: "Cappuccino",
        price: 120,
        description: "Espresso with steamed milk foam",
        category: "Coffee",
      },
      {
        restaurantId: restaurants[7]._id,
        name: "Chocolate Cake",
        price: 150,
        description: "Rich chocolate layer cake",
        category: "Cakes",
      },
      {
        restaurantId: restaurants[7]._id,
        name: "Club Sandwich",
        price: 180,
        description: "Triple-decker sandwich with chicken",
        category: "Sandwiches",
      },
      {
        restaurantId: restaurants[7]._id,
        name: "Blueberry Muffin",
        price: 90,
        description: "Freshly baked muffin with blueberries",
        category: "Pastries",
      },
      {
        restaurantId: restaurants[7]._id,
        name: "Iced Latte",
        price: 130,
        description: "Chilled espresso with milk",
        category: "Coffee",
      },
    );

    // Mediterranean Delight menu
    menuItems.push(
      {
        restaurantId: restaurants[8]._id,
        name: "Falafel Wrap",
        price: 200,
        description: "Crispy chickpea balls in pita bread",
        category: "Wraps",
      },
      {
        restaurantId: restaurants[8]._id,
        name: "Hummus Platter",
        price: 180,
        description: "Chickpea dip with pita bread",
        category: "Appetizers",
      },
      {
        restaurantId: restaurants[8]._id,
        name: "Chicken Kebab",
        price: 250,
        description: "Grilled chicken skewers with herbs",
        category: "Main Course",
      },
      {
        restaurantId: restaurants[8]._id,
        name: "Greek Salad",
        price: 160,
        description: "Fresh salad with feta cheese",
        category: "Salads",
      },
      {
        restaurantId: restaurants[8]._id,
        name: "Baklava",
        price: 120,
        description: "Sweet pastry with nuts and honey",
        category: "Desserts",
      },
    );

    await MenuItem.insertMany(menuItems);
    console.log(" Added menu items for all 9 restaurants");

    console.log(" Sample data added successfully!");
    console.log("");
    console.log("Restaurants added:");
    restaurants.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.name} (${r.cuisine}) - ${r.rating}`);
    });
  } catch (error) {
    console.error(" Error adding sample data:", error);
  } finally {
    await mongoose.connection.close();
    console.log(" Database connection closed");
  }
}

// Run the function
addSampleData();
