const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const auth = require("../middleware/auth.js"); 

// get all books (public)
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get book by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST admin only
router.post("/", auth.verifyToken, auth.isAdmin, async (req, res) => {
  const { title, author, category, available } = req.body;
  const book = new Book({ title, author, category, available });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT admin only
router.put("/:id", auth.verifyToken, auth.isAdmin, async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
