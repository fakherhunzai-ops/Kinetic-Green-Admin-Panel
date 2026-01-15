const plans = [
  {
    name: 'Starter Fleet',
    description: 'Perfect for small businesses starting their electric journey',
    minVehicles: '5-20 Vehicles',
    price: 'Custom Pricing',
    features: [
      'Bulk purchase discount up to 10%',
      'Standard warranty coverage',
      'Basic fleet management tools',
      'Email support',
      'Quarterly maintenance checks',
      'Government subsidy assistance'
    ],
    cta: 'Get Quote',
    popular: false
  },
  {
    name: 'Growth Fleet',
    description: 'Ideal for growing businesses scaling their operations',
    minVehicles: '21-100 Vehicles',
    price: 'Custom Pricing',
    features: [
      'Bulk purchase discount up to 18%',
      'Extended warranty options',
      'Advanced fleet management system',
      'Priority phone & email support',
      'Monthly maintenance checks',
      'Dedicated account manager',
      'Custom financing solutions',
      'Driver training programs'
    ],
    cta: 'Get Quote',
    popular: true
  },
  {
    name: 'Enterprise Fleet',
    description: 'Comprehensive solutions for large-scale operations',
    minVehicles: '100+ Vehicles',
    price: 'Custom Pricing',
    features: [
      'Maximum bulk discount up to 25%',
      'Premium warranty & insurance',
      'Full fleet management suite',
      '24/7 dedicated support hotline',
      'On-site maintenance team',
      'Executive account management',
      'Flexible leasing options',
      'Comprehensive training programs',
      'Custom vehicle modifications',
      'Performance analytics & reporting'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible <span className="text-teal-600">Fleet Packages</span> for Every Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your business size. All plans include comprehensive support and can be customized to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-teal-300 transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-teal-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-sm font-semibold mb-2 ${plan.popular ? 'text-teal-100' : 'text-teal-600'}`}>
                  {plan.minVehicles}
                </div>
                <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className={`ri-checkbox-circle-fill text-xl flex-shrink-0 ${
                      plan.popular ? 'text-teal-200' : 'text-teal-600'
                    }`}></i>
                    <span className={`text-sm ${plan.popular ? 'text-teal-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors cursor-pointer whitespace-nowrap ${
                  plan.popular
                    ? 'bg-white text-teal-600 hover:bg-gray-100'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We can create a tailored package for your unique requirements.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
            Contact our sales team
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
