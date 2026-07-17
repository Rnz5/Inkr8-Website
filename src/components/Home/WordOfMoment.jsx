import React, { useState, useEffect } from 'react';
import { wordsAPI } from '../../api/words.js';
import './WordOfMoment.css';

export default function WordOfMoment() {
  const [word, setWord] = useState(null);
  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    wordsAPI.getRandom().then(setWord).catch(() => setWord(null));
  }, []);

  if (!word) {
    return null;
  }

  return (
    <section className="card word-moment-card">
      <span className="word-moment-label">WORD OF THE MOMENT</span>
      <div className="word-moment-header">
        <h2 className="word-moment-title">{word.word}</h2>
        <span className="word-moment-pronunciation">{word.pronunciation}</span>
        <span className="word-moment-type">{word.type}</span>
      </div>
      <p className="word-moment-definition">{word.definition}</p>
      {showExample && (
        <p className="word-moment-example">{word.example}</p>
      )}
      <button className="word-moment-action-btn" onClick={() => setShowExample((current) => !current)}>
        {showExample ? 'Hide example sentence' : 'Show example sentence'}
      </button>
    </section>
  );
}
