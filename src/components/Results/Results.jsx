import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Results.css';

const fallbackParagraph = 'Despite having little leeway in the negotiations, the lawyer presented a bulletproof argument. The opposing counsel was completely checkmated, unable to rely on simple causalism to explain away the clear evidence.';

const feedbackOptions = [
  'Your paragraph communicates the main idea clearly and keeps a steady rhythm from beginning to end. The required vocabulary feels natural, and the structure gives the response a polished academic tone.',
  'The submission shows strong control of vocabulary and a confident sentence flow. To improve even more, add one or two sharper supporting details so the argument feels more vivid and memorable.',
  'You used the target words in a coherent way and maintained a clean paragraph structure. The writing would become stronger with a slightly more expressive conclusion that reinforces the central idea.',
];

function getLatestSubmissionParagraph() {
  const savedSubmission = localStorage.getItem('inkr8_latest_submission');

  if (!savedSubmission) {
    return fallbackParagraph;
  }

  try {
    const parsedSubmission = JSON.parse(savedSubmission);
    const paragraph = parsedSubmission?.paragraph;
    return typeof paragraph === 'string' && paragraph.trim() ? paragraph : fallbackParagraph;
  } catch {
    return fallbackParagraph;
  }
}

function generateRandomScore() {
  return Number((Math.random() * 100).toFixed(2));
}

export default function Results() {
  const navigate = useNavigate();
  const paragraph = useMemo(() => getLatestSubmissionParagraph(), []);
  const score = useMemo(() => generateRandomScore(), []);
  const feedback = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * feedbackOptions.length);
    return feedbackOptions[randomIndex];
  }, []);
  const scoreOffset = 282.7 - (score / 100) * 282.7;

  const wordsUsed = [
    { word: 'Leeway', used: true },
    { word: 'Bulletproof', used: true },
    { word: 'Checkmated', used: true },
    { word: 'Causalism', used: false },
  ];

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
          <span className="results-section-label">WORDS USED (3/4)</span>
          <div className="results-words-list">
            {wordsUsed.map((item) => (
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
