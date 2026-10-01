import React, { useState, useMemo } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredShoots = useMemo(() => {
    if (activeCategory === 'all') return portfolioData.shoots;
    return portfolioData.shoots.filter((shoot) => shoot.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-noir-950 border-t border-noir-800/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-champagne-400 mb-2">
              <Sparkles size={12} />
              <span>Portfolio & Archives</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 tracking-tight font-light uppercase">
              Selected Lookbooks
            </h2>
          </div>
          <p className="text-sand-400 text-xs sm:text-sm max-w-md tracking-wider leading-relaxed">
            High-fashion campaigns, publication spreads, beauty close-ups, and runway presentations captured by international photographers.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-noir-900">
          <Filter size={14} className="text-sand-500 mr-2 shrink-0 hidden sm:inline" />
          {portfolioData.categories.map((category) => {
            const count = category.id === 'all'
              ? portfolioData.shoots.length
              : portfolioData.shoots.filter(s => s.category === category.id).length;

            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-champagne-400 text-noir-950 font-semibold shadow-md'
                    : 'bg-noir-900 text-sand-300 hover:text-ivory-50 hover:bg-noir-800 border border-noir-800/80'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-[10px] font-mono ${isActive ? 'text-noir-900/80' : 'text-sand-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredShoots.map((shoot, index) => (
            <div
              key={shoot.id}
              onClick={() => onOpenLightbox(shoot, filteredShoots)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-noir-900 border border-noir-800/80 transition-all duration-500 hover:border-champagne-500/50 hover:shadow-2xl"
            >
              {/* Aspect Ratio Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-noir-950">
                <img
                  src={shoot.image}
                  alt={shoot.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Top Corner Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono bg-noir-950/80 backdrop-blur-md text-champagne-300 px-2.5 py-1 rounded-sm border border-noir-700/60">
                    {shoot.categoryLabel || shoot.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-noir-900/80 backdrop-blur-md text-champagne-400 border border-noir-700">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Shoot Information */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl text-ivory-50 tracking-wide font-normal group-hover:text-champagne-300 transition-colors">
                    {shoot.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-sand-300 tracking-wider">
                    <span className="flex items-center gap-1.5 opacity-90">
                      <Camera size={12} className="text-champagne-400" />
                      {shoot.photographer}
                    </span>
                    <span className="font-mono text-sand-400">{shoot.year}</span>
                  </div>
                  {shoot.publication && (
                    <p className="text-[10px] text-champagne-400/80 font-mono tracking-widest uppercase mt-1">
                      {shoot.publication}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
