import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, MapPin, Sparkles, Send } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onOpenBooking }) {
  const { personal, contact } = portfolioData;

  return (
    <section id="contact" className="py-24 md:py-32 bg-noir-950 border-t border-noir-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-champagne-400 mb-2">
            <Sparkles size={12} />
            <span>Bookings & Commissions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 tracking-tight font-light uppercase">
            Let's Create Something Iconic
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-sand-300 tracking-wider max-w-xl mx-auto leading-relaxed">
            Represented directly for editorial lookbooks, fashion campaigns, runway, and commercial assignments. Based in Cork, Ireland with regular travel to Dublin, London, Paris, and Milan.
          </p>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Channel 1: Instagram */}
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-noir-900 border border-noir-800 hover:border-champagne-400/80 p-8 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-noir-950 border border-noir-800 flex items-center justify-center text-champagne-400 mb-6 group-hover:scale-110 transition-transform">
                <InstagramIcon size={22} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-sand-500 block mb-1">
                Social Portfolio
              </span>
              <h3 className="font-serif text-2xl text-ivory-50 font-normal group-hover:text-champagne-300 transition-colors">
                {contact.instagram}
              </h3>
              <p className="text-xs text-sand-400 mt-2">
                Daily backstage moments, creative experiments & shoot previews.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-1.5 text-xs font-mono text-champagne-400 uppercase tracking-widest">
              <span>View Profile</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Channel 2: WhatsApp Direct */}
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Mariia,%20inquiry%20regarding%20a%20fashion%20shoot`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-noir-900 border border-noir-800 hover:border-champagne-400/80 p-8 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-noir-950 border border-noir-800 flex items-center justify-center text-champagne-400 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-sand-500 block mb-1">
                Instant Messaging
              </span>
              <h3 className="font-serif text-2xl text-ivory-50 font-normal group-hover:text-champagne-300 transition-colors">
                WhatsApp Direct
              </h3>
              <p className="text-xs text-sand-400 mt-2">
                Direct booking coordination for casting agents and art directors.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-1.5 text-xs font-mono text-champagne-400 uppercase tracking-widest">
              <span>Message Direct</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Channel 3: Email & Form Booking */}
          <div className="group bg-noir-900 border border-noir-800 hover:border-champagne-400/80 p-8 rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-noir-950 border border-noir-800 flex items-center justify-center text-champagne-400 mb-6 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-sand-500 block mb-1">
                Official Agency Email
              </span>
              <h3 className="font-serif text-2xl text-ivory-50 font-normal truncate group-hover:text-champagne-300 transition-colors">
                {contact.email}
              </h3>
              <p className="text-xs text-sand-400 mt-2">
                Call sheets, formal contracts, usage agreements & moodboards.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-champagne-400 hover:bg-champagne-300 text-noir-950 text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <Send size={13} />
                <span>Open Booking Form</span>
              </button>
            </div>
          </div>
        </div>

        {/* Travel & Agency Info Strip */}
        <div className="mt-16 max-w-5xl mx-auto p-6 bg-noir-900/50 border border-noir-800 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-sand-400 font-mono">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-champagne-400 shrink-0" />
            <span>PRIMARY BASE: <strong className="text-ivory-100">Cork & Dublin, Ireland</strong></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="text-sand-500">FREQUENT HUBS:</span>
            {personal.travelBases.map((city, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-full bg-noir-950 border border-noir-800 text-sand-300">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
