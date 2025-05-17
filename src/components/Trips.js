import React from 'react';
import { Plus } from 'lucide-react';

const Trips = () => {
  const pastTrips = [
    {
      id: 1,
      title: 'Srinagar',
      image: '/api/placeholder/400/300',
      date: 'August 2024',
      duration: '5 days'
    },
    {
      id: 2,
      title: 'Sample Trip - UK 2022',
      image: '/api/placeholder/400/300',
      date: 'August 2024',
      duration: '20 days'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Upcoming Trips</h1>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition flex items-center space-x-2">
          <span>Create a trip</span>
        </button>
      </div>

      {/* Create New Trip Card */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-orange-500 cursor-pointer transition">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <Plus className="w-6 h-6 text-orange-500" />
        </div>
        <span className="text-lg text-orange-500">Create new trip</span>
      </div>

      {/* Past Trips Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Past Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastTrips.map(trip => (
            <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                    AB
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{trip.title}</h3>
                <p className="text-gray-600">{trip.date} · {trip.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;