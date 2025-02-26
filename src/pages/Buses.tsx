import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
/// Replace the interface declaration with:
import { Bus } from './types';

// Dummy data for 20 Cameroon buses
export const dummyBuses: Bus[] = [
  {
    id: 1,
    name: 'Express Cameroon',
    image: 'src/assets/bus1.png',
    departure: '06:00 AM',
    arrival: '09:30 AM',
    route: 'Douala - Yaoundé',
    price: 5000,
    rating: 4.5,
    busType: 'AC',
    seatsAvailable: 30,
  },
  {
    id: 2,
    name: 'Rapid Cameroon',
    image: 'src/assets/bus2.png',
    departure: '08:00 AM',
    arrival: '11:30 AM',
    route: 'Yaoundé - Douala',
    price: 5500,
    rating: 4.0,
    busType: 'Non-AC',
    seatsAvailable: 25,
  },
  {
    id: 3,
    name: 'Deluxe Cameroon',
    image: 'src/assets/bus3.png',
    departure: '07:00 AM',
    arrival: '08:30 AM',
    route: 'Buea - Limbe',
    price: 4000,
    rating: 4.2,
    busType: 'AC',
    seatsAvailable: 20,
  },
  {
    id: 4,
    name: 'Shuttle Cameroon',
    image: 'src/assets/bus4.png',
    departure: '09:00 AM',
    arrival: '12:00 PM',
    route: 'Bamenda - Bafoussam',
    price: 6000,
    rating: 4.3,
    busType: 'Non-AC',
    seatsAvailable: 28,
  },
  {
    id: 5,
    name: 'Elite Cameroon Bus',
    image: 'src/assets/bus5.png',
    departure: '05:30 AM',
    arrival: '10:00 AM',
    route: 'Garoua - Ngaoundéré',
    price: 7000,
    rating: 4.6,
    busType: 'AC',
    seatsAvailable: 35,
  },
  {
    id: 6,
    name: 'Comfort Cameroon',
    image: 'src/assets/bus6.png',
    departure: '06:15 AM',
    arrival: '09:45 AM',
    route: 'Maroua - Garoua',
    price: 5200,
    rating: 4.1,
    busType: 'Non-AC',
    seatsAvailable: 22,
  },
  {
    id: 7,
    name: 'Reliable Cameroon',
    image: 'src/assets/bus7.png',
    departure: '07:30 AM',
    arrival: '10:00 AM',
    route: 'Kribi - Edea',
    price: 4800,
    rating: 4.4,
    busType: 'AC',
    seatsAvailable: 30,
  },
  {
    id: 8,
    name: 'Speedy Cameroon',
    image: 'src/assets/bus8.png',
    departure: '08:15 AM',
    arrival: '09:45 AM',
    route: 'Limbe - Buea',
    price: 4500,
    rating: 4.0,
    busType: 'Non-AC',
    seatsAvailable: 26,
  },
  {
    id: 9,
    name: 'CityLink Cameroon',
    image: 'src/assets/bus9.png',
    departure: '09:00 AM',
    arrival: '11:00 AM',
    route: 'Bafoussam - Buea',
    price: 5000,
    rating: 4.2,
    busType: 'AC',
    seatsAvailable: 20,
  },
  {
    id: 10,
    name: 'Eco Cameroon',
    image: 'src/assets/bus10.png',
    departure: '10:00 AM',
    arrival: '12:30 PM',
    route: 'Ebolowa - Yaoundé',
    price: 5300,
    rating: 4.0,
    busType: 'Non-AC',
    seatsAvailable: 24,
  },
  {
    id: 11,
    name: 'Premier Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Premier+Cameroon',
    departure: '06:45 AM',
    arrival: '08:15 AM',
    route: 'Kumba - Buea',
    price: 4200,
    rating: 4.3,
    busType: 'AC',
    seatsAvailable: 28,
  },
  {
    id: 12,
    name: 'Regal Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Regal+Cameroon',
    departure: '07:15 AM',
    arrival: '09:00 AM',
    route: 'Douala - Buea',
    price: 5600,
    rating: 4.5,
    busType: 'Non-AC',
    seatsAvailable: 30,
  },
  {
    id: 13,
    name: 'Royal Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Royal+Cameroon',
    departure: '08:30 AM',
    arrival: '11:30 AM',
    route: 'Yaoundé - Bafoussam',
    price: 5800,
    rating: 4.4,
    busType: 'AC',
    seatsAvailable: 32,
  },
  {
    id: 14,
    name: 'Supreme Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Supreme+Cameroon',
    departure: '05:00 AM',
    arrival: '09:00 AM',
    route: 'Bamenda - Kribi',
    price: 7500,
    rating: 4.6,
    busType: 'Non-AC',
    seatsAvailable: 25,
  },
  {
    id: 15,
    name: 'Swift Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Swift+Cameroon',
    departure: '06:30 AM',
    arrival: '09:30 AM',
    route: 'Yaoundé - Kribi',
    price: 5000,
    rating: 4.1,
    busType: 'AC',
    seatsAvailable: 30,
  },
  {
    id: 16,
    name: 'Urban Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Urban+Cameroon',
    departure: '08:00 AM',
    arrival: '10:30 AM',
    route: 'Douala - Bafoussam',
    price: 5400,
    rating: 4.2,
    busType: 'Non-AC',
    seatsAvailable: 27,
  },
  {
    id: 17,
    name: 'InterCity Cameroon',
    image: 'https://via.placeholder.com/300x200?text=InterCity+Cameroon',
    departure: '07:45 AM',
    arrival: '09:15 AM',
    route: 'Limbe - Douala',
    price: 4800,
    rating: 4.0,
    busType: 'AC',
    seatsAvailable: 22,
  },
  {
    id: 18,
    name: 'Metro Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Metro+Cameroon',
    departure: '06:00 AM',
    arrival: '10:00 AM',
    route: 'Maroua - Ngaoundéré',
    price: 6800,
    rating: 4.3,
    busType: 'Non-AC',
    seatsAvailable: 30,
  },
  {
    id: 19,
    name: 'Grand Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Grand+Cameroon',
    departure: '09:15 AM',
    arrival: '01:15 PM',
    route: 'Garoua - Yaoundé',
    price: 8000,
    rating: 4.7,
    busType: 'AC',
    seatsAvailable: 35,
  },
  {
    id: 20,
    name: 'Continental Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Continental+Cameroon',
    departure: '07:30 AM',
    arrival: '10:00 AM',
    route: 'Kumba - Douala',
    price: 5200,
    rating: 4.2,
    busType: 'Non-AC',
    seatsAvailable: 24,
  },
  {
    id: 20,
    name: 'Continental Cameroon',
    image: 'https://via.placeholder.com/300x200?text=Continental+Cameroon',
    departure: '08:30 AM',
    arrival: '11:00 AM',
    route: 'Garou - Douala',
    price: 5200,
    rating: 4.2,
    busType: 'Non-AC',
    seatsAvailable: 24,
  },
];

