// src/components/Navbar.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import gsap from 'gsap';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    // Call logout function
    logout();
    
    // Navigate to home page after logout
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Animation for navbar links
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out'
    });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' 
          ? 'bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-white font-bold text-2xl flex items-center"
            >
              <span className="mr-2 text-3xl">✈️</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300">
                TravelApp
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {user ? (
              <>
                {/* Links shown when logged in */}
                <Link 
                  to="/dashboard" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/discover" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  Discover
                </Link>
                <Link 
                  to="/trips" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  My Trips
                </Link>
                <Link 
                  to="/wishlist" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  Wishlist
                </Link>
                <div className="ml-4 flex items-center space-x-4">
                  <span className="text-white">Hello, {user.name}</span>
                  <button 
                    onClick={handleLogoutClick}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Links shown when logged out */}
                <Link 
                  to="/" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  Home
                </Link>
                <Link 
                  to="/discover" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  Discover
                </Link>
                <Link 
                  to="/about" 
                  className="nav-item text-white hover:text-pink-300 px-4 py-2 rounded-lg transition duration-300"
                >
                  About Us
                </Link>
                <div className="ml-4">
                  <button 
                    onClick={handleLoginClick}
                    className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Login / Sign Up
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-900 mt-3 py-3 px-4 rounded-lg">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/discover" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  Discover
                </Link>
                <Link 
                  to="/trips" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  My Trips
                </Link>
                <Link 
                  to="/wishlist" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  Wishlist
                </Link>
                <div className="mt-4 pt-3 border-t border-indigo-700">
                  <p className="text-white mb-2">Hello, {user.name}</p>
                  <button 
                    onClick={handleLogoutClick}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-full font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  Home
                </Link>
                <Link 
                  to="/discover" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  Discover
                </Link>
                <Link 
                  to="/about" 
                  className="block text-white hover:text-pink-300 py-2 transition duration-300"
                >
                  About Us
                </Link>
                <div className="mt-4 pt-3 border-t border-indigo-700">
                  <button 
                    onClick={handleLoginClick}
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-2 rounded-full font-medium"
                  >
                    Login / Sign Up
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;