
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20electric%20scooter%20rider%20in%20motion%20on%20urban%20city%20street%20with%20blurred%20background%2C%20dynamic%20movement%2C%20professional%20photography%2C%20clean%20aesthetic%2C%20teal%20and%20green%20color%20tones%2C%20contemporary%20urban%20mobility%20lifestyle%2C%20high%20quality%20commercial%20photography%20with%20soft%20natural%20lighting%20and%20shallow%20depth%20of%20field&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="Electric Vehicle Hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>
      
      {/* Admin Login Button - Top Right */}
      <div className="absolute top-24 right-8 z-20">
        <a 
          href="/admin/login" 
          className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 shadow-lg"
        >
          <i className="ri-admin-line text-lg"></i>
          Admin Dashboard
        </a>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Ride That Moves You
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of sustainable mobility with our range of electric vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#vehicles" className="px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              Explore Vehicles
            </a>
            <a href="#dealers" className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Find Dealer
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#vehicles" className="w-10 h-10 flex items-center justify-center cursor-pointer animate-bounce">
          <i className="ri-arrow-down-line text-3xl text-white"></i>
        </a>
      </div>
    </section>
  );
}
