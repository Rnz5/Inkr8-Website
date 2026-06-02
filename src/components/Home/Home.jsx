import React from 'react';
import PracticeWidget from './PracticeWidget';
import WordOfMoment from './WordOfMoment';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-greeting">Hello, Randy!</h1>
      </header>

      <WordOfMoment />

      <section className="home-quick-actions-section">
        <h3 className="home-section-title">QUICK ACTIONS</h3>
        <div className="home-grid">
          <PracticeWidget />
        </div>
      </section>
    </div>
  );
}
