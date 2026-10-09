import React from 'react';

export default function ProcessStep({ step, number, isLast = false }) {
  return (
    <div className="relative flex flex-col items-start p-6 bg-brand-card border border-brand-border h-full group hover:border-brand-orange/60 transition-colors">
      <div className="flex items-center justify-between w-full mb-4">
        <span className="font-mono text-2xl sm:text-3xl font-extrabold text-brand-orange tracking-wider">
          {number}
        </span>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-muted px-2 py-0.5 border border-brand-border bg-brand-surface">
          Step
        </span>
      </div>

      <h3 className="text-lg font-bold text-brand-text mb-2.5 group-hover:text-brand-orange transition-colors">
        {step.title}
      </h3>

      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
        {step.description}
      </p>

      {!isLast && (
        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rotate-45 border-t border-r border-brand-orange bg-brand-dark" />
      )}
    </div>
  );
}
