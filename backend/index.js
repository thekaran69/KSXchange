// require("dotenv").config();

// const express= require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");



// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const { Signup, Login } = require('./Controllers/AuthController');

// const app = express();

// // app.use(cors());
// // const allowedOrigins = [
// //     'https://ksxchange.vercel.app',
// //     'https://ksxchange-dashboard.vercel.app'
// // ];

// // app.use(cors({
// //     origin: (origin, callback) => {
// //         if (allowedOrigins.includes(origin) || !origin) {
// //             callback(null, true); // Allow requests from listed origins
// //         } else {
// //             callback(new Error('Not allowed by CORS')); // Block other origins
// //         }
// //     },
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
// //     credentials: true // If cookies or authorization headers are used
// // }));


// app.use(cors({
//   origin: 'https://ksxchange.vercel.app', // Allow your frontend
//   methods: ['GET', 'POST'], // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true // If using cookies or authorization
// }));

// app.use(bodyParser.json());


// // app.get("/addHoldings", async (req, res) => {
// //   let tempHoldings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "HINDUNILVR",
// //       qty: 1,
// //       avg: 2335.85,
// //       price: 2417.4,
// //       net: "+3.49%",
// //       day: "+0.21%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "ITC",
// //       qty: 5,
// //       avg: 202.0,
// //       price: 207.9,
// //       net: "+2.92%",
// //       day: "+0.80%",
// //     },
// //     {
// //       name: "KPITTECH",
// //       qty: 5,
// //       avg: 250.3,
// //       price: 266.45,
// //       net: "+6.45%",
// //       day: "+3.54%",
// //     },
// //     {
// //       name: "M&M",
// //       qty: 2,
// //       avg: 809.9,
// //       price: 779.8,
// //       net: "-3.72%",
// //       day: "-0.01%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "RELIANCE",
// //       qty: 1,
// //       avg: 2193.7,
// //       price: 2112.4,
// //       net: "-3.71%",
// //       day: "+1.44%",
// //     },
// //     {
// //       name: "SBIN",
// //       qty: 4,
// //       avg: 324.35,
// //       price: 430.2,
// //       net: "+32.63%",
// //       day: "-0.34%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "SGBMAY29",
// //       qty: 2,
// //       avg: 4727.0,
// //       price: 4719.0,
// //       net: "-0.17%",
// //       day: "+0.15%",
// //     },
// //     {
// //       name: "TATAPOWER",
// //       qty: 5,
// //       avg: 104.2,
// //       price: 124.15,
// //       net: "+19.15%",
// //       day: "-0.24%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "TCS",
// //       qty: 1,
// //       avg: 3041.7,
// //       price: 3194.8,
// //       net: "+5.03%",
// //       day: "-0.25%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "WIPRO",
// //       qty: 4,
// //       avg: 489.3,
// //       price: 577.75,
// //       net: "+18.08%",
// //       day: "+0.32%",
// //     },
// //   ];

// //   tempHoldings.forEach((item) => {
// //     let newHolding = new HoldingsModel({
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.day,
// //       day: item.day,
// //     });

// //     newHolding.save();
// //   });
// //   res.send("Done!");
// // });

// // app.get("/addPositions", async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //   ];

// //   tempPositions.forEach((item) => {
// //     let newPosition = new PositionsModel({
// //       product: item.product,
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //       isLoss: item.isLoss,
// //     });

// //     newPosition.save();
// //   });
// //   res.send("Done!");
// // });


// app.get("/allHoldings", async (req, res) => {
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// });


// app.get("/allPositions", async (req, res) => {
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// });


// app.post("/newOrder", async (req, res) => {
//     let newOrder = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//     });
  
//     newOrder.save();
  
//     res.send("Order saved!");
//   });


//   const path = require('path');
// app.use(express.static(path.join(__dirname, '../dashboard/build')));

// app.get('/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dashboard/build', 'index.html'));
// });

// app.get("/user", async (req, res) => {
//     try {
//         const user = await User.findOne(); // Adjust query as needed
//         res.json(user);
//     } catch (error) {
//         console.error('Error fetching user:', error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });

// app.post("/signup", Signup);
// app.post("/login", Login);
// // app.post('/login', (req, res) => {
// //     console.log('Login request received');
// //     const { email, password } = req.body;
// //     // Add your login logic here
// //     if (email === 'abhinandan@gmail.com' && password === '123456') {
// //       console.log('User exists');
// //       res.send('exist');
// //     } else {
// //       res.send('notexist');
// //     }
// //   });
  
// app.get("/", (req, res)=>{
//     res.send("hello from backend");
// })

// app.listen(PORT, () => {
//     console.log("App Started");
//     mongoose.connect(uri);
//     console.log("DB Connect");
    
// });


require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { Signup, Login } = require("./Controllers/AuthController");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// CORS Setup
const allowedOrigins = [
  "https://ksxchange.vercel.app",
  "https://ksxchange-dashboard.vercel.app",
];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Connection Error:", err));

// Routes
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).send("Error fetching holdings.");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).send("Error saving order.");
  }
});

app.post("/signup", Signup);
app.post("/login", Login);

// Static Files
app.use(express.static(path.join(__dirname, "../dashboard/build")));
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../dashboard/build", "index.html"));
});

// Default Route
app.get("/", (req, res) => res.send("Hello from backend"));

// Start Server
app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));


    