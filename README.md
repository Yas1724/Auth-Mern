# 🔐 MERN Authentication Backend

A complete, production-ready authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This backend handles user registration, email verification, login, password reset, and protected routes with JWT authentication.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

---

## ✨ Features

- ✅ **User Signup** with email verification
- ✅ **Login/Logout** functionality
- ✅ **Email Verification** using Resend
- ✅ **Password Reset** via email
- ✅ **JWT Authentication** with HTTP-only cookies
- ✅ **Protected Routes** middleware
- ✅ **Input Validation** and error handling
- ✅ **Security** best practices (bcrypt, HTTP-only cookies)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express** | Web framework |
| **MongoDB + Mongoose** | Database & ODM |
| **JWT (jsonwebtoken)** | Authentication |
| **Bcryptjs** | Password hashing |
| **Resend** | Email service |
| **Cookie-parser** | Cookie management |
| **Crypto** | Token generation |

---

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Resend API key (from [resend.com](https://resend.com))
- Git (optional)

---

## 🚀 Installation & Setup

### 1. Clone the repository
  git clone https://github.com/yourusername/mern-auth-backend.git
  cd mern-auth-backend

### 2. Install dependencies
  cd backend
  npm install

### 3. Environment Variables
  # Server
    PORT=3000
  # Database
    MONGODB_URI=mongodb://127.0.0.1:27017/your-database-name
  # JWT
    JWT_SECRET=your_super_secret_jwt_key_here
  # Resend
    RESEND_API_KEY=re_your_resend_api_key_here
# Client URL (for password reset links)
    CLIENT_URL=http://localhost:3000

### 4. Start the server
  npm run dev

## 📡 API Endpoints
<img width="962" height="524" alt="image" src="https://github.com/user-attachments/assets/ccb6bf80-4469-46d8-a1c2-cfce86c41b9f" />

## 📝 API Usage Examples
<img width="955" height="339" alt="image" src="https://github.com/user-attachments/assets/5f32816e-74e0-4a44-949a-61e85a8952da" />
<img width="961" height="304" alt="image" src="https://github.com/user-attachments/assets/9c9873c6-8b1e-4a83-bb91-d9d101be3a0d" />
<img width="962" height="284" alt="image" src="https://github.com/user-attachments/assets/3eea76ca-995e-4e85-9f8a-76bc707ee74f" />
<img width="954" height="265" alt="image" src="https://github.com/user-attachments/assets/dd19ef6b-d098-401d-baf9-ca7dafa819bf" />
<img width="991" height="286" alt="image" src="https://github.com/user-attachments/assets/19a95bfd-28c7-4b5e-aaa0-8ff8ad9d3e10" />

## 📁 Project Structure
<img width="531" height="534" alt="image" src="https://github.com/user-attachments/assets/7467f6d2-4be4-4fd9-addd-67b48009bfea" />












  
