import React, { useState ,useEffect } from 'react'
import API from '../api/axios';
import FeaturedCard from '../components/FeaturedCard';
import { Link, Navigate } from 'react-router-dom';


const Home = () => {

  const categories = [
    { name: 'Electronics', color: 'bg-sky-500' },
    { name: 'Shoes', color: 'bg-emerald-500' },
    { name: 'Clothing', color: 'bg-amber-500' },
    { name: 'Sports', color: 'bg-rose-500' },
    { name: 'Watches', color: 'bg-purple-500' },
    { name: 'Bags', color: 'bg-orange-500' },
    { name: 'Home', color: 'bg-teal-500' },
    { name: 'Books', color: 'bg-pink-500' },
  ]
  
  const [products,setProducts]=useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);


  useEffect(()=>{
    const fetchproducts=async ()=>{
      try{
        const response=await API.get('/products?limit=12');
        setProducts(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchproducts();

  },[]);

  //for categories
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 4) >= categories.length ? 0 : prev + 4);
    }, 3000)
    
    return () => clearInterval(timer)
  }, []);

 
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center
        bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mb-6">
      
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Welcome to Shopify
          </h1>
      
          <p className="text-xl text-blue-100 mb-6">
            Best deals on electronics, fashion, shoes, sports and more
          </p>
        </div>
      
        <Link
          to="/products"
          className="bg-white text-blue-700 font-semibold
                     px-6 py-3 rounded-lg shadow-md
                     hover:bg-blue-100 hover:scale-105
                     transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      <div className="flex justify-between mt-4 mb-6 gap-4">
          {categories.slice(currentIndex, currentIndex + 4).map((cat, index) => (
              <Link to={`/products?category=${cat.name}`} key={index} className="flex-1">
                  <div className={`h-[100px] text-2xl ${cat.color} text-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer`}>
                      {cat.name}
                  </div>
              </Link>
          ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-3 gap-4 " >
          {products.slice(0, 6).map((product) => (
              <FeaturedCard key={product._id} product={product}/>
          ))}
      </div>

    </div>
  );
}

export default Home;





