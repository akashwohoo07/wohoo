// src/components/Trips.js
import React from 'react';

const Trips = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Trips</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <p className="mb-4">You have no trips yet. Start planning your next adventure!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Plan a New Trip
        </button>
      </div>
    </div>
  );
};

export default Trips;