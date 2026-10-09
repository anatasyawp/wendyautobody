import React, { useState } from 'react';
import { servicesData } from '../data/services';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';
import { CheckCircle2, ChevronRight, PhoneCall, Layers, Wrench, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Body Repair",
    "Dent & Panel Repair",
    "Bumper Repair",
    "Automotive Painting",
    "Paint Refinishing",
    "Panel Replacement"
  ];

  const filteredServices = activeCategory === "All"
    ? servicesData
    : servicesData.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="flex flex-col w-full pt-20">
      {/* =========================================
          HERO SECTION
         ========================================= */}
      <section className="relative py-20 sm:py-28 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Layanan Spesialis
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tight uppercase leading-[1.1]">
              Automotive Body Repair <br />
              <span className="text-brand-orange">& Refinishing Services</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
              Fokus eksklusif pada perbaikan struktur bodi, pemulihan lekukan panel, dan pengecatan ulang mobil dengan ketelitian tinggi serta ruang semprot bertekanan.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          FILTER CATEGORIES
         ========================================= */}
      <section className="bg-brand-dark py-6 border-b border-brand-border sticky top-16 z-30 backdrop-blur-md bg-brand-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 transition-all border ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-white border-brand-orange'
                    : 'bg-brand-card text-brand-muted border-brand-border hover:border-brand-text/40 hover:text-brand-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          DETAILED SERVICES LIST
         ========================================= */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 p-6 sm:p-10 bg-brand-surface border border-brand-border relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Visual Image */}
                <div className="lg:col-span-5 relative">
                  <div className="border border-brand-border overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.alt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-brand-muted font-mono">
                    <span>Layanan #{index + 1}</span>
                    <span className="text-brand-orange uppercase">{service.category}</span>
                  </div>
                </div>

                {/* Information Content */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-card text-brand-orange border border-brand-border mb-3">
                      {service.category}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text uppercase">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Conditions */}
                    <div className="mt-6 p-4 sm:p-5 bg-brand-card border border-brand-border/60">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
                        <ShieldAlert className="w-4 h-4 text-brand-orange" />
                        <span>Kondisi Kendaraan yang Memerlukan Layanan:</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-muted">
                        {service.conditions.map((cond, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-orange font-bold">•</span>
                            <span>{cond}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Repair Process Steps */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
                        <Wrench className="w-4 h-4 text-brand-orange" />
                        <span>Gambaran Alur Pengerjaan:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.process.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-2.5 p-3 bg-brand-card/50 border border-brand-border/40 text-xs text-brand-muted"
                          >
                            <span className="font-mono text-brand-orange font-bold text-[11px] shrink-0">
                              0{sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & WhatsApp Consultation */}
                  <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center gap-4">
                    <Button
                      href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}.`}
                      variant="primary"
                      size="sm"
                      icon={PhoneCall}
                    >
                      Konsultasi Layanan Ini
                    </Button>
                    <Button to="/contact" variant="secondary" size="sm">
                      Kirim Pesan Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Punya Pertanyaan Spesifik Tentang Kendaraan Anda?"
        subtitle="Kirimkan foto area panel yang rusak melalui kontak WhatsApp kami untuk panduan awal."
      />
    </div>
  );
}
