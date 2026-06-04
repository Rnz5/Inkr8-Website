import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import wordsList from '../../data/words';
import tipsList from '../../data/tips.json';
import './Writing.css';

export default function Writing() {
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const backdropRef = useRef(null);

  const [selectedWords] = useState(() => {
    const shuffled = [...wordsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  });

  const [tip] = useState(() => {
    const randomIndex = Math.floor(Math.random() * tipsList.length);
    return tipsList[randomIndex];
  });

  const [paragraph, setParagraph] = useState('');
  const [activeWord, setActiveWord] = useState(null);

  const getWordCount = (val) => {
    return val.trim().split(/\s+/).filter(Boolean).length;
  };

  const truncateToMaxWords = (val, max) => {
    const words = val.trim().split(/\s+/);
    if (words.length <= max) return val;
    let count = 0;
    let inWord = false;
    let i = 0;
    for (i = 0; i < val.length; i++) {
      const isSpace = /\s/.test(val[i]);
      if (!isSpace) {
        if (!inWord) {
          inWord = true;
          count++;
          if (count > max) {
            break;
          }
        }
      } else {
        inWord = false;
      }
    }
    return val.slice(0, i).trimEnd();
  };

  const handleTextChange = (e) => {
    const val = e.target.value;
    const wordsArr = val.trim().split(/\s+/).filter(Boolean);
    if (wordsArr.length <= 150) {
      setParagraph(val);
    } else {
      const truncated = truncateToMaxWords(val, 150);
      setParagraph(truncated);
    }
  };

  const handleScroll = () => {
    if (backdropRef.current && textareaRef.current) {
      backdropRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const isWordUsed = (word) => {
    if (!paragraph) return false;
    const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp('\\b' + escaped + '\\b', 'i');
    return regex.test(paragraph);
  };

  const highlightText = (text, targetWords) => {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n$/g, '\n\n');
    targetWords.forEach(word => {
      const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp('\\b(' + escaped + ')\\b', 'gi');
      html = html.replace(regex, '<span class="highlighted-word">$1</span>');
    });
    return html;
  };

  const handleSubmit = () => {
    const wordsUsed = selectedWords
      .filter(w => isWordUsed(w.word))
      .map(w => w.word);

    const submissionData = {
      paragraph,
      selectedWords: selectedWords.map(w => w.word),
      usedWords: wordsUsed,
      wordCount: getWordCount(paragraph)
    };

    localStorage.setItem('inkr8_latest_submission', JSON.stringify(submissionData));
    navigate('/practice/results');
  };

  const wordCount = getWordCount(paragraph);
  const progressPercentage = Math.min((wordCount / 150) * 100, 100);
  const isLimitReached = wordCount >= 150;

  return (
    <div className="writing-container">
      <header className="writing-header">
        <div className="writing-header-left">
          <button onClick={() => navigate('/practice')} className="writing-back-btn">
            Back
          </button>
          <h1 className="writing-title">Standard Writing</h1>
        </div>
        <button onClick={handleSubmit} className="btn-primary">
          Submit
        </button>
      </header>

      <div className="writing-workspace">
        <div>
          <span className="words-section-label">Selected words to include:</span>
          <div className="words-list">
            {selectedWords.map((wordObj) => {
              const detected = isWordUsed(wordObj.word);
              return (
                <button
                  key={wordObj.word}
                  onClick={() => setActiveWord(wordObj)}
                  className={`word-btn ${detected ? 'word-btn-detected' : ''}`}
                >
                  {wordObj.word}
                </button>
              );
            })}
          </div>
        </div>

        <div className="editor-container">
          <div
            ref={backdropRef}
            className="editor-backdrop"
            dangerouslySetInnerHTML={{
              __html: highlightText(paragraph, selectedWords.map(w => w.word))
            }}
          />
          <textarea
            ref={textareaRef}
            value={paragraph}
            onChange={handleTextChange}
            onScroll={handleScroll}
            placeholder="Start writing your paragraph here..."
            className="editor-textarea"
          />
        </div>

        <div className="bottom-row">
          <div className="card metric-card">
            <span className="metric-label">Word Count</span>
            <div className="metric-value">
              <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>{wordCount}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}> / 150 words</span>
            </div>
            <div className="progress-bar">
              <div
                className={`progress-fill ${isLimitReached ? 'progress-fill-error' : ''}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="card metric-card">
            <span className="metric-label">Writing Tip</span>
            <p className="tip-text">{tip}</p>
          </div>
        </div>
      </div>

      {activeWord && (
        <div className="modal-overlay" onClick={() => setActiveWord(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-section">
              <h2 className="modal-word-title">{activeWord.word}</h2>
              <div className="modal-word-type-pron">
                <span className="modal-word-pron">{activeWord.pronunciation}</span>
                <span>{activeWord.type}</span>
              </div>
            </div>
            <p className="modal-word-def">{activeWord.definition}</p>
            <p className="modal-word-example">{activeWord.example}</p>
            <button className="btn-primary modal-close-btn" onClick={() => setActiveWord(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
