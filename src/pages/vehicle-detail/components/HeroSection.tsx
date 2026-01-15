interface HeroSectionProps {
  vehicle: {
    name: string;
    tagline: string;
    rating: number;
    reviews: number;
    startingPrice: string;
    gallery: Array<{ url: string; alt: string }>;
  };
}

export default function HeroSection({ vehicle }: HeroSectionProps) {
  const scrollToDealer = () => {
    const dealerSection = document.getElementById('dealer');
    if (dealerSection) {
      dealerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
          <img
            src={vehicle.gallery[0]?.url}
            alt={vehicle.gallery[0]?.alt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {vehicle.name}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {vehicle.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
