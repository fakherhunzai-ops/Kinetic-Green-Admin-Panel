
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['All Vehicles', 'Scooters', 'Three Wheelers', 'Golf Carts'];

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];

const vehicleData = {
  'All Vehicles': [
    {
      id: 1,
      name: 'E-Luna',
      category: 'Electric Scooter',
      price: '₹68,990',
      image: 'https://readdy.ai/api/search-image?query=vintage%20retro%20style%20electric%20scooter%20in%20cream%20white%20color%20on%20white%20minimal%20background%2C%20classic%20Luna%20inspired%20design%20with%20modern%20electric%20elements%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=600&height=400&seq=eluna-card&orientation=landscape',
      features: ['60 km range', '45 km/h top speed', 'Retro design']
    },
    {
      id: 2,
      name: 'Urban Scooter',
      category: 'Electric Scooter',
      price: '₹89,990',
      image: 'https://readdy.ai/api/search-image?query=modern%20sleek%20electric%20scooter%20in%20teal%20green%20color%20on%20white%20minimal%20background%2C%20contemporary%20urban%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20angle%20view%2C%20commercial%20quality&width=600&height=400&seq=urban-card&orientation=landscape',
      features: ['75 km range', '55 km/h top speed', 'Smart features']
    },
    {
      id: 3,
      name: 'E-Rickshaw',
      category: 'Three Wheeler',
      price: '₹1,85,990',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20green%20and%20yellow%20colors%20on%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=600&height=400&seq=rickshaw-card&orientation=landscape',
      features: ['120 km range', '4+1 seating', 'Commercial use']
    },
    {
      id: 4,
      name: 'EV Golf Cart',
      category: 'Golf Cart',
      price: '₹2,45,990',
      image: 'https://readdy.ai/api/search-image?query=premium%20white%20electric%20golf%20cart%20on%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20luxury%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=600&height=400&seq=golfcart-card&orientation=landscape',
      features: ['80 km range', '6 seating', 'Premium comfort']
    }
  ],
  'Scooters': [
    {
      id: 1,
      name: 'E-Luna',
      category: 'Electric Scooter',
      price: '₹68,990',
      image: 'https://readdy.ai/api/search-image?query=vintage%20retro%20style%20electric%20scooter%20in%20cream%20white%20color%20on%20white%20minimal%20background%2C%20classic%20Luna%20inspired%20design%20with%20modern%20electric%20elements%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=600&height=400&seq=eluna-card&orientation=landscape',
      features: ['60 km range', '45 km/h top speed', 'Retro design']
    },
    {
      id: 2,
      name: 'Urban Scooter',
      category: 'Electric Scooter',
      price: '₹89,990',
      image: 'https://readdy.ai/api/search-image?query=modern%20sleek%20electric%20scooter%20in%20teal%20green%20color%20on%20white%20minimal%20background%2C%20contemporary%20urban%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20angle%20view%2C%20commercial%20quality&width=600&height=400&seq=urban-card&orientation=landscape',
      features: ['75 km range', '55 km/h top speed', 'Smart features']
    }
  ],
  'Three Wheelers': [
    {
      id: 3,
      name: 'E-Rickshaw',
      category: 'Three Wheeler',
      price: '₹1,85,990',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20green%20and%20yellow%20colors%20on%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=600&height=400&seq=rickshaw-card&orientation=landscape',
      features: ['120 km range', '4+1 seating', 'Commercial use']
    }
  ],
  'Golf Carts': [
    {
      id: 4,
      name: 'EV Golf Cart',
      category: 'Golf Cart',
      price: '₹2,45,990',
      image: 'https://readdy.ai/api/search-image?query=premium%20white%20electric%20golf%20cart%20on%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20luxury%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=600&height=400&seq=golfcart-card&orientation=landscape',
      features: ['80 km range', '6 seating', 'Premium comfort']
    }
  ]
};

export default function VehiclesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Vehicles');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const vehicles = vehicleData[selectedCategory as keyof typeof vehicleData] || [];
  const visibleCount = vehicles.length >= 3 ? 3 : vehicles.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(vehicles.length - visibleCount, prev + 1));
  };

  const handleKnowMore = (vehicleId: number) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  const handleTestRide = (vehicleId: number) => {
    navigate(`/test-ride?vehicle=${vehicleId}&city=${selectedCity}`);
  };

  const handleViewAll = () => {
    navigate(`/vehicles?category=${selectedCategory}`);
  };

  return (
    <section id="vehicles" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Vehicles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of eco-friendly electric vehicles designed for every need
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="appearance-none px-6 py-3 pr-10 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 whitespace-nowrap"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 flex items-center justify-center">
              <i className="ri-map-pin-line text-lg text-teal-600"></i>
            </div>
          </div>
        </div>

        <div className="relative" data-product-shop>
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)` }}
                >
                  <div className="relative w-full h-64">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                        {vehicle.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-3xl font-bold text-teal-600 mb-4">
                      {vehicle.price}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleKnowMore(vehicle.id)}
                        className="flex-1 px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Know More
                      </button>
                      <button
                        onClick={() => handleTestRide(vehicle.id)}
                        className="flex-1 px-4 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Test Ride
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {vehicles.length > visibleCount && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-2xl text-gray-900"></i>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= vehicles.length - visibleCount}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-2xl text-gray-900"></i>
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            View All {selectedCategory}
          </button>
        </div>
      </div>
    </section>
  );
}
