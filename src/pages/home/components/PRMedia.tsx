
const newsItems = [
  {
    id: 1,
    title: 'Kinetic Green Launches New Electric Scooter Range',
    excerpt: 'Revolutionary new models with extended range and smart features set to transform urban mobility across India',
    date: 'March 15, 2024',
    image: 'https://readdy.ai/api/search-image?query=modern%20electric%20scooter%20product%20launch%20event%20with%20green%20vehicles%20on%20display%2C%20professional%20event%20photography%2C%20bright%20indoor%20lighting%2C%20corporate%20setting%2C%20people%20viewing%20new%20products%2C%20teal%20and%20green%20color%20scheme&width=800&height=500&seq=news001&orientation=landscape',
    category: 'Product Launch'
  },
  {
    id: 2,
    title: 'Expanding Dealer Network Across 50 New Cities',
    excerpt: 'Strategic expansion brings electric mobility solutions closer to customers nationwide with comprehensive service support',
    date: 'March 10, 2024',
    image: 'https://readdy.ai/api/search-image?query=business%20expansion%20concept%20with%20map%20of%20India%2C%20electric%20vehicle%20dealership%20network%2C%20professional%20corporate%20photography%2C%20modern%20office%20setting%2C%20bright%20lighting%2C%20green%20and%20teal%20accents&width=800&height=500&seq=news002&orientation=landscape',
    category: 'Business'
  },
  {
    id: 3,
    title: 'Award for Best Sustainable Mobility Solution',
    excerpt: 'Industry recognition for innovative approach to eco-friendly transportation and commitment to reducing carbon emissions',
    date: 'March 5, 2024',
    image: 'https://readdy.ai/api/search-image?query=corporate%20award%20ceremony%20with%20trophy%20and%20electric%20vehicles%2C%20professional%20event%20photography%2C%20elegant%20setting%2C%20warm%20lighting%2C%20business%20professionals%2C%20green%20sustainability%20theme&width=800&height=500&seq=news003&orientation=landscape',
    category: 'Awards'
  }
];

export default function PRMedia() {
  return (
    <section id="media" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements, achievements, and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line"></i>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                >
                  Read More
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/news"
            className="px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}
