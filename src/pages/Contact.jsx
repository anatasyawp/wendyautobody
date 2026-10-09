import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactInfo from '../components/ContactInfo';
import Button from '../components/Button';
import { Send, CheckCircle2, AlertCircle, PhoneCall, Image as ImageIcon, X, UploadCloud, Loader2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { contactService } from '../services/contactService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek permohonan wajib diisi.';
    if (!formData.message.trim()) newErrors.message = 'Deskripsi kerusakan kendaraan wajib diisi.';
    return newErrors;
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setSelectedImages((prev) => [...prev, ...newImages].slice(0, 4)); // Maks 4 foto
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Siapkan payload form data untuk kesiapan backend (multipart/form-data)
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('subject', formData.subject);
      payload.append('message', formData.message);
      selectedImages.forEach((img, i) => {
        payload.append(`photos_${i}`, img.file);
      });

      const response = await contactService.submitContact(formData);
      setTicketId(response.ticketId || `WB-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch {
      setErrors({ form: 'Terjadi kendala saat mengirimkan pesan. Silakan coba kembali.' });
    } finally {
      setIsLoading(false);
    }
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
              Kontak & Lokasi Workshop
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tight uppercase leading-[1.1]">
              Hubungi Wendy Autobody. <br />
              <span className="text-brand-orange">Siap Melayani Kendaraan Anda.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
              Konsultasikan kerusakan panel bodi, baret cat, atau restorasi mobil Anda dengan teknisi spesialis kami di Padang. Estimasi transparan dan hasil presisi berstandar spray booth oven.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT FORM & DETAILS SECTION
         ========================================= */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-brand-surface border border-brand-border p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Formulir Konsultasi & Estimasi
                </span>
                <h2 className="text-2xl font-extrabold text-brand-text uppercase mt-1">
                  Kirim Data Kerusakan Mobil
                </h2>
                <p className="text-xs text-brand-muted mt-2">
                  Lengkapi data berikut beserta foto bodi kendaraan untuk mendapatkan estimasi pengerjaan awal dari workshop.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-brand-card border border-brand-orange/40 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange text-brand-orange flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-surface px-3 py-1 border border-brand-border mb-2">
                    Tiket: {ticketId}
                  </span>
                  <h3 className="text-lg font-bold text-brand-text mb-2">
                    Formulir Berhasil Diterima
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed mb-6">
                    Terima kasih, Bapak/Ibu {formData.name}. Tim teknisi Wendy Autobody akan meninjau rincian kondisi mobil Anda. Anda juga dapat melanjutkan chat langsung ke WhatsApp dengan rincian tiket ini.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20${encodeURIComponent(formData.name)}%20(No.%20Tiket:%20${ticketId})%20ingin%20konsultasi%20lanjutan%20mengenai%20${encodeURIComponent(formData.subject)}.`}
                      variant="primary"
                      size="sm"
                      icon={PhoneCall}
                    >
                      Lanjutkan ke WhatsApp Kami
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedImages([]);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="text-xs text-brand-muted hover:text-brand-text underline ml-2"
                    >
                      Kirim Formulir Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {errors.form && (
                    <div className="p-3 bg-red-500/10 border border-red-500/40 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

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
                        Nomor Telepon / WhatsApp
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
                      Subjek Layanan / Jenis Mobil <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Toyota Fortuner - Perbaikan Bumper Depan & Cat Ulang Kap Mesin"
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
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan bagian panel yang penyok, baret dalam, kondisi cat, atau riwayat tabrakan..."
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

                  {/* Upload Foto Kerusakan (Image Upload Preview - Backend Ready) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-2">
                      Foto Kerusakan Bodi Mobil (Opsional, Maks 4 Foto)
                    </label>
                    <div className="border border-dashed border-brand-border hover:border-brand-orange/60 p-4 bg-brand-card text-center transition-colors">
                      <input
                        type="file"
                        id="car-photos"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label htmlFor="car-photos" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                        <UploadCloud className="w-7 h-7 text-brand-orange" />
                        <span className="text-xs font-semibold text-brand-text">
                          Klik untuk Unggah Foto Mobil
                        </span>
                        <span className="text-[11px] text-brand-muted">
                          Format JPG, PNG, WEBP (Kamera ponsel / galeri)
                        </span>
                      </label>
                    </div>

                    {/* Preview Grid */}
                    {selectedImages.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                        {selectedImages.map((img, idx) => (
                          <div key={idx} className="relative group border border-brand-border aspect-square bg-brand-surface overflow-hidden">
                            <img
                              src={img.preview}
                              alt={`Kerusakan ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(idx)}
                              className="absolute top-1 right-1 p-1 bg-brand-dark/80 text-white rounded-full hover:bg-red-600 transition-colors"
                              aria-label="Hapus foto"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                            <span className="absolute bottom-1 left-1 right-1 text-[9px] bg-brand-dark/80 text-brand-muted px-1 truncate text-center">
                              {img.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="md"
                    disabled={isLoading}
                    icon={isLoading ? Loader2 : Send}
                    className="w-full"
                  >
                    {isLoading ? 'Mengirim Data...' : 'Kirim Formulir Konsultasi'}
                  </Button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details & Google Maps */}
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
