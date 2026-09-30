# 🛍️ quickBasket — Full Stack E-Commerce App

> A production-grade full-stack e-commerce application built from scratch. Features a complete REST API backend and a React frontend with payments, auth, admin dashboard, and more.

🌐 **Live Demo:** [https://quickbasket-vert.vercel.app](https://quickbasket-vert.vercel.app)  
⚙️ **API:** [https://quickbasket-lafj.onrender.com](https://quickbasket-lafj.onrender.com)

---

## 📌 Project Status

🟢 **Fully Complete & Live**

| Phase | Status |
|-------|--------|
| Backend REST API | ✅ Complete |
| JWT Authentication & RBAC | ✅ Complete |
| Razorpay Payment Integration | ✅ Complete |
| Admin Dashboard | ✅ Complete |
| React Frontend | ✅ Complete |

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, React Router |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB |
| Auth | JWT + bcrypt |
| Payments | Razorpay |
| File Upload | Multer |
| Security | Helmet, CORS, Rate Limiting |

---

## 🧠 Why This Stack?

Every technology in this project was chosen with a specific reason:

| Technology | Why I chose it |
|------------|---------------|
| **Node.js + Express** | Lightweight, fast, and industry-standard for building REST APIs. Express gives full control over routing and middleware |
| **MongoDB + Mongoose** | Flexible schema design is perfect for e-commerce products that have varying attributes. Mongoose adds structure with models and validation |
| **JWT Authentication** | Stateless authentication — no need to store sessions on the server. Scales easily and works well with REST APIs |
| **bcrypt** | Industry standard for hashing passwords. Even if the database is compromised, passwords remain secure |
| **RBAC (Role Based Access Control)** | Different users (admin vs customer) need different permissions. RBAC keeps routes protected without duplicating logic |
| **Razorpay** | India's leading payment gateway — supports UPI, cards, net banking. Real-world integration that recruiters rarely see in portfolios |
| **Multer** | Handles file uploads (product images) directly in Node.js without needing a third-party service |
| **Helmet** | Sets secure HTTP headers with one line — protects against common web vulnerabilities like XSS, clickjacking |
| **CORS** | Controls which frontend domains can access the API — essential for separating frontend and backend deployments |
| **Rate Limiting** | Prevents brute force attacks and API abuse by limiting requests per IP |
| **React + Vite** | Fast development experience with HMR. React's component model keeps the UI maintainable |
| **Tailwind CSS** | Utility-first CSS — builds consistent UI faster without writing custom CSS files |
| **React Router** | Declarative routing for multi-page feel in a single page app — handles protected routes cleanly |

## 📁 Project Structure

```
quickBasket/
├── backend/        # Node.js + Express REST API
├── frontend/       # React + Vite frontend
├── .gitignore
└── README.md
```

👉 See [backend/README.md](./backend/README.md) for full backend documentation  
👉 See [frontend/README.md](./frontend/README.md) for full frontend documentation

---

## ⚙️ Quick Start

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in your values
npm run dev
```
Runs on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`

---

## 👨‍💻 Author

**Satish Rana**
- GitHub: [@SatishRana8791](https://github.com/SatishRana8791)

---

> ⭐ This project is actively maintained and updated regularly.