import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default button behavior
    navigate('/dashboard/trips'); // Navigate to dashboard/trips
  };

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* Navigation */}
      <nav className="bg-transparent absolute w-full z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-3xl font-bold">Wohoo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button className="text-white hover:text-gray-200">How it works</button>
            <button className="text-white hover:text-gray-200">Reviews</button>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleLogin}
              className="px-4 py-2 text-white border border-white rounded-md hover:bg-white hover:text-gray-800 transition"
            >
              Login
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
              Get the app
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=2487&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            The Collaborative Trip Planner
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            flexible, fun and free, for <em>every</em> group or solo trip
          </p>

          {/* Replaces Section */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white">Replaces</span>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">Doc</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">Sht</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-white text-xs">Not</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">Cal</span>
              </div>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-2 mb-12">
            <span className="text-white">Rated</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
            <h2 className="text-white text-2xl md:text-3xl mb-6">
              Join 27,000+ travelers and Wohoo your next adventure!
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition whitespace-nowrap">
                Get the app
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;