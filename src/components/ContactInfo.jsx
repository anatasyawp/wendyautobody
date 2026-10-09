import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ContactInfo({ className = "" }) {
  const items = [
    {
      icon: MapPin,
      title: "Alamat Workshop",
      detail: siteConfig.contact.address,
      subtitle: "Buka langsung rute navigasi di Google Maps",
      href: siteConfig.contact.mapsUrl,
      actionText: "Buka Google Maps",
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      detail: siteConfig.contact.phoneDisplay,
      subtitle: "Hubungi via telepon langsung atau chat WhatsApp",
      href: `https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20ingin%20konsultasi%20mengenai%20perbaikan%20bodi%20mobil.`,
      actionText: "Chat WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      detail: siteConfig.contact.email,
      subtitle: "Untuk penawaran kerja sama dan informasi umum",
      href: `mailto:${siteConfig.contact.email}`,
      actionText: "Kirim Email",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      detail: siteConfig.contact.hours,
      subtitle: "Senin hingga Sabtu (Minggu & Hari Libur Tutup)",
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 bg-brand-card border border-brand-border hover:border-brand-orange/40 transition-colors"
          >
            <div className="p-3 bg-brand-surface border border-brand-border text-brand-orange shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                {item.title}
              </h4>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-base font-semibold text-brand-text hover:text-brand-orange transition-colors group"
                >
                  <span>{item.detail}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <p className="mt-1 text-base font-semibold text-brand-text">
                  {item.detail}
                </p>
              )}
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
