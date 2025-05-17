import React from 'react';
import { Search } from 'lucide-react';

const Discover = () => {
  const cities = [
    {
      id: 1,
      name: 'Seoul',
      image: '/api/placeholder/800/400',
      description: 'The vibrant capital of South Korea, known for its modern architecture, bustling markets, and rich cultural heritage'
    },
    {
      id: 2,
      name: 'Mexico City',
      image: '/api/placeholder/800/400',
      description: 'The lively capital of Mexico, famous for its colorful streets, delicious street food, and ancient Aztec ruins.'
    },
    {
      id: 3,
      name: 'New York',
      image: '/api/placeholder/800/400',
      description: 'The iconic "Big Apple" city in the United States, offering a dazzling skyline, world-class museums, and diverse culinary experiences.'
    },
    {
      id: 4,
      name: 'Bangkok',
      image: '/api/placeholder/800/400',
      description: 'The energetic capital of Thailand, renowned for its ornate temples, bustling street markets, and vibrant nightlife'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Discover cities</h1>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search cities"
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Popular Destinations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Popular destinations</h2>
        <p className="text-gray-600">Discover cities that people are travelling to right now</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map(city => (
            <div key={city.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img src={city.image} alt={city.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-white text-sm opacity-90">{city.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;