const API_BASE = import.meta.env.VITE_API_URL || 'https://inkr8-backend.vercel.app';

export async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('inkr8_token');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API Error');
  }

  return response.json();
}
