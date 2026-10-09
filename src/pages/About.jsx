import React from 'react';
import { Target, Shield, Eye, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageWithFallback from '../components/ImageWithFallback';
import Button from '../components/Button';

export default function About() {
  const values = [
    {
      icon: Eye,
      title: "Attention to Detail",
      desc: "Meneliti setiap milimeter celah antar panel, kerapian tepian cat, dan konsistensi pernis di bawah pencahayaan spektrum khusus."
    },
    {
      icon: Target,
      title: "Precision Craftsmanship",
      desc: "Mengembalikan lekuk panel bodi sesuai garis aerodinamis orisinal tanpa deformasi yang tertinggal."
    },
    {
      icon: Shield,
      title: "Reliable Quality",
      desc: "Menggunakan bahan cat dan primer berkualitas dengan proteksi anti-korosi di balik lapisan bodi kendaraan."
    },
    {
      icon: Wrench,
      title: "Structured Workflow",
      desc: "Menerapkan alur pengerjaan bertahap dari inspeksi, penarikan plat, persiapan permukaan, hingga finishing akhir."
    }
  ];

  return (
    <div className="flex flex-col w-full pt-20">
      {/* =========================================
          HERO SECTION
         ========================================= */}
      <section className="relative py-20 sm:py-28 bg-brand-surface border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              About Wendy Autobody
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tight uppercase leading-[1.1]">
              Driven by Precision. <br />
              <span className="text-brand-orange">Defined by Detail.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
              Wendy Autobody adalah bengkel spesialis perbaikan bodi dan pengecatan mobil (automotive body repair and refinishing) yang berkomitmen menghadirkan hasil pengerjaan rapi, presisi, dan tahan lama.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          COMPANY OVERVIEW & PHILOSOPHY
         ========================================= */}
      <section className="py-20 sm:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                badge="Filosofi Kerja"
                title="Mengembalikan Estetika & Kepercayaan Diri Kendaraan Anda"
                className="mb-6 sm:mb-8"
              />
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Bagi kami, perbaikan bodi mobil bukan sekadar menutupi cacat atau menambal penyok. Setiap panel kendaraan dirancang dengan sudut lekukan khusus yang mempengaruhi estetika dan aerodinamika.
              </p>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Ketika kendaraan mengalami insiden di jalan atau senggolan kecil di area parkir, tujuan kami adalah memulihkan keharmonisan visual tersebut. Kami menolak hasil kerja instan yang mengabaikan detail celah pintu, tekstur cat kulit jeruk berlebihan, atau belang warna antar panel.
              </p>
              <div className="pt-2">
                <Button to="/services" variant="secondary" icon={ArrowRight}>
                  Jelajahi Spesialisasi Layanan
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-brand-border overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
                  alt="Proses pengecatan mobil di Wendy Autobody"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-brand-card border-t border-brand-border text-xs text-brand-muted">
                  <span className="font-bold text-brand-text">Area Pengecatan Bertekanan:</span> Menjaga udara tetap bersih dari partikel debu selama proses aplikasi cat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          VISION & MISSION
         ========================================= */}
      <section className="py-20 sm:py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-brand-card border border-brand-border p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-orange">
                  Visi Kami
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-2 mb-4 uppercase">
                  Menjadi Bengkel Spesialis Body & Paint Terpercaya
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Menjadi rujukan utama bagi pemilik kendaraan yang mendambakan perbaikan bodi mobil berkualitas tinggi dengan standar kerapian eksterior setara kualitas pabrikan, berlandaskan integritas dan ketelitian teknisi.
                </p>
              </div>
              <div className="w-12 h-0.5 bg-brand-orange mt-6" />
            </div>

            {/* Mission Card */}
            <div className="bg-brand-card border border-brand-border p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-orange">
                  Misi Kami
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-2 mb-4 uppercase">
                  Standar Pengerjaan Tanpa Kompromi
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-brand-muted">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Menerapkan alur pengerjaan sistematis dan transparan bagi setiap pemilik kendaraan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Mengutamakan ketepatan color matching dan keselarasan panel bodi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Membangun lingkungan workshop yang tertata rapi, bersih, dan berorientasi pada keselamatan pengerjaan.</span>
                  </li>
                </ul>
              </div>
              <div className="w-12 h-0.5 bg-brand-orange mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CORE VALUES
         ========================================= */}
      <section className="py-20 sm:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Nilai Fundamental"
            title="Our Core Values"
            subtitle="Nilai kerja yang menjadi komitmen setiap teknisi dan staff Wendy Autobody di setiap kendaraan yang dipercayakan kepada kami."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-brand-card border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-brand-orange/60 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-brand-text mb-2">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="w-6 h-0.5 bg-brand-orange/40 mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          REPAIR QUALITY APPROACH & WORKSHOP ENVIRONMENT
         ========================================= */}
      <section className="py-20 sm:py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-orange">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                Pendekatan Kualitas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight uppercase leading-tight">
                Standar Pengecatan & Penyelarasan Panel
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Kami tidak melewati tahapan dasar demi mempercepat pekerjaan. Setiap tahap—mulai dari pelurusan plat, aplikasi primer anti-korosi, pengamplasan mikro, hingga baking di spray booth—dijalankan sesuai interval waktu dan teknik yang teruji.
              </p>
              <div className="p-5 bg-brand-card border border-brand-border space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                  Lingkungan Workshop Terkendali
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Tata letak bengkel memisahkan area debu (pengamplasan dan ketok plat) dari area bersih (spray booth dan detailing akhir) guna mencegah kontaminasi partikel pada lapisan pernis cat mobil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-brand-border overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
                  alt="Workshop body alignment"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="border border-brand-border overflow-hidden mt-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80"
                  alt="Final inspect and polish"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ingin Mengetahui Lebih Lanjut?"
        subtitle="Diskusikan kebutuhan perbaikan bodi atau konsultasikan kondisi cat kendaraan Anda dengan kami."
      />
    </div>
  );
}
