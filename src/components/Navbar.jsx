import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Lookbooks', href: '#gallery' },
    { label: 'Comp Card', href: '#comp-card' },
    { label: 'Digitals (Snaps)', href: '#digitals' },
    { label: 'Press & Features', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-noir-950/90 backdrop-blur-md border-b border-noir-800/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-noir-950/80 via-noir-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="group flex flex-col items-start focus:outline-none">
          <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-ivory-50 group-hover:text-champagne-300 transition-colors uppercase font-light">
            {portfolioData.personal.name}
          </span>
          <span className="text-[10px] tracking-[0.3em] text-champagne-400/90 uppercase font-mono font-medium flex items-center gap-1.5 -mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 inline-block animate-pulse"></span>
            {portfolioData.personal.brand}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-sand-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-champagne-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={portfolioData.personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-sand-200 hover:text-champagne-300 px-3 py-1.5 rounded-full border border-noir-700/80 hover:border-champagne-500/50 transition-all duration-300"
            title="Follow on Instagram"
          >
            <Instagram size={14} className="text-champagne-400" />
            <span className="font-mono text-[11px] tracking-wider">{portfolioData.personal.handle}</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>

          <button
            onClick={onOpenBooking}
            className="text-xs uppercase tracking-[0.2em] font-semibold bg-champagne-400 hover:bg-champagne-300 text-noir-950 px-5 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,190,148,0.3)] active:scale-95"
          >
            Book Mariia
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-sand-200 hover:text-ivory-50 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-noir-950/98 backdrop-blur-2xl border-b border-noir-800 px-8 py-8 animate-fade-in space-y-6">
          <nav className="flex flex-col space-y-5 text-sm uppercase tracking-[0.25em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sand-100 hover:text-champagne-300 transition-colors py-1 border-b border-noir-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={portfolioData.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-sand-200 py-3 rounded border border-noir-700 hover:border-champagne-400"
            >
              <Instagram size={16} className="text-champagne-400" />
              <span>Instagram {portfolioData.personal.handle}</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center text-xs uppercase tracking-[0.25em] font-semibold bg-champagne-400 text-noir-950 py-3 rounded-sm"
            >
              Book Mariia
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
