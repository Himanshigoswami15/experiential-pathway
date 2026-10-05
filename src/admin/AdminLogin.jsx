import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import './admin.css';

export default function AdminLogin({ onLoginSuccess }) {
  const { loginAdmin } = useAdminData();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const res = loginAdmin(username, password);
    if (res.success) {
      if (onLoginSuccess) onLoginSuccess();
    } else {
      setError(res.message);
    }
  };

  const handleDemoFill = () => {
    setUsername('admin');
    setPassword('admin123');
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--adm-bg)',
      padding: '1.5rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#ffffff',
        border: '1px solid var(--adm-border)',
        borderRadius: '16px',
        padding: '2.5rem',
        boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.1), 0 2px 6px rgba(15, 23, 42, 0.04)',
        color: 'var(--adm-text-primary)'
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-block',
            background: '#f8fafc',
            border: '1px solid var(--adm-border)',
            padding: '8px 16px',
            borderRadius: '10px',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
          }}>
            <img 
              src="/gallery/home-page/logo.png" 
              alt="Experiential Pathways" 
              style={{ height: '46px', display: 'block' }}
              onError={(e) => { e.target.src = 'gallery/home-page/logo.png'; }}
            />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 6px 0', color: 'var(--adm-text-primary)' }}>
            Portal Administration
          </h1>
          <p style={{ fontSize: '0.86rem', color: 'var(--adm-text-secondary)', margin: 0 }}>
            Manage hero video, team members, destination itineraries &amp; contact info
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#fca5a5',
            padding: '10px 14px',
            borderRadius: '8px',
            marginBottom: '1.25rem',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="adm-form-group">
            <label className="adm-label">Username</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                className="adm-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                required
                style={{ paddingLeft: '38px' }}
              />
              <i className="bi bi-person-fill" style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b'
              }}></i>
            </div>
          </div>

          <div className="adm-form-group">
            <label className="adm-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'}
                className="adm-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                style={{ paddingLeft: '38px', paddingRight: '38px' }}
              />
              <i className="bi bi-shield-lock-fill" style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b'
              }}></i>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9aa4b5',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
              </button>
            </div>
          </div>

          <div style={{
            background: 'rgba(184, 134, 11, 0.08)',
            border: '1px dashed rgba(184, 134, 11, 0.35)',
            borderRadius: '8px',
            padding: '10px 12px',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem'
          }}>
            <span style={{ color: 'var(--adm-gold-dark)' }}>
              <i className="bi bi-key-fill me-1"></i> Default: <strong>admin</strong> / <strong>admin123</strong>
            </span>
            <button
              type="button"
              onClick={handleDemoFill}
              style={{
                background: 'rgba(184, 134, 11, 0.12)',
                border: '1px solid var(--adm-gold)',
                color: 'var(--adm-gold-dark)',
                borderRadius: '6px',
                padding: '3px 8px',
                fontSize: '0.74rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Fill Credentials
            </button>
          </div>

          <button 
            type="submit" 
            className="adm-btn adm-btn-primary"
            style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
          >
            <i className="bi bi-box-arrow-in-right"></i> Sign In to Admin Panel
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--adm-border)' }}>
          <a href="/" style={{ color: 'var(--adm-text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
            <i className="bi bi-arrow-left me-1"></i> Return to Website
          </a>
        </div>
      </div>
    </div>
  );
}
