import React, { useEffect, useState } from 'react'
import API from '../api/axios';


const MyOrders = () => {

  const [orders,setOrders]=useState([]);
  
  useEffect(()=>{

    const fetchmyOrders=async()=>{
      try{
        const response=await API.get('/orders/my-orders');
        setOrders(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchmyOrders();

  },[]);


  return(
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Orders
      </h1>
    
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
          >
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Total:</span> ₹{order.totalAmounts}
              </p>
    
              <p>
                <span className="font-semibold">Status:</span>
                <span className="ml-2 text-blue-600 font-medium">
                  {order.status}
                </span>
              </p>
    
              <p>
                <span className="font-semibold">Address:</span>{" "} 
                {order.deliveryAddress}
              </p>
    
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(order.createdAt).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
    
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">
                Ordered Items
              </h3>
    
              <div className="space-y-1">
                {order.products.map((item) => (
                  <div
                    key={item.productId}
                    className="bg-gray-100 rounded-md px-3 py-2"
                  >
                      <p>Quantity: {item.quantity}</p>
                      <p>Name: {item.productId?.name}</p>
                      <p>Price: ₹{item.productId?.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;