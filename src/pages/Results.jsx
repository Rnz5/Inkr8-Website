import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Results() {
  const navigate = useNavigate();
  const { addSubmission } = useUser();
  
  // Local states for display
  const [result, setResult] = useState({
    type: 'Standard Writing',
    paragraph: 'The freedom to act or decide as one wants is key to leeway. Being checkmated in a game forces a player into a corner. A bulletproof design ensures causalism runs smoothly.',
    score: 78.45,
    wordsUsed: ['Leeway', 'Bulletproof', 'Checkmated'],
    feedback: 'Your paragraph communicates your ideas well and maintains good structure throughout. You used the given words naturally, which strengthens the flow. Keep working on adding more vivid details to make your writing even more engaging.',
    allWords: ['Leeway', 'Bulletproof', 'Checkmated', 'Causalism']
  });

  const [rewards, setRewards] = useState(null);
  const awardTriggered = useRef(false);

  useEffect(() => {
    // Look for a freshly submitted result in localStorage
    const saved = localStorage.getItem('inkr8_temp_result');
    if (saved) {
      const parsed = JSON.parse(saved);
      setResult(parsed);
      
      // Prevent awarding twice if React double-mounts in dev mode
      if (!awardTriggered.current) {
        awardTriggered.current = true;
        
        // Add submission to profile context and get rewards
        const rewardDetails = addSubmission(
          parsed.type,
          parsed.paragraph,
          parsed.score,
          parsed.wordsUsed,
          parsed.feedback
        );
        
        setRewards(rewardDetails);
        // Clear temp result so reload doesn't reward again
        localStorage.removeItem('inkr8_temp_result');
      }
    }
  }, [addSubmission]);

  const { score, paragraph, wordsUsed, feedback, allWords } = result;

  // Calculate circular SVG parameters
  const radius = 45;
  const circumference = 2 * Math.PI * radius; // ~282.7
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={() => navigate('/')} style={styles.backBtn}>
          ← Back to Home
        </button>
        <div style={styles.headerActions}>
          <button onClick={() => navigate('/practice')} className="btn-primary">
            Practice Again
          </button>
        </div>
      </header>

      {/* Rewards Toast/Banner if awarded */}
      {rewards && (
        <div className="card" style={styles.rewardBanner}>
          <span style={styles.rewardTitle}>🏆 PRACTICE COMPLETED! REWARDS UNLOCKED</span>
          <div style={styles.rewardRow}>
            <span style={styles.rewardBadge}>🪙 +{rewards.meritReward} Merit</span>
            <span style={{ ...styles.rewardBadge, color: rewards.eloChange >= 0 ? 'var(--accent-blue)' : 'var(--accent-red)' }}>
              ⚡ {rewards.eloChange >= 0 ? `+${rewards.eloChange}` : rewards.eloChange} ELO
            </span>
          </div>
        </div>
      )}

      <div style={styles.resultsGrid}>
        {/* Score Radial */}
        <section className="card" style={styles.scoreCard}>
          <span style={styles.sectionLabel}>YOUR SCORE</span>
          <div style={styles.radialWrapper}>
            <svg viewBox="0 0 100 100" style={styles.svg}>
              <circle cx="50" cy="50" r={radius} style={styles.circleBg} />
              <circle 
                cx="50" 
                cy="50" 
                r={radius} 
                style={{
                  ...styles.circleProgress,
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset
                }} 
              />
            </svg>
            <div style={styles.scoreContent}>
              <h2 style={styles.scoreNumber}>{score}%</h2>
              <span style={styles.scoreSub}>
                {score >= 80 ? 'Good Job!' : score >= 60 ? 'Completed' : 'Practice More'}
              </span>
            </div>
          </div>
        </section>

        {/* Feedback text */}
        <section className="card" style={styles.feedbackCard}>
          <span style={styles.sectionLabel}>📝 FEEDBACK</span>
          <p style={styles.feedbackText}>
            {feedback}
          </p>
        </section>
      </div>

      {/* Words Used summary */}
      <section className="card" style={styles.wordsCard}>
        <span style={styles.sectionLabel}>WORDS USED ({wordsUsed.length}/{allWords.length})</span>
        <div style={styles.wordsList}>
          {allWords.map((word) => {
            const isUsed = wordsUsed.includes(word);
            return (
              <div
                key={word}
                style={{
                  ...styles.wordItem,
                  borderColor: isUsed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                  backgroundColor: isUsed ? 'var(--accent-green-transparent)' : 'var(--accent-red-transparent)',
                }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{word}</span>
                <span
                  style={{
                    color: isUsed ? 'var(--accent-green)' : 'var(--accent-red)',
                    fontWeight: '700',
                  }}
                >
                  {isUsed ? '✓' : '✗'}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Paragraph display */}
      <section className="card" style={styles.paragraphSection}>
        <span style={styles.sectionLabel}>YOUR SUBMITTED PARAGRAPH</span>
        <p style={styles.paragraphDisplay}>
          {paragraph}
        </p>
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
  headerActions: {
    display: 'flex',
    gap: '0.5rem',
  },
  rewardBanner: {
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
    border: '1px solid rgba(245, 158, 11, 0.2)',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    animation: 'pulse-glow 3s infinite',
  },
  rewardTitle: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--accent-gold)',
    letterSpacing: '0.05em',
  },
  rewardRow: {
    display: 'flex',
    gap: '1.5rem',
  },
  rewardBadge: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: 'var(--accent-gold)',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '1.25rem',
    textAlign: 'left',
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
    textTransform: 'uppercase',
    marginBottom: '0.25rem',
    textAlign: 'left',
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
    strokeLinecap: 'round',
    transition: 'stroke-dashoffset 1s ease-out',
  },
  scoreContent: {
    position: 'absolute',
    textAlign: 'center',
  },
  scoreNumber: {
    fontSize: '1.75rem',
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
    textAlign: 'left',
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
    border: '1px solid',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
  },
  paragraphSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  paragraphDisplay: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    padding: '0.5rem',
    textAlign: 'left',
    borderLeft: '2px solid var(--border-color)',
    paddingLeft: '1rem',
  },
};
