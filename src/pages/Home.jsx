import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.greeting}>Hello, Randy! 👋</h1>
      </header>

      {/* Word of the Moment Card */}
      <section className="card" style={styles.wordCard}>
        <span style={styles.cardLabel}>WORD OF THE MOMENT</span>
        <div style={styles.wordHeader}>
          <h2 style={styles.wordTitle}>Leeway</h2>
          <span style={styles.wordPhonetic}>/ˈliːweɪ/</span>
          <span style={styles.wordType}>noun • Common</span>
        </div>
        <p style={styles.wordDefinition}>
          The freedom to act or decide as one wants.
        </p>
        <button style={styles.wordActionBtn}>
          Show example sentence
        </button>
      </section>

      {/* Quick Actions */}
      <section style={styles.quickActionsSection}>
        <h3 style={styles.sectionTitle}>QUICK ACTIONS</h3>
        <div style={styles.grid}>
          {/* Action 1: Practice */}
          <div onClick={() => navigate('/practice')} className="card" style={styles.actionCard}>
            <div style={styles.cardHeader}>
              <h4 style={styles.actionName}>Practice</h4>
              <span>📝</span>
            </div>
            <p style={styles.actionDesc}>
              Hone your writing skills and earn Merit.
            </p>
            <div style={styles.actionFooter}>
              <span>→</span>
            </div>
          </div>

          {/* Action 2: Competitions */}
          <div className="card" style={{ ...styles.actionCard, cursor: 'default' }}>
            <div style={styles.cardHeader}>
              <h4 style={styles.actionName}>Competitions</h4>
              <span>🏆</span>
            </div>
            <p style={styles.actionDesc}>
              Compete and win Merit in tournaments.
            </p>
            <div style={styles.actionFooter}>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: '2rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
  },
  wordCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '600px',
  },
  cardLabel: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
  },
  wordHeader: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.85rem',
  },
  wordTitle: {
    fontSize: '1.75rem',
    fontFamily: 'var(--font-display)',
  },
  wordPhonetic: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  },
  wordType: {
    color: 'var(--accent-blue)',
    fontSize: '0.8rem',
    backgroundColor: 'var(--accent-blue-transparent)',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontWeight: '600',
  },
  wordDefinition: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  wordActionBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#1b1d28',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
  quickActionsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    maxWidth: '700px',
  },
  actionCard: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '150px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  actionName: {
    fontSize: '1.15rem',
    fontFamily: 'var(--font-display)',
  },
  actionDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    flex: 1,
  },
  actionFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.75rem',
    color: 'var(--text-muted)',
  },
};