const AdvancedBusesPage = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    // In a production app, you would fetch data from an API.
    setBuses(dummyBuses);
  }, []);

  // Filter buses based on search query and bus type
  const filteredBuses = buses.filter((bus) => {
    const matchesSearch =
      bus.name.toLowerCase().includes(search.toLowerCase()) ||
      bus.route.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'all' || bus.busType.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-24 pb-12 px-4 lg:px-28 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        Available Buses in Cameroon
      </h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search by bus name or route..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="all">All Types</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      {/* Bus Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuses.map((bus) => (
          <div key={bus.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={bus.image} alt={bus.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{bus.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{bus.route}</p>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Dep: {bus.departure}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-4">Arr: {bus.arrival}</span>
                </div>
                <div className="text-lg font-bold text-violet-600">XAF {bus.price}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;
                  if (bus.rating >= starValue) {
                    return <FaStar key={index} className="text-yellow-400" />;
                  } else if (bus.rating >= starValue - 0.5) {
                    return <FaStar key={index} className="text-yellow-300" />;
                  } else {
                    return <FaRegStar key={index} className="text-yellow-300" />;
                  }
                })}
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">({bus.rating})</span>
              </div>

              {/* Seats and Bus Type */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">Seats: {bus.seatsAvailable}</span>
                <span className="px-2 py-1 text-xs bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded">
                  {bus.busType}
                </span>
              </div>

              {/* Booking Button */}
             <Link 
              to={`/BookingPage/${bus.id}`} 
                className="block text-center bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition"
              >
              Book Now
            </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredBuses.length === 0 && (
        <p className="mt-8 text-center text-gray-600 dark:text-gray-300">
          No buses found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default AdvancedBusesPage;
