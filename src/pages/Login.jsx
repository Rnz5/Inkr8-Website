import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <div style={styles.brandContent}>
          <h1 style={styles.logo}>Inkr<span style={{ color: 'var(--accent-blue)' }}>8</span></h1>
          <blockquote style={styles.quote}>
            "A good artist can paint with any color; a good writer should write with any word."
          </blockquote>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <div style={styles.loginCard}>
          <h2 style={styles.welcomeTitle}>Welcome back.</h2>
          <p style={styles.welcomeSubtitle}>Log in to continue your writing journey.</p>
          
          <button onClick={() => navigate('/')} style={styles.googleBtn}>
            <span style={styles.googleIcon}>G</span> Continue with Google
          </button>

          <span style={styles.divider}>or</span>

          <p style={styles.legalText}>
            By continuing, you agree to our{' '}
            <a href="#terms" style={styles.legalLink}>Terms of Service</a>{' '}
            and{' '}
            <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  leftPanel: {
    flex: 1.2,
    backgroundColor: '#050609',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    borderRight: '1px solid var(--border-color)',
  },
  brandContent: {
    maxWidth: '400px',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  quote: {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
  },
  rightPanel: {
    flex: 1,
    backgroundColor: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  },
  loginCard: {
    width: '100%',
    maxWidth: '360px',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-display)',
  },
  welcomeSubtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  googleBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  googleIcon: {
    fontWeight: '800',
    color: '#4285F4',
  },
  divider: {
    display: 'block',
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    margin: '1.5rem 0',
  },
  legalText: {
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    marginTop: '1.5rem',
  },
  legalLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'underline',
  },
};
