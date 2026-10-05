import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

export default function ItineraryManager({ showToast }) {
  const { data, addItinerary, updateItinerary, deleteItinerary } = useAdminData();
  const [selectedDest, setSelectedDest] = useState('india');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItinerary, setEditingItinerary] = useState(null);

  const initialForm = {
    title: '',
    subtitle: '',
    days: '10 Days',
    country: selectedDest.toUpperCase(),
    img: '/gallery/india/43.png',
    desc: '',
    link: ''
  };

  const [formData, setFormData] = useState(initialForm);

  // Gallery photo presets based on selected destination
  const destPhotoPresets = {
    india: [
      { label: 'Rajasthan Fort', path: '/gallery/india/43.png' },
      { label: 'Artisan Workshop', path: '/gallery/india/44.png' },
      { label: 'Taj Mahal / Varanasi', path: '/gallery/india/45.png' },
      { label: 'Ladakh Himalayas', path: '/gallery/india/46.png' },
      { label: 'India Banner', path: '/gallery/india/1.png' },
      { label: 'Himalayan Pass', path: '/gallery/india/24.png' }
    ],
    nepal: [
      { label: 'Poon Hill Sunrise', path: '/gallery/nepal/4.png' },
      { label: 'Nepal Village Life', path: '/gallery/nepal/5.png' },
      { label: 'Kathmandu Stupa', path: '/gallery/nepal/3.png' },
      { label: 'Trishuli Raft', path: '/gallery/home-page/23_1.png' },
      { label: 'Annapurna Valley', path: '/gallery/home-page/20.png' }
    ],
    bhutan: [
      { label: 'Bhutan Monastery', path: '/gallery/india/43.png' },
      { label: "Tiger's Nest Cliff", path: '/gallery/india/44.png' },
      { label: 'Punakha Dzong', path: '/gallery/about-page/transform/cross-2.png' },
      { label: 'Paro Valley', path: '/gallery/about-page/9.png' }
    ],
    srilanka: [
      { label: 'Mirissa Coast & Whales', path: '/gallery/india/43.png' },
      { label: 'Turtle Sanctuary', path: '/gallery/india/44.png' },
      { label: 'Sigiriya Rock & Temples', path: '/gallery/about-page/31.png' },
      { label: 'Kandy Hill Station', path: '/gallery/home-page/12.png' }
    ]
  };

  const currentDest = data.destinations[selectedDest] || {
    name: selectedDest.toUpperCase(),
    itineraries: []
  };

  const itineraries = currentDest.itineraries || [];

  // Open modal for adding
  const handleOpenAdd = () => {
    setEditingItinerary(null);
    const defaultImg = (destPhotoPresets[selectedDest] && destPhotoPresets[selectedDest][0]?.path) || '/gallery/india/43.png';
    setFormData({
      ...initialForm,
      country: selectedDest.toUpperCase(),
      img: defaultImg
    });
    setIsModalOpen(true);
  };

  // Open modal for editing
  const handleOpenEdit = (itinerary) => {
    setEditingItinerary(itinerary);
    setFormData({
      title: itinerary.title || '',
      subtitle: itinerary.subtitle || '',
      days: itinerary.days || '10 Days',
      country: itinerary.country || selectedDest.toUpperCase(),
      img: itinerary.img || '/gallery/india/43.png',
      desc: itinerary.desc || '',
      link: itinerary.link || ''
    });
    setIsModalOpen(true);
  };

  // Local image file upload
  const handleImageFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, img: reader.result }));
      if (showToast) showToast('Itinerary photo uploaded!');
    };
    reader.readAsDataURL(file);
  };

  // Save itinerary
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a heading/title for the itinerary.');
      return;
    }

    if (editingItinerary) {
      updateItinerary(selectedDest, editingItinerary.id, formData);
      if (showToast) showToast(`Updated itinerary "${formData.title}" in ${currentDest.name}!`);
    } else {
      addItinerary(selectedDest, formData);
      if (showToast) showToast(`Added new itinerary "${formData.title}" to ${currentDest.name}!`);
    }

    setIsModalOpen(false);
  };

  // Delete itinerary
  const handleDelete = (itinerary) => {
    if (window.confirm(`Are you sure you want to delete "${itinerary.title}" from ${currentDest.name}?`)) {
      deleteItinerary(selectedDest, itinerary.id);
      if (showToast) showToast(`Deleted itinerary "${itinerary.title}".`);
    }
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title">
          <h1>Destination &amp; Itineraries Manager</h1>
          <p>Select a destination to manage its itineraries. Add photo, heading, description, days, and link.</p>
        </div>
        <button type="button" onClick={handleOpenAdd} className="adm-btn adm-btn-primary">
          <i className="bi bi-plus-circle-fill"></i> Add Itinerary to {currentDest.name}
        </button>
      </div>

      {/* Destination Tabs */}
      <div className="adm-dest-tabs">
        {['india', 'nepal', 'bhutan', 'srilanka'].map((destKey) => {
          const destObj = data.destinations[destKey] || {};
          const count = (destObj.itineraries || []).length;
          return (
            <button
              key={destKey}
              type="button"
              className={`adm-dest-tab ${selectedDest === destKey ? 'active' : ''}`}
              onClick={() => setSelectedDest(destKey)}
            >
              <i className="bi bi-geo-alt-fill"></i>
              <span>{destObj.name || destKey.toUpperCase()}</span>
              <span className="adm-badge-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Destination Overview Banner */}
      <div className="adm-card" style={{
        background: 'linear-gradient(135deg, #fefbf4, #fbf7ee)',
        border: '1px solid #ebd9a9',
        borderLeft: '4px solid var(--adm-gold)',
        marginBottom: '1.5rem',
        padding: '1.25rem 1.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--adm-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Active Destination Focus
            </div>
            <h2 style={{ fontSize: '1.35rem', margin: '4px 0', color: 'var(--adm-text-primary)' }}>
              {currentDest.name} Expeditions
            </h2>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--adm-text-secondary)', maxWidth: '750px' }}>
              {currentDest.tagline || 'Experience rich culture, ancient wonders, and hands-on service learning.'}
            </p>
          </div>

          <a
            href={`/${selectedDest === 'srilanka' ? 'srilanka' : selectedDest}`}
            target="_blank"
            rel="noopener noreferrer"
            className="adm-btn adm-btn-secondary adm-btn-sm"
          >
            <i className="bi bi-box-arrow-up-right"></i> View {currentDest.name} Live Page
          </a>
        </div>
      </div>

      {/* Empty State */}
      {itineraries.length === 0 && (
        <div className="adm-card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
          <i className="bi bi-compass" style={{ fontSize: '3rem', color: 'var(--adm-text-muted)' }}></i>
          <h3 style={{ marginTop: '1rem', color: '#ffffff' }}>No Itineraries Added Yet</h3>
          <p style={{ color: 'var(--adm-text-secondary)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
            Start building programs for {currentDest.name} by adding your first itinerary with photo, heading, and description.
          </p>
          <button type="button" onClick={handleOpenAdd} className="adm-btn adm-btn-primary">
            <i className="bi bi-plus-circle-fill"></i> Add First Itinerary
          </button>
        </div>
      )}

      {/* Itinerary Cards Grid */}
      <div className="adm-grid-3">
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} className="adm-item-card">
            <div style={{ position: 'relative', height: '190px', background: '#f8fafc' }}>
              <img
                src={itinerary.img}
                alt={itinerary.title}
                className="adm-item-thumb"
                style={{ height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = '/gallery/india/43.png'; }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(4px)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#d4af37',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <i className="bi bi-clock-history"></i> {itinerary.days}
              </div>

              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(212, 175, 55, 0.9)',
                color: '#111',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                {itinerary.country || currentDest.name}
              </div>
            </div>

            <div className="adm-item-body">
              <h3 className="adm-item-title" style={{ fontSize: '1.15rem' }}>{itinerary.title}</h3>
              {itinerary.subtitle && (
                <div className="adm-item-subtitle">{itinerary.subtitle}</div>
              )}

              <p className="adm-item-desc" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                whiteSpace: 'pre-line'
              }}>
                {itinerary.desc}
              </p>

              <div className="adm-item-actions">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(itinerary)}
                  className="adm-btn adm-btn-secondary adm-btn-sm"
                >
                  <i className="bi bi-pencil-square"></i> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(itinerary)}
                  className="adm-btn adm-btn-danger adm-btn-sm"
                >
                  <i className="bi bi-trash-fill"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Itinerary Modal */}
      {isModalOpen && (
        <div className="adm-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="adm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="adm-modal-header">
              <h2>{editingItinerary ? `Edit Itinerary (${currentDest.name})` : `Add New Itinerary to ${currentDest.name}`}</h2>
              <button
                type="button"
                className="adm-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="adm-modal-body">
                {/* Heading & Subtitle */}
                <div className="adm-form-group">
                  <label className="adm-label">Itinerary Heading / Title *</label>
                  <input
                    type="text"
                    className="adm-input"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Rajasthan Heritage & Immersion"
                    required
                  />
                </div>

                <div className="adm-grid-2">
                  <div className="adm-form-group">
                    <label className="adm-label">Subtitle / Tagline</label>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="e.g. A Journey of Heritage and Discovery"
                    />
                  </div>

                  <div className="adm-form-group">
                    <label className="adm-label">Duration / Days *</label>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.days}
                      onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                      placeholder="e.g. 10 Days"
                      required
                    />
                  </div>
                </div>

                {/* Photo URL / File Upload */}
                <div className="adm-form-group">
                  <label className="adm-label">Itinerary Photo (URL or File Upload) *</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.img}
                      onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                      placeholder="/gallery/... or https://..."
                      required
                      style={{ flex: 1 }}
                    />
                    <label className="adm-btn adm-btn-secondary" style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>
                      <i className="bi bi-upload"></i> Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>

                  {/* Photo Preview & Country-specific Presets */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '8px' }}>
                    <img
                      src={formData.img}
                      alt="Itinerary Preview"
                      style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        border: '1px solid var(--adm-gold)',
                        background: '#f8fafc'
                      }}
                      onError={(e) => { e.target.src = '/gallery/india/43.png'; }}
                    />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--adm-text-secondary)', marginBottom: '4px', fontWeight: 500 }}>
                        Quick Presets from {currentDest.name} Gallery:
                      </div>
                      <div className="adm-preset-pills">
                        {(destPhotoPresets[selectedDest] || []).map((preset, idx) => (
                          <span
                            key={idx}
                            className={`adm-preset-pill ${formData.img === preset.path ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, img: preset.path })}
                          >
                            {preset.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="adm-form-group">
                  <label className="adm-label">Itinerary Description &amp; Highlights *</label>
                  <textarea
                    className="adm-textarea"
                    rows="4"
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    placeholder="Enter itinerary overview or highlights (supports multiple lines)..."
                    required
                  />
                  <div className="adm-help-text">
                    You can enter a paragraph or multi-line bullet points (e.g. Visit Golden Fort\nCamel Safari\nVillage Service).
                  </div>
                </div>

                {/* Optional Link */}
                <div className="adm-form-group">
                  <label className="adm-label">Page Link / Detail Route (Optional)</label>
                  <input
                    type="text"
                    className="adm-input"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="e.g. /rajasthan, /poon-hill-trek, or #contact"
                  />
                  <div className="adm-help-text">
                    If left empty, users clicking "View Itinerary" will be smoothly directed to the contact page to inquire about this program.
                  </div>
                </div>
              </div>

              <div className="adm-modal-footer">
                <button
                  type="button"
                  className="adm-btn adm-btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="adm-btn adm-btn-primary">
                  <i className="bi bi-check-circle-fill"></i> {editingItinerary ? 'Save Changes' : 'Add Itinerary'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
