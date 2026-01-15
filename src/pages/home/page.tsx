
import { useState } from 'react';
import Hero from './components/Hero';
import VehiclesSection from './components/VehiclesSection';
import DealerLocator from './components/DealerLocator';
import BecomeDealerSection from './components/BecomeDealerSection';
import PRMedia from './components/PRMedia';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from '../../components/feature/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VehiclesSection />
      <DealerLocator />
      <BecomeDealerSection />
      <PRMedia />
      <AboutUs />
      <Footer />
    </div>
  );
}
