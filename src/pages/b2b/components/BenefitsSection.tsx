const benefits = [
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Reduce Operating Costs',
    description: 'Save up to 40% on fuel and maintenance costs compared to traditional vehicles. Lower total cost of ownership with minimal servicing requirements.',
    stats: '₹2.5L+ Annual Savings per Vehicle'
  },
  {
    icon: 'ri-leaf-line',
    title: 'Zero Emissions',
    description: 'Meet your sustainability goals and corporate social responsibility commitments. Reduce your carbon footprint while improving brand reputation.',
    stats: '5 Tons CO₂ Saved per Vehicle/Year'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Comprehensive Warranty',
    description: 'Industry-leading warranty coverage on battery and vehicle components. Extended warranty options available for fleet customers.',
    stats: '5 Years Battery Warranty'
  },
  {
    icon: 'ri-tools-line',
    title: 'Fleet Management',
    description: 'Advanced telematics and fleet management solutions. Real-time tracking, performance monitoring, and predictive maintenance alerts.',
    stats: 'Real-time Fleet Monitoring'
  },
  {
    icon: 'ri-bank-line',
    title: 'Flexible Financing',
    description: 'Customized financing solutions tailored to your business needs. Leasing options, bulk purchase discounts, and government subsidy assistance.',
    stats: 'Up to 80% Financing Available'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Dedicated Support',
    description: 'Priority customer service with dedicated account managers. On-site maintenance support and rapid response times for fleet customers.',
    stats: '24/7 Priority Support'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Kinetic Green for Your <span className="text-teal-600">Business Fleet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with our electric vehicle solutions. Experience the benefits of sustainable, cost-effective mobility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <i className={`${benefit.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-teal-600">{benefit.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
