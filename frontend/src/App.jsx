import {Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Productdetail from './pages/ProductDetail.jsx'
import Myorders from './pages/MyOrders.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Navbar from './components/Navbar.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Products from "./pages/products.jsx"
import Footer from "./pages/Footer.jsx"


function App(){


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className=" flex-grow mx-auto px-4 w-[90%] ">
          <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/products" element={<Products/>} />
            <Route path="/login" element={<Login/> }/>
            <Route path="/signup" element={<Signup/> } />
            <Route path="/products/:id" element={<Productdetail/>} />
            <Route path="/my-orders" element={<ProtectedRoute> <Myorders/> </ProtectedRoute> }/>
            <Route path="/admin" element={<AdminDashboard/>} />
          </Routes>
        </div>

        <Footer/>
        
      </div>
    </>
  );
}

export default App;