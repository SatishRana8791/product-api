
import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(()=>{
        //code here
        const storedToken=localStorage.getItem('token');
        if(storedToken){
            setToken(storedToken);
        }
        const storedUser=localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }

    },[]);

    const login = (userData, token) => {
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken('');
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}