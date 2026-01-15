const partners = [
  { name: 'Amazon', logo: 'ri-amazon-line' },
  { name: 'Flipkart', logo: 'ri-shopping-cart-line' },
  { name: 'Swiggy', logo: 'ri-restaurant-line' },
  { name: 'Zomato', logo: 'ri-e-bike-2-line' },
  { name: 'BigBasket', logo: 'ri-shopping-basket-line' },
  { name: 'Dunzo', logo: 'ri-truck-line' },
  { name: 'Uber', logo: 'ri-taxi-line' },
  { name: 'Ola', logo: 'ri-car-line' }
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-teal-600">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the growing network of businesses that trust Kinetic Green for their electric vehicle fleet needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-center">
                <i className={`${partner.logo} text-5xl text-gray-400 group-hover:text-teal-600 transition-colors mb-2`}></i>
                <div className="text-sm font-semibold text-gray-600">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Interested in becoming a Kinetic Green dealer or franchise partner? Join our growing network and build a profitable business in the electric vehicle industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Franchise Inquiry
            </a>
            <a href="#contact" className="px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-400 transition-colors cursor-pointer whitespace-nowrap">
              Dealer Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
