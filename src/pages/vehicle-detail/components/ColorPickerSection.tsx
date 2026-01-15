
import { useState } from 'react';

interface ColorVariant {
  id: number;
  color: string;
  colorCode: string;
  price: string;
}

interface Vehicle {
  id: number;
  name: string;
  variants: ColorVariant[];
  gallery: Array<{ id: number; type: string; url: string; alt: string }>;
}

interface ColorPickerSectionProps {
  vehicle: Vehicle;
}

export default function ColorPickerSection({ vehicle }: ColorPickerSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState(vehicle.variants[0]);

  const getCurrentImage = () => {
    const variantImage = vehicle.gallery.find(
      (img) => img.alt.toLowerCase().includes(selectedVariant.color.toLowerCase())
    );
    return variantImage?.url || vehicle.gallery[0]?.url;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <img
                src={getCurrentImage()}
                alt={`${vehicle.name} - ${selectedVariant.color}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right: Color Selection */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Choose Your {vehicle.name}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {selectedVariant.color}
            </p>

            {/* Color Swatches */}
            <div className="flex flex-wrap gap-4">
              {vehicle.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`relative w-16 h-16 rounded-full transition-all cursor-pointer ${
                    selectedVariant.id === variant.id
                      ? 'ring-4 ring-teal-600 ring-offset-4 scale-110'
                      : 'hover:scale-105 ring-2 ring-gray-200'
                  }`}
                  style={{ backgroundColor: variant.colorCode }}
                  aria-label={variant.color}
                  title={variant.color}
                >
                  {selectedVariant.id === variant.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-check-line text-white text-2xl drop-shadow-lg"></i>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-12">
              <button className="px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                Book Test Ride
              </button>
              <button className="px-8 py-4 bg-gray-900 text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                Find Dealer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
