// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to TravelApp</h1>
          <p className="text-xl text-gray-600">
            Your ultimate travel companion for planning and organizing your adventures.
          </p>
          <div className="mt-8">
            <Link 
              to="/login" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
              🗺️
            </div>
            <h2 className="text-xl font-semibold mb-2">Discover Places</h2>
            <p className="text-gray-600">
              Explore thousands of destinations and find your next dream vacation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-suitcase"></i>
              ✈️
            </div>
            <h2 className="text-xl font-semibold mb-2">Plan Your Trips</h2>
            <p className="text-gray-600">
              Create detailed itineraries and keep all your travel plans organized.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-purple-500 text-4xl mb-4">
              <i className="fas fa-heart"></i>
              📌
            </div>
            <h2 className="text-xl font-semibold mb-2">Save Favorites</h2>
            <p className="text-gray-600">
              Keep track of places you want to visit with a personalized wishlist.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <p className="mb-6">
            Join thousands of travelers who use TravelApp to make their journey memorable.
          </p>
          <Link 
            to="/login" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;