import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-noir-950 border-t border-noir-800/80 py-16 text-sand-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <span className="font-serif text-xl tracking-[0.2em] text-ivory-100 uppercase">
            {portfolioData.personal.name}
          </span>
          <p className="text-[11px] font-mono tracking-widest text-champagne-400 uppercase">
            {portfolioData.personal.brand} · Cork, Ireland
          </p>
          <p className="text-[10px] text-sand-500 max-w-sm">
            Available worldwide for editorial, high-fashion campaigns, commercial lookbooks, and runway.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-widest font-mono">
          <a href="#gallery" className="hover:text-champagne-300 transition-colors">Lookbooks</a>
          <a href="#comp-card" className="hover:text-champagne-300 transition-colors">Comp Card</a>
          <a href="#digitals" className="hover:text-champagne-300 transition-colors">Digitals</a>
          <a href="#press" className="hover:text-champagne-300 transition-colors">Press</a>
          <a href="#contact" className="hover:text-champagne-300 transition-colors">Booking</a>
        </div>

        {/* Back To Top & Social */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-noir-900 border border-noir-800 text-sand-300 hover:text-champagne-300 hover:border-champagne-400 transition-colors"
            title="Instagram"
          >
            <InstagramIcon size={15} />
          </a>

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="p-2.5 rounded-full bg-noir-900 border border-noir-800 text-sand-300 hover:text-champagne-300 hover:border-champagne-400 transition-colors"
            title="Email"
          >
            <Mail size={15} />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-noir-900 border border-noir-800 text-sand-300 hover:text-champagne-300 hover:border-champagne-400 transition-colors font-mono text-[10px] uppercase tracking-widest"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 pt-6 border-t border-noir-900 flex flex-col sm:flex-row items-center justify-between text-[10px] text-sand-500 font-mono gap-3">
        <div>
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted in Cork, Ireland with</span>
          <span className="text-champagne-400">editorial precision</span>
        </div>
      </div>
    </footer>
  );
}
