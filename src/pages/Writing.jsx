import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Writing() {
  const navigate = useNavigate();
  const words = ['Leeway', 'Bulletproof', 'Checkmated', 'Causalism'];
  const [paragraph, setParagraph] = useState('');

  // Dynamically calculate word count
  const wordCount = paragraph.trim() === '' ? 0 : paragraph.trim().split(/\s+/).length;
  const progressPercentage = Math.min(100, Math.floor((wordCount / 150) * 100));

  // Determine which words have been used (case-insensitive)
  const getUsedWords = () => {
    return words.filter(word => 
      paragraph.toLowerCase().includes(word.toLowerCase())
    );
  };

  const usedWordsList = getUsedWords();

  const handleSubmit = () => {
    if (wordCount < 10) {
      alert('Please write a paragraph of at least 10 words before submitting.');
      return;
    }

    // Calculate score based on word count and used words
    const baseScore = 65;
    const wordBonus = Math.min(15, Math.floor((wordCount / 150) * 15));
    const targetWordBonus = usedWordsList.length * 5; // +5 points per target word used
    const randomVariance = Math.floor(Math.random() * 6); // 0 to 5 points variance
    const finalScore = parseFloat(Math.min(100, baseScore + wordBonus + targetWordBonus + randomVariance).toFixed(2));

    // Generate feedback comments based on the score and words used
    let feedback = '';
    if (finalScore >= 85) {
      feedback = `Excellent paragraph! Your use of vocabulary is sophisticated, particularly your natural integration of the terms: ${usedWordsList.join(', ')}. Grammar is impeccable, and the coherence flows beautifully from sentence to sentence. Truly a professional-level composition.`;
    } else if (finalScore >= 70) {
      feedback = `Good job! The paragraph is well-structured and communicates your ideas clearly. You successfully incorporated ${usedWordsList.length} of the target words. To improve further, try to vary your sentence structures more and check for slight redundancy in the middle sentences.`;
    } else {
      feedback = `A solid attempt. You need to work on transition words to make sentences connect more naturally. Try to write a bit more to elaborate on your points, and make sure to include more of the required vocabulary words to maximize your score.`;
    }

    // Save result temporarily for Results page to pick up and award
    const tempResult = {
      type: 'Standard Writing',
      paragraph,
      score: finalScore,
      wordsUsed: usedWordsList,
      feedback,
      allWords: words
    };

    localStorage.setItem('inkr8_temp_result', JSON.stringify(tempResult));
    navigate('/practice/results');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button onClick={() => navigate('/practice')} style={styles.backBtn}>
            ← Back
          </button>
          <h1 style={styles.title}>Standard Writing</h1>
        </div>
        <button onClick={handleSubmit} className="btn-primary">
          Submit
        </button>
      </header>

      <div style={styles.workspace}>
        {/* Words Row */}
        <div>
          <p style={styles.label}>Use these 4 words in your paragraph (not all are required)</p>
          <div style={styles.wordsList}>
            {words.map((word) => {
              const isUsed = paragraph.toLowerCase().includes(word.toLowerCase());
              return (
                <span 
                  key={word} 
                  style={{
                    ...styles.wordBadge,
                    borderColor: isUsed ? 'var(--accent-green)' : 'var(--border-color)',
                    backgroundColor: isUsed ? 'var(--accent-green-transparent)' : 'var(--bg-card)',
                    color: isUsed ? 'var(--accent-green)' : 'var(--text-primary)',
                  }}
                >
                  {word} {isUsed && '✓'}
                </span>
              );
            })}
          </div>
        </div>

        {/* Text Area */}
        <textarea
          placeholder="Start writing your paragraph here..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          style={styles.textArea}
          rows={10}
        />

        {/* Bottom row metrics */}
        <div style={styles.bottomRow}>
          <div className="card" style={styles.metricCard}>
            <span style={styles.metricLabel}>Word Count</span>
            <div style={styles.metricVal}>
              <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>{wordCount}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}> / 150 words</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${progressPercentage}%` }} />
            </div>
          </div>

          <div className="card" style={styles.metricCard}>
            <span style={styles.metricLabel}>Tips</span>
            <p style={styles.tipText}>
              Be creative, be original, and most importantly, express your ideas clearly. Using target words naturally boosts your ELO!
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
    textAlign: 'left',
  },
  wordsList: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  wordBadge: {
    border: '1px solid var(--border-color)',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'var(--transition-smooth)',
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
    textAlign: 'left',
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
    textAlign: 'left',
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
    height: '100%',
    backgroundColor: 'var(--accent-blue)',
    transition: 'var(--transition-smooth)',
  },
  tipText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
    textAlign: 'left',
  },
};
