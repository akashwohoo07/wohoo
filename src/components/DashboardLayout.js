// src/components/DashboardLayout.js
import React from 'react';

const DashboardLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <p>Welcome to your travel dashboard!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold">Upcoming Trips</h2>
            <p className="text-gray-600">You have no upcoming trips.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold">Wishlist Items</h2>
            <p className="text-gray-600">You have no wishlist items.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;