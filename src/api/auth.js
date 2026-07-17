import { apiCall } from './base.js';

export const authAPI = {
  async register(name, email, password) {
    const data = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    localStorage.setItem('inkr8_token', data.token);
    return data;
  },

  async login(email, password) {
    const data = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem('inkr8_token', data.token);
    return data;
  },

  logout() {
    localStorage.removeItem('inkr8_token');
  },
};
