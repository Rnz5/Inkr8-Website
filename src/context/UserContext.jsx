import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const DEFAULT_USER = {
  name: 'Randy',
  email: 'randy@inkr8.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  merit: 1250,
  meritCap: 50000,
  elo: 1420,
  reputation: 850,
  submissions: [
    {
      id: 1,
      type: 'Standard Writing',
      date: '2026-05-24',
      score: 78.45,
      paragraph: 'The freedom to act or decide as one wants is key to leeway. Being checkmated in a game forces a player into a corner. A bulletproof design ensures causalism runs smoothly.',
      wordsUsed: ['Leeway', 'Bulletproof', 'Checkmated'],
      feedback: 'Your paragraph communicates your ideas well and maintains good structure throughout. You used the given words naturally, which strengthens the flow. Keep working on adding more vivid details to make your writing even more engaging.'
    },
    {
      id: 2,
      type: 'Standard Writing',
      date: '2026-05-20',
      score: 65.20,
      paragraph: 'We had to design a bulletproof system. However, the constraints left little leeway for causalism, and we ended up checkmated by our own decisions.',
      wordsUsed: ['Leeway', 'Bulletproof', 'Checkmated'],
      feedback: 'A decent attempt. The sentence structure could be simplified to avoid run-on sentences. Try to vary your vocabulary and double check your grammar to improve coherence.'
    }
  ],
  onboardingCompleted: true
};

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('inkr8_auth') === 'true';
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('inkr8_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  useEffect(() => {
    localStorage.setItem('inkr8_auth', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('inkr8_user', JSON.stringify(user));
  }, [user]);

  const login = (name, email) => {
    setUser(prev => ({
      ...prev,
      name: name || prev.name,
      email: email || prev.email,
      // The login flow already completes onboarding in the login screen.
      onboardingCompleted: true
    }));
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Reset to default on logout to allow clean demo
    setUser(DEFAULT_USER);
  };

  const completeOnboarding = (username) => {
    setUser(prev => ({
      ...prev,
      name: username,
      onboardingCompleted: true
    }));
  };

  const updateUsername = (newUsername) => {
    setUser(prev => ({
      ...prev,
      name: newUsername
    }));
  };

  const expandMeritCap = () => {
    const cost = 500;
    if (user.merit < cost) return { success: false, message: 'Insufficient Merit. Expanding cap costs 500 Merit.' };
    
    setUser(prev => {
      const currentCap = prev.meritCap;
      const expansion = Math.floor(currentCap * 0.25); // Expand by 25% of current cap
      return {
        ...prev,
        merit: prev.merit - cost,
        meritCap: currentCap + expansion
      };
    });
    return { success: true, message: `Cap expanded successfully by 25%!` };
  };

  const payWeeklyTax = () => {
    const tax = 500;
    if (user.merit < tax) {
      // Reputation penalty if they can't pay tax
      setUser(prev => ({
        ...prev,
        reputation: Math.max(-1000, prev.reputation - 100)
      }));
      return { success: false, message: 'Insufficient Merit to pay tax! Reputation reduced by 100.' };
    }

    setUser(prev => ({
      ...prev,
      merit: prev.merit - tax,
      reputation: Math.min(1000, prev.reputation + 25) // Small reputation bump for paying tax
    }));
    return { success: true, message: 'Weekly tax of 500 Merit paid successfully. Reputation boosted!' };
  };

  const generateReputationReport = () => {
    const cost = 50;
    if (user.merit < cost) return { success: false, message: 'Insufficient Merit. Report costs 50 Merit.' };

    setUser(prev => ({
      ...prev,
      merit: prev.merit - cost
    }));
    return { success: true };
  };

  const addSubmission = (type, paragraph, score, wordsUsed, feedback) => {
    // Reward calculation based on score
    const meritReward = Math.floor(score * 0.8) + (wordsUsed.length * 10);
    const eloChange = Math.floor((score - 60) * 0.6); // E.g. score of 80 gives +12 ELO, score of 50 gives -6 ELO

    setUser(prev => {
      const newSubmission = {
        id: prev.submissions.length + 1,
        type,
        date: new Date().toISOString().split('T')[0],
        score,
        paragraph,
        wordsUsed,
        feedback
      };

      // Cap merit based on current cap
      const newMerit = Math.min(prev.meritCap, prev.merit + meritReward);
      const newElo = Math.max(0, prev.elo + eloChange);
      
      // Update reputation based on score
      const repChange = score >= 70 ? 10 : -15;
      const newRep = Math.max(-1000, Math.min(1000, prev.reputation + repChange));

      return {
        ...prev,
        merit: newMerit,
        elo: newElo,
        reputation: newRep,
        submissions: [newSubmission, ...prev.submissions]
      };
    });

    return { meritReward, eloChange };
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        completeOnboarding,
        updateUsername,
        expandMeritCap,
        payWeeklyTax,
        generateReputationReport,
        addSubmission
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
