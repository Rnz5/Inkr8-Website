import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconPractice = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconProfile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function Sidebar() {
  const { user, logout } = useUser();

  const activeLinks = [
    { name: 'Home', path: '/', icon: <IconHome /> },
    { name: 'Practice', path: '/practice', icon: <IconPractice /> },
    { name: 'Profile', path: '/profile', icon: <IconProfile /> },
  ];

  return (
    <aside className="sidebar">
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>Inkr<span style={{ color: 'var(--accent-blue)' }}>8</span></span>
      </div>

      <nav style={styles.nav}>
        {activeLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              ...styles.navLink,
              ...(isActive ? styles.navLinkActive : {}),
            })}
          >
            <span style={styles.icon}>{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div style={styles.footer}>
        <div style={styles.userSummary}>
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'}
            alt="Avatar"
            style={styles.userAvatar}
          />
          <div style={styles.userText}>
            <span style={styles.userName}>{user.name}</span>
            <span style={styles.userMerit}>{user.merit.toLocaleString()} Merit</span>
          </div>
        </div>
        <button onClick={logout} style={styles.logoutBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

const styles = {
  logoContainer: {
    marginBottom: '2.5rem',
  },
  logoText: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    letterSpacing: '0.02em',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    flex: 1,
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'var(--transition-smooth)',
    position: 'relative',
  },
  navLinkActive: {
    backgroundColor: 'var(--accent-blue-transparent)',
    color: 'var(--accent-blue)',
    fontWeight: '600',
    boxShadow: 'inset 3px 0 0 0 var(--accent-blue)',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  userSummary: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid var(--border-color)',
  },
  userText: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  userName: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  userMerit: {
    fontSize: '0.75rem',
    color: 'var(--accent-gold)',
    fontWeight: '500',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '0.75rem 1rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    transition: 'var(--transition-smooth)',
  },
};
