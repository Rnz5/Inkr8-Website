import React, { useState, useEffect } from 'react';
import { submissionsAPI } from '../../api/submissions.js';
import './HistoryWidget.css';

export default function HistoryWidget() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    submissionsAPI.getAll().then(setSubmissions).catch(() => setSubmissions(null));
  }, []);

  return (
    <section className="home-quick-actions-section">
      <h3 className="home-section-title">HISTORY</h3>
      <div className="history-grid">
        {submissions.map((submission) => (
          <div key={submission.id} className="card history-widget-card">
            <div className="history-widget-header">
              <h4 className="history-widget-name">{ submission.type }</h4>
              <span className="history-widget-mark">{ submission.score }</span>
            </div>
            <p className="history-widget-desc">
              { submission.wordsUsed.map((word, key) => <span key={key} className='word'>{word}</span>) }
            </p>
            <p className="history-widget-review">
              { submission.paragraph.length > 200 ? submission.paragraph.slice(0, 200) + '...' : submission.paragraph }
            </p>
            <div className="history-widget-footer">
              <span>{ new Date(submission.updatedAt).toLocaleDateString() }</span>
            </div>
          </div>
        ))}
        {submissions.map((submission) => (
          <div key={submission.id} className="card history-widget-card">
            <div className="history-widget-header">
              <h4 className="history-widget-name">{ submission.type }</h4>
              <span className="history-widget-mark">{ submission.score }</span>
            </div>
            <p className="history-widget-desc">
              { submission.wordsUsed.map((word, key) => <span key={key} className='word'>{word}</span>) }
            </p>
            <p className="history-widget-review">
              { submission.paragraph.length > 200 ? submission.paragraph.slice(0, 200) + '...' : submission.paragraph }
            </p>
            <div className="history-widget-footer">
              <span>{ new Date(submission.updatedAt).toLocaleDateString() }</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
