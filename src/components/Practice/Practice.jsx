import React from 'react';
import { useNavigate } from 'react-router-dom';
import StandardWritingMode from './StandardWritingMode';
import './Practice.css';

export default function Practice() {
  const navigate = useNavigate();

  return (
    <div className="practice-page">
      <button onClick={() => navigate('/')} className="practice-back-btn">
        Back to Home
      </button>

      <div className="practice-container">
        <header className="practice-header">
          <h1 className="practice-title">Choose Your Practice Mode</h1>
        </header>

        <StandardWritingMode />

        <footer className="practice-footer">
          <p className="practice-free-text">Practice is 100% free!</p>
          <p className="practice-helper-text">
            The better you write, the more Merit you earn.
          </p>
        </footer>
      </div>
    </div>
  );
}
