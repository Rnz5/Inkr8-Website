import { apiCall } from './base.js';

export const submissionsAPI = {
  async create(type, paragraph, score, wordsUsed, feedback) {
    return apiCall('/submissions', {
      method: 'POST',
      body: JSON.stringify({ type, paragraph, score, wordsUsed, feedback }),
    });
  },
  async getAll() {
    return apiCall('/submissions');
  },
};
