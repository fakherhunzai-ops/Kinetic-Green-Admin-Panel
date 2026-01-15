
const features = [
  {
    icon: 'ri-leaf-line',
    title: 'Eco-Friendly',
    description: 'Zero emissions for a cleaner, greener future'
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Advanced Technology',
    description: 'Cutting-edge electric powertrains and smart features'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Reliable Quality',
    description: 'Built to last with rigorous quality standards'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Support',
    description: 'Dedicated customer service and nationwide network'
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for India, Designed for the Planet
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Kinetic Green is pioneering the electric vehicle revolution in India with a commitment to sustainable mobility. Our vehicles combine cutting-edge technology with practical design, making eco-friendly transportation accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With decades of automotive expertise and a vision for a cleaner future, we're not just building vehicles – we're building a movement towards sustainable urban mobility that benefits both people and the planet.
            </p>
            <a
              href="/about"
              className="px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
            >
              Learn More About Us
            </a>
          </div>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20manufacturing%20facility%20with%20green%20vehicles%20on%20assembly%20line%2C%20professional%20industrial%20photography%2C%20bright%20clean%20environment%2C%20workers%20in%20safety%20gear%2C%20sustainable%20production%2C%20teal%20and%20green%20color%20scheme&width=800&height=600&seq=about001&orientation=landscape"
              alt="About Kinetic Green"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-4">
                <i className={`${feature.icon} text-3xl text-teal-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
