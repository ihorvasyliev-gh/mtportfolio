import React from 'react';
import { ArrowDown, Sparkles, MapPin, Eye, Scissors } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenBooking }) {
  const { personal, measurements } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16 md:pb-24 pt-32 overflow-hidden bg-noir-950">
      {/* Background Image with Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={personal.heroImage}
          alt={personal.name}
          className="w-full h-full object-cover object-[center_20%] opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-noir-950/30"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Top Tag & Identity */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-noir-900/80 border border-noir-700/80 backdrop-blur-md mb-6 animate-fade-in">
          <Sparkles size={13} className="text-champagne-400" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-champagne-300">
            {personal.brand} · Editorial & Runway
          </span>
          <span className="text-noir-600">|</span>
          <div className="flex items-center gap-1 text-[11px] text-sand-300 tracking-wider">
            <MapPin size={11} className="text-sand-400" />
            <span>Cork, Ireland</span>
          </div>
        </div>

        {/* Big Editorial Name Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] md:tracking-[0.14em] font-light text-ivory-50 uppercase leading-none drop-shadow-2xl">
          {personal.name}
        </h1>

        {/* Subtitle / Positioning Statement */}
        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-light tracking-[0.25em] text-sand-200 uppercase max-w-2xl">
          {personal.title}
        </p>

        {/* Quick Measurements Ticker */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs uppercase tracking-[0.2em] text-sand-400 bg-noir-900/60 backdrop-blur-md px-6 py-3 rounded-full border border-noir-800">
          <div className="flex items-center gap-1.5">
            <span className="text-sand-600 font-mono">HEIGHT:</span>
            <span className="text-ivory-100 font-semibold">{measurements.heightCm} cm / {measurements.heightIn}</span>
          </div>
          <span className="hidden sm:inline text-noir-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-sand-600 font-mono">BUST-WAIST-HIPS:</span>
            <span className="text-ivory-100 font-semibold">{measurements.bustCm}-{measurements.waistCm}-{measurements.hipsCm}</span>
          </div>
          <span className="hidden sm:inline text-noir-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-sand-600 font-mono">EYES:</span>
            <span className="text-ivory-100 font-semibold">{measurements.eyes}</span>
          </div>
          <span className="hidden sm:inline text-noir-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-sand-600 font-mono">HAIR:</span>
            <span className="text-ivory-100 font-semibold">{measurements.hair}</span>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#gallery"
            className="w-full sm:w-auto text-center text-xs uppercase tracking-[0.25em] font-semibold bg-champagne-400 hover:bg-champagne-300 text-noir-950 px-8 py-3.5 rounded-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(215,190,148,0.35)]"
          >
            Explore Lookbooks
          </a>
          <a
            href="#comp-card"
            className="w-full sm:w-auto text-center text-xs uppercase tracking-[0.25em] font-medium text-ivory-100 hover:text-champagne-300 px-8 py-3.5 rounded-sm border border-noir-700 hover:border-champagne-400/60 bg-noir-900/40 backdrop-blur-sm transition-all duration-300"
          >
            Model Comp Card
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#gallery"
          className="mt-14 inline-flex flex-col items-center text-sand-400 hover:text-champagne-300 transition-colors group"
          aria-label="Scroll to portfolio gallery"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono mb-2 group-hover:translate-y-0.5 transition-transform">Scroll Down</span>
          <ArrowDown size={14} className="animate-bounce text-champagne-400" />
        </a>
      </div>
    </section>
  );
}
