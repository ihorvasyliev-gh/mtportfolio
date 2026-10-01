import React from 'react';
import { Sparkles, ShieldCheck, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Digitals({ onOpenLightbox }) {
  const { digitals } = portfolioData;

  const handleOpenDigital = (digital) => {
    // Format digital item to fit lightbox shoot format
    const formatted = {
      id: digital.id,
      title: `Agency Digital · ${digital.title}`,
      category: 'digitals',
      categoryLabel: 'Polaroids / Snaps',
      image: digital.image,
      photographer: 'Natural Light / Casting Polaroid',
      year: 'Current Season',
      publication: 'Agency Casting Portfolio'
    };

    const formattedList = digitals.map(d => ({
      id: d.id,
      title: `Agency Digital · ${d.title}`,
      category: 'digitals',
      categoryLabel: 'Polaroids / Snaps',
      image: d.image,
      photographer: 'Natural Light / Casting Polaroid',
      year: 'Current Season',
      publication: 'Agency Casting Portfolio'
    }));

    onOpenLightbox(formatted, formattedList);
  };

  return (
    <section id="digitals" className="py-24 md:py-32 bg-noir-950 border-t border-noir-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-champagne-400 mb-2">
              <Sparkles size={12} />
              <span>Agency Scouting</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 tracking-tight font-light uppercase">
              Polaroids & Digitals
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-sand-400 bg-noir-900 border border-noir-800 px-4 py-2 rounded-sm">
            <ShieldCheck size={14} className="text-champagne-400" />
            <span>Unretouched · Natural Light · Casting Standard</span>
          </div>
        </div>

        {/* Agency Digitals 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitals.map((digital) => (
            <div
              key={digital.id}
              onClick={() => handleOpenDigital(digital)}
              className="group cursor-pointer bg-noir-900 border border-noir-800/90 rounded-sm overflow-hidden transition-all duration-300 hover:border-champagne-400/60 hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-noir-950">
                <img
                  src={digital.image}
                  alt={digital.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase font-mono tracking-widest bg-noir-950/90 text-champagne-300 px-2.5 py-1 rounded border border-noir-700">
                    Click to Inspect
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-noir-800/80 bg-noir-900/60">
                <h3 className="font-serif text-base text-ivory-100 font-medium group-hover:text-champagne-300 transition-colors">
                  {digital.title}
                </h3>
                <p className="text-[11px] text-sand-400 font-mono mt-0.5">
                  {digital.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Note */}
        <div className="mt-10 p-5 rounded-sm bg-noir-900/40 border border-noir-800/60 flex items-start gap-3 text-xs text-sand-400 max-w-3xl">
          <Info size={16} className="text-champagne-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All digitals adhere to international agency specifications: captured in natural daylight without artificial fill, zero skin retouching or filters, wearing standard casting black attire with clean hair and neutral posture.
          </p>
        </div>
      </div>
    </section>
  );
}
