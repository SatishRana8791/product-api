import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCard= ({product})=>{
    
    const navigate=useNavigate();

    return (
        <div className="rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group">
    
            <div className="relative overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onClick={()=> navigate(`/products/${product._id}`)}
                    className='w-full h-56 object-cover rounded group-hover:scale-105 transition-all duration-300'/>
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Featured
                </span>
            </div>
        
            <div className="p-4">
                <h2>{product.name}</h2>
                <p>₹{product.price}</p>
            </div>
        
        </div>
    );
}

export default FeaturedCard;




