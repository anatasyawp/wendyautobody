import { apiRequest } from './apiClient';

// Mock database simulasi status servis mobil di bengkel Padang
const mockTrackingDatabase = {
  'BA1234XY': {
    plateNumber: 'BA 1234 XY',
    carModel: 'Honda Civic Turbo (Hitam Crystal)',
    serviceType: 'Body Repair Panel Pintu Kanan & Cat Oven',
    status: 'painting', // inspection, dent_repair, painting, polishing, ready
    statusLabel: 'Pengecatan di Ruang Oven (Spray Booth)',
    entryDate: '07 Oktober 2026',
    estimatedCompletion: '10 Oktober 2026',
    progressPercent: 75,
    notes: 'Tahap primer dan basecoat telah selesai, saat ini proses baking clear coat di spray booth.',
  },
  'BA8888AB': {
    plateNumber: 'BA 8888 AB',
    carModel: 'Toyota Fortuner GR (Putih Mutiara)',
    serviceType: 'Full Body Paint Refinish & Coating Keramik',
    status: 'polishing',
    statusLabel: 'Finishing & Detailing Polishing',
    entryDate: '05 Oktober 2026',
    estimatedCompletion: '09 Oktober 2026',
    progressPercent: 90,
    notes: 'Tahap poles compound halus dan pembersihan debu panel sebelum quality control akhir.',
  },
  'BA5678CD': {
    plateNumber: 'BA 5678 CD',
    carModel: 'Mitsubishi Pajero Sport (Abu-abu Metalik)',
    serviceType: 'Bumper Depan Dent Pulling & Cat Ulang',
    status: 'ready',
    statusLabel: 'Selesai & Siap Diambil',
    entryDate: '06 Oktober 2026',
    estimatedCompletion: '09 Oktober 2026',
    progressPercent: 100,
    notes: 'Quality control pass. Kendaraan telah dicuci bersih dan siap diserahkan kepada pemilik.',
  },
};

export const trackingService = {
  /**
   * Cek status progres pengerjaan mobil via No Plat / No Polisi
   * @param {string} plateNumber
   */
  async checkStatus(plateNumber) {
    const cleanPlate = plateNumber.toUpperCase().replace(/\s+/g, '');
    const res = await apiRequest(`/tracking/${cleanPlate}`);

    if (res.success) {
      return res.data;
    }

    // Mock Fallback jika backend belum aktif
    await new Promise((r) => setTimeout(r, 700));

    if (mockTrackingDatabase[cleanPlate]) {
      return {
        found: true,
        data: mockTrackingDatabase[cleanPlate],
      };
    }

    // Default template jika plat nomor apapun dimasukkan (demo interaktif)
    return {
      found: true,
      data: {
        plateNumber: plateNumber.toUpperCase(),
        carModel: 'Kendaraan Terdaftar',
        serviceType: 'Body Repair & Cat Panel Wendy Autobody',
        status: 'dent_repair',
        statusLabel: 'Tahap Perataan Plat & Pemasangan Dempul Halus',
        entryDate: 'Kemarin',
        estimatedCompletion: '2-3 Hari Kerja',
        progressPercent: 45,
        notes: 'Panel telah diluruskan dengan spot welder. Sedang proses aplikasi epoxy primer tahan karat.',
      },
    };
  },
};
