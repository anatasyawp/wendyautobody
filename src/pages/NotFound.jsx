import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-dark px-4 pt-24 pb-16">
      <div className="max-w-md w-full text-center">
        <span className="font-mono text-6xl sm:text-8xl font-black text-brand-orange tracking-widest block">
          404
        </span>
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold uppercase text-brand-text">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
          Halaman yang Anda tuju mungkin telah dipindahkan atau tautan yang dimasukkan tidak tepat. Silakan kembali ke halaman utama Wendy Autobody.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button to="/" variant="primary" icon={Home}>
            Kembali ke Beranda
          </Button>
          <Button to="/services" variant="secondary">
            Lihat Layanan
          </Button>
        </div>
      </div>
    </div>
  );
}
