import React from 'react';
import { Eye } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function GalleryCard({ item, onOpenModal }) {
  return (
    <div
      onClick={() => onOpenModal && onOpenModal(item)}
      className="group relative bg-brand-card border border-brand-border overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal && onOpenModal(item);
        }
      }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.alt || item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
            {item.category}
          </span>
          <div className="p-1.5 rounded-full bg-brand-surface/80 text-brand-text">
            <Eye className="w-4 h-4" />
          </div>
        </div>

        <h3 className="text-base font-bold text-brand-text leading-snug">
          {item.title}
        </h3>

        {item.isDemo && (
          <span className="text-[10px] text-brand-muted/80 mt-1 uppercase">
            Visual Contoh Demo
          </span>
        )}
      </div>

      <div className="p-3.5 sm:p-4 bg-brand-card border-t border-brand-border/60">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
            {item.category}
          </span>
          {item.isDemo && (
            <span className="text-[9px] text-brand-muted bg-brand-surface px-1.5 py-0.5 border border-brand-border">
              Demo
            </span>
          )}
        </div>
        <h4 className="text-sm font-semibold text-brand-text mt-1 truncate">
          {item.title}
        </h4>
      </div>
    </div>
  );
}
