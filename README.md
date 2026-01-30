# Library Management System – Backend

This is the backend for a Library Management System, developed as part of my technical assignment for the Software Development Engineer (SDE) role. It provides REST APIs for managing books and users, with JWT authentication and role-based access control.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- bcryptjs

## 🔐 Features

- User Registration & Login
- JWT-based Authentication
- Role-based Access Control (Admin / User)
- Admin-only APIs to create and update books
- MongoDB Atlas integration
- Centralized middleware for authentication and authorization

---

## 📘 Book Schema

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self Help",
  "available": true
}