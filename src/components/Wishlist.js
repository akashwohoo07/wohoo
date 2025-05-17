// src/components/Wishlist.js
import React from 'react';

const Wishlist = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <p className="mb-4">You have no destinations in your wishlist yet. Discover new places to add!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Discover Destinations
        </button>
      </div>
    </div>
  );
};

export default Wishlist;