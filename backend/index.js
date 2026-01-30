const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/config.env" });
console.log("MONGO_URI =", process.env.MONGO_URI);
const mongoose = require("mongoose");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routing
const bookRoute = require("./routes/bookRoute");
const authRoute= require("./routes/authRoute");

app.use("/api/books", bookRoute);
app.use("/api/auth", authRoute);



// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


// Test route
app.get("/", (req, res) => {
  res.send("Library System Backend is running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

