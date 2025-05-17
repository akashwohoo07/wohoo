// src/components/Discover.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Discover = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleAddToWishlist = (destination) => {
    if (user) {
      // If logged in, would add to wishlist (in a real app)
      alert(`${destination} added to your wishlist!`);
    } else {
      // If not logged in, prompt to login
      // Using window.confirm to avoid ESLint "no-restricted-globals" error
      if (window.confirm(`You need to login to add ${destination} to your wishlist. Go to login page?`)) {
        navigate('/login');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discover Destinations</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            🔍
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example destination cards */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🗼
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Paris, France</h2>
            <p className="text-gray-700 mb-4">The city of lights and love, famous for its art, food, and culture.</p>
            <button 
              onClick={() => handleAddToWishlist('Paris')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🗽
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">New York, USA</h2>
            <p className="text-gray-700 mb-4">The city that never sleeps, with iconic skyscrapers and diverse neighborhoods.</p>
            <button 
              onClick={() => handleAddToWishlist('New York')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🏯
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Tokyo, Japan</h2>
            <p className="text-gray-700 mb-4">A blend of traditional and ultramodern, with amazing food and technology.</p>
            <button 
              onClick={() => handleAddToWishlist('Tokyo')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🏝️
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Bali, Indonesia</h2>
            <p className="text-gray-700 mb-4">A tropical paradise with beautiful beaches, temples, and vibrant culture.</p>
            <button 
              onClick={() => handleAddToWishlist('Bali')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🏙️
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Dubai, UAE</h2>
            <p className="text-gray-700 mb-4">A city of superlatives with futuristic architecture and luxury experiences.</p>
            <button 
              onClick={() => handleAddToWishlist('Dubai')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
            🌉
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">San Francisco, USA</h2>
            <p className="text-gray-700 mb-4">Known for the Golden Gate Bridge, tech innovation, and diverse food scene.</p>
            <button 
              onClick={() => handleAddToWishlist('San Francisco')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;