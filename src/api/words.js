import { apiCall } from './base.js';

export const wordsAPI = {
  async getAll() {
    return apiCall('/words');
  },
  async getRandom() {
    return apiCall('/words/random');
  },
};
