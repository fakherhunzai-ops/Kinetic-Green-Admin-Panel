import { useState } from 'react';

interface DealerSectionProps {
  vehicle: {
    name: string;
  };
}

export default function DealerSection({ vehicle }: DealerSectionProps) {
  const [selectedCity, setSelectedCity] = useState('');
  const [showForm, setShowForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const dealers = [
    {
      id: 1,
      name: 'Kinetic Green Motors - Central Delhi',
      address: 'Connaught Place, New Delhi, Delhi 110001',
      distance: '2.5 km',
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Kinetic Green Hub - South Delhi',
      address: 'Saket, New Delhi, Delhi 110017',
      distance: '5.8 km',
      phone: '+91 98765 43211',
      whatsapp: '+91 98765 43211'
    },
    {
      id: 3,
      name: 'Kinetic Green Showroom - West Delhi',
      address: 'Rajouri Garden, New Delhi, Delhi 110027',
      distance: '8.2 km',
      phone: '+91 98765 43212',
      whatsapp: '+91 98765 43212'
    }
  ];

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    alert(`${type} request submitted successfully! We'll contact you soon.`);
    setShowForm(null);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="dealer" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Nearest Dealer
          </h2>
          <p className="text-lg text-gray-600">
            Visit our authorized dealers for test rides and bookings
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <i className="ri-map-pin-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
                <input
                  type="text"
                  placeholder="Enter your city or area"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                />
              </div>
              <button className="px-8 py-4 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                <i className="ri-navigation-line text-lg"></i>
                Use My Location
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map((dealer) => (
            <div key={dealer.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {dealer.name}
                  </h3>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {dealer.distance}
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <i className="ri-map-pin-line text-gray-400 mt-0.5"></i>
                  <span>{dealer.address}</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <a
                  href={`tel:${dealer.phone}`}
                  className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line text-xl text-gray-700 mb-1"></i>
                  <span className="text-xs text-gray-600">Call</span>
                </a>
                <a
                  href={`https://wa.me/${dealer.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-xl text-gray-700 mb-1"></i>
                  <span className="text-xs text-gray-600">WhatsApp</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(dealer.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-navigation-line text-xl text-gray-700 mb-1"></i>
                  <span className="text-xs text-gray-600">Directions</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShowForm(`testride-${dealer.id}`)}
                  className="px-4 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Test Ride
                </button>
                <button
                  onClick={() => setShowForm(`quote-${dealer.id}`)}
                  className="px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6" onClick={() => setShowForm(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {showForm.startsWith('testride') ? 'Book Test Ride' : 'Request Quote'}
              </h3>
              <button
                onClick={() => setShowForm(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form onSubmit={(e) => handleSubmit(e, showForm.startsWith('testride') ? 'Test Ride' : 'Quote')} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm resize-none"
                  placeholder="Any specific requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
