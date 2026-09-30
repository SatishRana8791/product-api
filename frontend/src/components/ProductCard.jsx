import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {

  const navigate=useNavigate();

  return (
    <div className='border rounded-lg shadow p-4 flex flex-col gap-2 '>
        <img src={product.image} alt="product.name" className='w-full h-48 object-cover rounded cursor-pointer' onClick={() => navigate(`/products/${product._id}`)}/>

        <h2 className='text-xl font-medium'>{product.name}</h2>

        <p className='text-lg font-normal'>Price : ₹{product.price}</p>

        <p className='text-lg font-normal'>InStock : { product.inStock ? "yes" : "no" }</p>

        <p className='text-lg font-normal'>
          Quantity: {product.quantity}
        </p>

        <button
          className="cursor-pointer text-gray-700 text-xl transition-all duration-300
                     hover:text-blue-600 hover:text-xl hover:font-bold 
                     hover:underline"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          View Details
        </button>

    </div>
  );
}

export default ProductCard;