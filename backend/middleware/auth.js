const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const auth = {};

auth.verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
     if (next) next(); 
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

auth.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access required." });
  if (next) next(); 
};


module.exports = auth;
