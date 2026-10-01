import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, BookOpen, Calendar, Maximize2 } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, shoots, currentIndex, setCurrentIndex }) {
  const currentShoot = shoots[currentIndex];

  const handleNext = useCallback(() => {
    if (!shoots || shoots.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % shoots.length);
  }, [shoots, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    if (!shoots || shoots.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + shoots.length) % shoots.length);
  }, [shoots, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentShoot) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl animate-fade-in select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-noir-800/80 bg-noir-950/60 z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.25em] text-champagne-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(shoots.length).padStart(2, '0')}
          </span>
          <span className="text-noir-600">|</span>
          <span className="text-xs uppercase tracking-[0.2em] text-sand-300 font-medium">
            {currentShoot.categoryLabel || currentShoot.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[10px] tracking-widest uppercase font-mono text-sand-500">
            [ESC] to close · [← →] navigate
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-noir-800 text-sand-300 hover:text-ivory-50 transition-colors"
            aria-label="Close fullscreen viewer"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Nav Arrows */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-noir-900/70 hover:bg-champagne-400 hover:text-noir-950 text-ivory-100 backdrop-blur-md border border-noir-700/60 transition-all duration-300 active:scale-95 group"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Center High-Res Image */}
        <div className="max-w-5xl max-h-[75vh] md:max-h-[80vh] flex items-center justify-center">
          <img
            key={currentShoot.id}
            src={currentShoot.image}
            alt={currentShoot.title}
            className="max-h-[75vh] md:max-h-[80vh] max-w-full object-contain shadow-2xl rounded-sm transition-all duration-500 animate-fade-in"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-noir-900/70 hover:bg-champagne-400 hover:text-noir-950 text-ivory-100 backdrop-blur-md border border-noir-700/60 transition-all duration-300 active:scale-95 group"
          aria-label="Next image"
        >
          <ChevronRight size={26} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="px-6 md:px-12 py-5 bg-noir-950/80 border-t border-noir-800/80 backdrop-blur-md z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div>
            <h3 className="font-serif text-lg md:text-xl text-ivory-50 tracking-wide font-normal">
              {currentShoot.title}
            </h3>
            <p className="text-sand-400 flex items-center gap-2 mt-1">
              <Camera size={13} className="text-champagne-400" />
              <span>Photo by <strong className="text-sand-200">{currentShoot.photographer}</strong></span>
              {currentShoot.publication && (
                <>
                  <span className="text-noir-600">•</span>
                  <BookOpen size={13} className="text-champagne-400" />
                  <span>{currentShoot.publication}</span>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sand-400 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {currentShoot.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
