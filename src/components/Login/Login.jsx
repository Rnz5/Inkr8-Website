import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [showAccountSelector, setShowAccountSelector] = useState(false);
  const accounts = [
    { name: 'Adrian', email: 'adrian@inkr8.com', initials: 'AF' },
    { name: 'Scrum Master', email: 'scrumaster@inkr8.com', initials: 'SM' },
    { name: '2.236067977', email: '2.23606@inkr8.com', initials: '23' },
    { name: 'Andres', email: 'andres@inkr8.com', initials: 'AP' },
  ];

  const handleGoogleClick = () => {
    setIsBtnLoading(true);
    setTimeout(() => {
      setIsBtnLoading(false);
      setShowAccountSelector(true);
    }, 1200);
  };

  const handleAccountSelect = (name, email) => {
    login(name, email);
    navigate('/');
    setShowAccountSelector(false);
  };

  return (
    <div style={styles.container}>
      <div className="glow-orb" style={{ ...styles.orb1, width: '400px', height: '400px', backgroundColor: 'var(--accent-blue)', left: '-10%', top: '10%' }} />
      <div className="glow-orb" style={{ ...styles.orb2, width: '300px', height: '300px', backgroundColor: 'var(--accent-blue)', right: '10%', bottom: '10%' }} />

      <div style={styles.leftPanel}>
        <div style={styles.brandContent}>
          <h1 style={styles.logo}>
            Inkr<span style={{ color: 'var(--accent-blue)' }}>8</span>
          </h1>
          <blockquote style={styles.quote}>
            "A good artist can paint with any color; a good writer should write with any word."
          </blockquote>
        </div>
      </div>

      <div style={styles.rightPanel}>
        <div className="glass-panel" style={styles.loginCard}>
          <h2 style={styles.welcomeTitle}>Welcome back.</h2>
          <p style={styles.welcomeSubtitle}>Log in to continue your writing journey.</p>
          
          <button 
            onClick={handleGoogleClick} 
            style={styles.googleBtn} 
            disabled={isBtnLoading}
          >
            {isBtnLoading ? (
              <span className="spinner" />
            ) : (
              <svg style={styles.googleSvg} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            )}
            {isBtnLoading ? 'Connecting...' : 'Continue with Google'}
          </button>
          <p style={styles.legalText}>
            By continuing, you agree to our{' '}
            <a href="#terms" style={styles.legalLink}>Terms of Service</a>{' '}
            and{' '}
            <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>.
          </p>
        </div>
      </div>

      {showAccountSelector && (
        <div className="modal-overlay">
          <div className="modal-content" style={styles.googleModal}>
            <div style={styles.googleModalHeader}>
              <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginBottom: '0.5rem' }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <h3 style={styles.googleModalTitle}>Sign in with Google</h3>
              <p style={styles.googleModalSubtitle}>to continue to Inkr8</p>
            </div>

            <div style={styles.accountsList}>
              {accounts.map((account) => (
                <div
                  key={account.email}
                  onClick={() => handleAccountSelect(account.name, account.email)}
                  style={styles.accountRow}
                >
                  <div style={styles.accountAvatar}>{account.initials}</div>
                  <div style={styles.accountDetails}>
                    <span style={styles.accountName}>{account.name}</span>
                    <span style={styles.accountEmail}>{account.email}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowAccountSelector(false)} 
              className="btn-secondary" 
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#050609',
  },
  leftPanel: {
    flex: 1.2,
    backgroundColor: '#020305',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    borderRight: '1px solid var(--border-color)',
    zIndex: 1,
    position: 'relative',
  },
  brandContent: {
    maxWidth: '400px',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '4.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  quote: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    fontWeight: '300',
    borderLeft: '3px solid var(--accent-blue)',
    paddingLeft: '1.5rem',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
    zIndex: 1,
  },
  loginCard: {
    width: '100%',
    maxWidth: '400px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: '1.85rem',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
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
    color: '#111827',
    border: 'none',
    borderRadius: '8px',
    padding: '0.85rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.05)',
  },
  googleSvg: {
    width: '18px',
    height: '18px',
  },
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    gap: '1rem',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'var(--border-color)',
  },
  dividerText: {
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
  },
  dummyForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    opacity: 0.5,
  },
  dummyInput: {
    width: '100%',
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '0.8rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    cursor: 'not-allowed',
  },
  dummyBtn: {
    width: '100%',
    backgroundColor: 'var(--border-color)',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    cursor: 'not-allowed',
  },
  legalText: {
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    marginTop: '2rem',
  },
  legalLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'underline',
  },
  googleModal: {
    maxWidth: '420px',
    backgroundColor: '#0a0d14',
    border: '1px solid #1f293d',
  },
  googleModalHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  googleModalTitle: {
    fontSize: '1.4rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    color: '#ffffff',
  },
  googleModalSubtitle: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  accountsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxHeight: '240px',
    overflowY: 'auto',
  },
  accountRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  accountAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-blue)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  accountDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  accountName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  accountEmail: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
  },
  onboardingModal: {
    maxWidth: '440px',
  },
  onboardingHeader: {
    marginBottom: '1.5rem',
  },
  onboardingBadge: {
    fontSize: '0.7rem',
    backgroundColor: 'var(--accent-blue-transparent)',
    color: 'var(--accent-blue)',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontWeight: '700',
    display: 'inline-block',
    marginBottom: '0.5rem',
  },
  onboardingTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  onboardingSubtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  onboardingBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
  inputLabel: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  feedbackText: {
    fontSize: '0.75rem',
    fontWeight: '500',
    marginTop: '0.25rem',
  },
  profilePreview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  previewCard: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px dashed var(--border-color)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  previewAvatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: 'var(--border-color)',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '0.95rem',
    border: '1px solid var(--border-color)',
  },
  previewName: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    textAlign: 'left',
  },
  previewSubtitle: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    textAlign: 'left',
  },
};
