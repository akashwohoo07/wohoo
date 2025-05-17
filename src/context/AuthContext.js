// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          
          const response = await axios.get(`${API_URL}/auth/me`, config);
          setUser(response.data);
        } catch (error) {
          console.error('Error verifying token:', error);
          localStorage.removeItem('token');
        }
      }
      
      setLoading(false);
    };
    
    checkUserLoggedIn();
  }, [API_URL]);

  // Login with Google
  const loginWithGoogle = () => {
    // Open Google OAuth page
    window.location.href = `${API_URL}/auth/google`;
  };

  // Logout function - simple and direct
  const logout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    
    // Reset user state
    setUser(null);
    
    // No need to wait for API call - just fire and forget
    axios.get(`${API_URL}/auth/logout`)
      .catch(err => console.log('Logout API error (non-critical):', err));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        loginWithGoogle,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};