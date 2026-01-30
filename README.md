📚 Library System 

This is the backend for a Library Management System.
It provides REST APIs for managing books with JWT authentication and role-based access control.

🚀 Tech Stack

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT Authentication

bcryptjs


🔐 Features

User Registration & Login

JWT-based Authentication

Role-based Access (Admin / User)

Admin-only Book Create & Update APIs

MongoDB Atlas integration

Centralized middleware structure


📘 Book Schema
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self Help",
  "available": true
}

🧑‍💻 API Endpoints
🔑 Authentication

POST /api/auth/register – Register a new user

POST /api/auth/login – Login & receive JWT token


📚 Books

GET /api/books – Get all books (Public)

GET /api/books/:id – Get book by ID (Public)

POST /api/books – Add a book (Admin only)

PUT /api/books/:id – Update a book (Admin only)

Admin routes require JWT token in header:

Authorization: Bearer <token>


⚙️ Environment Variables

Create a config.env file in the backend root:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

▶️ Run Locally
npm install
node index.js


Server will run on:
http://localhost:5000

👤 Author
Anjali Singh