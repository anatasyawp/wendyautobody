import React, { useState } from 'react';
import { Search, Car, Clock, CheckCircle2, AlertCircle, Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { trackingService } from '../services/trackingService';

export default function RepairTrackerModal({ isOpen, onClose }) {
  const [plateInput, setPlateInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!plateInput.trim()) {
      setError('Masukkan nomor polisi mobil Anda');
      return;
    }

    setError('');
    setIsLoading(true);
    setResult(null);

    try {
      const res = await trackingService.checkStatus(plateInput);
      setResult(res.data);
    } catch {
      setError('Gagal memuat status kendaraan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { key: 'inspection', label: 'Inspeksi & Estimasi' },
    { key: 'dent_repair', label: 'Ketok & Rekonstruksi' },
    { key: 'painting', label: 'Cat Oven / Spray Booth' },
    { key: 'polishing', label: 'Poles & Quality Control' },
    { key: 'ready', label: 'Selesai & Siap Ambil' },
  ];

  const getStepIndex = (statusKey) => {
    const idx = steps.findIndex((s) => s.key === statusKey);
    return idx >= 0 ? idx : 1;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-brand-card border border-brand-border shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-surface border border-brand-border text-brand-orange">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-brand-text">
                Live Status Tracker
              </h3>
              <p className="text-xs text-brand-muted">
                Pantau proses pengerjaan bodi & cat mobil Anda secara real-time
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-brand-muted hover:text-brand-text text-xl font-bold p-1 leading-none"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">
            Nomor Polisi Kendaraan (Plat Nomor)
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={plateInput}
                onChange={(e) => setPlateInput(e.target.value)}
                placeholder="Contoh: BA 1234 XY"
                className="w-full bg-brand-surface border border-brand-border px-4 py-2.5 text-sm text-brand-text uppercase placeholder-brand-muted focus:outline-none focus:border-brand-orange"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-orange-hover disabled:opacity-50 transition-colors flex items-center gap-1.5"
            >
              {isLoading ? (
                <span>Mencari...</span>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  <span>Cek Progres</span>
                </>
              )}
            </button>
          </div>
          {error && (
            <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </p>
          )}
          <p className="text-[11px] text-brand-muted mt-2">
            💡 Contoh plat demo: <button type="button" onClick={() => setPlateInput('BA 1234 XY')} className="text-brand-orange hover:underline">BA 1234 XY</button>, <button type="button" onClick={() => setPlateInput('BA 8888 AB')} className="text-brand-orange hover:underline">BA 8888 AB</button>, atau nomor kendaraan Anda.
          </p>
        </form>

        {/* Status Result */}
        {result && (
          <div className="space-y-5 bg-brand-surface border border-brand-border p-5 rounded-none animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border pb-3">
              <div>
                <span className="text-xs font-bold px-2 py-0.5 bg-brand-card border border-brand-border text-brand-orange">
                  {result.plateNumber}
                </span>
                <h4 className="text-sm font-bold text-brand-text mt-1.5">
                  {result.carModel}
                </h4>
              </div>
              <div className="sm:text-right">
                <span className="text-[11px] text-brand-muted block">Estimasi Selesai:</span>
                <span className="text-xs font-semibold text-brand-text">{result.estimatedCompletion}</span>
              </div>
            </div>

            {/* Stepper Progress */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-brand-muted font-medium">Tahapan Servis:</span>
                <span className="text-brand-orange font-bold">{result.progressPercent}% Selesai</span>
              </div>
              <div className="w-full bg-brand-card h-2 border border-brand-border overflow-hidden">
                <div
                  className="bg-brand-orange h-full transition-all duration-700"
                  style={{ width: `${result.progressPercent}%` }}
                />
              </div>

              {/* Progress Steps List */}
              <div className="grid grid-cols-5 gap-1 text-center mt-3 text-[10px]">
                {steps.map((step, idx) => {
                  const currentIdx = getStepIndex(result.status);
                  const isDone = idx <= currentIdx;
                  return (
                    <div key={step.key} className="flex flex-col items-center">
                      <div
                        className={`w-5 h-5 flex items-center justify-center text-[10px] font-bold border mb-1 ${
                          isDone
                            ? 'bg-brand-orange text-white border-brand-orange'
                            : 'bg-brand-card text-brand-muted border-brand-border'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <span className={`leading-tight ${isDone ? 'text-brand-text font-semibold' : 'text-brand-muted'}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status Detail Note */}
            <div className="p-3 bg-brand-card border border-brand-border/60 text-xs">
              <p className="font-bold text-brand-orange mb-0.5">
                Status Terkini: {result.statusLabel}
              </p>
              <p className="text-brand-muted leading-relaxed">
                {result.notes}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
