# 🛍️ Product Management REST API

> A production-grade RESTful API built from scratch over 20+ days of active development. This project is actively being developed with new features added regularly.

---

## 📌 Project Status

🟢 **Active Development** — Started 20 days ago, committing daily.

| Phase | Status |
|-------|--------|
| MVC Architecture | ✅ Complete |
| Project Setup | ✅ Complete |
| Models (Product, Category, User) | ✅ Complete |
| Controllers | ✅ Complete |
| Routes with API Versioning | ✅ Complete |
| Input Validation | ✅ Complete |
| Custom Middleware (Logger, Auth) | ✅ Complete |
| Error Handling Middleware | ✅ Complete |
| File Uploads with Multer | ✅ Complete |
| Security (Helmet, CORS, Rate Limiting) | ✅ Complete |
| MongoDB + Mongoose Integration | ✅ Complete |
| JWT Authentication + bcrypt | ✅ Complete |
| Role Based Access Control | ✅ Complete |
| Reviews System | ✅ Complete |
| Payment Integration | ✅ Complete |
| Seeder File | ✅ Complete |
| Admin Dashboard | 🔄 In Progress |

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (jsonwebtoken) + bcrypt
- **File Uploads:** Multer
- **Security:** Helmet, CORS, express-rate-limit
- **Environment:** dotenv
- **Dev Tools:** nodemon

---

## 📁 Project Structure

```
product-api/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── category.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── product.model.js
│   │   ├── category.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── product.route.js
│   │   ├── category.route.js
│   │   └── user.route.js
│   ├── middleware/
│   │   ├── logger.js
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── config/
│   │   ├── db.js
│   │   └── multer.js
│   └── app.js
├── uploads/
├── .env.example
├── .gitignore
├── server.js
└── package.json
```

---

## 🔗 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/auth/signup | Register new user |
| POST | /api/v1/auth/login | Login and get JWT token |

### Product Routes
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/v1/products | Get all products | No |
| GET | /api/v1/products/:id | Get product by ID | No |
| POST | /api/v1/products | Create product | Yes |
| PUT | /api/v1/products/:id | Update product | Yes |
| DELETE | /api/v1/products/:id | Delete product | Yes |
| POST | /api/v1/products/:id/upload | Upload product image | Yes |

### Category Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/category | Get all categories |
| GET | /api/v1/category/:id | Get category by ID |
| POST | /api/v1/category | Create category |
| PUT | /api/v1/category/:id | Update category |
| DELETE | /api/v1/category/:id | Delete category |

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/users | Get all users |
| GET | /api/v1/users/:id | Get user by ID |
| PUT | /api/v1/users/:id | Update user |
| DELETE | /api/v1/users/:id | Delete user |

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/SatishRana8791/product-api.git

# Navigate to project folder
cd product-api

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Fill in your values in .env

# Run in development mode
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/product-api
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

---

## 🛡️ Security Features

- Passwords hashed with **bcrypt** before storing in database
- JWT tokens expire after 7 days
- **Helmet** sets secure HTTP headers
- **CORS** configured for cross-origin requests
- **Rate limiting** — max 100 requests per 15 minutes per IP
- Protected routes require valid JWT token

---

## 📅 Development Log

This project is being built day by day as part of a structured mentorship program learning backend development from scratch.

- **Week 1** — MVC architecture, project setup, models
- **Week 2** — Controllers, routes, input validation, middleware
- **Week 3** — Error handling, file uploads, security, MongoDB integration
- **Week 4** — JWT authentication, role-based access control (in progress)
- **Coming up** — Reviews, payments, admin dashboard

---

## 👨‍💻 Author

**Satish Rana**
- GitHub: [@SatishRana8791](https://github.com/SatishRana8791)

---

> ⭐ This project is actively maintained and updated daily.
