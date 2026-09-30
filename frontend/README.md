# 🛍️ quickBasket — React Frontend

> The frontend of the quickBasket e-commerce platform, built with React 19 and Vite. Connected to the [product-api](https://github.com/SatishRana8791/product-api) backend.

---

## 📌 Project Status

🟢 **Frontend In Progress — Actively Being Built**

| Feature | Status |
|---------|--------|
| Project Setup (Vite + React) | ✅ Complete |
| Tailwind CSS Integration | ✅ Complete |
| React Router Setup | ✅ Complete |
| Axios API Configuration | ✅ Complete |
| Auth Context (JWT) | ✅ Complete |
| Navbar Component | ✅ Complete |
| Protected Routes | ✅ Complete |
| Home Page | ✅ Complete |
| Products Listing Page | ✅ Complete |
| Product Detail Page | ✅ Complete |
| Login Page | ✅ Complete |
| Signup Page | ✅ Complete |
| My Orders Page | ✅ Complete |
| Razorpay Payment Integration | ✅ Complete |
| Reviews (View, Write & Submit) | ✅ Complete |
| Admin Dashboard | ✅ Complete |
| Footer Component | ✅ Complete |

---

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Payment:** Razorpay Checkout
- **Linting:** ESLint

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── axios.js               # Axios instance with base URL config
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar with auth state
│   │   ├── ProductCard.jsx        # Reusable product card
│   │   ├── FeaturedCard.jsx       # Featured product card
│   │   └── ProtectedRoute.jsx     # Route guard for auth
│   ├── context/
│   │   └── AuthContext.jsx        # Global auth state (JWT)
│   ├── pages/
│   │   ├── Home.jsx               # Landing / home page
│   │   ├── products.jsx           # All products listing
│   │   ├── ProductDetail.jsx      # Single product + reviews + payment
│   │   ├── Login.jsx              # Login form
│   │   ├── Signup.jsx             # Register form
│   │   ├── MyOrders.jsx           # User's order history
│   │   ├── Footer.jsx             # Footer component
│   │   └── admin/
│   │       └── AdminDashboard.jsx # Admin panel
│   ├── App.jsx                    # Routes configuration
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles
│   └── App.css                    # App-level styles
├── public/                        # Static assets
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
├── .env.example                   # Environment variables template
└── package.json
```

---

## 🔗 Pages & Routes

| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | Home | No |
| `/products` | Products | No |
| `/products/:id` | ProductDetail | No |
| `/login` | Login | No |
| `/signup` | Signup | No |
| `/my-orders` | MyOrders | ✅ Yes |
| `/admin` | AdminDashboard | ✅ Admin |

---

## ⚙️ Setup & Installation

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Fill in your values

# Start development server
npm run dev

# Build for production
npm run build
```

The app runs on `http://localhost:5173` by default.

---

## 🔐 Environment Variables

Create a `.env` file in the `frontend/` directory:

```
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

---

## 🛡️ Features

- **JWT Authentication** — login state persisted via `AuthContext`
- **Protected Routes** — unauthorized users redirected to login
- **Razorpay Payments** — integrated on Product Detail page
- **Reviews System** — view, write, and submit star-rated reviews on Product Detail page (auth required)
- **Admin Dashboard** — manage products, orders, and users
- **Responsive Design** — built with Tailwind CSS utility classes

---

## 📅 Development Log

This frontend is being built as part of the quickBasket full-stack project.

- **Phase 1** — Project setup, Vite + React + Tailwind + Router
- **Phase 2** — Axios config, Auth Context, Protected Routes
- **Phase 3** — All pages: Home, Products, Product Detail, Login, Signup
- **Phase 4** — My Orders, Admin Dashboard, Razorpay integration
- **Coming up** — Deployment, UI polish

---

## 👨‍💻 Author

**Satish Rana**
- GitHub: [@SatishRana8791](https://github.com/SatishRana8791)

---

> ⭐ Part of the [product-api](https://github.com/SatishRana8791/product-api) full-stack project.
