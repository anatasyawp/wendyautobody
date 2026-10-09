import React from 'react';
import Button from './Button';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CTASection({
  title = "Give Your Car the Finish It Deserves.",
  subtitle = "Have questions about body damage or paint repair? Get in touch with Wendy Autobody to discuss your vehicle's needs.",
  primaryText = "Contact Wendy Autobody",
  primaryTo = "/contact",
  showWhatsApp = true,
}) {
  return (
    <section className="relative py-16 sm:py-24 bg-brand-surface border-y border-brand-border overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-orange" />
          Konsultasi & Kunjungan Workshop
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight uppercase leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-5 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryTo} size="lg" icon={ArrowRight}>
            {primaryText}
          </Button>

          {showWhatsApp && (
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20ingin%20konsultasi%20mengenai%20perbaikan%20bodi%20dan%20cat%20mobil.`}
              variant="secondary"
              size="lg"
              icon={PhoneCall}
            >
              WhatsApp Us
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
