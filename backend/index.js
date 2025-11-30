require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { OrdersModel } = require("./model/OrdersModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { UserModel } = require("./model/UserModel");
const { authenticateToken } = require("./middleware/auth");



const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';
const DASHBOARD_URL = process.env.DASHBOARD_URL || 'http://localhost:3000';

const app = express();
const path = require('path');

// CORS configuration
app.use(cors({
  origin: [FRONTEND_URL, DASHBOARD_URL],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());


// app.get('/addHoldings', async (req, res)=> {
//         let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//     tempHoldings.forEach((item) => {
//             let newHolding = new HoldingsModel({
//       name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day
//             });
//             newHolding.save();
//     });

//     res.send("Done!!!");

// })


// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//     console.log("Positions added");
//   });

//   res.send("Done!!!");
// });




// Authentication Routes
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = new UserModel({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
});

// Verify token endpoint
app.get('/verify-token', authenticateToken, async (req, res) => {
  try {
    res.json({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Token verification failed'
    });
  }
});

//We'll create an endpoint api which will be connect with database. it will fetch the data from database to use and then that data will be connected to dashboard. In dashboard we will use hooks to fetch the data.

// Protected Routes - Require Authentication
app.get('/allHoldings', authenticateToken, async (req, res)=> {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});


app.get('/allPositions', authenticateToken, async (req, res)=> {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/allOrders', authenticateToken, async (req, res)=> {
    const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.json(allOrders);
});

// Check available quantity for a specific stock
app.get('/checkHoldings/:stockName', authenticateToken, async (req, res) => {
  try {
    const stockName = req.params.stockName;
    console.log(`Checking holdings for: ${stockName}`);
    
    const holding = await HoldingsModel.findOne({ name: stockName });
    
    if (holding) {
      res.json({ 
        success: true, 
        quantity: holding.qty,
        stock: stockName,
        message: `Found ${holding.qty} shares of ${stockName}`
      });
    } else {
      res.json({ 
        success: true, 
        quantity: 0,
        stock: stockName,
        message: `No holdings found for ${stockName}`
      });
    }
  } catch (error) {
    console.error("Error checking holdings:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error checking holdings",
      error: error.message 
    });
  }
});

app.post('/newOrder', authenticateToken, async (req, res)=> {
  try {
    console.log("Received order data:", req.body);
    
    const { name, qty, price, mode } = req.body;
    
    // Validate sell orders - check if user has enough quantity
    if (mode === "SELL") {
      const holding = await HoldingsModel.findOne({ name: name });
      
      if (!holding) {
        return res.status(400).json({
          success: false,
          message: `No holdings found for ${name}. Cannot sell shares you don't own.`
        });
      }
      
      if (parseInt(qty) > parseInt(holding.qty)) {
        return res.status(400).json({
          success: false,
          message: `Insufficient quantity! You only have ${holding.qty} shares of ${name}, but trying to sell ${qty} shares.`
        });
      }
      
      console.log(`Sell order validated: ${qty} shares of ${name} (available: ${holding.qty})`);
    }
    
    let newOrder = new OrdersModel({
      name: name,
      qty: qty,
      price: price,   
      mode: mode
    });
    
    const savedOrder = await newOrder.save();
    console.log("Order saved to database:", savedOrder);
    
    // Update holdings based on order
    const numericQty = parseInt(qty);
    if (mode === "BUY") {
      const holding = await HoldingsModel.findOne({ name: name });
      if (!holding) {
        await new HoldingsModel({ name: name, qty: numericQty, avg: price, price: price, net: "0%", day: "0%" }).save();
      } else {
        // Simple qty increment; average price recalculation (basic)
        const newQty = (parseInt(holding.qty) || 0) + numericQty;
        const oldInvestment = (parseFloat(holding.avg) || 0) * (parseInt(holding.qty) || 0);
        const newInvestment = oldInvestment + (parseFloat(price) || 0) * numericQty;
        const newAvg = newQty > 0 ? newInvestment / newQty : holding.avg;
        holding.qty = newQty;
        holding.avg = newAvg;
        await holding.save();
      }
    } else if (mode === "SELL") {
      const holding = await HoldingsModel.findOne({ name: name });
      if (holding) {
        holding.qty = (parseInt(holding.qty) || 0) - numericQty;
        if (holding.qty < 0) holding.qty = 0;
        await holding.save();
      }
    }
    
    res.json({ 
      success: true, 
      message: `${mode} order saved successfully!`,
      order: savedOrder 
    });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to save order",
      error: error.message 
    });
  }
})

// Serve static files from the React frontend app in production
if (process.env.NODE_ENV === 'production') {
  const frontendBuildPath = path.join(__dirname, '../frontend/build');
  
  // Serve static files from the React frontend app
  app.use(express.static(frontendBuildPath));
  
  // Handle React routing, return all requests to React app
  // Use a more specific route pattern to avoid the path-to-regexp error
  app.get(/^[^.]*$/, (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
  });
}

// Connect to MongoDB and start the server
if (!MONGO_URI) {
  console.error("MONGO_URL environment variable is not set!");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Frontend URL: ${FRONTEND_URL}`);
      console.log(`Dashboard URL: ${DASHBOARD_URL}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
