import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';

const CrownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent-gold)' }}>
    <path d="M12 2L16 8L22 6L19 18H5L2 6L8 8L12 2Z"/>
    <rect x="5" y="20" width="14" height="2" rx="1" />
  </svg>
);

export default function Profile() {
  const { 
    user, 
    updateUsername, 
    expandMeritCap, 
    payWeeklyTax, 
    generateReputationReport 
  } = useUser();

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(user.name);
  const [usernameError, setUsernameError] = useState('');
  
  const [activeReport, setActiveReport] = useState(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const [activeSubmission, setActiveSubmission] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleSaveUsername = () => {
    if (newUsername.length < 3) {
      setUsernameError('Min 3 characters required');
      return;
    }
    if (newUsername.includes(' ')) {
      setUsernameError('Spaces are not allowed');
      return;
    }
    updateUsername(newUsername);
    setIsEditingUsername(false);
    setUsernameError('');
    showToast('Username updated successfully!');
  };

  const handleExpandCap = () => {
    const res = expandMeritCap();
    if (res.success) {
      showToast(res.message);
    } else {
      showToast(res.message, 'error');
    }
  };

  const handlePayTax = () => {
    const res = payWeeklyTax();
    if (res.success) {
      showToast(res.message);
    } else {
      showToast(res.message, 'error');
    }
  };

  const handleGenerateReport = () => {
    const res = generateReputationReport();
    if (res.success) {
      setIsGeneratingReport(true);
      setActiveReport(null);
      setTimeout(() => {
        setIsGeneratingReport(false);
        setActiveReport({
          date: new Date().toISOString().split('T')[0],
          completionRate: '98.5%',
          integrityScore: '99.2% (No cheating detected)',
          streakConsistency: 'Good (3 active days/week)',
          verdict: 'Your account shows exemplary compliance. Standard ranked fees remain at baseline.'
        });
        showToast('Integrity report generated!');
      }, 1500);
    } else {
      showToast(res.message, 'error');
    }
  };

  const getLeague = (elo) => {
    if (elo >= 1800) return { name: 'Master League', color: '#ec4899', progress: 100 };
    if (elo >= 1500) return { name: 'Platinum League', color: '#818cf8', progress: Math.min(100, Math.floor(((elo - 1500) / 300) * 100)) };
    if (elo >= 1200) return { name: 'Gold League', color: 'var(--accent-gold)', progress: Math.min(100, Math.floor(((elo - 1200) / 300) * 100)) };
    return { name: 'Bronze League', color: '#b45309', progress: Math.min(100, Math.floor(((elo - 900) / 300) * 100)) };
  };

  const league = getLeague(user.elo);

  const averageCriteria = {
    Grammar: 81,
    Coherence: 78,
    Vocabulary: 74,
    RequiredWords: 91,
    Creativity: 72,
    Metaphors: 58,
    Depth: 70,
    Structure: 79
  };

  return (
    <div style={styles.container}>
      {toast.show && (
        <div style={{
          ...styles.toast,
          backgroundColor: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
        }}>
          <span>{toast.message}</span>
        </div>
      )}

      <header style={styles.header}>
        <h1 style={styles.title}>User Screen</h1>
        <p style={styles.subtitle}>Manage your profile details and monitor writing statistics.</p>
      </header>

      <div style={styles.profileGrid}>
        
        <div className="card" style={styles.userCard}>
          <div style={styles.userInfoWrapper}>
            <div style={styles.avatarContainer}>
              <img 
                src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'} 
                alt="Profile Avatar" 
                style={styles.avatarImg}
              />
              <span style={{ ...styles.leagueIndicator, backgroundColor: league.color }} />
            </div>
            
            <div style={styles.userMetadata}>
              <div style={styles.usernameRow}>
                {isEditingUsername ? (
                  <div style={styles.editForm}>
                    <input 
                      type="text" 
                      value={newUsername} 
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="form-input" 
                      style={styles.editInput}
                      maxLength={15}
                    />
                    <button onClick={handleSaveUsername} className="btn-primary" style={styles.miniBtn}>Save</button>
                    <button onClick={() => { setIsEditingUsername(false); setUsernameError(''); }} className="btn-secondary" style={styles.miniBtn}>Cancel</button>
                  </div>
                ) : (
                  <>
                    <h2 style={styles.userNameText}>{user.name}</h2>
                    <button 
                      onClick={() => { setNewUsername(user.name); setIsEditingUsername(true); }}
                      style={styles.editIconBtn}
                      title="Edit Username"
                    >
                      ✏️
                    </button>
                  </>
                )}
              </div>
              {usernameError && <span style={styles.errorText}>{usernameError}</span>}
              <span style={styles.userEmail}>{user.email}</span>
              
              <div style={styles.leagueBadge}>
                <CrownIcon />
                <span style={{ fontWeight: '700', color: league.color }}>{league.name}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.statsGrid}>
          
          <div className="card" style={styles.statPanelCard}>
            <span style={styles.panelLabel}>RATING SYSTEM (ELO)</span>
            <div style={styles.panelMain}>
              <span style={styles.panelNumber}>{user.elo}</span>
              <span style={styles.panelSuffix}>ELO</span>
            </div>
            <div style={styles.progressContainer}>
              <div style={styles.progressLabelRow}>
                <span>{league.name}</span>
                <span>Next League: 1500 ELO</span>
              </div>
              <div style={styles.progressBarBg}>
                <div style={{ ...styles.progressBarFill, width: `${league.progress}%`, backgroundColor: league.color }} />
              </div>
            </div>
            <div style={styles.statFooterRow}>
              <span>🔥 3 Win Streak</span>
              <span>Global Rank: #1,402</span>
            </div>
          </div>

          <div className="card" style={styles.statPanelCard}>
            <span style={styles.panelLabel}>INTERNAL ECONOMY (MERIT)</span>
            <div style={styles.panelMain}>
              <span style={{ ...styles.panelNumber, color: 'var(--accent-gold)' }}>🪙 {user.merit.toLocaleString()}</span>
              <span style={styles.panelSuffix}>Merit</span>
            </div>
            <div style={styles.meritCapRow}>
              <span>Cap: {user.meritCap.toLocaleString()} Max</span>
              <button onClick={handleExpandCap} style={styles.actionBtn}>
                Expand Cap (500 Merit)
              </button>
            </div>
            <div style={styles.taxButtonRow}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Weekly Tax: 500 Merit</span>
              <button onClick={handlePayTax} className="btn-secondary" style={styles.taxBtn}>
                Pay Tax
              </button>
            </div>
          </div>

          <div className="card" style={styles.statPanelCard}>
            <span style={styles.panelLabel}>REPUTATION METER</span>
            <div style={styles.panelMain}>
              <span style={{ ...styles.panelNumber, color: user.reputation >= 500 ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                {user.reputation > 0 ? `+${user.reputation}` : user.reputation}
              </span>
              <span style={styles.panelSuffix}>Pts</span>
            </div>
            <div style={styles.reputationSliderWrapper}>
              <div style={styles.sliderLabels}>
                <span>Penalized (-1000)</span>
                <span>Excellent (+1000)</span>
              </div>
              <div style={styles.sliderTrack}>
                <div 
                  style={{ 
                    ...styles.sliderPin, 
                    left: `${((user.reputation + 1000) / 2000) * 100}%`,
                    backgroundColor: user.reputation >= 500 ? 'var(--accent-green)' : 'var(--accent-gold)'
                  }} 
                />
              </div>
            </div>
            <button 
              onClick={handleGenerateReport} 
              className="btn-primary" 
              style={styles.reputationBtn}
              disabled={isGeneratingReport}
            >
              {isGeneratingReport ? 'Analyzing...' : 'Generate Integrity Report (50 Merit)'}
            </button>
          </div>

        </div>
      </div>

      {activeReport && (
        <section className="card" style={styles.reportSection}>
          <div style={styles.reportHeader}>
            <h3 style={styles.reportTitle}>R8 Account Integrity Report</h3>
            <button onClick={() => setActiveReport(null)} style={styles.closeReportBtn}>✕</button>
          </div>
          <div style={styles.reportGrid}>
            <div>
              <span style={styles.reportLabel}>Evaluation Date</span>
              <p style={styles.reportVal}>{activeReport.date}</p>
            </div>
            <div>
              <span style={styles.reportLabel}>Game Completion Rate</span>
              <p style={styles.reportVal}>{activeReport.completionRate}</p>
            </div>
            <div>
              <span style={styles.reportLabel}>Writing Integrity Factor</span>
              <p style={styles.reportVal}>{activeReport.integrityScore}</p>
            </div>
            <div>
              <span style={styles.reportLabel}>Consistency Streak</span>
              <p style={styles.reportVal}>{activeReport.streakConsistency}</p>
            </div>
          </div>
          <div style={styles.reportVerdict}>
            <strong>R8 Verdict:</strong> {activeReport.verdict}
          </div>
        </section>
      )}

      <div style={styles.bottomGrid}>
        
        <section className="card" style={styles.criteriaCard}>
          <h3 style={styles.sectionTitle}>R8 AI EVALUATION STATS</h3>
          <p style={styles.sectionSubtitle}>Average score breakdown across key criteria.</p>
          
          <div style={styles.criteriaList}>
            {Object.entries(averageCriteria).map(([key, val]) => (
              <div key={key} style={styles.criteriaItem}>
                <div style={styles.criteriaHeader}>
                  <span style={styles.criteriaName}>
                    {key === 'RequiredWords' ? 'Required Words Usage' : key}
                  </span>
                  <span style={styles.criteriaVal}>{val}%</span>
                </div>
                <div style={styles.criteriaBarBg}>
                  <div 
                    style={{ 
                      ...styles.criteriaBarFill, 
                      width: `${val}%`, 
                      backgroundColor: val >= 80 ? 'var(--accent-green)' : val >= 65 ? 'var(--accent-blue)' : 'var(--accent-gold)' 
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card" style={styles.historyCard}>
          <h3 style={styles.sectionTitle}>SUBMISSIONS HISTORY</h3>
          <p style={styles.sectionSubtitle}>Review your completed paragraphs and R8 feedback.</p>
          
          <div style={styles.historyList}>
            {user.submissions.length === 0 ? (
              <p style={styles.emptyText}>No submissions recorded yet. Go to Practice to start writing!</p>
            ) : (
              user.submissions.map((sub) => (
                <div 
                  key={sub.id} 
                  style={styles.historyRow}
                  onClick={() => setActiveSubmission(sub)}
                >
                  <div style={styles.historyInfo}>
                    <span style={styles.historyType}>{sub.type}</span>
                    <span style={styles.historyDate}>{sub.date}</span>
                  </div>
                  
                  <div style={styles.historyScoreBox}>
                    <span style={{ 
                      ...styles.historyScoreText, 
                      color: sub.score >= 80 ? 'var(--accent-green)' : sub.score >= 60 ? 'var(--accent-blue)' : 'var(--accent-red)'
                    }}>
                      {sub.score}%
                    </span>
                    <span style={styles.arrowIcon}>→</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </div>

      {activeSubmission && (
        <div className="modal-overlay" onClick={() => setActiveSubmission(null)}>
          <div className="modal-content" style={styles.submissionModal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeaderRow}>
              <div>
                <h3 style={styles.modalHeading}>{activeSubmission.type}</h3>
                <span style={styles.modalSubheading}>Submitted on {activeSubmission.date}</span>
              </div>
              <button onClick={() => setActiveSubmission(null)} style={styles.modalCloseBtn}>✕</button>
            </div>

            <div style={styles.modalBody}>
              
              <div style={styles.modalScoreCard}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)' }}>EVALUATION SCORE</span>
                <span style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  color: activeSubmission.score >= 80 ? 'var(--accent-green)' : 'var(--accent-blue)' 
                }}>
                  {activeSubmission.score}%
                </span>
                <span style={styles.ratingDescriptor}>
                  {activeSubmission.score >= 80 ? 'Excellent Writing' : activeSubmission.score >= 70 ? 'Good Paragraph' : 'Needs Practice'}
                </span>
              </div>

              <div style={styles.paragraphBox}>
                <h4 style={styles.modalSectionHeading}>Paragraph Content</h4>
                <p style={styles.paragraphContent}>
                  {activeSubmission.paragraph}
                </p>
              </div>

              <div style={styles.targetWordsBox}>
                <h4 style={styles.modalSectionHeading}>Target Words Utilized</h4>
                <div style={styles.wordPills}>
                  {activeSubmission.wordsUsed.map((word) => (
                    <span key={word} style={styles.wordPill}>
                      {word} ✓
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.feedbackBox}>
                <h4 style={styles.modalSectionHeading}>🤖 R8 AI Feedback</h4>
                <p style={styles.feedbackContent}>
                  {activeSubmission.feedback}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '800',
    fontFamily: 'var(--font-display)',
    letterSpacing: '-0.02em',
    marginBottom: '0.25rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  },
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
  userCard: {
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.95) 0%, rgba(20, 24, 34, 0.95) 100%)',
    border: '1px solid var(--border-color)',
  },
  userInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  avatarContainer: {
    position: 'relative',
    width: '80px',
    height: '80px',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid var(--border-color)',
  },
  leagueIndicator: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    border: '3px solid var(--bg-card)',
  },
  userMetadata: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
  usernameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  userNameText: {
    fontSize: '1.75rem',
    fontWeight: '800',
    fontFamily: 'var(--font-display)',
  },
  editIconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.25rem',
  },
  editForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  editInput: {
    padding: '0.4rem 0.8rem',
    fontSize: '1rem',
    maxWidth: '180px',
  },
  miniBtn: {
    padding: '0.4rem 0.8rem',
    fontSize: '0.8rem',
  },
  errorText: {
    color: 'var(--accent-red)',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  userEmail: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  },
  leagueBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    border: '1px solid var(--border-color)',
    fontSize: '0.85rem',
    marginTop: '0.25rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  statPanelCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minHeight: '180px',
  },
  panelLabel: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
  },
  panelMain: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },
  panelNumber: {
    fontSize: '2.5rem',
    fontWeight: '800',
    fontFamily: 'var(--font-display)',
  },
  panelSuffix: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  progressLabelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
  },
  progressBarBg: {
    width: '100%',
    height: '6px',
    backgroundColor: 'var(--border-color)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'var(--transition-smooth)',
  },
  statFooterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '0.5rem',
  },
  meritCapRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--accent-blue)',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.8rem',
    textDecoration: 'underline',
  },
  taxButtonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '0.5rem',
  },
  taxBtn: {
    padding: '0.3rem 0.8rem',
    fontSize: '0.75rem',
  },
  reputationSliderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  sliderLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
  },
  sliderTrack: {
    width: '100%',
    height: '4px',
    backgroundColor: 'var(--border-color)',
    borderRadius: '2px',
    position: 'relative',
    background: 'linear-gradient(to right, var(--accent-red) 0%, var(--accent-gold) 50%, var(--accent-green) 100%)',
  },
  sliderPin: {
    position: 'absolute',
    top: '-4px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid #ffffff',
    transform: 'translateX(-50%)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    transition: 'var(--transition-smooth)',
  },
  reputationBtn: {
    marginTop: 'auto',
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
  },
  reportSection: {
    backgroundColor: 'rgba(59, 130, 246, 0.03)',
    border: '1px solid var(--accent-blue-transparent)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    animation: 'slideUp 0.3s ease-out',
  },
  reportHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportTitle: {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    fontWeight: '700',
  },
  closeReportBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  reportGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1rem',
  },
  reportLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
  },
  reportVal: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginTop: '0.15rem',
  },
  reportVerdict: {
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid var(--border-color)',
    padding: '0.8rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
  },
  criteriaCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontFamily: 'var(--font-display)',
    fontWeight: '750',
    marginBottom: '0.25rem',
  },
  sectionSubtitle: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
  },
  criteriaList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  criteriaItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  criteriaHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
  },
  criteriaName: {
    color: 'var(--text-primary)',
    fontWeight: '500',
  },
  criteriaVal: {
    fontWeight: '700',
  },
  criteriaBarBg: {
    width: '100%',
    height: '4px',
    backgroundColor: 'var(--border-color)',
    borderRadius: '2px',
  },
  criteriaBarFill: {
    height: '100%',
    borderRadius: '2px',
  },
  historyCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  historyList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxHeight: '400px',
    overflowY: 'auto',
    paddingRight: '0.25rem',
  },
  emptyText: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    textAlign: 'center',
    margin: '2rem 0',
  },
  historyRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  },
  historyRowHover: {
  },
  historyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.25rem',
  },
  historyType: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  historyDate: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  historyScoreBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  historyScoreText: {
    fontSize: '1rem',
    fontWeight: '700',
  },
  arrowIcon: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
  },
  toast: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '0.8rem 1.5rem',
    color: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 2000,
    fontSize: '0.9rem',
    fontWeight: '600',
    animation: 'slideUp 0.2s ease-out',
  },
  submissionModal: {
    maxWidth: '560px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1rem',
    marginBottom: '1.25rem',
  },
  modalHeading: {
    fontSize: '1.35rem',
    fontFamily: 'var(--font-display)',
  },
  modalSubheading: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  modalCloseBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '1.1rem',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  modalScoreCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '1rem',
  },
  ratingDescriptor: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  modalSectionHeading: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
    textAlign: 'left',
  },
  paragraphBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraphContent: {
    backgroundColor: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: 'var(--text-primary)',
    textAlign: 'left',
  },
  targetWordsBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  wordPills: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  wordPill: {
    backgroundColor: 'var(--accent-green-transparent)',
    color: 'var(--accent-green)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    padding: '0.3rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  feedbackBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  feedbackContent: {
    backgroundColor: 'rgba(59, 130, 246, 0.02)',
    border: '1px dashed var(--accent-blue-transparent)',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    textAlign: 'left',
  },
};
styles.historyRow = {
  ...styles.historyRow,
  transition: 'var(--transition-smooth)',
};
