import { apiCall } from './base.js';

export const tipsAPI = {
  async getAll() {
    return apiCall('/tips');
  },
  async getRandom() {
    return apiCall('/tips/random');
  },
};
