import Navbar from '../../components/feature/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FleetSolutions from './components/FleetSolutions';
import CaseStudies from './components/CaseStudies';
import PricingPlans from './components/PricingPlans';
import PartnersSection from './components/PartnersSection';
import ContactForm from './components/ContactForm';
import Footer from '../home/components/Footer';

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FleetSolutions />
      <CaseStudies />
      <PricingPlans />
      <PartnersSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
