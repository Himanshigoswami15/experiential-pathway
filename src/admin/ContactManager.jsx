import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

export default function ContactManager({ showToast }) {
  const { data, updateContact, deleteInquiry, markInquiryStatus } = useAdminData();
  const [activeTab, setActiveTab] = useState('details');

  const [form, setForm] = useState({
    phone: data.contact.phone || '09257001999',
    phoneFormatted: data.contact.phoneFormatted || '+91 92570 01999',
    email: data.contact.email || 'info@experientialpathways.com',
    whatsapp: data.contact.whatsapp || '919257001999',
    address: data.contact.address || 'Experiential Pathways, South Asia Expeditions HQ',
    workingHours: data.contact.workingHours || 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    scriptUrl: data.contact.scriptUrl || '',
    social: {
      instagram: data.contact.social?.instagram || '',
      facebook: data.contact.social?.facebook || '',
      linkedin: data.contact.social?.linkedin || '',
      youtube: data.contact.social?.youtube || ''
    }
  });

  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleSaveContact = (e) => {
    e.preventDefault();
    updateContact(form);
    if (showToast) showToast('Contact information updated across website!');
  };

  const inquiries = data.contact.inquiries || [];

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title">
          <h1>Contact Us &amp; Inquiries Management</h1>
          <p>Update phone numbers, WhatsApp, emails, office address, and review inbound student expedition inquiries.</p>
        </div>
        {activeTab === 'details' && (
          <button type="button" onClick={handleSaveContact} className="adm-btn adm-btn-primary">
            <i className="bi bi-cloud-check-fill"></i> Save Contact Info
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="adm-dest-tabs">
        <button
          type="button"
          className={`adm-dest-tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          <i className="bi bi-telephone-fill"></i>
          <span>Contact Information</span>
        </button>
        <button
          type="button"
          className={`adm-dest-tab ${activeTab === 'inbox' ? 'active' : ''}`}
          onClick={() => setActiveTab('inbox')}
        >
          <i className="bi bi-envelope-paper-fill"></i>
          <span>Form Inquiries Inbox</span>
          <span className="adm-badge-count">{inquiries.length}</span>
        </button>
      </div>

      {activeTab === 'details' ? (
        <div className="adm-grid-2">
          {/* Form */}
          <form onSubmit={handleSaveContact} className="adm-card">
            <div className="adm-card-header">
              <h3><i className="bi bi-person-lines-fill text-warning"></i> Primary Channels</h3>
            </div>

            <div className="adm-grid-2">
              <div className="adm-form-group">
                <label className="adm-label">Primary Phone (Raw Digits)</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="09257001999"
                  required
                />
                <div className="adm-help-text">Used for tel: links on Contact page &amp; Footer.</div>
              </div>

              <div className="adm-form-group">
                <label className="adm-label">Phone Display Format</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.phoneFormatted}
                  onChange={(e) => setForm({ ...form, phoneFormatted: e.target.value })}
                  placeholder="+91 92570 01999"
                />
                <div className="adm-help-text">Visible formatted phone number for visitors.</div>
              </div>
            </div>

            <div className="adm-grid-2">
              <div className="adm-form-group">
                <label className="adm-label">Primary Email Address</label>
                <input
                  type="email"
                  className="adm-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="info@experientialpathways.com"
                  required
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label">WhatsApp Number (with country code)</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="919257001999"
                  required
                />
                <div className="adm-help-text">Directly used to generate wa.me link.</div>
              </div>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Physical Office Address / Base</label>
              <textarea
                className="adm-textarea"
                rows="2"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="HQ Address, City, Country"
              />
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Operating / Support Hours</label>
              <input
                type="text"
                className="adm-input"
                value={form.workingHours}
                onChange={(e) => setForm({ ...form, workingHours: e.target.value })}
                placeholder="Monday – Saturday: 9:00 AM – 7:00 PM IST"
              />
            </div>

            <div style={{ height: '1px', background: 'var(--adm-border)', margin: '1.5rem 0' }}></div>

            <div className="adm-card-header" style={{ border: 'none', padding: 0, marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem' }}><i className="bi bi-google"></i> Google Sheets Webhook Script</h3>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Google Apps Script Webhook URL</label>
              <input
                type="text"
                className="adm-input"
                value={form.scriptUrl}
                onChange={(e) => setForm({ ...form, scriptUrl: e.target.value })}
                placeholder="https://script.google.com/macros/s/.../exec"
              />
              <div className="adm-help-text">
                Target endpoint that stores submissions into Google Sheets automatically.
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="submit" className="adm-btn adm-btn-primary">
                <i className="bi bi-check-circle-fill"></i> Save Contact Details
              </button>
            </div>
          </form>

          {/* Right Column: Live Contact Card Preview & Social links */}
          <div>
            <div className="adm-card">
              <div className="adm-card-header">
                <h3><i className="bi bi-eye-fill text-info"></i> Live Contact Display Preview</h3>
              </div>

              <div style={{
                background: '#f8fafc',
                border: '1px solid var(--adm-border)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(184, 134, 11, 0.12)',
                    color: 'var(--adm-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}>
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--adm-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Phone Call</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--adm-text-primary)' }}>{form.phoneFormatted || form.phone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}>
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--adm-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>WhatsApp Direct</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--adm-text-primary)' }}>+{form.whatsapp}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    color: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--adm-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Official Email</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--adm-text-primary)' }}>{form.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(184, 134, 11, 0.12)',
                    color: 'var(--adm-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--adm-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Headquarters</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--adm-text-primary)' }}>{form.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="adm-card">
              <div className="adm-card-header">
                <h3><i className="bi bi-share-fill text-warning"></i> Social Media Links</h3>
              </div>

              <div className="adm-form-group">
                <label className="adm-label"><i className="bi bi-instagram me-1"></i> Instagram</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.social.instagram}
                  onChange={(e) => setForm({ ...form, social: { ...form.social, instagram: e.target.value } })}
                  placeholder="https://instagram.com/..."
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label"><i className="bi bi-facebook me-1"></i> Facebook</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.social.facebook}
                  onChange={(e) => setForm({ ...form, social: { ...form.social, facebook: e.target.value } })}
                  placeholder="https://facebook.com/..."
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label"><i className="bi bi-linkedin me-1"></i> LinkedIn</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.social.linkedin}
                  onChange={(e) => setForm({ ...form, social: { ...form.social, linkedin: e.target.value } })}
                  placeholder="https://linkedin.com/company/..."
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Inquiries Inbox Tab */
        <div className="adm-card">
          <div className="adm-card-header">
            <h3><i className="bi bi-inbox-fill text-warning"></i> Inbound Website Messages ({inquiries.length})</h3>
          </div>

          {inquiries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--adm-text-secondary)' }}>
              <i className="bi bi-envelope-open" style={{ fontSize: '2.5rem', color: 'var(--adm-text-muted)' }}></i>
              <h4 style={{ color: '#fff', marginTop: '1rem' }}>No Inquiries Received Yet</h4>
              <p>When visitors submit the form on the Contact page, inquiries will appear here.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--adm-border)', color: 'var(--adm-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '12px 14px' }}>Sender</th>
                    <th style={{ padding: '12px 14px' }}>Subject</th>
                    <th style={{ padding: '12px 14px' }}>Received</th>
                    <th style={{ padding: '12px 14px' }}>Status</th>
                    <th style={{ padding: '12px 14px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq) => (
                    <tr
                      key={inq.id}
                      style={{
                        borderBottom: '1px solid var(--adm-border)',
                        background: inq.status === 'new' ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setSelectedInquiry(inq);
                        if (inq.status === 'new') markInquiryStatus(inq.id, 'read');
                      }}
                    >
                      <td style={{ padding: '14px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--adm-text-primary)' }}>{inq.fullName}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--adm-text-secondary)' }}>{inq.email}</div>
                      </td>
                      <td style={{ padding: '14px', maxWidth: '300px' }}>
                        <div style={{
                          fontWeight: inq.status === 'new' ? 700 : 500,
                          color: inq.status === 'new' ? 'var(--adm-text-primary)' : 'var(--adm-text-secondary)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {inq.subject}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#64748b',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {inq.message}
                        </div>
                      </td>
                      <td style={{ padding: '14px', color: '#9aa4b5', fontSize: '0.8rem' }}>
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '14px' }}>
                        <span style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          background: inq.status === 'new' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                          color: inq.status === 'new' ? '#d4af37' : '#9aa4b5'
                        }}>
                          {inq.status === 'new' ? 'NEW' : 'READ'}
                        </span>
                      </td>
                      <td style={{ padding: '14px', textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="adm-btn adm-btn-secondary adm-btn-sm me-2"
                          onClick={() => setSelectedInquiry(inq)}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="adm-btn adm-btn-danger adm-btn-sm"
                          onClick={() => {
                            if (window.confirm('Delete this inquiry?')) {
                              deleteInquiry(inq.id);
                              if (showToast) showToast('Inquiry deleted.');
                            }
                          }}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="adm-modal-backdrop" onClick={() => setSelectedInquiry(null)}>
          <div className="adm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="adm-modal-header">
              <h2>Inquiry Details</h2>
              <button
                type="button"
                className="adm-modal-close"
                onClick={() => setSelectedInquiry(null)}
              >
                &times;
              </button>
            </div>

            <div className="adm-modal-body">
              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--adm-border)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--adm-text-secondary)' }}>FROM:</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--adm-text-primary)' }}>{selectedInquiry.fullName}</div>
                <div style={{ color: 'var(--adm-gold-dark)', fontSize: '0.9rem', fontWeight: 600 }}>
                  <a href={`mailto:${selectedInquiry.email}`} style={{ color: 'inherit' }}>{selectedInquiry.email}</a>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--adm-text-secondary)' }}>SUBJECT:</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--adm-text-primary)' }}>{selectedInquiry.subject}</div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--adm-text-secondary)' }}>MESSAGE:</div>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid var(--adm-border)',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: 'var(--adm-text-primary)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap'
                }}>
                  {selectedInquiry.message}
                </div>
              </div>
            </div>

            <div className="adm-modal-footer">
              <a
                href={`mailto:${selectedInquiry.email}?subject=Re: ${encodeURIComponent(selectedInquiry.subject)}`}
                className="adm-btn adm-btn-primary"
              >
                <i className="bi bi-reply-fill"></i> Reply via Email
              </a>
              <button
                type="button"
                className="adm-btn adm-btn-secondary"
                onClick={() => setSelectedInquiry(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
