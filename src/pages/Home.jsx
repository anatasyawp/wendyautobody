import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Sparkles, SlidersHorizontal } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterCard from '../components/BeforeAfterCard';
import ProcessStep from '../components/ProcessStep';
import CTASection from '../components/CTASection';
import ImageWithFallback from '../components/ImageWithFallback';
import { servicesData } from '../data/services';
import { beforeAfterCases, workshopImages } from '../data/gallery';
import { testimonialsData } from '../data/testimonials';

export default function Home() {
  const repairSteps = [
    {
      title: "Vehicle Assessment",
      description: "Pemeriksaan menyeluruh kondisi kendaraan, kedalaman lekukan, keretakan cat, dan penentuan area kerusakan panel."
    },
    {
      title: "Body Repair",
      description: "Penanganan panel bodi, penarikan penyok, perataan kontur lekukan, dan pelurusan celah antar bagian kendaraan."
    },
    {
      title: "Painting & Refinishing",
      description: "Persiapan permukaan dengan primer epoxy, aplikasi color match di spray booth tertutup, dan pelapisan clear coat pelindung."
    },
    {
      title: "Final Quality Check",
      description: "Pemeriksaan akhir terhadap keseragaman pantulan kilau cat, kerapian tepi panel, dan kebersihan kendaraan sebelum serah terima."
    }
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      title: "Attention to Detail",
      description: "Setiap lekuk bodi, celah antar panel (panel gap), dan tepian cat dikerjakan dengan presisi tinggi agar kembali ke bentuk ideal."
    },
    {
      icon: ShieldCheck,
      title: "Quality-Focused Workmanship",
      description: "Standar pengerjaan berfokus pada hasil tahan lama, proteksi anti-karat di balik panel, dan ketelitian aplikasi pernis."
    },
    {
      icon: SlidersHorizontal,
      title: "Professional Repair Process",
      description: "Alur kerja sistematis mulai dari pembongkaran aman, penarikan bodi terukur, hingga pengecatan di lingkungan terkontrol."
    },
    {
      icon: Sparkles,
      title: "Careful Final Inspection",
      description: "Inspeksi teliti di bawah pencahayaan detail untuk memastikan tidak ada tekstur belang, debu terjebak, atau cacat visual."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* =========================================
          HERO SECTION
         ========================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden pt-24 pb-16">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
            alt="Pengecatan mobil premium dan finishing body repair Wendy Autobody"
            className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-surface/90 border border-brand-border text-brand-orange text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            AUTOMOTIVE BODY REPAIR & REFINISHING
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-text uppercase max-w-5xl leading-[1.08]">
            RESTORING YOUR CAR. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-200">
              REFINING EVERY DETAIL.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted max-w-2xl leading-relaxed">
            From body damage to a flawless finish, Wendy Autobody delivers professional body repair and refinishing with precision, care, and attention to every detail.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/services" size="lg" icon={ArrowRight}>
              Explore Our Services
            </Button>
            <Button to="/work" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Value Highlights Pill */}
          <div className="mt-14 pt-8 border-t border-brand-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl w-full">
            {[
              "Panel Alignment Precision",
              "Spray Booth Refinishing",
              "Accurate Color Matching",
              "High-Gloss Mirror Finish"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          COMPANY INTRODUCTION
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative border border-brand-border overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                  alt="Proses pengerjaan perbaikan bodi mobil di workshop"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-card/90 backdrop-blur-md p-4 border border-brand-border">
                  <p className="text-xs uppercase tracking-widest text-brand-orange font-bold">
                    Pengerjaan Workshop Terarah
                  </p>
                  <p className="text-xs text-brand-muted mt-1">
                    Fokus penuh pada perbaikan deformasi panel bodi luar dan kerapian aplikasi lapisan cat.
                  </p>
                </div>
              </div>
              {/* Offset decorative box */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-32 h-32 border border-brand-orange/40 -z-10" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                Tentang Wendy Autobody
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight uppercase leading-tight">
                More Than a Repair. <br />
                <span className="text-brand-orange">A Refined Finish.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-brand-muted leading-relaxed">
                Every vehicle deserves careful attention. At Wendy Autobody, our focus is on restoring bodywork, refining paint finishes, and delivering results with attention to detail.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                Kami memahami bahwa bodi mobil bukan sekadar lembaran plat, melainkan ekspresi estetika dan integritas kendaraan Anda. Dari senggolan ringan, penyok bumper, hingga perbaikan panel pasca tabrakan, kami memastikan setiap tahap pengerjaan memenuhi standar kerapian yang konsisten.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/about" variant="secondary" icon={ArrowRight}>
                  Pelajari Filosofi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED SERVICES
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Spesialisasi Kami"
            title="Layanan Utama Body Repair & Pengecatan"
            subtitle="Fokus pengerjaan kami berpusat pada perbaikan bodi, penanganan penyok, dan penyempurnaan cat mobil tanpa kompromi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              Lihat Seluruh Detail & Alur Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE WENDY AUTOBODY
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Nilai & Komitmen"
            title="Precision You Can See. Quality in Every Detail."
            subtitle="Empat pilar yang menjadi landasan kerja kami dalam merawat dan mengembalikan penampilan kendaraan Anda."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-card border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-brand-orange/60 transition-colors group"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange group-hover:border-brand-orange transition-colors mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-text mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-6 h-0.5 bg-brand-orange/40 mt-6 group-hover:w-12 transition-all" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          OUR REPAIR PROCESS (TIMELINE)
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Alur Kerja Workshop"
            title="Our Repair Process"
            subtitle="Tahapan terstruktur untuk memastikan hasil pengerjaan bodi dan pengecatan kendaraan dilakukan secara sistematis dan rapi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairSteps.map((step, idx) => (
              <ProcessStep
                key={idx}
                step={step}
                number={`0${idx + 1}`}
                isLast={idx === repairSteps.length - 1}
              />
            ))}
          </div>

          <p className="text-center text-xs text-brand-muted mt-8">
            * Alur di atas merupakan gambaran proses umum pengerjaan di workshop kami dan dapat disesuaikan dengan tingkat kerusakan kendaraan.
          </p>
        </div>
      </section>

      {/* =========================================
          BEFORE & AFTER GALLERY
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hasil Pengerjaan"
            title="Before & After Transformation"
            subtitle="Bandingkan langsung kondisi panel sebelum perbaikan dan hasil akhir setelah proses body repair serta refinishing cat."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterCases.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/work" variant="secondary" size="lg" icon={ArrowRight}>
              Buka Seluruh Portofolio Visual
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================
          WORKSHOP GALLERY
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Fasilitas & Lingkungan Kerja"
            title="Workshop Gallery"
            subtitle="Suasana pengerjaan di area workshop kami, dirancang untuk mendukung ketelitian pengerjaan bodi dan pengecatan terkontrol."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopImages.map((ws) => (
              <div
                key={ws.id}
                className="group bg-brand-card border border-brand-border overflow-hidden hover:border-brand-orange/60 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-brand-card">
                  <h4 className="text-sm font-bold text-brand-text mb-1 group-hover:text-brand-orange transition-colors">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          TESTIMONIALS (HONEST PLACEHOLDER)
         ========================================= */}
      <section className="py-20 sm:py-28 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Catatan Kepuasan"
            title="Client Feedback Examples"
            subtitle="Ilustrasi umpan balik pelanggan terhadap ketelitian perbaikan bodi dan keselarasan warna cat."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-brand-card border border-brand-border p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange bg-brand-surface px-2 py-0.5 border border-brand-border">
                      {test.serviceUsed}
                    </span>
                    <span className="text-[10px] text-brand-muted font-mono">
                      Contoh Review
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-brand-border/60">
                  <p className="text-xs font-bold text-brand-text">
                    {test.ownerLabel}
                  </p>
                  <p className="text-[11px] text-brand-muted">
                    Unit: {test.vehicle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
         ========================================= */}
      <CTASection />
    </div>
  );
}
