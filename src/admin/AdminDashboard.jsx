import React from 'react';
import { useAdminData } from '../context/AdminDataContext';

export default function AdminDashboard({ onNavigate }) {
  const { data } = useAdminData();

  const totalTeam = data.teamMembers?.length || 0;
  const destinations = data.destinations || {};
  const totalItineraries = Object.values(destinations).reduce((acc, d) => acc + (d.itineraries?.length || 0), 0);
  const totalInquiries = data.contact?.inquiries?.length || 0;
  const newInquiries = (data.contact?.inquiries || []).filter(i => i.status === 'new').length;

  return (
    <div>
      {/* Welcome Banner */}
      <div className="adm-page-header">
        <div className="adm-page-title">
          <h1>Admin Control Center</h1>
          <p>Real-time content management for Experiential Pathways website.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
            Live Site Synchronized
          </span>

          <a href="/" target="_blank" rel="noopener noreferrer" className="adm-btn adm-btn-secondary">
            <i className="bi bi-box-arrow-up-right"></i> Open Live Site
          </a>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="adm-grid-4" style={{ marginBottom: '2rem' }}>
        {/* Stat 1: Hero Video */}
        <div className="adm-stat-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('hero')}>
          <div className="adm-stat-icon">
            <i className="bi bi-camera-video-fill"></i>
          </div>
          <div className="adm-stat-info">
            <div className="adm-stat-label">Hero Video</div>
            <div className="adm-stat-value" style={{ fontSize: '1.25rem' }}>Active MP4</div>
            <div style={{ fontSize: '0.74rem', color: '#10b981', marginTop: '2px' }}>
              <i className="bi bi-check2-circle"></i> Streaming Online
            </div>
          </div>
        </div>

        {/* Stat 2: Team Members */}
        <div className="adm-stat-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('team')}>
          <div className="adm-stat-icon" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6' }}>
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="adm-stat-info">
            <div className="adm-stat-label">Team Members</div>
            <div className="adm-stat-value">{totalTeam}</div>
            <div style={{ fontSize: '0.74rem', color: 'var(--adm-text-muted)', marginTop: '2px' }}>
              Founders &amp; Expedition Leads
            </div>
          </div>
        </div>

        {/* Stat 3: Itineraries */}
        <div className="adm-stat-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('itineraries')}>
          <div className="adm-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
            <i className="bi bi-map-fill"></i>
          </div>
          <div className="adm-stat-info">
            <div className="adm-stat-label">Total Itineraries</div>
            <div className="adm-stat-value">{totalItineraries}</div>
            <div style={{ fontSize: '0.74rem', color: 'var(--adm-text-muted)', marginTop: '2px' }}>
              Across 4 Destinations
            </div>
          </div>
        </div>

        {/* Stat 4: Inquiries */}
        <div className="adm-stat-card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>
          <div className="adm-stat-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}>
            <i className="bi bi-envelope-check-fill"></i>
          </div>
          <div className="adm-stat-info">
            <div className="adm-stat-label">Inquiries</div>
            <div className="adm-stat-value">{totalInquiries}</div>
            <div style={{ fontSize: '0.74rem', color: newInquiries > 0 ? '#d4af37' : 'var(--adm-text-muted)', marginTop: '2px' }}>
              {newInquiries > 0 ? `${newInquiries} New Messages` : 'All Caught Up'}
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Itinerary Matrix */}
      <div className="adm-card">
        <div className="adm-card-header">
          <h3><i className="bi bi-compass-fill text-warning"></i> Destination Itineraries Overview</h3>
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() => onNavigate('itineraries')}
          >
            Manage All Destinations
          </button>
        </div>

        <div className="adm-grid-4">
          {Object.entries(destinations).map(([key, dest]) => {
            const count = (dest.itineraries || []).length;
            return (
              <div
                key={key}
                style={{
                  background: '#f8fafc',
                  border: '1px solid var(--adm-border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, color: 'var(--adm-text-primary)', fontSize: '1.1rem' }}>{dest.name}</h4>
                  <span className="adm-badge-count">{count} Itineraries</span>
                </div>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--adm-text-secondary)',
                  margin: 0,
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {dest.tagline || 'Student expedition programs'}
                </p>
                <button
                  type="button"
                  className="adm-btn adm-btn-secondary adm-btn-sm"
                  style={{ width: '100%', marginTop: '8px' }}
                  onClick={() => onNavigate('itineraries')}
                >
                  <i className="bi bi-pencil-square"></i> Edit {dest.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Hub */}
      <div className="adm-grid-2">
        <div className="adm-card">
          <div className="adm-card-header">
            <h3><i className="bi bi-lightning-charge-fill text-warning"></i> Quick Actions</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              className="adm-btn adm-btn-secondary"
              style={{ justifyContent: 'flex-start', padding: '12px 16px' }}
              onClick={() => onNavigate('hero')}
            >
              <i className="bi bi-camera-video me-2 text-warning"></i> Change Homepage Hero Section Video
            </button>
            <button
              type="button"
              className="adm-btn adm-btn-secondary"
              style={{ justifyContent: 'flex-start', padding: '12px 16px' }}
              onClick={() => onNavigate('team')}
            >
              <i className="bi bi-person-plus me-2 text-info"></i> Add New Team Member with Bio &amp; Photo
            </button>
            <button
              type="button"
              className="adm-btn adm-btn-secondary"
              style={{ justifyContent: 'flex-start', padding: '12px 16px' }}
              onClick={() => onNavigate('itineraries')}
            >
              <i className="bi bi-plus-circle me-2 text-success"></i> Add Itinerary (Photo, Heading, Description)
            </button>
            <button
              type="button"
              className="adm-btn adm-btn-secondary"
              style={{ justifyContent: 'flex-start', padding: '12px 16px' }}
              onClick={() => onNavigate('contact')}
            >
              <i className="bi bi-telephone me-2 text-primary"></i> Update Phone, Email, WhatsApp &amp; Inquiries
            </button>
          </div>
        </div>

        {/* Current Contact Overview */}
        <div className="adm-card">
          <div className="adm-card-header">
            <h3><i className="bi bi-info-circle-fill text-info"></i> Current Contact Info</h3>
            <button
              type="button"
              className="adm-btn adm-btn-secondary adm-btn-sm"
              onClick={() => onNavigate('contact')}
            >
              Edit
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <div>
              <span style={{ color: 'var(--adm-text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Phone Number:</span>
              <div style={{ color: 'var(--adm-text-primary)', fontWeight: 600 }}>{data.contact?.phoneFormatted || data.contact?.phone}</div>
            </div>
            <div>
              <span style={{ color: 'var(--adm-text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Email Address:</span>
              <div style={{ color: 'var(--adm-text-primary)', fontWeight: 600 }}>{data.contact?.email}</div>
            </div>
            <div>
              <span style={{ color: 'var(--adm-text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>WhatsApp:</span>
              <div style={{ color: '#10b981', fontWeight: 600 }}>+{data.contact?.whatsapp}</div>
            </div>
            <div>
              <span style={{ color: 'var(--adm-text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Address:</span>
              <div style={{ color: 'var(--adm-text-primary)' }}>{data.contact?.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
