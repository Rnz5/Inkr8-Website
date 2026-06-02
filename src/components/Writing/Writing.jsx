import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Writing() {
  const navigate = useNavigate();
  const words = ['Leeway', 'Bulletproof', 'Checkmated', 'Causalism'];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button onClick={() => navigate('/practice')} style={styles.backBtn}>
            ← Back
          </button>
          <h1 style={styles.title}>Standard Writing</h1>
        </div>
        <button onClick={() => navigate('/practice/results')} className="btn-primary">
          Submit
        </button>
      </header>

      <div style={styles.workspace}>
        <div>
          <p style={styles.label}>Use these 4 words in your paragraph (not all are required)</p>
          <div style={styles.wordsList}>
            {words.map((word) => (
              <span key={word} style={styles.wordBadge}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Start writing your paragraph here..."
          style={styles.textArea}
          rows={10}
        />

        <div style={styles.bottomRow}>
          <div className="card" style={styles.metricCard}>
            <span style={styles.metricLabel}>Word Count</span>
            <div style={styles.metricVal}>
              <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>82</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}> / 150 words</span>
            </div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>
          </div>

          <div className="card" style={styles.metricCard}>
            <span style={styles.metricLabel}>Tips</span>
            <p style={styles.tipText}>
              Be creative, be original, and most importantly, express your ideas clearly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1rem',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: '1.5rem',
    fontFamily: 'var(--font-display)',
  },
  workspace: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  label: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.5rem',
  },
  wordsList: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  wordBadge: {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  textArea: {
    width: '100%',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    padding: '1rem',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    resize: 'vertical',
  },
  bottomRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '1rem',
  },
  metricCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '1rem 1.25rem',
  },
  metricLabel: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  metricVal: {
    display: 'flex',
    alignItems: 'baseline',
  },
  progressBar: {
    width: '100%',
    height: '4px',
    backgroundColor: 'var(--border-color)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressFill: {
    width: '55%',
    height: '100%',
    backgroundColor: 'var(--accent-blue)',
  },
  tipText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
};
