import { apiCall } from './base.js';

export const gamificationAPI = {
  async expandMeritCap() {
    return apiCall('/gamification/expand-merit-cap', { method: 'POST' });
  },
  async payWeeklyTax() {
    return apiCall('/gamification/pay-weekly-tax', { method: 'POST' });
  },
};
