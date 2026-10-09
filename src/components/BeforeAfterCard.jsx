import React, { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function BeforeAfterCard({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div className="bg-brand-card border border-brand-border p-4 sm:p-5 flex flex-col group hover:border-brand-orange/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange">
          {item.category}
        </span>
        {item.isDemo && (
          <span className="text-[10px] text-brand-muted uppercase tracking-wider bg-brand-surface px-2 py-0.5 border border-brand-border">
            Visual Contoh Demo
          </span>
        )}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-brand-text mb-2">
        {item.title}
      </h3>
      <p className="text-xs text-brand-muted mb-4 leading-relaxed">
        {item.description}
      </p>

      {/* Before / After Container */}
      <div 
        className="relative aspect-[16/10] overflow-hidden select-none bg-brand-surface border border-brand-border"
        onMouseMove={(e) => {
          if (!isInteractive) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          setSliderPosition((x / rect.width) * 100);
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
          setSliderPosition((x / rect.width) * 100);
        }}
        onMouseEnter={() => setIsInteractive(true)}
        onMouseLeave={() => {
          setIsInteractive(false);
          setSliderPosition(50);
        }}
      >
        {/* AFTER Image (Full width background) */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={item.afterImg}
            alt={`${item.title} After`}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-brand-dark/90 text-brand-text border border-brand-border">
            AFTER
          </span>
        </div>

        {/* BEFORE Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[200px]" style={{ width: '100%' }}>
            <ImageWithFallback
              src={item.beforeImg}
              alt={`${item.title} Before`}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <span className="absolute bottom-2.5 left-2.5 z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-brand-orange text-white">
            BEFORE
          </span>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brand-orange z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-orange text-white text-[9px] font-black flex items-center justify-center shadow-md">
            ⇆
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-brand-muted">
        <span>Arahkan kursor / geser untuk membandingkan</span>
        <span className="text-brand-orange font-mono">50/50</span>
      </div>
    </div>
  );
}
