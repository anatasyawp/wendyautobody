import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-brand-card border border-brand-border hover:border-brand-orange/60 transition-all duration-300 flex flex-col h-full overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.alt || service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-brand-dark/80 backdrop-blur-md text-brand-orange border border-brand-border">
          {service.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-orange transition-colors duration-200">
          {service.title}
        </h3>
        <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed flex-grow">
          {service.shortDesc}
        </p>

        <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center justify-between">
          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-text group-hover:text-brand-orange transition-colors duration-200"
          >
            <span>Detail Layanan</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
