import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';

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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Profile</h1>
        <p style={styles.subtitle}>Basic user information and account access.</p>
      </header>

      <section className="card" style={styles.profileCard}>
        <div style={styles.avatar}>{initials}</div>
        <div style={styles.info}>
          <div style={styles.nameRow}>
            {isEditing ? (
              <div style={styles.editRow}>
                <input
                  className="form-input"
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  style={styles.input}
                  maxLength={20}
                />
                <button className="btn-primary" onClick={handleSave}>Save</button>
                <button className="btn-secondary" onClick={() => { setDraftName(user.name); setIsEditing(false); setError(''); }}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <h2 style={styles.userName}>{user.name}</h2>
                <button style={styles.editBtn} onClick={() => setIsEditing(true)}>Edit</button>
              </>
            )}
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <p style={styles.email}>{user.email}</p>
        </div>
      </section>

      <section className="card" style={styles.notesCard}>
        <h3 style={styles.sectionTitle}>Account Notes</h3>
        <ul style={styles.list}>
          {recentNotes.map((note) => (
            <li key={note} style={styles.listItem}>{note}</li>
          ))}
        </ul>
      </section>

      <button className="btn-secondary" onClick={logout} style={styles.logoutBtn}>
        Sign Out
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1rem 0'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem'
  },
  title: {
    margin: 0,
    fontSize: '2rem'
  },
  subtitle: {
    margin: 0,
    color: 'var(--text-secondary)'
  },
  profileCard: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  avatar: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--accent-blue-transparent)',
    color: 'var(--accent-blue)',
    fontWeight: '800',
    fontSize: '1.5rem',
    flexShrink: 0
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    flex: 1
  },
  nameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap'
  },
  userName: {
    margin: 0,
    fontSize: '1.4rem'
  },
  editBtn: {
    border: 'none',
    background: 'transparent',
    color: 'var(--accent-blue)',
    cursor: 'pointer',
    padding: 0
  },
  editRow: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  input: {
    minWidth: '220px'
  },
  error: {
    margin: 0,
    color: 'var(--accent-red)',
    fontSize: '0.9rem'
  },
  email: {
    margin: 0,
    color: 'var(--text-secondary)'
  },
  notesCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  sectionTitle: {
    margin: 0
  },
  list: {
    margin: 0,
    paddingLeft: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    color: 'var(--text-secondary)'
  },
  listItem: {
    lineHeight: 1.5
  },
  logoutBtn: {
    alignSelf: 'flex-start'
  }
};
