import React from 'react';
import { Quote, Sparkles, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Press() {
  const { press } = portfolioData;

  const publications = [
    'VOGUE',
    'HARPER’S BAZAAR',
    'ELLE',
    'L’OFFICIEL',
    'DUBLIN FASHION WEEK',
    'MARIE CLAIRE',
  ];

  return (
    <section id="press" className="py-24 md:py-32 bg-noir-900 border-t border-noir-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-champagne-400 mb-2">
            <Award size={13} />
            <span>Recognition & Editorial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 tracking-tight font-light uppercase">
            Press & Features
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-sand-400 tracking-wider">
            Selected editorial placements, runway appearances, and designer campaigns.
          </p>
        </div>

        {/* Magazine Masthead Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 pb-12 border-b border-noir-800">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-4 rounded-sm bg-noir-950/70 border border-noir-800/80 hover:border-champagne-500/40 transition-colors group"
            >
              <span className="font-serif text-sm md:text-base tracking-[0.25em] text-sand-400 group-hover:text-champagne-300 font-semibold transition-colors text-center uppercase">
                {pub}
              </span>
            </div>
          ))}
        </div>

        {/* Editorial Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {press.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-noir-950 border border-noir-800 p-8 rounded-sm relative flex flex-col justify-between hover:border-champagne-500/40 transition-all duration-300"
            >
              <div>
                <Quote size={28} className="text-champagne-400/30 mb-4" />
                <p className="font-serif text-lg md:text-xl text-ivory-100 font-normal leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-noir-800/60 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-champagne-400 font-medium">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-sand-500 uppercase tracking-widest">
                  Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
