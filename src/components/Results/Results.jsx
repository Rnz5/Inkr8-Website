import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Results.css';

function getSubmissionData(locationState) {
  if (locationState?.paragraph) return locationState;

  const saved = localStorage.getItem('inkr8_latest_submission');
  if (!saved) return null;

  try {
    const parsed = JSON.parse(saved);
    return parsed?.paragraph ? parsed : null;
  } catch {
    return null;
  }
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useMemo(() => getSubmissionData(location.state), [location.state]);

  if (!data) {
    return (
      <div className="results-page">
        <button onClick={() => navigate('/')} className="results-back-btn">
          Back to Home
        </button>
        <div className="results-container">
          <section className="card results-paragraph-card">
            <span className="results-section-label">NO RESULTS YET</span>
            <p className="results-submission-paragraph">
              You haven't submitted a practice yet. Head over to Practice and write a paragraph first.
            </p>
            <button onClick={() => navigate('/practice')} className="btn-primary">
              Go to Practice
            </button>
          </section>
        </div>
      </div>
    );
  }

  const { paragraph, feedback, allWords = [], wordsUsed = [] } = data;
  const score = Number(data.score) || 0;
  const scoreOffset = 282.7 - (score / 100) * 282.7;
  const wordsList = allWords.map((word) => ({ word, used: wordsUsed.includes(word) }));

  return (
    <div className="results-page">
      <button onClick={() => navigate('/')} className="results-back-btn">
        Back to Home
      </button>

      <div className="results-container">
        <header className="results-header">
          <div />
          <button onClick={() => navigate('/practice')} className="btn-primary">
            Practice Again
          </button>
        </header>

        <div className="results-grid">
          <section className="card results-score-card">
            <span className="results-section-label">YOUR SCORE</span>
            <div className="results-radial-wrapper">
              <svg viewBox="0 0 100 100" className="results-score-svg">
                <circle cx="50" cy="50" r="45" className="results-circle-bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="results-circle-progress"
                  style={{ strokeDashoffset: scoreOffset }}
                />
              </svg>
              <div className="results-score-content">
                <h2 className="results-score-number">{score.toFixed(2)}%</h2>
                <span className="results-score-sub">Good Job!</span>
              </div>
            </div>
          </section>

          <section className="card results-feedback-card">
            <span className="results-section-label">FEEDBACK</span>
            <p className="results-feedback-text">
              {feedback}
            </p>
          </section>
        </div>

        <section className="card results-paragraph-card">
          <span className="results-section-label">YOUR PARAGRAPH</span>
          <p className="results-submission-paragraph">
            {paragraph}
          </p>
        </section>

        <section className="card results-words-card">
          <span className="results-section-label">WORDS USED ({wordsUsed.length}/{allWords.length})</span>
          <div className="results-words-list">
            {wordsList.map((item) => (
              <div
                key={item.word}
                className={`results-word-item ${item.used ? 'results-word-item-used' : 'results-word-item-unused'}`}
              >
                <span className="results-word-text">{item.word}</span>
                <span className={item.used ? 'results-word-status-used' : 'results-word-status-unused'}>
                  {item.used ? 'Yes' : 'No'}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
