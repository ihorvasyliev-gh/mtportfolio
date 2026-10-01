import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, MapPin, Briefcase, Mail, User, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Editorial',
    shootDate: '',
    location: 'Cork / Ireland',
    budget: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after delay or allow user to close
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-noir-950 border border-noir-800 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-noir-800 bg-noir-900/60">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-champagne-400">
              <Sparkles size={11} />
              <span>Direct Booking Inquiry</span>
            </div>
            <h3 className="font-serif text-2xl text-ivory-50 uppercase tracking-wider font-light mt-0.5">
              Book Mariia Troian
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-sand-400 hover:text-ivory-50 hover:bg-noir-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-champagne-400/10 border border-champagne-400/30 flex items-center justify-center text-champagne-400">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-serif text-3xl text-ivory-50 tracking-wide font-light">
                Inquiry Transmitted
              </h4>
              <p className="text-xs text-sand-300 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in collaborating with Mariia. Direct representation will review your project details and respond via email within 24 hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-champagne-400 text-noir-950 text-xs uppercase tracking-[0.2em] font-semibold rounded-sm hover:bg-champagne-300 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name / Contact"
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Agency / Brand / Publication *
                  </label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Harper's Bazaar / Celine Studio"
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="direct@yourstudio.com"
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+353 ... or +44 ..."
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Assignment Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  >
                    <option value="Editorial">Editorial Spread / Magazine</option>
                    <option value="High Fashion Campaign">High-Fashion Campaign</option>
                    <option value="Lookbook">Commercial / Lookbook</option>
                    <option value="Runway">Runway / Fashion Week</option>
                    <option value="Beauty">Beauty & Macro Portrait</option>
                    <option value="Fitting">Showroom & Fitting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                    Production Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Cork / Dublin / London / Paris..."
                    className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs px-3.5 py-2.5 rounded-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-mono text-sand-400 mb-1.5">
                  Project Brief & Moodboard Notes
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline dates, usage rights, team, creative concept..."
                  className="w-full bg-noir-900 border border-noir-800 focus:border-champagne-400 text-ivory-100 text-xs p-3.5 rounded-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-noir-800/80">
                <span className="text-[10px] text-sand-500 font-mono">
                  Direct Response: within 24h
                </span>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-champagne-400 hover:bg-champagne-300 text-noir-950 text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all"
                >
                  <Send size={14} />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
