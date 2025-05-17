// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    // Call logout function
    logout();
    
    // Navigate to home page after logout
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          {user ? (
            <Link to="/dashboard">TravelApp</Link>
          ) : (
            <Link to="/">TravelApp</Link>
          )}
        </div>
        
        <div className="flex space-x-4">
          {user ? (
            <>
              {/* Links shown when logged in */}
              <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
              <Link to="/discover" className="text-gray-300 hover:text-white">Discover</Link>
              <Link to="/trips" className="text-gray-300 hover:text-white">My Trips</Link>
              <Link to="/wishlist" className="text-gray-300 hover:text-white">Wishlist</Link>
              <button 
                onClick={handleLogoutClick}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
              >
                Logout
              </button>
              <span className="text-gray-300">Hello, {user.name}</span>
            </>
          ) : (
            <>
              {/* Links shown when logged out */}
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/discover" className="text-gray-300 hover:text-white">Discover</Link>
              <button 
                onClick={handleLoginClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;