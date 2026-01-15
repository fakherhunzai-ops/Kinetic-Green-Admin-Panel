import { useState } from 'react';

interface PriceSectionProps {
  vehicle: {
    name: string;
    startingPrice: string;
    emiPrice: string;
    variants: Array<{
      id: number;
      color: string;
      colorCode: string;
      price: string;
    }>;
  };
}

export default function PriceSection({ vehicle }: PriceSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState(vehicle.variants[0]);
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'];

  return (
    <section className="py-0 bg-white sticky top-0 z-30 border-b border-gray-200">
      <div className="bg-teal-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-sm text-white/80">Your {vehicle.name} Price in</span>
                <div className="relative">
                  <button
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className="flex items-center gap-2 text-white font-semibold hover:text-white/90 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>{selectedCity}</span>
                    <i className="ri-arrow-down-s-line text-lg"></i>
                  </button>
                  
                  {showCityDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[160px] z-50">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setSelectedCity(city);
                            setShowCityDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-white/70">
                Select your location to see the most accurate effective price.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{selectedVariant.price}</span>
                  <button className="w-5 h-5 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-information-line text-lg"></i>
                  </button>
                </div>
                <p className="text-xs text-white/70 mt-1">*Ex-showroom price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
