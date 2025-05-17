// src/components/GoogleCallback.js
import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const GoogleCallback = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Parse the URL for token and user data
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const userData = params.get('user');
    
    console.log('Callback received - Token exists:', !!token);
    console.log('Callback received - User data exists:', !!userData);
    
    if (token && userData) {
      try {
        // Save token to localStorage
        localStorage.setItem('token', token);
        console.log('Token saved to localStorage');
        
        // Parse and set user data
        const parsedUser = JSON.parse(decodeURIComponent(userData));
        console.log('User data parsed successfully', parsedUser);
        
        // Update context with user data
        setUser(parsedUser);
        console.log('User context updated');
        
        // Navigate to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Error in Google callback:', error);
        navigate('/login?error=parsing_failed');
      }
    } else {
      // Something went wrong with the OAuth process
      console.error('Missing token or user data in callback');
      navigate('/login?error=missing_data');
    }
  }, [location, navigate, setUser]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-3 text-gray-600">Completing your login process...</p>
      </div>
    </div>
  );
};

export default GoogleCallback;