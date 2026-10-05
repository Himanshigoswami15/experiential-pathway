import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

export default function TeamManager({ showToast }) {
  const { data, addTeamMember, updateTeamMember, deleteTeamMember } = useAdminData();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const initialFormState = {
    name: '',
    title: '',
    img: '/gallery/team/Sudarshan-Deora.webp',
    bio: '',
    more: '',
    active: true
  };

  const [formData, setFormData] = useState(initialFormState);

  // Available image presets from gallery/team
  const teamImgPresets = [
    { label: 'Sudarshan Deora', path: '/gallery/team/Sudarshan-Deora.webp' },
    { label: 'Dave Dennis', path: '/gallery/team/Daves.jpeg' },
    { label: 'Divya SP', path: '/gallery/team/Divya.webp' },
    { label: 'Deepti', path: '/gallery/team/DV.webp' },
    { label: 'Kishan Singh', path: '/gallery/team/Karan-S.webp' },
    { label: 'Komal Patel', path: '/gallery/team/Komal.webp' },
    { label: 'Abhimanyu Bhati', path: '/gallery/team/Abhimanyu-Singh-Bhati.webp' },
    { label: 'Shiva Thapa', path: '/gallery/team/Shiv Sharan thapa_edited.webp' },
    { label: 'Vinod Kumar', path: '/gallery/team/Vinod Kumar.webp' },
    { label: 'Hemant Shahi', path: '/gallery/team/HemantKumarShahi' },
    { label: 'Anuj', path: '/gallery/team/AV-image.webp' }
  ];

  // Open modal for adding
  const handleOpenAdd = () => {
    setEditingMember(null);
    setFormData(initialFormState);
    setIsModalOpen(true);
  };

  // Open modal for editing
  const handleOpenEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name || '',
      title: member.title || '',
      img: member.img || '/gallery/team/Sudarshan-Deora.webp',
      bio: member.bio || '',
      more: member.more || '',
      active: member.active !== false
    });
    setIsModalOpen(true);
  };

  // Handle local image file upload and convert to base64
  const handleImageFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, img: reader.result }));
      if (showToast) showToast('Image uploaded successfully!');
    };
    reader.readAsDataURL(file);
  };

  // Save member
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.title.trim()) {
      alert('Please fill out the name and title.');
      return;
    }

    if (editingMember) {
      updateTeamMember(editingMember.id, formData);
      if (showToast) showToast(`Updated ${formData.name} successfully!`);
    } else {
      addTeamMember(formData);
      if (showToast) showToast(`Added new team member ${formData.name}!`);
    }

    setIsModalOpen(false);
  };

  // Delete member
  const handleDelete = (member) => {
    if (window.confirm(`Are you sure you want to remove ${member.name} from the team?`)) {
      deleteTeamMember(member.id);
      if (showToast) showToast(`Removed ${member.name} from team.`);
    }
  };

  // Filtered members list
  const filteredMembers = (data.teamMembers || []).filter(m => {
    const query = searchTerm.toLowerCase();
    return (
      (m.name || '').toLowerCase().includes(query) ||
      (m.title || '').toLowerCase().includes(query) ||
      (m.bio || '').toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title">
          <h1>Team Members Management</h1>
          <p>Add new team members, edit executive bios, update profile photos, or remove team members.</p>
        </div>
        <button type="button" onClick={handleOpenAdd} className="adm-btn adm-btn-primary">
          <i className="bi bi-person-plus-fill"></i> Add Team Member
        </button>
      </div>

      {/* Search and stats bar */}
      <div className="adm-card" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <input
              type="text"
              className="adm-input"
              placeholder="Search team members by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '36px' }}
            />
            <i className="bi bi-search" style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--adm-text-muted)'
            }}></i>
          </div>

          <div style={{ fontSize: '0.88rem', color: 'var(--adm-text-secondary)' }}>
            Showing <strong>{filteredMembers.length}</strong> of <strong>{data.teamMembers?.length || 0}</strong> team members
          </div>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="adm-grid-3">
        {filteredMembers.map((member) => (
          <div key={member.id} className="adm-item-card">
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f8fafc' }}>
              <img
                src={member.img}
                alt={member.name}
                className="adm-item-thumb"
                style={{ height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = '/gallery/team/Sudarshan-Deora.webp'; }}
              />
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                color: member.active !== false ? '#10b981' : '#ef4444',
                fontWeight: 600
              }}>
                {member.active !== false ? 'Active' : 'Hidden'}
              </div>
            </div>

            <div className="adm-item-body">
              <h3 className="adm-item-title">{member.name}</h3>
              <div className="adm-item-subtitle">{member.title}</div>
              <p className="adm-item-desc" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {member.bio}
              </p>

              <div className="adm-item-actions">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(member)}
                  className="adm-btn adm-btn-secondary adm-btn-sm"
                >
                  <i className="bi bi-pencil-square"></i> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(member)}
                  className="adm-btn adm-btn-danger adm-btn-sm"
                >
                  <i className="bi bi-trash-fill"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="adm-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="adm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="adm-modal-header">
              <h2>{editingMember ? 'Edit Team Member' : 'Add New Team Member'}</h2>
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
                <div className="adm-grid-2">
                  <div className="adm-form-group">
                    <label className="adm-label">Full Name *</label>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. SUDARSHAN SINGH DEORA"
                      required
                    />
                  </div>

                  <div className="adm-form-group">
                    <label className="adm-label">Title / Role *</label>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. FOUNDER & DIRECTOR"
                      required
                    />
                  </div>
                </div>

                {/* Photo URL / Upload */}
                <div className="adm-form-group">
                  <label className="adm-label">Profile Photo (URL or File Upload)</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                    <input
                      type="text"
                      className="adm-input"
                      value={formData.img}
                      onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                      placeholder="/gallery/team/... or https://..."
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

                  {/* Photo Preview & Presets */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '8px' }}>
                    <img
                      src={formData.img}
                      alt="Preview"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        border: '1px solid var(--adm-gold)',
                        background: '#f8fafc'
                      }}
                      onError={(e) => { e.target.src = '/gallery/team/Sudarshan-Deora.webp'; }}
                    />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--adm-text-secondary)', marginBottom: '4px', fontWeight: 500 }}>
                        Quick Presets from Team Gallery:
                      </div>
                      <div className="adm-preset-pills">
                        {teamImgPresets.map((preset, idx) => (
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

                <div className="adm-form-group">
                  <label className="adm-label">Short Bio (Primary Summary) *</label>
                  <textarea
                    className="adm-textarea"
                    rows="3"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Brief 2-3 sentence introduction displayed on the card..."
                    required
                  />
                </div>

                <div className="adm-form-group">
                  <label className="adm-label">Extended Story / Background (Expanded Bio)</label>
                  <textarea
                    className="adm-textarea"
                    rows="4"
                    value={formData.more}
                    onChange={(e) => setFormData({ ...formData, more: e.target.value })}
                    placeholder="Full credentials, field experience, personal interests, educational vision..."
                  />
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
                  <i className="bi bi-check-circle-fill"></i> {editingMember ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
