import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PracticeWidget.css';

export default function PracticeWidget() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/practice')} className="card practice-widget-card">
      <div className="practice-widget-header">
        <h4 className="practice-widget-name">Practice</h4>
        <span className="practice-widget-mark">R8</span>
      </div>
      <p className="practice-widget-desc">
        Hone your writing skills and earn Merit.
      </p>
      <div className="practice-widget-footer">
        <span>Go to practice</span>
      </div>
    </div>
  );
}
