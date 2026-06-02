import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StandardWritingMode.css';

export default function StandardWritingMode() {
  const navigate = useNavigate();

  return (
    <div className="card standard-writing-card">
      <div className="standard-writing-icon">
        <span>R8</span>
      </div>
      <h2 className="standard-writing-title">Standard Writing</h2>
      <p className="standard-writing-desc">
        Write a 150-word paragraph using 4 random words.
      </p>
      <ul className="standard-writing-features">
        <li>4 Random Words</li>
        <li>50 - 150 words</li>
      </ul>
      <button onClick={() => navigate('/practice/write')} className="btn-primary standard-writing-select-btn">
        Select Mode
      </button>
    </div>
  );
}
