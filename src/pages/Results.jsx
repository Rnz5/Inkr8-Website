import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Results() {
  const navigate = useNavigate();
  const wordsUsed = [
    { word: 'Leeway', used: true },
    { word: 'Bulletproof', used: true },
    { word: 'Checkmated', used: true },
    { word: 'Causalism', used: false },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={() => navigate('/')} style={styles.backBtn}>
          ← Back to Home
        </button>
        <button onClick={() => navigate('/practice')} className="btn-primary">
          Practice Again
        </button>
      </header>

      <div style={styles.resultsGrid}>
        {/* Score Radial */}
        <section className="card" style={styles.scoreCard}>
          <span style={styles.sectionLabel}>YOUR SCORE</span>
          <div style={styles.radialWrapper}>
            <svg viewBox="0 0 100 100" style={styles.svg}>
              <circle cx="50" cy="50" r="45" style={styles.circleBg} />
              <circle cx="50" cy="50" r="45" style={styles.circleProgress} />
            </svg>
            <div style={styles.scoreContent}>
              <h2 style={styles.scoreNumber}>78.45%</h2>
              <span style={styles.scoreSub}>Good Job!</span>
            </div>
          </div>
        </section>

        {/* Feedback text */}
        <section className="card" style={styles.feedbackCard}>
          <span style={styles.sectionLabel}>📝 FEEDBACK</span>
          <p style={styles.feedbackText}>
            Your paragraph communicates your ideas well and maintains good structure throughout.
            You used the given words naturally, which strengthens the flow. Keep working on
            adding more vivid details to make your writing even more engaging.
          </p>
        </section>
      </div>

      {/* Words Used summary */}
      <section className="card" style={styles.wordsCard}>
        <span style={styles.sectionLabel}>WORDS USED (3/4)</span>
        <div style={styles.wordsList}>
          {wordsUsed.map((item) => (
            <div
              key={item.word}
              style={{
                ...styles.wordItem,
                borderColor: item.used ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item.word}</span>
              <span
                style={{
                  color: item.used ? 'var(--accent-green)' : 'var(--accent-red)',
                  fontWeight: '700',
                }}
              >
                {item.used ? '✓' : '✗'}
              </span>
            </div>
          ))}
        </div>
      </section>
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
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '1.25rem',
  },
  scoreCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
  },
  sectionLabel: {
    alignSelf: 'flex-start',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
  },
  radialWrapper: {
    position: 'relative',
    width: '140px',
    height: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)',
  },
  circleBg: {
    fill: 'none',
    stroke: 'var(--border-color)',
    strokeWidth: '8',
  },
  circleProgress: {
    fill: 'none',
    stroke: 'var(--accent-blue)',
    strokeWidth: '8',
    strokeDasharray: '282.7', /* 2 * PI * r = 282.7 */
    strokeDashoffset: '60.9', /* 282.7 * (1 - 0.7845) = 60.9 */
    strokeLinecap: 'round',
  },
  scoreContent: {
    position: 'absolute',
    textAlign: 'center',
  },
  scoreNumber: {
    fontSize: '1.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '800',
  },
  scoreSub: {
    fontSize: '0.75rem',
    color: 'var(--accent-blue)',
    fontWeight: '600',
  },
  feedbackCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1.5rem',
  },
  feedbackText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  wordsCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  wordsList: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  wordItem: {
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
  },
};
