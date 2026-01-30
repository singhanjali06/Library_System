"use client";

import { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  available: boolean;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Atomic Habits", author: "James Clear", category: "Self Help", available: true },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", available: false },
    { id: 3, title: "Deep Work", author: "Cal Newport", category: "Self Help", available: true }
  ]);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [category, setCategory] = useState("");
const [available, setAvailable] = useState(true);

const addBook = () => {
  if (!title || !author || !category) return;

  const newBook: Book = {
    id: books.length + 1,
    title,
    author,
    category,
    available
  };

  setBooks([...books, newBook]);

  // Clear form
  setTitle("");
  setAuthor("");
  setCategory("");
  setAvailable(true);
};


  return (
    <div className="p-6 max-w-3xl mx-auto">
    <div style={{ padding: "15px" }}>
      <h1>Library System</h1>

      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 p-2 w-full mb-4 rounded"
      />
      <p>{filteredBooks.length} books found</p>
      <hr style={{ margin: "20px 0" }} />

    <h2>Add a new book</h2>
<div className="mt-6 mb-6">
  <h2 className="text-lg font-semibold mb-2">Add a new book</h2>
  <div className="flex flex-wrap gap-2 mb-2">
    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded flex-1" />
    <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 rounded flex-1" />
    <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded flex-1" />
    <label className="flex items-center gap-1">
      <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      Available
    </label>
    <button onClick={addBook} className="bg-red-400 text-white px-4 py-2 rounded hover:bg-orange-600">Add Book</button>
  </div>
</div>

  <ul>
    {filteredBooks.map(book => (
    <li key={book.id} className="border p-4 mb-2 rounded shadow-sm">
    <strong>{book.title}</strong> by {book.author} [{book.category}] 
    <span className={book.available ? "text-green-300" : "text-red-300"}>
      {book.available ? "(Available)" : "(Not Available)"}
    </span>
   </li>
    ))}
  </ul>
    </div>
    </div>
  );
}
