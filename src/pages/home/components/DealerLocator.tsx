
import { useState } from 'react';

const dealers = [
  {
    id: 1,
    name: 'Kinetic Green Mumbai Central',
    address: '123 MG Road, Mumbai Central, Mumbai - 400008',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    city: 'Mumbai',
    state: 'Maharashtra',
    area: 'Central',
    lat: 19.0760,
    lng: 72.8777
  },
  {
    id: 2,
    name: 'Kinetic Green Andheri',
    address: '456 Link Road, Andheri West, Mumbai - 400053',
    phone: '+91 98765 43211',
    whatsapp: '+91 98765 43211',
    city: 'Mumbai',
    state: 'Maharashtra',
    area: 'West',
    lat: 19.1136,
    lng: 72.8697
  },
  {
    id: 3,
    name: 'Kinetic Green Thane',
    address: '789 Ghodbunder Road, Thane West, Thane - 400607',
    phone: '+91 98765 43212',
    whatsapp: '+91 98765 43212',
    city: 'Thane',
    state: 'Maharashtra',
    area: 'West',
    lat: 19.2183,
    lng: 72.9781
  },
  {
    id: 4,
    name: 'Kinetic Green Connaught Place',
    address: '12 Connaught Place, New Delhi - 110001',
    phone: '+91 98765 43213',
    whatsapp: '+91 98765 43213',
    city: 'New Delhi',
    state: 'Delhi',
    area: 'Central',
    lat: 28.6315,
    lng: 77.2167
  },
  {
    id: 5,
    name: 'Kinetic Green Dwarka',
    address: '45 Sector 12, Dwarka, New Delhi - 110075',
    phone: '+91 98765 43214',
    whatsapp: '+91 98765 43214',
    city: 'New Delhi',
    state: 'Delhi',
    area: 'West',
    lat: 28.5921,
    lng: 77.0460
  },
  {
    id: 6,
    name: 'Kinetic Green Koramangala',
    address: '78 Koramangala 5th Block, Bangalore - 560095',
    phone: '+91 98765 43215',
    whatsapp: '+91 98765 43215',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'South',
    lat: 12.9352,
    lng: 77.6245
  },
  {
    id: 7,
    name: 'Kinetic Green Whitefield',
    address: '23 ITPL Main Road, Whitefield, Bangalore - 560066',
    phone: '+91 98765 43216',
    whatsapp: '+91 98765 43216',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'East',
    lat: 12.9698,
    lng: 77.7499
  },
  {
    id: 8,
    name: 'Kinetic Green Pune Camp',
    address: '56 MG Road, Camp Area, Pune - 411001',
    phone: '+91 98765 43217',
    whatsapp: '+91 98765 43217',
    city: 'Pune',
    state: 'Maharashtra',
    area: 'Central',
    lat: 18.5204,
    lng: 73.8567
  }
];

export default function DealerLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedDealer, setSelectedDealer] = useState<typeof dealers[0] | null>(null);

  // Get unique states and cities
  const states = ['All States', ...Array.from(new Set(dealers.map(d => d.state)))];
  const cities = selectedState === 'All States' 
    ? ['All Cities', ...Array.from(new Set(dealers.map(d => d.city)))]
    : ['All Cities', ...Array.from(new Set(dealers.filter(d => d.state === selectedState).map(d => d.city)))];

  // Filter dealers based on search and filters
  const filteredDealers = dealers.filter((dealer) => {
    const matchesSearch = searchQuery === '' || 
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.area.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesState = selectedState === 'All States' || dealer.state === selectedState;
    const matchesCity = selectedCity === 'All Cities' || dealer.city === selectedCity;
    
    return matchesSearch && matchesState && matchesCity;
  });

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('All Cities');
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedState('All States');
    setSelectedCity('All Cities');
  };

  return (
    <section id="dealers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Nearest Dealer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our authorized dealers for test rides, service, and expert guidance
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-10 border border-gray-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-lg text-gray-400"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dealer name, city, or area..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full"
                >
                  <i className="ri-close-line text-lg text-gray-500"></i>
                </button>
              )}
            </div>

            {/* State Filter */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                <i className="ri-map-2-line text-lg text-teal-600"></i>
              </div>
              <select
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="appearance-none pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 whitespace-nowrap min-w-[180px]"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-down-s-line text-lg text-gray-500"></i>
              </div>
            </div>

            {/* City Filter */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                <i className="ri-map-pin-line text-lg text-teal-600"></i>
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 whitespace-nowrap min-w-[180px]"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-down-s-line text-lg text-gray-500"></i>
              </div>
            </div>

            {/* Clear Filters Button */}
            {(searchQuery || selectedState !== 'All States' || selectedCity !== 'All Cities') && (
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <i className="ri-refresh-line"></i>
                Clear
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-teal-600">{filteredDealers.length}</span> dealer{filteredDealers.length !== 1 ? 's' : ''} found
            </p>
            {(searchQuery || selectedState !== 'All States' || selectedCity !== 'All Cities') && (
              <div className="flex flex-wrap gap-2">
                {selectedState !== 'All States' && (
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full flex items-center gap-1">
                    {selectedState}
                    <button onClick={() => setSelectedState('All States')} className="cursor-pointer hover:bg-teal-200 rounded-full w-4 h-4 flex items-center justify-center">
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </span>
                )}
                {selectedCity !== 'All Cities' && (
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full flex items-center gap-1">
                    {selectedCity}
                    <button onClick={() => setSelectedCity('All Cities')} className="cursor-pointer hover:bg-teal-200 rounded-full w-4 h-4 flex items-center justify-center">
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredDealers.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                  <i className="ri-map-pin-line text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No dealers found</h3>
                <p className="text-sm text-gray-600 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              filteredDealers.map((dealer) => (
                <div
                  key={dealer.id}
                  onClick={() => setSelectedDealer(dealer)}
                  className={`p-6 bg-white border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg ${
                    selectedDealer?.id === dealer.id
                      ? 'border-teal-600 shadow-lg'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {dealer.name}
                    </h3>
                    {selectedDealer?.id === dealer.id && (
                      <div className="w-6 h-6 flex items-center justify-center bg-teal-600 rounded-full flex-shrink-0">
                        <i className="ri-check-line text-sm text-white"></i>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded">
                      {dealer.state}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                      {dealer.city}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                    <i className="ri-map-pin-line text-teal-600 mt-1 flex-shrink-0"></i>
                    <span>{dealer.address}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${dealer.phone}`}
                      className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="ri-phone-line"></i>
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${dealer.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="ri-whatsapp-line"></i>
                      WhatsApp
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="ri-navigation-line"></i>
                      Directions
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden shadow-lg sticky top-6">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709658!3d19.082177513217388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dealer Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
