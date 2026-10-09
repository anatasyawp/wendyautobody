import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border text-brand-muted text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-card border border-brand-border flex items-center justify-center text-brand-orange">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 18L9 6L14 13L17 6L21 18" />
                </svg>
              </div>
              <span className="font-extrabold text-sm tracking-widest uppercase text-brand-text">
                WENDY <span className="text-brand-orange">AUTOBODY</span>
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-brand-muted">
              {siteConfig.description}
            </p>

            <p className="text-[11px] font-mono text-brand-orange font-semibold">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Work (Gallery)', path: '/work' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-4">
              Layanan Spesialis
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Body Repair & Realignment', id: 'body-repair' },
                { name: 'Dent Repair (Penarikan Penyok)', id: 'dent-repair' },
                { name: 'Automotive Painting (Spray Booth)', id: 'automotive-painting' },
                { name: 'Bumper Repair & Respray', id: 'bumper-repair' },
                { name: 'Panel Repair & Replacement', id: 'panel-repair-replacement' },
                { name: 'Paint Refinishing & Polishing', id: 'paint-refinishing' },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/services#${item.id}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-4">
              Kontak & Operasional
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors group flex items-start gap-1"
                title="Buka rute di Google Maps"
              >
                <span>{siteConfig.contact.address}</span>
                <ExternalLink className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100 mt-0.5" />
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors font-medium"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-brand-orange transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted/70">
          <p>© {currentYear} Wendy Autobody. All rights reserved. Specialist Automotive Body Repair & Refinishing (Padang, Sumatera Barat).</p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors inline-flex items-center gap-1 text-brand-orange font-medium"
            >
              <span>Petunjuk Arah Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-brand-muted/40">•</span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-brand-orange transition-colors inline-flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
