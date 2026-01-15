import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

interface Dealer {
  id: string;
  name: string;
  contact: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  vehiclesSupported: string[];
  active: boolean;
  lat: number;
  lng: number;
}

export default function DealersManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [filterCity, setFilterCity] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);

  const dealers: Dealer[] = [
    {
      id: '1',
      name: 'Green Wheels Mumbai',
      contact: '+91 98765 43210',
      email: 'mumbai@greenwheels.com',
      address: 'Shop 12, Andheri West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400053',
      vehiclesSupported: ['E-Luna', 'Urban Scooter', 'E-Rickshaw'],
      active: true,
      lat: 19.1136,
      lng: 72.8697
    },
    {
      id: '2',
      name: 'EV Hub Bangalore',
      contact: '+91 98765 43211',
      email: 'bangalore@evhub.com',
      address: 'MG Road, Koramangala',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560034',
      vehiclesSupported: ['E-Luna', 'Urban Scooter', 'EV Golf Cart'],
      active: true,
      lat: 12.9352,
      lng: 77.6245
    },
    {
      id: '3',
      name: 'Electric Motors Delhi',
      contact: '+91 98765 43212',
      email: 'delhi@electricmotors.com',
      address: 'Connaught Place',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      vehiclesSupported: ['E-Luna', 'E-Rickshaw'],
      active: true,
      lat: 28.6315,
      lng: 77.2167
    },
    {
      id: '4',
      name: 'Eco Rides Pune',
      contact: '+91 98765 43213',
      email: 'pune@ecorides.com',
      address: 'FC Road, Shivajinagar',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411004',
      vehiclesSupported: ['Urban Scooter', 'E-Rickshaw', 'EV Golf Cart'],
      active: false,
      lat: 18.5204,
      lng: 73.8567
    },
    {
      id: '5',
      name: 'Future Mobility Chennai',
      contact: '+91 98765 43214',
      email: 'chennai@futuremobility.com',
      address: 'Anna Nagar',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600040',
      vehiclesSupported: ['E-Luna', 'Urban Scooter'],
      active: true,
      lat: 13.0843,
      lng: 80.2705
    },
    {
      id: '6',
      name: 'Green Drive Hyderabad',
      contact: '+91 98765 43215',
      email: 'hyderabad@greendrive.com',
      address: 'Banjara Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500034',
      vehiclesSupported: ['E-Luna', 'E-Rickshaw', 'EV Golf Cart'],
      active: true,
      lat: 17.4065,
      lng: 78.4772
    }
  ];

  const states = ['all', ...Array.from(new Set(dealers.map(d => d.state)))];
  const cities = filterState === 'all' 
    ? ['all', ...Array.from(new Set(dealers.map(d => d.city)))]
    : ['all', ...Array.from(new Set(dealers.filter(d => d.state === filterState).map(d => d.city)))];

  const filteredDealers = dealers.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = filterState === 'all' || dealer.state === filterState;
    const matchesCity = filterCity === 'all' || dealer.city === filterCity;
    return matchesSearch && matchesState && matchesCity;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dealers Management</h1>
            <p className="text-gray-600 mt-1">Manage your dealer network and locations</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowBulkImport(true)}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-upload-line mr-2"></i>
              Bulk Import CSV
            </button>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-line mr-2"></i>
              Add Dealer
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, city, or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            <div>
              <select 
                value={filterState}
                onChange={(e) => {
                  setFilterState(e.target.value);
                  setFilterCity('all');
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
              >
                {states.map(state => (
                  <option key={state} value={state}>
                    {state === 'all' ? 'All States' : state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select 
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? 'All Cities' : city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <strong>{filteredDealers.length}</strong> of <strong>{dealers.length}</strong> dealers
          </p>
          <button className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
            <i className="ri-download-line mr-2"></i>
            Export List
          </button>
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map((dealer) => (
            <div 
              key={dealer.id} 
              onClick={() => setSelectedDealer(dealer)}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{dealer.name}</h3>
                  <p className="text-sm text-gray-600">{dealer.city}, {dealer.state}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  dealer.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {dealer.active ? 'Active' : 'Inactive'}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{dealer.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{dealer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{dealer.address}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Vehicles Supported:</p>
                <div className="flex flex-wrap gap-2">
                  {dealer.vehiclesSupported.map((vehicle, index) => (
                    <span key={index} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dealer Detail Modal */}
      {selectedDealer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Dealer Details</h3>
              <button 
                onClick={() => setSelectedDealer(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dealer Name</label>
                  <input
                    type="text"
                    defaultValue={selectedDealer.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                  <input
                    type="text"
                    defaultValue={selectedDealer.contact}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={selectedDealer.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select 
                    defaultValue={selectedDealer.active ? 'active' : 'inactive'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Address Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      defaultValue={selectedDealer.address}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      defaultValue={selectedDealer.city}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      defaultValue={selectedDealer.state}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      defaultValue={selectedDealer.pincode}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Location on Map</h4>
                <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d${selectedDealer.lng}!3d${selectedDealer.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Vehicles Supported */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Vehicles Supported</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['E-Luna', 'Urban Scooter', 'E-Rickshaw', 'EV Golf Cart'].map((vehicle) => (
                    <label key={vehicle} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        defaultChecked={selectedDealer.vehiclesSupported.includes(vehicle)}
                        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" 
                      />
                      <span className="text-sm text-gray-700">{vehicle}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-save-line mr-2"></i>
                  Save Changes
                </button>
                <button className="px-6 py-3 text-red-600 bg-red-50 font-semibold rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-delete-bin-line mr-2"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {showBulkImport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Bulk Import Dealers</h3>
              <button 
                onClick={() => setShowBulkImport(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                <i className="ri-file-upload-line text-5xl text-gray-400 mb-3"></i>
                <p className="text-gray-900 font-medium mb-1">Drop CSV file here or click to upload</p>
                <p className="text-sm text-gray-600">Maximum file size: 5MB</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-medium mb-2">CSV Format Requirements:</p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Columns: Name, Contact, Email, Address, City, State, Pincode</li>
                  <li>• First row should contain column headers</li>
                  <li>• Use comma (,) as delimiter</li>
                </ul>
              </div>

              <button className="w-full px-4 py-3 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-download-line mr-2"></i>
                Download Sample CSV
              </button>

              <button className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-upload-2-line mr-2"></i>
                Upload & Import
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
