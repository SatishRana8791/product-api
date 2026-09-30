
import axios from 'axios'

const API=axios.create({
    baseURL: import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/v1` : 'http://localhost:5000/api/v1'
});

API.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token');
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
});

export default API;
