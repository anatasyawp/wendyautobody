/**
 * Central API Client Layer
 * Terintegrasi dengan environment variable dan mock fallback otomatis
 * sehingga aplikasi tidak pernah crash meskipun Backend belum dihidupkan.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const USE_MOCK_FALLBACK = import.meta.env.VITE_USE_MOCK_FALLBACK !== 'false';

export async function apiRequest(endpoint, { method = 'GET', body, headers = {}, isFormData = false } = {}) {
  const config = {
    method,
    headers: {
      ...(!isFormData && { 'Content-Type': 'application/json' }),
      ...headers,
    },
  };

  if (body) {
    config.body = isFormData ? body : JSON.stringify(body);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 detik timeout
    config.signal = controller.signal;

    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    if (USE_MOCK_FALLBACK) {
      console.warn(`[Backend Offline / In Development] Request to "${endpoint}" dialihkan ke Mock Service Fallback.`);
      return { success: false, fallback: true, error: error.message };
    }
    throw error;
  }
}
