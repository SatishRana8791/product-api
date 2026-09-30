import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const location = useLocation()
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

  return (
    <div className='bg-white shadow-md sticky top-0 z-50 border-b mb-6'>
        <div className='flex flex-row gap-4 md:gap-6 lg:gap-16 justify-between w-full px-2 md:px-6 py-3 mx-auto' >

            <div className='flex flex-row gap-4 md:gap-8 lg:gap-16 items-center ml-2 md:ml-4 lg:ml-18'>
                <div className="font-semibold text-xl text-gray-700 hover:text-blue-600 transition">
                    QuickBasket
                </div>
                <div> 
                    <Link to="/" className="font-semibold text-xl text-gray-700 hover:text-blue-600 transition">
                        Shopify
                    </Link> 
                </div>
            </div>

            <div className='flex flex-row items-center gap-4 md:gap-8 lg:gap-16'>
                
                <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'text-blue-600 font-bold text-xl' : 'text-gray-600'}
                >
                    Home
                </Link>
                
                <Link 
                    to="/products" 
                    className={location.pathname === '/products' ? 'text-blue-600 font-bold text-xl' : 'text-gray-600'}
                >
                    Products
                </Link> 
                
            </div>

            <div className='flex items-center gap-4 md:gap-8 lg:gap-16 mr-2 md:mr-4 lg:mr-18'>
                { user ? (
                        <>
                            <Link 
                                to="/my-orders" 
                                className={location.pathname === '/my-orders' ? 'text-blue-600 font-bold text-xl' : 'text-gray-600'}
                            >
                                My Orders
                            </Link>

                            {user.role === 'admin' && 
                                <Link 
                                    to="/admin" 
                                    className={location.pathname === '/admin' ? 'text-blue-600 font-bold text-xl' : 'text-gray-600'}
                                >
                                    Dashboard
                                </Link>
                            }

                            <span className="font-semibold text-xl text-gray-800">
                                Hi! {user.name}
                            </span>

                            <button 
                                onClick={handleLogout} 
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer font-semibold shadow-md hover:shadow-lg"
                            >
                                Logout
                            </button>

                        </>
                    ) : (
                        <>
                            <Link 
                                to="/login" 
                                className={location.pathname === '/login' ? 'text-blue-600 font-bold text-xl' : 'text-gray-600'}
                            >
                                Login 
                            </Link>

                            <Link 
                                to="/signup" 
                                className={location.pathname === '/signup' ? 'text-blue-600 font-bold text-xl ' : 'text-gray-600'}
                                
                            >
                                SignUp 
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  );
}

export default Navbar;