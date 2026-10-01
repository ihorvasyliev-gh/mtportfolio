import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import CompCard from './components/CompCard';
import Digitals from './components/Digitals';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import BookingModal from './components/BookingModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxShoots, setLightboxShoots] = useState(portfolioData.shoots);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (selectedShoot, shootList = portfolioData.shoots) => {
    setLightboxShoots(shootList);
    const index = shootList.findIndex((s) => s.id === selectedShoot.id);
    setLightboxIndex(index >= 0 ? index : 0);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-noir-950 text-ivory-100 flex flex-col selection:bg-champagne-400 selection:text-noir-950">
      {/* Sticky Glassmorphic Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <CompCard onOpenBooking={() => setIsBookingOpen(true)} />
        <Digitals onOpenLightbox={handleOpenLightbox} />
        <Press />
        <Contact onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        shoots={lightboxShoots}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
