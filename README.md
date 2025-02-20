# Clothing Store API

This is a RESTful API for a clothing store, built using Node.js, Express, and MongoDB. It provides endpoints for managing products, users, and orders.

## Features
- User authentication (registration & login)
- CRUD operations for products
- Order management with authentication

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- dotenv for environment variable management

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/clothing-store-api.git
   cd clothing-store-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and set up your environment variables:
   ```sh
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`

## API Endpoints

### **Authentication**
- **Register a new user**: `POST /users/register`
- **Login**: `POST /users/login`

### **Products**
- **Get all products**: `GET /products`
- **Create a product (admin only)**: `POST /products`
- **Delete a product (admin only)**: `DELETE /products/:id`

### **Orders**
- **Get user orders (requires authentication)**: `GET /orders`
Users can only access their own orders.

## Authentication
The API uses JWT for authentication. Users must send a Bearer Token in the `Authorization` header when accessing protected routes.

Example:
```
Authorization: Bearer <your_token>
```

