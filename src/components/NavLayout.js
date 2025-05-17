import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Settings, LogOut, Bug, Heart, Star, ClipboardList } from 'lucide-react';

const NavLayout = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">Wohoo</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                to="/trips" 
                className={`${isActivePath('/trips') ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-500`}
              >
                Trips
              </Link>
              <Link 
                to="/discover" 
                className={`${isActivePath('/discover') ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-500`}
              >
                Discover
              </Link>
              <Link 
                to="/wishlist" 
                className={`${isActivePath('/wishlist') ? 'text-orange-500' : 'text-gray-600'} hover:text-orange-500`}
              >
                Wishlist
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    AB
                  </div>
                  <Menu size={20} />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button onClick={() => navigate('/profile')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      View Profile
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <Bug className="inline-block w-4 h-4 mr-2" />
                      Report a bug
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <Heart className="inline-block w-4 h-4 mr-2" />
                      Help Wohoo grow
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <ClipboardList className="inline-block w-4 h-4 mr-2" />
                      Product requests
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <Star className="inline-block w-4 h-4 mr-2" />
                      Leave a review
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <Settings className="inline-block w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      <LogOut className="inline-block w-4 h-4 mr-2" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default NavLayout;