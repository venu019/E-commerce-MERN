const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require("./routes/admin/product-routes")
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductRouter = require("./routes/shop/product-routes")
const shopcartRouter = require("./routes/shop/cart-routes")
const shopAddressRouter = require("./routes/shop/address-routes")
const shopOrderRouter = require("./routes/shop/order-routes")
const shopSearchRouter = require("./routes/shop/search-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");


const uri = 'mongodb+srv://venu:venu@ecom.pokvm.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));



// Express app setup
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/admin/products',adminProductsRouter)
app.use("/api/admin/orders", adminOrderRouter);

app.use('/api/shop/products',shopProductRouter)
app.use('/api/shop/cart',shopcartRouter)
app.use('/api/shop/address',shopAddressRouter)
app.use('/api/shop/order',shopOrderRouter)
app.use("/api/shop/search", shopSearchRouter);

app.use("/api/common/feature", commonFeatureRouter);

// Start server
app.listen(PORT, (error) => {
  if (error) {
    console.error(`Failed to start server: ${error.message}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
