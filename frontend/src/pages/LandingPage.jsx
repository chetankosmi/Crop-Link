import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Schemes from '../components/schemes/Schemes';
import SmartFarming from '../components/smartfarming/SmartFarming';
import Videos from '../components/videos/Videos';
import Stories from '../components/stories/Stories';
import HowItWorks from '../components/workflow/HowItWorks';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

// Modals
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import SchemeDetailModal from '../components/modals/SchemeDetailModal';
import VideoPlayerModal from '../components/modals/VideoPlayerModal';
import ServiceDetailModal from '../components/modals/ServiceDetailModal';
import EligibilityCheckerModal from '../components/modals/EligibilityCheckerModal';

const LandingPage = () => {
  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="landing-page-root">
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main Landing Sections */}
      <main>
        {/* 1. Hero Slideshow Section */}
        <Hero
          onExploreSchemes={() => scrollToSection('schemes')}
          onGetStarted={() => setIsRegisterOpen(true)}
        />

        {/* 2. About CropLink Section */}
        <About
          onExploreServices={() => scrollToSection('services')}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 3. Our Services Section */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 4. Agriculture Schemes Section */}
        <Schemes
          onSelectScheme={(scheme) => setSelectedScheme(scheme)}
          onCheckEligibility={() => setIsEligibilityOpen(true)}
        />

        {/* 5. Smart Farming Section */}
        <SmartFarming
          onBookDemo={(tech) => {
            scrollToSection('contact');
          }}
        />

        {/* 6. Agriculture Videos Section */}
        <Videos
          onSelectVideo={(video) => setSelectedVideo(video)}
        />

        {/* 7. Farmer Success Stories Section */}
        <Stories />

        {/* 8. How CropLink Works Section */}
        <HowItWorks
          onGetStarted={() => setIsRegisterOpen(true)}
        />

        {/* 9. Contact Help Desk Section */}
        <Contact />
      </main>

      {/* 10. Footer Section */}
      <Footer
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Modals & Dialogs */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <SchemeDetailModal
        scheme={selectedScheme}
        isOpen={Boolean(selectedScheme)}
        onClose={() => setSelectedScheme(null)}
      />

      <VideoPlayerModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />

      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onSelectScheme={(scheme) => {
          setSelectedScheme(scheme);
        }}
      />
    </div>
  );
};

export default LandingPage;
