import React, { useState } from 'react'
import API from '../api/axios'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email,setEmail] =useState('');
  const [error,setError]=useState('');
  const [password,setPassword] =useState('');
  const [showPassword,setShowPassword] = useState(false);
  const navigate=useNavigate();
  const {login } =useContext(AuthContext);

  const handleLogin = async () => {
      try{
        const response = await API.post('/auth/login', { email, password });
        const token=response.data.token_no;
        login(response.data.user, token);

        navigate('/');
      }
      catch(e){
        setError('Invalid email or password!');
      }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-xl shadow-md w-[40%] max-w-xl min-h-[400px]">
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>
    
        <div className="flex flex-col gap-4 ">
          <input
            type='text'
            id='email'
            name='email'
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
    
          <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id="password"
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
                       hover:bg-blue-600 transition duration-300 cursor-pointer mt-2"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

        <div className='p-2'>
          <p>Don't have an account? <span><Link to={'/signup'} className='text-blue-600 underline p-2' >Sign Up</Link></span></p>
        </div>
    
      </div>
    </div>
  );
}

export default Login;