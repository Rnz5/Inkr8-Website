import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Practice', path: '/practice', icon: '📝' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>Inkr<span style={{ color: 'var(--accent-blue)' }}>8</span></span>
      </div>
      <nav style={styles.nav}>
        {links.map((link) => (
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
        <NavLink to="/login" style={styles.logoutLink}>
          <span>🚪</span>
          <span>Sign Out</span>
        </NavLink>
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
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
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
    transition: 'all 0.2s ease',
  },
  navLinkActive: {
    backgroundColor: 'var(--accent-blue-transparent)',
    color: 'var(--accent-blue)',
  },
  icon: {
    fontSize: '1.1rem',
  },
  footer: {
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem',
  },
  logoutLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '0.75rem 1rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
};
