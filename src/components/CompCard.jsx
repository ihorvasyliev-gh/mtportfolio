import React, { useState } from 'react';
import { Printer, Download, Sparkles, Mail, Check, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function CompCard({ onOpenBooking }) {
  const [unit, setUnit] = useState('metric'); // 'metric' | 'imperial'
  const [copied, setCopied] = useState(false);
  const { personal, measurements, compCardImages, contact } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="comp-card" className="py-24 md:py-32 bg-noir-900 border-t border-noir-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-champagne-400 mb-2">
              <Sparkles size={12} />
              <span>Agency Composite</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 tracking-tight font-light uppercase">
              Model Comp Card
            </h2>
          </div>

          {/* Unit Toggle and Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Unit Toggle */}
            <div className="flex items-center p-1 bg-noir-950 rounded-full border border-noir-800">
              <button
                onClick={() => setUnit('metric')}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider rounded-full transition-all duration-200 ${
                  unit === 'metric'
                    ? 'bg-champagne-400 text-noir-950 font-semibold shadow-sm'
                    : 'text-sand-400 hover:text-ivory-50'
                }`}
              >
                Metric (cm)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider rounded-full transition-all duration-200 ${
                  unit === 'imperial'
                    ? 'bg-champagne-400 text-noir-950 font-semibold shadow-sm'
                    : 'text-sand-400 hover:text-ivory-50'
                }`}
              >
                Imperial (in)
              </button>
            </div>

            {/* Print / Save Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium bg-noir-950 text-sand-200 hover:text-champagne-300 border border-noir-700/80 rounded-sm hover:border-champagne-400 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={14} className="text-champagne-400" />
              <span>Print Comp Card</span>
            </button>
          </div>
        </div>

        {/* Agency Standard Comp Card Canvas */}
        <div className="comp-card-print-target bg-noir-950 border border-noir-800 rounded-sm p-6 md:p-10 shadow-2xl">
          {/* Card Top Title Bar */}
          <div className="border-b border-noir-800 pb-6 mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl md:text-5xl text-ivory-50 tracking-[0.15em] font-light uppercase">
                {personal.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] font-mono text-champagne-400 mt-1">
                {personal.brand} · Direct Representation
              </p>
            </div>
            <div className="text-left md:text-right font-mono text-xs text-sand-400">
              <p className="uppercase tracking-widest text-sand-300">{personal.location}</p>
              <p className="text-[11px] text-sand-500 mt-0.5">Mother Agency / Direct Booking</p>
            </div>
          </div>

          {/* Composite Visual Grid: 1 Hero Left + 3 Supporting Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main Full-Length Hero Shot */}
            <div className="lg:col-span-6 relative aspect-[3/4] overflow-hidden rounded-sm bg-noir-900 border border-noir-800">
              <img
                src={compCardImages[0].image}
                alt={`${personal.name} primary composite shot`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-noir-950/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-sand-300 uppercase tracking-widest border border-noir-800">
                {compCardImages[0].caption}
              </div>
            </div>

            {/* Right Sub-Grid: 3 Photos + Measurements Table */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              {/* 3 Secondary Shots */}
              <div className="grid grid-cols-3 gap-3">
                {compCardImages.slice(1, 4).map((shot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[3/4] overflow-hidden rounded-sm bg-noir-900 border border-noir-800"
                  >
                    <img
                      src={shot.image}
                      alt={shot.caption}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-1.5 bg-noir-950/85 backdrop-blur-xs text-[9px] font-mono text-sand-400 text-center truncate">
                      {shot.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comprehensive Measurements Table */}
              <div className="bg-noir-900/80 border border-noir-800/80 rounded-sm p-6">
                <div className="text-[11px] uppercase tracking-[0.25em] font-mono text-champagne-400 border-b border-noir-800 pb-3 mb-4">
                  Official Statistics ({unit === 'metric' ? 'Metric' : 'Imperial'})
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 text-xs">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Height</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.heightCm} cm` : measurements.heightIn}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Bust</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.bustCm} cm` : `${measurements.bustIn} in`}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Waist</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.waistCm} cm` : `${measurements.waistIn} in`}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Hips</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.hipsCm} cm` : `${measurements.hipsIn} in`}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Dress</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.dressEu} EU` : `${measurements.dressUs} US`}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Shoe</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {unit === 'metric' ? `${measurements.shoeEu} EU` : `${measurements.shoeUs} US`}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Eyes</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {measurements.eyes}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-mono text-sand-500">Hair</span>
                    <span className="font-semibold text-ivory-100 text-sm mt-0.5 block">
                      {measurements.hair}
                    </span>
                  </div>
                </div>

                {/* Direct Agency / Booking Contact Row */}
                <div className="mt-6 pt-4 border-t border-noir-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-sand-400 font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-sand-500">INSTAGRAM:</span>
                    <a
                      href={personal.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-champagne-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      {personal.handle}
                      <ExternalLink size={11} />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sand-500">BOOKING:</span>
                    <a href={`mailto:${contact.email}`} className="text-ivory-100 hover:text-champagne-300">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
