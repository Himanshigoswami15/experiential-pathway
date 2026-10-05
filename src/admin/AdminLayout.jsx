import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import HeroVideoManager from './HeroVideoManager';
import TeamManager from './TeamManager';
import ItineraryManager from './ItineraryManager';
import ContactManager from './ContactManager';
import './admin.css';

export default function AdminLayout() {
  const {
    isAdminLoggedIn,
    logoutAdmin,
    resetToDefaults,
    exportData,
    importData
  } = useAdminData();

  const [currentTab, setCurrentTab] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleImportFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = importData(event.target.result);
      if (res.success) {
        showToast('All data imported successfully!');
      } else {
        alert('Import failed: ' + res.error);
      }
    };
    reader.readAsText(file);
  };

  if (!isAdminLoggedIn) {
    return <AdminLogin onLoginSuccess={() => showToast('Welcome back, Admin!')} />;
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <AdminDashboard onNavigate={(tab) => setCurrentTab(tab)} />;
      case 'hero':
        return <HeroVideoManager showToast={showToast} />;
      case 'team':
        return <TeamManager showToast={showToast} />;
      case 'itineraries':
        return <ItineraryManager showToast={showToast} />;
      case 'contact':
        return <ContactManager showToast={showToast} />;
      default:
        return <AdminDashboard onNavigate={(tab) => setCurrentTab(tab)} />;
    }
  };

  const navLabels = {
    dashboard: 'Dashboard Overview',
    hero: 'Hero Section Video',
    team: 'Team Management',
    itineraries: 'Destination Itineraries',
    contact: 'Contact Info & Inquiries'
  };

  return (
    <div className="admin-app-root">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="adm-toast">
          <i className="bi bi-check-circle-fill text-warning"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`adm-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="adm-sidebar-brand">
          <img
            src="/gallery/home-page/logo.png"
            alt="Logo"
            onError={(e) => { e.target.src = 'gallery/home-page/logo.png'; }}
          />
          <div className="adm-sidebar-brand-text">
            <h2>Experiential Pathways</h2>
            <span>Admin Console</span>
          </div>
          <button
            type="button"
            className="adm-sidebar-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="adm-nav-list">
          <li className={`adm-nav-item ${currentTab === 'dashboard' ? 'active' : ''}`}>
            <button type="button" onClick={() => { setCurrentTab('dashboard'); setMobileMenuOpen(false); }}>
              <i className="bi bi-grid-1x2-fill"></i>
              <span>Dashboard</span>
            </button>
          </li>

          <li className={`adm-nav-item ${currentTab === 'hero' ? 'active' : ''}`}>
            <button type="button" onClick={() => { setCurrentTab('hero'); setMobileMenuOpen(false); }}>
              <i className="bi bi-camera-video-fill"></i>
              <span>Hero Video</span>
            </button>
          </li>

          <li className={`adm-nav-item ${currentTab === 'team' ? 'active' : ''}`}>
            <button type="button" onClick={() => { setCurrentTab('team'); setMobileMenuOpen(false); }}>
              <i className="bi bi-people-fill"></i>
              <span>Team Members</span>
            </button>
          </li>

          <li className={`adm-nav-item ${currentTab === 'itineraries' ? 'active' : ''}`}>
            <button type="button" onClick={() => { setCurrentTab('itineraries'); setMobileMenuOpen(false); }}>
              <i className="bi bi-map-fill"></i>
              <span>Destinations &amp; Itineraries</span>
            </button>
          </li>

          <li className={`adm-nav-item ${currentTab === 'contact' ? 'active' : ''}`}>
            <button type="button" onClick={() => { setCurrentTab('contact'); setMobileMenuOpen(false); }}>
              <i className="bi bi-telephone-fill"></i>
              <span>Contact Us &amp; Inbox</span>
            </button>
          </li>
        </ul>

        {/* Sidebar Footer Controls */}
        <div className="adm-sidebar-footer">
          <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
            <button
              type="button"
              className="adm-btn adm-btn-secondary adm-btn-sm"
              style={{ flex: 1, padding: '6px' }}
              title="Export JSON backup"
              onClick={exportData}
            >
              <i className="bi bi-download"></i> Backup
            </button>
            <label
              className="adm-btn adm-btn-secondary adm-btn-sm"
              style={{ flex: 1, padding: '6px', cursor: 'pointer', textAlign: 'center' }}
              title="Import JSON backup"
            >
              <i className="bi bi-upload"></i> Restore
              <input
                type="file"
                accept=".json"
                onChange={handleImportFile}
                style={{ display: 'none' }}
              />
            </label>
          </div>

          <button
            type="button"
            className="adm-btn adm-btn-danger adm-btn-sm"
            onClick={() => {
              if (resetToDefaults()) {
                showToast('Reset all data to defaults.');
              }
            }}
          >
            <i className="bi bi-arrow-counterclockwise"></i> Reset Defaults
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="adm-sidebar-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Wrapper */}
      <div className="adm-main-wrap">
        {/* Top Navbar */}
        <header className="adm-topbar">
          <div className="adm-topbar-left">
            <button
              type="button"
              className="adm-btn adm-btn-secondary adm-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className="bi bi-list"></i>
            </button>
            <div className="adm-breadcrumb">
              <span className="adm-breadcrumb-root">Portal / </span>
              <strong>{navLabels[currentTab]}</strong>
            </div>
          </div>

          <div className="adm-topbar-right">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="adm-btn adm-btn-secondary adm-btn-sm"
              title="Preview public site in new tab"
            >
              <i className="bi bi-box-arrow-up-right"></i> <span className="adm-btn-text">Live Site</span>
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingLeft: '12px',
              borderLeft: '1px solid var(--adm-border)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.2)',
                color: '#d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 700
              }}>
                A
              </div>
              <span style={{ fontSize: '0.86rem', color: 'var(--adm-text-primary)', fontWeight: 600 }}>Admin</span>
              <button
                type="button"
                onClick={logoutAdmin}
                className="adm-btn adm-btn-secondary adm-btn-sm"
                style={{ marginLeft: '6px' }}
                title="Sign out of Admin"
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="adm-content-container">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
