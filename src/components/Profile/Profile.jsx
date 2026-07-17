import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './Profile.css';

export default function Profile() {
  const { user, updateUsername, logout } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(user.name);
  const [error, setError] = useState('');

  const handleSave = () => {
    const value = draftName.trim();
    if (value.length < 3) {
      setError('Min 3 characters required');
      return;
    }
    if (value.includes(' ')) {
      setError('Spaces are not allowed');
      return;
    }
    updateUsername(value);
    setIsEditing(false);
    setError('');
  };

  const initials = (user.name || 'U')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() || '')
    .join('');

  const recentNotes = [
    'Profile details are ready for the writing challenge.',
    'Use the sidebar to move between Home, Practice and Profile.',
    'The selected account is stored for the current session.'
  ];

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-subtitle">Basic user information and account access.</p>
      </header>

      <section className="card profile-card">
        <div className="profile-avatar">{initials}</div>
        <div className="profile-info">
          <div className="profile-name-row">
            {isEditing ? (
              <div className="profile-edit-row">
                <input
                  className="form-input profile-input"
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  maxLength={20}
                />
                <button className="btn-primary" onClick={handleSave}>Save</button>
                <button className="btn-secondary" onClick={() => { setDraftName(user.name); setIsEditing(false); setError(''); }}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <h2 className="profile-user-name">{user.name}</h2>
                <button className="profile-edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
              </>
            )}
          </div>
          {error && <p className="profile-error">{error}</p>}
          <p className="profile-email">{user.email}</p>
        </div>
      </section>

      <section className="card profile-notes-card">
        <h3 className="profile-section-title">Account Notes</h3>
        <ul className="profile-list">
          {recentNotes.map((note) => (
            <li key={note} className="profile-list-item">{note}</li>
          ))}
        </ul>
      </section>

      <button className="btn-secondary profile-logout-btn" onClick={logout}>
        Sign Out
      </button>
    </div>
  );
}
