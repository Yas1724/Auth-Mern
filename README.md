# 🔐 Auth-MERN

A **complete, production-ready authentication system** built with the MERN stack (MongoDB, Express.js, React, Node.js). This project provides a robust, secure, and scalable authentication foundation that you can plug into any full-stack application — covering everything from user registration and email verification to JWT-based session management and password recovery.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Running the App](#-running-the-app)
- [API Endpoints](#-api-endpoints)
- [Authentication Flow](#-authentication-flow)
- [Security Practices](#-security-practices)
- [Contributing](#-contributing)

---

## 🌐 Overview

Auth-MERN is a full-stack authentication boilerplate that removes the friction of setting up auth from scratch. Whether you're building a SaaS product, a personal project, or learning how modern authentication works, this repo has you covered with:

- A **React frontend** for login, signup, email verification, and password reset UI
- A **Node.js/Express backend** exposing a REST API secured with JWT cookies
- A **MongoDB database** (via Mongoose) to persist user data and tokens
- **Email integration** via [Resend](https://resend.com) for verification and password reset emails

---

## ✨ Features

| Feature | Description |
|---|---|
| 📝 **User Registration** | Sign up with name, email, and password |
| 📧 **Email Verification** | Verify account via a time-limited token sent to the user's email |
| 🔑 **Login / Logout** | Secure session management with HTTP-only JWT cookies |
| 🔒 **JWT Authentication** | Stateless auth using signed JSON Web Tokens |
| 🛡️ **Protected Routes** | Middleware to guard backend endpoints and frontend pages |
| 🔁 **Password Reset** | Request a reset link via email; update password securely |
| 🧹 **Input Validation** | Server-side validation with descriptive error responses |
| 🔐 **Password Hashing** | Passwords stored as salted bcrypt hashes — never plain text |
| 🍪 **HTTP-only Cookies** | JWTs stored in HTTP-only cookies to prevent XSS attacks |

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for REST API routing |
| **MongoDB** | NoSQL database for storing user documents |
| **Mongoose** | ODM (Object Data Modeling) for MongoDB |
| **jsonwebtoken** | JWT creation and verification |
| **bcryptjs** | Password hashing and comparison |
| **Resend** | Transactional email delivery (verification & reset) |
| **cookie-parser** | Parsing and setting HTTP cookies |
| **crypto** | Secure random token generation (built-in Node module) |
| **dotenv** | Loading environment variables from `.env` file |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library |
| **React Router** | Client-side routing and navigation |
| **Axios / Fetch** | HTTP requests to the backend API |
| **Tailwind CSS / CSS** | Styling and responsive layout |

---

## 📁 Project Structure

```
Auth-Mern/
│
├── backend/                      # Express.js REST API
│   ├── controllers/
│   │   └── auth.controller.js    # Business logic for all auth routes
│   ├── db/
│   │   └── connectDB.js          # MongoDB connection setup
│   ├── mailtrap/
│   │   ├── emails.js             # Email sending functions (Resend)
│   │   └── emailTemplates.js     # HTML email templates
│   ├── middleware/
│   │   └── verifyToken.js        # JWT verification middleware
│   ├── models/
│   │   └── user.model.js         # Mongoose User schema & model
│   ├── routes/
│   │   └── auth.route.js         # Route definitions → controller mapping
│   ├── utils/
│   │   └── generateTokenAndSetCookie.js  # JWT generation helper
│   └── index.js                  # App entry point, Express config
│
├── frontend/                     # React SPA
│   ├── public/
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Login, Signup, VerifyEmail, ResetPassword pages
│   │   ├── store/                # State management (Zustand / Context)
│   │   ├── App.jsx               # Root component with routing
│   │   └── main.jsx              # React entry point
│   └── index.html
│
├── package.json                  # Root scripts (concurrent dev server)
└── README.md
```

---

## 📋 Prerequisites

Before getting started, make sure the following are installed and available:

- **Node.js** v18 or higher — [Download](https://nodejs.org)
- **npm** v9+ (comes with Node.js)
- **MongoDB** — local instance or a [MongoDB Atlas](https://cloud.mongodb.com) cluster
- **Resend account** — for sending emails ([resend.com](https://resend.com)); free tier available
- **Git** — for cloning the repository

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Yas1724/Auth-Mern.git
cd Auth-Mern
```

### 2. Install root dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

---

## 🔧 Environment Variables

Create a `.env` file inside the `backend/` directory and populate it with the following:

```env
# ── Server ──────────────────────────────────────────
PORT=5000

# ── Database ────────────────────────────────────────
# Use your local MongoDB URI or a MongoDB Atlas connection string
MONGODB_URI=mongodb://127.0.0.1:27017/auth-mern

# ── JWT ─────────────────────────────────────────────
# Use a long, random, secret string — never commit this
JWT_SECRET=your_super_secret_jwt_key_here

# ── Email (Resend) ───────────────────────────────────
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_resend_api_key_here

# ── Client URL ───────────────────────────────────────
# Used to build the password-reset link in emails
CLIENT_URL=http://localhost:5173
```

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

---

## ▶️ Running the App

### Development (frontend + backend concurrently)

From the project root:

```bash
npm run dev
```

This uses `concurrently` to start both servers at once:
- **Backend** → `http://localhost:5000`
- **Frontend** → `http://localhost:5173`

### Run backend only

```bash
cd backend
npm run dev
```

### Run frontend only

```bash
cd frontend
npm run dev
```

---

## 📡 API Endpoints

All routes are prefixed with `/api/auth`.

| Method | Endpoint | Auth Required | Description |
|--------|----------|:---:|---|
| `POST` | `/signup` | ❌ | Register a new user; triggers verification email |
| `POST` | `/login` | ❌ | Authenticate user; sets JWT cookie |
| `POST` | `/logout` | ❌ | Clear the JWT cookie and end session |
| `POST` | `/verify-email` | ❌ | Verify email using the 6-digit OTP token |
| `POST` | `/forgot-password` | ❌ | Send a password reset link to the user's email |
| `POST` | `/reset-password/:token` | ❌ | Reset password using the token from the email link |
| `GET`  | `/check-auth` | ✅ | Validate the current session; returns user data |

### Example Requests

**Register a new user**
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "SecurePassword123!"
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "jane@example.com",
  "password": "SecurePassword123!"
}
```

**Verify Email**
```http
POST /api/auth/verify-email
Content-Type: application/json

{
  "code": "482931"
}
```

**Request Password Reset**
```http
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "jane@example.com"
}
```

**Reset Password**
```http
POST /api/auth/reset-password/abc123tokenxyz
Content-Type: application/json

{
  "password": "NewSecurePassword456!"
}
```

---

## 🔄 Authentication Flow

```
┌─────────────┐         ┌────────────────┐        ┌──────────────┐
│   Frontend  │         │  Express API   │        │   MongoDB    │
└──────┬──────┘         └───────┬────────┘        └──────┬───────┘
       │                        │                         │
       │  POST /signup          │                         │
       │───────────────────────►│                         │
       │                        │  Hash password          │
       │                        │  Save user + token      │
       │                        │────────────────────────►│
       │                        │  Send verification email│
       │◄───────────────────────│ (200 OK)                │
       │                        │                         │
       │  POST /verify-email    │                         │
       │───────────────────────►│                         │
       │                        │  Validate OTP token     │
       │                        │  Mark user as verified  │
       │◄───────────────────────│ (200 OK, JWT Cookie)    │
       │                        │                         │
       │  GET /check-auth       │                         │
       │  (with cookie)         │                         │
       │───────────────────────►│                         │
       │                        │  verifyToken middleware │
       │◄───────────────────────│ (200 OK, user object)   │
       │                        │                         │
```

---

## 🔐 Security Practices

This project follows modern security best practices:

- **HTTP-only cookies** — JWTs are never accessible to JavaScript, protecting against XSS attacks.
- **bcrypt hashing** — Passwords are salted and hashed before being stored; plain-text passwords never touch the database.
- **Token expiry** — Email verification tokens and password reset tokens are time-limited to reduce exposure windows.
- **Input validation** — All incoming request bodies are validated server-side before processing.
- **Environment variables** — All secrets (JWT key, DB URI, API keys) are loaded from `.env` and never hardcoded.
- **CORS configuration** — Configured to only allow requests from the known client origin.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against `main`

Please make sure your code follows the existing style and that all features are tested before submitting.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Yas1724](https://github.com/Yas1724)
