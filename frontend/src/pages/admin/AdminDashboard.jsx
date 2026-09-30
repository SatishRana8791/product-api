import React, { useContext,useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import API from '../../api/axios';

const AdminDashboard = () => {
  const {user}=useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('users');

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', price: '' });

  useEffect(()=>{
    if(!user || user.role !== 'admin') return;  //first check user is valid or not

    const fetchUsers=async ()=>{
      try{
        //code here
        const response=await API.get('/admin/users');
        setUsers(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchUsers();

    const fetchProducts=async ()=>{
      try{
        //code here
        const response=await API.get('/admin/products');
        setProducts(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchProducts();

    const fetchOrders=async ()=>{
      try{
        //code here
        const response=await API.get('/orders/all');
        setOrders(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchOrders();

  },[user]);

  if(!user || user.role !== 'admin'){
    return <Navigate to={'/'}/>;  //checking again there is any user exists or not
  }
  

  const handleDeleteUser=async( id)=>{
    try{
      const response=await API.delete(`/admin/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    }
    catch(e){
      console.log(e.message);
    }
  }

  const handleDeleteProduct=async (id)=>{
    try{
      const response=await API.delete(`/admin/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    }
    catch(e){
      console.log(e.message);
    }
  }

  const handleEditClick=async (product)=>{
    setEditingId(product._id);
    setEditData({ name: product.name, price: product.price });
  }

  const handleSaveEdit=async (id)=>{
    try {
      const response = await API.put(`/admin/products/${id}`, editData);
      setProducts(products.map(p => p._id === id ? response.data.data : p));
      setEditingId(null);
    } catch(e) {
      console.log(e.message);
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
        const response = await API.put(`/orders/${id}/status`, { status: newStatus });
        setOrders(orders.map(o => o._id === id ? response.data.data : o));
    } catch(e) {
        console.log(e.message);
    }
  }
  
  return(
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
      </h1>

      <div className="flex gap-4 mb-6 border-b pb-3 rounded ">

        <button 
            onClick={() => setActiveTab('users')} 
            className={`px-6 py-3 rounded-md cursor-pointer border ${activeTab === 'users' ? 'bg-green-500 text-white' : 'hover:bg-blue-400 text-black'}`}
        >
            Users
        </button>
        
        <button 
            onClick={() => setActiveTab('products')} 
            className={`px-6 py-3 rounded-md cursor-pointer border ${activeTab === 'products' ? 'bg-green-500 text-white' : 'hover:bg-blue-400 text-black'}`}
        >
            products
        </button>
        
        <button 
            onClick={() => setActiveTab('orders')} 
            className={`px-6 py-3 rounded-md cursor-pointer border ${activeTab === 'orders' ? 'bg-green-500 text-white' : 'hover:bg-blue-400 text-black'}`}
        >
            orders
        </button>

      </div>
      
      
      {activeTab === 'users' && <div>
        { users.map((user)=>(
          <div key={user._id} className="border rounded-md p-4 mb-3 flex justify-between items-center">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
          ))}
        </div>
      }

      {activeTab === 'products' && <div>
        { products.map((product)=>(
          <div key={product._id}  className="border rounded-md p-4 mb-3">

            {editingId === product._id ? (
            <>
                <input value={editData.name} onChange={(e) => setEditData({...editData, name: e.target.value})}  className="border rounded px-3 py-2 mr-2"/>
                <input value={editData.price} onChange={(e) => setEditData({...editData, price: e.target.value})} className="border rounded px-3 py-2 mr-2"/>
                <button onClick={() => handleSaveEdit(product._id)}>Save</button>
            </>
            ) : (
            <>
                <p className="font-medium">
                  {product.name}
                </p>
                
                <p className="text-blue-600">
                  ₹{product.price}
                </p>
                <div className='mt-2'>
                  <button onClick={() => handleEditClick(product)} className="bg-yellow-400 text-white px-3 py-1 rounded" >Edit</button>
                  <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-400 text-white px-3 py-1 rounded ml-2" >Delete</button>
                </div>
            </>
            )}
            
          </div>
        ))}
        </div>
      }

      {activeTab === 'orders' && <div>
          { orders.map((order)=>(
              <div key={order._id}  className="border rounded-lg p-5 mb-4 shadow-sm flex justify-between">
                  <div>
                    <p className="font-semibold text-lg">
                    Total: ₹{order.totalAmounts}
                    </p>
                    <p className="text-blue-600">
                      Status: {order.status}
                    </p>
                  
                    {order.products.map((item) => {
                        if (!item.productId) return null;
                        return (
                            <p key={item.productId._id} className="text-lg text-gray-700">
                                {item.productId.name} - ₹{item.productId.price} x {item.quantity}
                            </p>
                        );
                    })}
                  </div>
      
                  <select onChange={(e) => handleStatusChange(order._id, e.target.value)} className="border text-lg rounded px-6 py-1 ">
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                  </select>
              </div>
          ))}
      </div>}

    </div>
  );

}

export default AdminDashboard;