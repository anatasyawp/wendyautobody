import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactInfo from '../components/ContactInfo';
import Button from '../components/Button';
import { Send, CheckCircle2, MessageSquare, AlertCircle, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

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
              Hubungi Wendy Autobody
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tight uppercase leading-[1.1]">
              Get in Touch with <br />
              <span className="text-brand-orange">Our Repair Team</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
              Konsultasikan kerusakan bodi, penyok, atau kebutuhan cat kendaraan Anda. Kami siap memberikan informasi awal dan menyambut kunjungan Anda di workshop.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT SECTION (FORM + INFO)
         ========================================= */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-brand-surface border border-brand-border p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Kirim Pesan
                </span>
                <h2 className="text-2xl font-extrabold text-brand-text uppercase mt-1">
                  Formulir Konsultasi
                </h2>
                <p className="text-xs text-brand-muted mt-2">
                  Lengkapi data berikut untuk mengirim pertanyaan mengenai kondisi bodi atau cat mobil Anda.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-brand-card border border-brand-orange/40 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange text-brand-orange flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2">
                    Pesan Simulasi Berhasil Dikirim
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed mb-6">
                    Terima kasih telah menghubungi Wendy Autobody. Karena website ini saat ini berbasis frontend demo, pesan Anda telah tervalidasi secara lokal.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20${encodeURIComponent(formData.name)}%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(formData.subject)}.`}
                      variant="primary"
                      size="sm"
                      icon={PhoneCall}
                    >
                      Kirim Lanjutan ke WhatsApp
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="text-xs text-brand-muted hover:text-brand-text underline ml-2"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                      Nama Lengkap <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Pratama"
                      className={`w-full px-4 py-3 bg-brand-card border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors ${
                        errors.name ? 'border-red-500' : 'border-brand-border focus:border-brand-orange'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                        Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full px-4 py-3 bg-brand-card border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors ${
                          errors.email ? 'border-red-500' : 'border-brand-border focus:border-brand-orange'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                        Nomor Telepon / WA (Opsional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                      Subjek Layanan <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Perbaikan Bumper Depan & Cat Ulang Kap Mesin"
                      className={`w-full px-4 py-3 bg-brand-card border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-brand-border focus:border-brand-orange'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                      Deskripsi Kerusakan Kendaraan <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan jenis kendaraan, panel yang mengalami kerusakan, dan kondisi cat..."
                      className={`w-full px-4 py-3 bg-brand-card border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-brand-border focus:border-brand-orange'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Disclaimer banner */}
                  <div className="p-3.5 bg-brand-card border border-brand-border/80 text-[11px] text-brand-muted">
                    <span className="font-bold text-brand-text">Catatan Demo:</span> Formulir ini beroperasi pada sisi antarmuka frontend untuk validasi data input. Estimasi biaya akhir diberikan setelah inspeksi fisik kendaraan di workshop.
                  </div>

                  <Button type="submit" size="md" icon={Send} className="w-full">
                    Kirim Formulir Konsultasi
                  </Button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details & Map Placeholder */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Informasi Kontak
                </span>
                <h3 className="text-2xl font-extrabold text-brand-text uppercase mt-1 mb-6">
                  Detail Workshop
                </h3>
                <ContactInfo />
              </div>

              {/* Quick WhatsApp Action Card */}
              <div className="p-6 bg-brand-card border border-brand-orange/40">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-text mb-2">
                  Konsultasi Cepat Via WhatsApp
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Kirimkan foto langsung dari area benturan atau goresan panel mobil Anda untuk panduan awal pengerjaan.
                </p>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20ingin%20konsultasi%20mengenai%20perbaikan%20bodi%20mobil.`}
                  variant="primary"
                  size="sm"
                  icon={PhoneCall}
                  className="w-full"
                >
                  Buka Chat WhatsApp
                </Button>
              </div>

              {/* Interactive Google Maps Section */}
              <div className="bg-brand-card border border-brand-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Lokasi Workshop di Google Maps
                  </h4>
                  <a
                    href={siteConfig.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-orange hover:underline font-semibold"
                  >
                    Buka Aplikasi Maps ↗
                  </a>
                </div>
                <div className="w-full h-64 border border-brand-border overflow-hidden relative">
                  <iframe
                    title="Wendy Autobody Google Maps Location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                  <p className="text-brand-muted">
                    {siteConfig.contact.address}
                  </p>
                </div>
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center w-full py-2.5 px-4 bg-brand-surface border border-brand-border hover:border-brand-orange text-brand-text hover:text-brand-orange text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Buka Rute Langsung ke Wendy Autobody ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
