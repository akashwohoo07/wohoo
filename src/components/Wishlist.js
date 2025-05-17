import React from 'react';
import { Image } from 'lucide-react';

const Wishlist = () => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <h1 className="text-3xl font-bold">Add your first wishlist idea!</h1>
      <p className="text-gray-600">
        Wishlist is all the trips you want to go on but can't start planning just yet.
      </p>

      {/* Add New Idea Card */}
      <div className="mt-8">
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
            <Image className="w-8 h-8 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Add a new idea! Ex. Eat a croissant in Paris and visit the Eiffel Tower"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full py-2 text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;