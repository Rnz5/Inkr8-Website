import { apiCall } from './base.js';

export const usersAPI = {
  async getProfile() {
    return apiCall('/users/profile');
  },
  async getStats() {
    return apiCall('/users/stats');
  },
  async updateProfile(name) {
    return apiCall('/users/profile', {
      method: 'PUT',
      body: JSON.stringify({ name }),
    });
  },
};
