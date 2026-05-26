import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Practice() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={() => navigate('/')} style={styles.backBtn}>
          ← Back to Home
        </button>
        <h1 style={styles.title}>Choose Your Practice Mode</h1>
      </header>

      {/* Mode Card */}
      <div className="card" style={styles.modeCard}>
        <div style={styles.iconContainer}>
          <span>📝</span>
        </div>
        <h2 style={styles.modeTitle}>Standard Writing</h2>
        <p style={styles.modeDesc}>
          Write a 150-word paragraph using 4 random words.
        </p>
        <ul style={styles.featuresList}>
          <li>✦ 4 Random Words</li>
          <li>✦ 50 - 150 words</li>
        </ul>
        <button onClick={() => navigate('/practice/write')} className="btn-primary" style={styles.selectBtn}>
          Select Mode
        </button>
      </div>

      <footer style={styles.footer}>
        <p style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>Practice is 100% free!</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          The better you write, the more Merit you earn.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    paddingTop: '1rem',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: '1.75rem',
    fontFamily: 'var(--font-display)',
  },
  modeCard: {
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    backgroundColor: '#1b1d28',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
  modeTitle: {
    fontSize: '1.25rem',
    fontFamily: 'var(--font-display)',
    marginBottom: '0.5rem',
  },
  modeDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    marginBottom: '1rem',
  },
  featuresList: {
    listStyle: 'none',
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    marginBottom: '1.5rem',
  },
  selectBtn: {
    width: '100%',
  },
  footer: {
    textAlign: 'center',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1.25rem',
    width: '100%',
  },
};
