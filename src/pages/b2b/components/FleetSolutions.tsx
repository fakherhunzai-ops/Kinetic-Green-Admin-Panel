import { useState } from 'react';

const solutions = [
  {
    id: 1,
    title: 'Last-Mile Delivery',
    description: 'Perfect for e-commerce, food delivery, and courier services',
    vehicles: ['E-Rickshaw', 'Urban Scooter'],
    benefits: ['Reduced delivery costs', 'Zero emissions', 'Easy parking', 'Quick charging'],
    image: 'https://readdy.ai/api/search-image?query=electric%20scooter%20delivery%20rider%20with%20food%20delivery%20box%20on%20urban%20street%2C%20last%20mile%20delivery%20service%2C%20professional%20commercial%20photography%2C%20natural%20lighting%2C%20modern%20city%20background&width=800&height=600&seq=fleet001&orientation=landscape',
    icon: 'ri-truck-line'
  },
  {
    id: 2,
    title: 'Passenger Transport',
    description: 'Ideal for corporate shuttles, tourism, and hospitality',
    vehicles: ['E-Rickshaw', 'EV Golf Cart'],
    benefits: ['Comfortable seating', 'Weather protection', 'Low operating cost', 'Eco-friendly image'],
    image: 'https://readdy.ai/api/search-image?query=electric%20rickshaw%20transporting%20passengers%20at%20luxury%20resort%20with%20palm%20trees%2C%20tourism%20hospitality%20service%2C%20professional%20commercial%20photography%2C%20natural%20lighting%2C%20premium%20environment&width=800&height=600&seq=fleet002&orientation=landscape',
    icon: 'ri-group-line'
  },
  {
    id: 3,
    title: 'Cargo & Logistics',
    description: 'Heavy-duty solutions for warehousing and construction',
    vehicles: ['E-Rickshaw', 'EV Golf Cart'],
    benefits: ['High load capacity', 'Long range', 'Durable build', 'Cost-effective'],
    image: 'https://readdy.ai/api/search-image?query=electric%20cargo%20vehicle%20loaded%20with%20boxes%20at%20warehouse%2C%20logistics%20and%20freight%20transport%2C%20professional%20commercial%20photography%2C%20industrial%20setting%2C%20bright%20lighting&width=800&height=600&seq=fleet003&orientation=landscape',
    icon: 'ri-box-3-line'
  },
  {
    id: 4,
    title: 'Franchise & Dealership',
    description: 'Become our partner and grow your business',
    vehicles: ['All Models Available'],
    benefits: ['Business support', 'Marketing assistance', 'Training provided', 'Attractive margins'],
    image: 'https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20showroom%20with%20multiple%20scooters%20and%20rickshaws%20on%20display%2C%20franchise%20dealership%20business%2C%20professional%20commercial%20photography%2C%20bright%20lighting%2C%20business%20environment&width=800&height=600&seq=fleet004&orientation=landscape',
    icon: 'ri-store-3-line'
  }
];

const products = [
  {
    id: 1,
    name: 'E-Luna',
    category: 'Electric Scooter',
    image: 'https://readdy.ai/api/search-image?query=vintage%20retro%20style%20electric%20scooter%20in%20cream%20white%20color%20on%20white%20minimal%20background%2C%20classic%20Luna%20inspired%20design%20with%20modern%20electric%20elements%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=400&height=300&seq=eluna-fleet&orientation=landscape',
    specs: ['60 km range', '45 km/h', 'Retro design']
  },
  {
    id: 2,
    name: 'Urban Scooter',
    category: 'Electric Scooter',
    image: 'https://readdy.ai/api/search-image?query=modern%20sleek%20electric%20scooter%20in%20teal%20green%20color%20on%20white%20minimal%20background%2C%20contemporary%20urban%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20angle%20view%2C%20commercial%20quality&width=400&height=300&seq=urban-fleet&orientation=landscape',
    specs: ['75 km range', '55 km/h', 'Smart features']
  },
  {
    id: 3,
    name: 'E-Rickshaw',
    category: 'Three Wheeler',
    image: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20green%20and%20yellow%20colors%20on%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=400&height=300&seq=rickshaw-fleet&orientation=landscape',
    specs: ['120 km range', '4+1 seating', 'Commercial use']
  },
  {
    id: 4,
    name: 'EV Golf Cart',
    category: 'Golf Cart',
    image: 'https://readdy.ai/api/search-image?query=premium%20white%20electric%20golf%20cart%20on%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20luxury%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=400&height=300&seq=golfcart-fleet&orientation=landscape',
    specs: ['80 km range', '6 seating', 'Premium comfort']
  }
];

export default function FleetSolutions() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Fleet Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored electric vehicle solutions for every business need
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setSelectedSolution(solution)}
              className={`group px-6 py-4 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedSolution.id === solution.id
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <i className={`${solution.icon} text-xl`}></i>
                <span>{solution.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Solution Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-96 md:h-auto">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-600 rounded-xl">
                    <i className={`${selectedSolution.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {selectedSolution.title}
                  </h3>
                </div>
                <p className="text-white/90 text-base">
                  {selectedSolution.description}
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-10">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">
                  Recommended Vehicles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSolution.vehicles.map((vehicle, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-teal-50 text-teal-700 text-sm font-semibold rounded-lg"
                    >
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedSolution.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-5 h-5 flex items-center justify-center bg-teal-100 rounded-full flex-shrink-0">
                        <i className="ri-check-line text-xs text-teal-600"></i>
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gray-900 text-white text-base font-semibold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Our Product Range
            </h3>
            <p className="text-gray-600">
              Choose from our diverse fleet of electric vehicles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {product.name}
                  </h4>
                  <div className="space-y-2 mb-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full px-4 py-2.5 bg-gray-100 text-gray-900 text-sm font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
