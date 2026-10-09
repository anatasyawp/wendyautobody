import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-orange" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight uppercase max-w-3xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-0.5 bg-brand-orange/60 mt-5" />
    </div>
  );
}
