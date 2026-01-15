export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20fleet%20parked%20in%20organized%20rows%20at%20corporate%20facility%20with%20clean%20minimalist%20white%20background%20professional%20business%20setting%20showing%20multiple%20green%20electric%20scooters%20and%20three%20wheelers%20in%20perfect%20alignment%20representing%20sustainable%20commercial%20transportation%20solutions%20with%20bright%20natural%20lighting%20and%20corporate%20environment%20aesthetic&width=1920&height=1080&seq=b2b-hero-001&orientation=landscape" 
          alt="B2B Fleet Solutions" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Power Your Business with <span className="text-teal-400">Green Mobility</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Transform your fleet operations with sustainable electric vehicles. Reduce costs, increase efficiency, and lead the green revolution in commercial transportation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
            Request Fleet Quote
          </a>
          <a href="#solutions" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap border border-white/30">
            Explore Solutions
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
            <div className="text-sm text-gray-200">Business Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">50K+</div>
            <div className="text-sm text-gray-200">Vehicles Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
            <div className="text-sm text-gray-200">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-sm text-gray-200">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
