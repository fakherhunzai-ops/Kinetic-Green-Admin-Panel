import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../home/components/Footer';

const categories = ['All Vehicles', 'Scooters', 'Three Wheelers', 'Golf Carts'];

const vehicleData = [
  {
    id: 1,
    name: 'E-Luna',
    category: 'Scooters',
    tagline: 'Classic Design Meets Modern Electric Technology',
    price: '₹68,990',
    image: 'https://readdy.ai/api/search-image?query=vintage%20retro%20style%20electric%20scooter%20in%20cream%20white%20color%20centered%20on%20pure%20white%20minimal%20background%2C%20classic%20Luna%20inspired%20design%20with%20modern%20electric%20elements%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20front%20three%20quarter%20view%2C%20commercial%20quality%2C%20clean%20aesthetic&width=800&height=600&seq=eluna-all-page&orientation=landscape',
    features: ['60 km range', '45 km/h top speed', 'Retro design', 'Swappable battery'],
    specs: {
      range: '60 km',
      topSpeed: '45 km/h',
      motor: '1200W BLDC',
      charging: '4-5 hours'
    }
  },
  {
    id: 2,
    name: 'Urban Scooter',
    category: 'Scooters',
    tagline: 'Smart Mobility for Modern Cities',
    price: '₹89,990',
    image: 'https://readdy.ai/api/search-image?query=modern%20sleek%20electric%20scooter%20in%20teal%20green%20color%20centered%20on%20pure%20white%20minimal%20background%2C%20contemporary%20urban%20design%20with%20digital%20display%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20front%20three%20quarter%20view%2C%20commercial%20quality%2C%20clean%20aesthetic&width=800&height=600&seq=urban-all-page&orientation=landscape',
    features: ['75 km range', '55 km/h top speed', 'Smart features', 'Fast charging'],
    specs: {
      range: '75 km',
      topSpeed: '55 km/h',
      motor: '1800W BLDC',
      charging: '2-3 hours'
    }
  },
  {
    id: 3,
    name: 'E-Rickshaw',
    category: 'Three Wheelers',
    tagline: 'Sustainable Transport for Passengers and Cargo',
    price: '₹1,85,990',
    image: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20green%20and%20yellow%20colors%20centered%20on%20pure%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%20with%20canopy%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20front%20three%20quarter%20view%2C%20commercial%20quality%2C%20clean%20aesthetic&width=800&height=600&seq=rickshaw-all-page&orientation=landscape',
    features: ['120 km range', '4+1 seating', 'Commercial use', 'Low running cost'],
    specs: {
      range: '120 km',
      topSpeed: '35 km/h',
      motor: '1500W BLDC',
      seating: '4+1'
    }
  },
  {
    id: 4,
    name: 'EV Golf Cart',
    category: 'Golf Carts',
    tagline: 'Premium Electric Mobility for Leisure and Business',
    price: '₹2,45,990',
    image: 'https://readdy.ai/api/search-image?query=premium%20white%20electric%20golf%20cart%20centered%20on%20pure%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20luxury%20design%20with%20chrome%20details%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20front%20three%20quarter%20view%2C%20commercial%20quality%2C%20clean%20aesthetic&width=800&height=600&seq=golfcart-all-page&orientation=landscape',
    features: ['80 km range', '6 seating', 'Premium comfort', 'Weather protection'],
    specs: {
      range: '80 km',
      topSpeed: '30 km/h',
      motor: '3000W BLDC',
      seating: '6'
    }
  }
];

export default function VehiclesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category') || 'All Vehicles';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredVehicles = selectedCategory === 'All Vehicles' 
    ? vehicleData 
    : vehicleData.filter(v => v.category === selectedCategory);

  const handleViewDetails = (vehicleId: number) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  const handleTestRide = (vehicleId: number) => {
    navigate(`/test-ride?vehicle=${vehicleId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Electric Vehicles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of eco-friendly electric vehicles designed for every need. 
              From daily commuting to commercial transport, we have the perfect solution for you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Vehicle Models</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">120km</div>
              <div className="text-sm text-gray-600">Max Range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">0%</div>
              <div className="text-sm text-gray-600">Emissions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  viewMode === 'grid'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-grid-line mr-2"></i>
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  viewMode === 'list'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-list-check mr-2"></i>
                List
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center md:text-left">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredVehicles.length}</span> {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid/List */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-product-shop>
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative w-full h-80 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain object-center p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {vehicle.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {vehicle.tagline}
                    </p>
                    <div className="text-4xl font-bold text-teal-600 mb-6">
                      {vehicle.price}
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Range</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.specs.range}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Top Speed</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.specs.topSpeed}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Motor</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.specs.motor}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{vehicle.specs.seating ? 'Seating' : 'Charging'}</div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.specs.seating || vehicle.specs.charging}</div>
                      </div>
                    </div>

                    {/* Features */}
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

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewDetails(vehicle.id)}
                        className="flex-1 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleTestRide(vehicle.id)}
                        className="flex-1 px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Test Ride
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-6" data-product-shop>
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-96 h-64 bg-gradient-to-br from-gray-50 to-white flex-shrink-0">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-contain object-center p-6"
                      />
                      <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {vehicle.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {vehicle.tagline}
                          </p>
                        </div>
                        <div className="text-4xl font-bold text-teal-600">
                          {vehicle.price}
                        </div>
                      </div>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Range</div>
                          <div className="text-sm font-semibold text-gray-900">{vehicle.specs.range}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Top Speed</div>
                          <div className="text-sm font-semibold text-gray-900">{vehicle.specs.topSpeed}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Motor</div>
                          <div className="text-sm font-semibold text-gray-900">{vehicle.specs.motor}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">{vehicle.specs.seating ? 'Seating' : 'Charging'}</div>
                          <div className="text-sm font-semibold text-gray-900">{vehicle.specs.seating || vehicle.specs.charging}</div>
                        </div>
                      </div>

                      {/* Features */}
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

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleViewDetails(vehicle.id)}
                          className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleTestRide(vehicle.id)}
                          className="px-8 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                        >
                          Test Ride
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join thousands of satisfied customers who have made the switch to sustainable transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/test-ride')}
              className="px-8 py-4 bg-white text-teal-600 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Test Ride
            </button>
            <button
              onClick={() => navigate('/#dealers')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-base font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Find Nearest Dealer
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
