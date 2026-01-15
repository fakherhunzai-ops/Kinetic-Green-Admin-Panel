import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import PriceSection from './components/PriceSection';
import SpecificationsSection from './components/SpecificationsSection';
import FeaturesSection from './components/FeaturesSection';
import ColorPickerSection from './components/ColorPickerSection';
import GallerySection from './components/GallerySection';
import DealerSection from './components/DealerSection';
import { vehicleDetails } from '../../mocks/vehicle-details';

export default function VehicleDetail() {
  const { id } = useParams();
  const [showStickyBar, setShowStickyBar] = useState(false);

  const vehicle = vehicleDetails.find(v => v.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
          <a href="/" className="text-teal-600 hover:text-teal-700">Return to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection vehicle={vehicle} />
      <PriceSection vehicle={vehicle} />
      
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 py-4 px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900">{vehicle.name}</h3>
              <p className="text-lg font-bold text-teal-600">{vehicle.startingPrice}</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#dealer"
                className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Test Ride
              </a>
            </div>
          </div>
        </div>
      )}

      <SpecificationsSection vehicle={vehicle} />
      <GallerySection vehicle={vehicle} />
      <FeaturesSection vehicle={vehicle} />
      <ColorPickerSection vehicle={vehicle} />
      <DealerSection vehicle={vehicle} />
      
      <Footer />
    </div>
  );
}
