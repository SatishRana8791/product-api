import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";



const Signup = () => {
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [error,setError]=useState('');


  const handleSignUp= async ()=>{
    try{
      if(!name || !email || !password) {
        setError('All fields are required!');
        return ;
      }
      if(!email.includes('@')) {
        setError('Please enter a valid email!');
        return;
      }
      const register=await API.post('/auth/signup' , { name , email , password });
      navigate('/login');
    }
    catch(e){
      console.log(e.message);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-xl shadow-md w-full max-w-lg min-h-[450px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h1>
    
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id='name'
            name='name'
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
    
          <input
            type="text"
            id='email'
            name='email'
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
    
          <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name='password'
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                maxLength={12}
                className="w-full border rounded-md p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer "
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
          </div>

          <div>{error && <p className="text-red-500">{error}</p>}</div>
          
          <button
            className="bg-blue-500 text-white py-3 rounded-md font-semibold
                       hover:bg-blue-600 transition duration-300 cursor-pointer"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className='p-2'>
          <p>Already have an account? <span> <Link to={'/login'} className='text-blue-600 underline p-2'>LogIn</Link></span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;