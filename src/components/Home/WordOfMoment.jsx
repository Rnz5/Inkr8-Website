import React, { useState } from 'react';
import words from '../../data/words';
import './WordOfMoment.css';

function getWordOfMoment() {
  const wordOptions = words.map((word, index) => ({ ...word, index }));

  if (wordOptions.length === 0) {
    return null;
  }

  const previousIndex = Number(localStorage.getItem('inkr8_word_index'));
  let nextIndex = Math.floor(Math.random() * wordOptions.length);

  if (wordOptions.length > 1 && nextIndex === previousIndex) {
    nextIndex = (nextIndex + 1) % wordOptions.length;
  }

  localStorage.setItem('inkr8_word_index', String(nextIndex));
  return wordOptions[nextIndex];
}

export default function WordOfMoment() {
  const [word] = useState(getWordOfMoment);
  const [showExample, setShowExample] = useState(false);

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
