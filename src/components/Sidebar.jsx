import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Sidebar.css';

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
      <div className="sidebar-logo-container">
        <span className="sidebar-logo-text">Inkr<span className="sidebar-logo-accent">8</span></span>
      </div>

      <nav className="sidebar-nav">
        {activeLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => isActive ? 'sidebar-nav-link active' : 'sidebar-nav-link'}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user-summary">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%231a1e29'/><circle cx='16' cy='12' r='5' fill='%233b82f6'/><path d='M6 26.5C6 21.5 10.5 18.5 16 18.5C21.5 18.5 26 21.5 26 26.5' stroke='%233b82f6' stroke-width='2.5' stroke-linecap='round'/></svg>"
            alt="Avatar"
            className="sidebar-user-avatar"
          />
          <div className="sidebar-user-text">
            <span className="sidebar-user-name">{user.name}</span>
          </div>
        </div>
        <button onClick={logout} className="sidebar-logout-btn">
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
