import { apiRequest } from './apiClient';

export const contactService = {
  /**
   * Mengirim pesan kontak / pertanyaan umum
   * @param {Object} payload { name, email, phone, subject, message }
   */
  async submitContact(payload) {
    const res = await apiRequest('/contact', {
      method: 'POST',
      body: payload,
    });

    if (res.success) {
      return res.data;
    }

    // Mock Fallback jika backend belum jalan
    await new Promise((r) => setTimeout(r, 800));
    return {
      success: true,
      message: 'Pesan Anda berhasil diterima oleh sistem simulasi Wendy Autobody.',
      ticketId: `MSG-${Math.floor(100000 + Math.random() * 900000)}`,
    };
  },

  /**
   * Mengirim form estimasi / booking perbaikan bodi & cat mobil
   * @param {FormData|Object} payload
   */
  async submitBooking(payload) {
    const isFormData = payload instanceof FormData;
    const res = await apiRequest('/bookings', {
      method: 'POST',
      body: payload,
      isFormData,
    });

    if (res.success) {
      return res.data;
    }

    // Mock Fallback jika backend belum jalan
    await new Promise((r) => setTimeout(r, 1000));
    return {
      success: true,
      message: 'Permohonan estimasi berhasil disimpan.',
      bookingCode: `WB-${Math.floor(100000 + Math.random() * 900000)}`,
    };
  },
};
