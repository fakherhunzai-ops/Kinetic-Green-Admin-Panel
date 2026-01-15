const caseStudies = [
  {
    company: 'SwiftDeliver Logistics',
    industry: 'E-commerce Delivery',
    logo: 'ri-shopping-bag-3-line',
    fleetSize: '250 Vehicles',
    savings: '₹1.2 Cr Annual Savings',
    testimonial: 'Switching to Kinetic Green electric vehicles has transformed our delivery operations. We\'ve reduced our operating costs by 45% while improving our delivery efficiency. The fleet management system gives us complete visibility and control.',
    person: 'Rajesh Kumar',
    position: 'Operations Director',
    results: [
      { metric: '45%', label: 'Cost Reduction' },
      { metric: '30%', label: 'Faster Deliveries' },
      { metric: '100%', label: 'Zero Emissions' }
    ]
  },
  {
    company: 'GreenCab Services',
    industry: 'Passenger Transport',
    logo: 'ri-taxi-line',
    fleetSize: '180 Vehicles',
    savings: '₹85L Annual Savings',
    testimonial: 'Our passengers love the smooth, quiet ride of electric vehicles. We\'ve seen a significant increase in customer satisfaction and repeat bookings. The low maintenance costs have dramatically improved our profit margins.',
    person: 'Priya Sharma',
    position: 'CEO & Founder',
    results: [
      { metric: '40%', label: 'Lower Costs' },
      { metric: '95%', label: 'Customer Satisfaction' },
      { metric: '25%', label: 'Revenue Growth' }
    ]
  },
  {
    company: 'FreshMart Distribution',
    industry: 'Food & Grocery',
    logo: 'ri-store-2-line',
    fleetSize: '120 Vehicles',
    savings: '₹65L Annual Savings',
    testimonial: 'The reliability and efficiency of Kinetic Green vehicles have exceeded our expectations. We can now make more deliveries per day with lower costs. The dedicated support team has been exceptional in helping us optimize our fleet operations.',
    person: 'Amit Patel',
    position: 'Fleet Manager',
    results: [
      { metric: '50%', label: 'More Deliveries' },
      { metric: '38%', label: 'Cost Savings' },
      { metric: '60%', label: 'Less Downtime' }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories from Our <span className="text-teal-600">Business Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how leading businesses across India are achieving remarkable results with Kinetic Green electric vehicle fleets.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex-shrink-0">
                      <i className={`${study.logo} text-3xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.company}</h3>
                      <p className="text-sm text-gray-600">{study.industry}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <i className="ri-car-line text-teal-600"></i>
                      <span className="text-sm font-semibold text-gray-700">{study.fleetSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-money-rupee-circle-line text-teal-600"></i>
                      <span className="text-sm font-semibold text-gray-700">{study.savings}</span>
                    </div>
                  </div>

                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{study.testimonial}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                      <i className="ri-user-line text-xl text-gray-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.person}</div>
                      <div className="text-sm text-gray-600">{study.position}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-6">Key Results</h4>
                  <div className="space-y-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl">
                        <div className="text-3xl font-bold text-teal-600 mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-700">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
