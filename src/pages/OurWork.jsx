import React, { useState, useEffect } from 'react';
import { portfolioGallery, galleryCategories, beforeAfterCases } from '../data/gallery';
import GalleryCard from '../components/GalleryCard';
import BeforeAfterCard from '../components/BeforeAfterCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageWithFallback from '../components/ImageWithFallback';
import { X, Layers, AlertCircle } from 'lucide-react';

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? portfolioGallery
    : portfolioGallery.filter(item => item.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeModalItem]);

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
              Portofolio Visual
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tight uppercase leading-[1.1]">
              Our Work & <br />
              <span className="text-brand-orange">Craftsmanship Showcase</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
              Dokumentasi visual hasil pengerjaan perbaikan bodi, pelurusan panel, dan pengecatan mobil dengan standar kebersihan dan kilau maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          BEFORE & AFTER SECTION
         ========================================= */}
      <section className="py-20 bg-brand-dark border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Perbandingan Nyata"
            title="Before & After Transformation"
            subtitle="Lihat bagaimana kerusakan panel bodi, goresan, dan penyok dikembalikan menjadi permukaan yang rapi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterCases.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PORTFOLIO GALLERY WITH FILTER
         ========================================= */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Koleksi Galeri
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-text uppercase mt-2">
                Portfolio Showcase
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider shrink-0 transition-all border ${
                    selectedCategory === cat
                      ? 'bg-brand-orange text-white border-brand-orange'
                      : 'bg-brand-card text-brand-muted border-brand-border hover:border-brand-text/40 hover:text-brand-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid or Empty State */}
          {filteredItems.length === 0 ? (
            <div className="p-16 border border-brand-border bg-brand-card text-center flex flex-col items-center">
              <AlertCircle className="w-8 h-8 text-brand-orange mb-3" />
              <h3 className="text-base font-bold text-brand-text">
                Belum Ada Foto Untuk Kategori Ini
              </h3>
              <p className="text-xs text-brand-muted mt-1">
                Silakan pilih kategori lain untuk melihat dokumentasi hasil pekerjaan kami.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onOpenModal={(selected) => setActiveModalItem(selected)}
                />
              ))}
            </div>
          )}

          <div className="mt-8 p-4 bg-brand-card border border-brand-border text-center text-xs text-brand-muted">
            * Keterangan: Seluruh foto portofolio di atas menggunakan gambar demo berkualitas tinggi untuk tujuan representasi visual estetika pengerjaan Wendy Autobody.
          </div>
        </div>
      </section>

      {/* =========================================
          LIGHTBOX MODAL
         ========================================= */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-card border border-brand-border overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-brand-border bg-brand-surface">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-brand-card px-2 py-0.5 border border-brand-border">
                  {activeModalItem.category}
                </span>
                <span className="text-sm font-bold text-brand-text">
                  {activeModalItem.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-brand-muted hover:text-brand-text hover:bg-brand-card border border-transparent hover:border-brand-border transition-colors"
                aria-label="Tutup preview modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.alt || activeModalItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 sm:p-5 bg-brand-surface border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {activeModalItem.caption || activeModalItem.title}
              </p>
              <div className="text-[11px] text-brand-muted/70 font-mono shrink-0">
                Tekan <kbd className="px-1.5 py-0.5 bg-brand-card border border-brand-border text-brand-text">ESC</kbd> untuk menutup
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
