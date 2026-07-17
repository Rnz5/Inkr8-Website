import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { login, register } = useUser();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="glow-orb login-orb-1" />
      <div className="glow-orb login-orb-2" />

      <div className="login-left-panel">
        <div className="login-brand-content">
          <h1 className="login-logo">
            Inkr<span className="login-logo-accent">8</span>
          </h1>
          <blockquote className="login-quote">
            "A good artist can paint with any color; a good writer should write with any word."
          </blockquote>
        </div>
      </div>

      <div className="login-right-panel">
        <div className="glass-panel login-card">
          <h2 className="login-welcome-title">
            {isLogin ? 'Welcome back.' : 'Join Inkr8'}
          </h2>
          <p className="login-welcome-subtitle">
            {isLogin ? 'Log in to continue your writing journey.' : 'Start improving your writing today.'}
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="login-form-group">
                <label className="login-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="login-input"
                />
              </div>
            )}

            <div className="login-form-group">
              <label className="login-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="login-input"
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="login-input"
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button
              type="submit"
              className="login-submit-btn"
              disabled={loading}
            >
              {loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="login-toggle-section">
            <p className="login-toggle-text">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="login-toggle-btn"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <p className="login-legal-text">
            By continuing, you agree to our{' '}
            <a href="#terms" className="login-legal-link">Terms of Service</a>{' '}
            and{' '}
            <a href="#privacy" className="login-legal-link">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
