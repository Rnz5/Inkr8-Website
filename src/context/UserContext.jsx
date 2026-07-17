import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api/auth.js';
import { usersAPI } from '../api/users.js';
import { submissionsAPI } from '../api/submissions.js';
import { gamificationAPI } from '../api/gamification.js';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('inkr8_token');
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadUserProfile();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const loadUserProfile = async () => {
    try {
      const profile = await usersAPI.getProfile();
      setUser(profile);
    } catch (err) {
      console.error('Failed to load profile:', err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const data = await authAPI.login(email, password);
    setUser(data.user);
    setIsAuthenticated(true);
    return data;
  };

  const register = async (name, email, password) => {
    const data = await authAPI.register(name, email, password);
    setUser(data.user);
    setIsAuthenticated(true);
    return data;
  };

  const logout = () => {
    authAPI.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  const updateUsername = async (newUsername) => {
    const updated = await usersAPI.updateProfile(newUsername);
    setUser(updated);
  };

  const addSubmission = async (type, paragraph, score, wordsUsed, feedback) => {
    const result = await submissionsAPI.create(type, paragraph, score, wordsUsed, feedback);
    setUser(prev => ({
      ...prev,
      merit: result.stats.merit,
      meritCap: result.stats.meritCap,
      elo: result.stats.elo,
      reputation: result.stats.reputation,
    }));
    return result;
  };

  const expandMeritCap = async () => {
    try {
      const result = await gamificationAPI.expandMeritCap();
      if (result.success) {
        await loadUserProfile();
        return { success: true, message: 'Cap expanded successfully!' };
      }
      return result;
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const payWeeklyTax = async () => {
    try {
      const result = await gamificationAPI.payWeeklyTax();
      if (result.success) {
        await loadUserProfile();
        return { success: true, message: 'Tax paid successfully!' };
      }
      return result;
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const completeOnboarding = (username) => {
    setUser(prev => ({ ...prev, name: username, onboardingCompleted: true }));
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        register,
        logout,
        updateUsername,
        addSubmission,
        expandMeritCap,
        payWeeklyTax,
        completeOnboarding,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
