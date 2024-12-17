const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const authRouter = require('./routes/auth/auth-routes');
const route = require("./routes/auth/auth-routes");

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
app.use('/api/auth',route)

// Start server
app.listen(PORT, (error) => {
  if (error) {
    console.error(`Failed to start server: ${error.message}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
