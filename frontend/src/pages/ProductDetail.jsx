import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProductDetail = () => {
  const [product,setProduct]=useState(null);
  const [quantity,setquantity]=useState(1);
  const {id} = useParams();
  const [orderSuccess, setOrderSuccess] = useState(false);

  const navigate=useNavigate();
  const { user } = useContext(AuthContext);

  const [address,setAddress]=useState({
      house: '',
      street: '',
      city: '',
      state: '',
      pincode: ''
  });
  
  const [addressSaved, setAddressSaved] = useState(false);
  const [error,setError]=useState('');

  useEffect(()=>{
    const fetchProduct=async ()=>{
      try{
        const response=await API.get(`/products/${id}`);
        setProduct(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }

    fetchProduct();

  },[id]);

  const HandleCheckOut=async ()=>{
    //code here
    try{
      const totalAmount = product.price * quantity
      const response=await API.post('/payment/create-order',{ amount: totalAmount });
      console.log(response.data);

      const order = response.data.data;
      const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: "INR",
          order_id: order.id,
          handler: async function(paymentResponse) {
            const verifyResponse = await API.post('/payment/verify', {
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature
            });
            console.log(verifyResponse.data);
            const orderResponse = await API.post('/orders', {
                products: [{ productId: id, quantity: quantity }],
                totalAmounts: totalAmount,
                deliveryAddress: `${address.house}, ${address.street}, ${address.city}, ${address.state}, ${address.pincode}`,
                paymentId: paymentResponse.razorpay_payment_id
            })
            console.log(orderResponse.data);
            setOrderSuccess(true)
            navigate('/my-orders');
          }
      }
      
      const rzp = new window.Razorpay(options)
      rzp.open()

    }
    catch(e){
      console.log(e.message);
    }
  }

  const handleSaveAddress=()=>{
    if(!user){
      setError("Please login first to place an order!");
    }
    else if(!address.house || !address.city || !address.pincode){
        setError("please fill all required input field");
    } else {
        setAddressSaved(true);
    }
  }

  const [reviews,setReviews]=useState([]);
  const [comment,setComment]=useState('');
  const [rating,setRating]=useState('');
  const [reviewform,setReviewForm]=useState(false);

  useEffect(()=>{
    const fetchReviews=async ()=>{
      try{
        const response = await API.get(`/reviews/${id}`);
        console.log('Reviews fetched:', response.data.data);  // Add this line
        setReviews(response.data.data);
      }
      catch(e){
        console.log(e.message);
      }
    }
    fetchReviews();
  },[id]);

  const hasReviewed = user && reviews.some(r => r.userId?._id === user?.id);

  const handleReview=()=>{
    setReviewForm(!reviewform);
  }

  const handleDeleteReview = async (reviewId) => {
    try {
      await API.delete(`/reviews/${reviewId}`);
      setReviews(reviews.filter(r => r._id !== reviewId));
    } catch(e) {
      console.log(e.message);
    }
  }

  const handleSubmitReview = async () => {
    try{
      await API.post(`/reviews/${id}`, { reviewComment:comment, rating });
      const response = await API.get(`/reviews/${id}`)
      setReviews( response.data.data )
      setComment('')
      setRating('')
      setReviewForm(false)
    }
    catch(e) {
      console.log(e.message)
    }
  }

  if(!product) return <div>!Loading</div>;

  return (
    <div className=''>
      <div className='border rounded-lg shadow p-4 flex flex-row gap-2 w-full '>
        {/* Left side - product details */}
        <div className='w-[60%] '>
          <img src={product.image} alt={product.name} className='w-[80%] h-[60%] object-cover rounded'/>
  
          <div className=''>
              <h2 className='text-2xl font-bold mt-1'>{product.name}</h2>
  
              <p className='text-xl font-medium mt-1'>Price : {product.price}</p>
  
              <p className='text-xl font-medium mt-1'>InStock : { product.inStock ? "yes" : "no" }</p>
          </div>
  
          <div className="flex items-center gap-2">
              <span className='text-xl font-medium mt-1'>Quantity:</span>
            
              <button onClick={() =>{ if(quantity>1) {setquantity(quantity - 1)} } } className='text-xl font-medium mt-1'>
                -
              </button>
            
              <span className='text-xl font-medium mt-1'>{quantity}</span>
            
              <button onClick={() => setquantity(quantity + 1)} className='text-xl font-medium mt-1'>
                +
              </button>
          </div>

        </div>

         {/* Right side - checkout */}
        <div className=' w-[40%] m-4'>
          <h1 className='text-xl mb-2 '>Delievery Address :</h1>
          <div className=''>
              <input
                type="text"
                placeholder="House No. / Flat No."
                value={address.house}
                className="w-full border rounded-md p-3 mb-2"
                onChange={(e) => setAddress({...address, house: e.target.value})}
              />
              <input
                type="text"
                placeholder="Street / Area / Locality"
                value={address.street}
                className="w-full border rounded-md p-3 mb-2"
                onChange={(e) => setAddress({...address, street: e.target.value})}
              />
            
              <div className="grid grid-cols-2 gap-4 mb-2">
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  className="border rounded-md p-3"
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                />
            
                <input
                  type="text"
                  placeholder="State"
                  value={address.state}
                  className="border rounded-md p-3"
                  onChange={(e) => setAddress({...address, state: e.target.value})}
                />
              </div>
              <input
                type="text"
                placeholder="Pincode"
                value={address.pincode}
                className="w-full border rounded-md p-3 mb-2"
                onChange={(e) => setAddress({...address, pincode: e.target.value})}
              />

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 cursor-pointer mb-2"
                onClick={handleSaveAddress} 
              >
                Save Address
              </button>
          </div>
          <div className='text-lg mb-2'>
            <p>Total : ₹{product.price*quantity}</p> 
          </div>

          <div className='flex justify-center items-center'>
            {addressSaved && <button onClick={HandleCheckOut} className="w-full  bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 cursor-pointer">CheckOut</button>}
          </div>

        </div>
      </div>

      <div className="mt-10 border-t pt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
      
          {!hasReviewed ? (
            <button
              onClick={handleReview}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              Write a Review
            </button>
          ) : (
            <span className="text-green-600 font-medium text-sm">✅ You have already reviewed this product</span>
          )}
        </div>
    
        {reviewform && (
          <div className="bg-gray-50 border rounded-xl p-5 mb-8 shadow-sm">
            <textarea
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-black mb-4"
              rows={4}
            />
      
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded-lg p-3 w-32 mb-4 outline-none focus:ring-2 focus:ring-black"
            />
      
            <br />
      
            <button
              onClick={handleSubmitReview}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer "
            >
              Submit Review
            </button>
          </div>
        )}
    
        <div className="space-y-5">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                    {review.userId?.name?.charAt(0).toUpperCase()}
                  </div>
      
                  <h3 className="font-semibold text-lg">
                    {review.userId?.name}
                  </h3>
                </div>
      
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 font-semibold">⭐ {review.rating}/5</span>
                  {user && review.userId?._id === user?.id && (
                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="text-red-500 text-sm hover:text-red-700 transition cursor-pointer"
                    >
                      🗑️ Delete
                    </button>
                  )}
                </div>
              </div>
      
              <p className="text-gray-600 leading-relaxed">
                {review.reviewComment}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
}

export default ProductDetail;