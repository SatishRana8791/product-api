import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
            {/* Brand */}
            <div>
                <h2 className="text-xl font-bold mb-2">BrandName</h2>
                <p className="text-gray-400">Your one-stop shop for everything you need, delivered fast and fresh.</p>
            </div>
        
            {/* Quick Links */}
            <div>
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-gray-400">
                    <li><Link to="/" className='hover:text-blue-600 transition'>Home</Link></li>
                    <li><Link to="/products" className='hover:text-blue-600 transition'>Products</Link></li>
                    <li><Link to="/my-orders" className='hover:text-blue-600 transition '>My Orders</Link></li>
                </ul>
            </div>
        
            {/* Contact */}
            <div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-400">Email: support@brandname.com</p>
                <p className="text-gray-400">Phone: +91 98765 43210</p>
            </div>
        </div>
        <p className="text-center text-xl mt-6">© 2026 YourBrand. All rights reserved.</p>
    </footer>
  );
}

export default Footer;