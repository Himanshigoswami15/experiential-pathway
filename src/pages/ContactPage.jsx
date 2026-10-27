import React, { useState, useEffect } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import './ContactPage.css';

export default function ContactPage() {
  const { data, addInquiry } = useAdminData();
  const contact = data?.contact || {};
  const phone = contact.phone || '09257001999';
  const phoneFormatted = contact.phoneFormatted || phone;
  const email = contact.email || 'info@experientialpathways.com';
  const whatsapp = contact.whatsapp || '919257001999';
  const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpIA6wXThtAge0DGWXR1PSuTRmHo0S9qMJRlBKcmMGgHD_DWTkEdm95v-CZIyyllY0/exec';
  const scriptUrl = contact.scriptUrl || DEFAULT_SCRIPT_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const errors = {};
    const nameTrimmed = (formData.fullName || '').trim();
    const emailTrimmed = (formData.email || '').trim();
    const subjectTrimmed = (formData.subject || '').trim();

    if (!nameTrimmed) {
      errors.fullName = 'Please enter your name.';
    } else if (nameTrimmed.length < 2) {
      errors.fullName = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(emailTrimmed)) {
      errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!subjectTrimmed) {
      errors.subject = 'Please enter a subject.';
    } else if (subjectTrimmed.length < 3) {
      errors.subject = 'Subject must be at least 3 characters long.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // Guard against accidental duplicate submission clicks

    // Honeypot spam trap: if filled, silently ignore spam bot
    if (honeypot) {
      console.warn('Spam submission detected and dropped.');
      setSubmitted(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = (formData.message || '').trim();

    try {
      // 1. Preserve existing internal admin & Neon database recording
      if (addInquiry) {
        addInquiry({
          fullName: trimmedName,
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage
        });
      }

      // 2. Submit to Google Apps Script Web App endpoint
      const targetUrl = scriptUrl || DEFAULT_SCRIPT_URL;

      const params = new URLSearchParams();
      // Required and optional field names expected by Google Apps Script
      params.append('name', trimmedName);
      params.append('email', trimmedEmail);
      params.append('subject', trimmedSubject);
      params.append('message', trimmedMessage);

      // Exact Google Sheet column headers mapping
      params.append('Your Name', trimmedName);
      params.append('Your Email', trimmedEmail);
      params.append('Subject', trimmedSubject);
      params.append('Your Message', trimmedMessage);

      // Timestamp column mapping
      const now = new Date();
      const timestampFormatted = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      params.append('Timestamp', timestampFormatted);
      params.append('timestamp', timestampFormatted);

      // Backwards-compatible aliases
      params.append('fullName', trimmedName);
      params.append('sheetName', 'Sheet1');

      // Send to Google Apps Script
      await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: params
      });

      // Successful network dispatch verified
      setSubmitted(true);
      setFieldErrors({});
    } catch (err) {
      console.error('Contact submission network error:', err);
      setSubmitError(
        'We could not send your message due to a network connection error. Please check your connection and try again, or reach us at ' + email
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
    setHoneypot('');
    setFieldErrors({});
    setSubmitError('');
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* ===== Banner Section ===== */}
      <section className="banner position-relative">
        <img 
          className="banner-img-desktop" 
          src="/gallery/contact/contact_us.webp" 
          alt="Contact Us Banner"
          onError={(e) => { e.target.src = 'gallery/contact/contact_us.webp'; }}
        />
        <div className="banner-text position-absolute">
          <h1 className="text-uppercase text-center">Contact us</h1>
        </div>
      </section>

      {/* ===== Get in Touch Section ===== */}
      <section className="get-in-touch text-center">
        <h2 className="heading fs-1">Get in Touch With Us</h2>
        <p className="lead-text">
          We’d love to hear from you! <br />
          Please complete the form below and one of our staff members will be in touch shortly. Let’s plan something
          incredible together.
        </p>

        <div className="contact-cards position-relative">
          <a href={`tel:${phone}`} className="contact-card">
            <img 
              src="/gallery/contact/113.png" 
              alt="Phone"
              onError={(e) => { e.target.src = 'gallery/contact/113.png'; }}
            />
            <p className="fw-bold">{phoneFormatted || phone}</p>
          </a>

          <a href={`mailto:${email}`} className="contact-card">
            <img 
              src="/gallery/contact/114.png" 
              alt="Email"
              onError={(e) => { e.target.src = 'gallery/contact/114.png'; }}
            />
            <p className="fw-bold">{email}</p>
          </a>

          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-card">
            <img 
              src="/gallery/contact/115.png" 
              alt="WhatsApp / Phone"
              onError={(e) => { e.target.src = 'gallery/contact/115.png'; }}
            />
            <p className="fw-bold">{phoneFormatted || phone}</p>
          </a>

          <img 
            src="/gallery/contact/21_2.png" 
            className="last-img position-absolute" 
            alt="Divider"
            onError={(e) => { e.target.src = 'gallery/contact/21_2.png'; }}
          />
        </div>
      </section>

      {/* ===== Contact Form & Map Section ===== */}
      <section className="contact-form">
        <div className="container">
          {/* Google Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.42465756039!2d73.03054325000001!3d26.2703594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4085e077cb8384d7%3A0xd73127c925a4b9ed!2sExperiential%20Pathways!5e0!3m2!1sen!2sin!4v1770193104042!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Experiential Pathways Location"
            />
          </div>

          {/* Form */}
          <div className="form">
            <div className="container">
              {!submitted ? (
                <form id="contactForm" onSubmit={handleSubmit} noValidate>
                  {/* Submission Error Banner */}
                  {submitError && (
                    <div 
                      className="alert alert-danger d-flex align-items-center mb-4" 
                      role="alert"
                      style={{
                        backgroundColor: '#fff3cd',
                        color: '#664d03',
                        border: '1px solid #ffecb5',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        fontSize: '0.95rem'
                      }}
                    >
                      <i className="bi bi-exclamation-triangle-fill me-2" style={{ fontSize: '1.2rem', color: '#855e00' }}></i>
                      <div>{submitError}</div>
                    </div>
                  )}

                  {/* Anti-Spam Honeypot Field (Invisible to human visitors, traps automated bots) */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <label htmlFor="company_title">Do not fill this field</label>
                    <input 
                      type="text" 
                      id="company_title" 
                      name="company_title" 
                      tabIndex="-1" 
                      autoComplete="off" 
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Name Field */}
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-uppercase">
                      Your Name <span style={{ color: '#a03020' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      className={`form-control ${fieldErrors.fullName ? 'is-invalid' : ''}`}
                      name="fullName" 
                      id="fullName" 
                      required 
                      disabled={submitting}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: null });
                      }}
                      style={fieldErrors.fullName ? { borderColor: '#dc3545' } : {}}
                      placeholder="e.g. Sarah Jenkins"
                    />
                    {fieldErrors.fullName && (
                      <div style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '4px' }}>
                        {fieldErrors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-uppercase">
                      YOUR EMAIL <span style={{ color: '#a03020' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      className={`form-control ${fieldErrors.email ? 'is-invalid' : ''}`}
                      name="email" 
                      id="email" 
                      required 
                      disabled={submitting}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
                      }}
                      style={fieldErrors.email ? { borderColor: '#dc3545' } : {}}
                      placeholder="e.g. sarah.jenkins@oakridge.edu"
                    />
                    {fieldErrors.email && (
                      <div style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '4px' }}>
                        {fieldErrors.email}
                      </div>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-uppercase">
                      SUBJECT <span style={{ color: '#a03020' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      className={`form-control ${fieldErrors.subject ? 'is-invalid' : ''}`}
                      name="subject" 
                      id="subject" 
                      required 
                      disabled={submitting}
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: null });
                      }}
                      style={fieldErrors.subject ? { borderColor: '#dc3545' } : {}}
                      placeholder="e.g. Student Expedition to India & Nepal"
                    />
                    {fieldErrors.subject && (
                      <div style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '4px' }}>
                        {fieldErrors.subject}
                      </div>
                    )}
                  </div>

                  {/* Message Field (Optional) */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-uppercase">YOUR MESSAGE (OPTIONAL)</label>
                    <textarea 
                      className="form-control" 
                      name="message" 
                      id="message" 
                      rows="6"
                      disabled={submitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your student group size, preferred dates, and experiential learning goals..."
                    />
                  </div>

                  {/* Submit Button with Loading State */}
                  <button 
                    type="submit" 
                    id="submitBtn" 
                    disabled={submitting}
                    style={{
                      opacity: submitting ? 0.75 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {submitting ? (
                      <>
                        <span 
                          className="spinner-border spinner-border-sm me-2" 
                          role="status" 
                          aria-hidden="true"
                          style={{
                            display: 'inline-block',
                            width: '1rem',
                            height: '1rem',
                            verticalAlign: 'text-bottom',
                            borderWidth: '2px',
                            marginRight: '8px'
                          }}
                        ></span>
                        SENDING...
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </form>
              ) : (
                <div id="successMessage" className="mt-4 text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: '#3b3500' }}></i>
                  </div>
                  <h3 className="fw-bold" style={{ color: '#3b3500' }}>Message Sent!</h3>
                  <p style={{ color: '#5f5863', fontSize: '1.1rem' }}>
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button 
                    type="button" 
                    className="mt-3" 
                    id="submitAnotherBtn"
                    onClick={handleResetForm}
                    style={{
                      background: 'transparent',
                      border: '2px solid #3b3500',
                      borderRadius: '8px',
                      padding: '8px 24px',
                      color: '#3b3500',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave / Mountain Landscape */}
        <div className="last-img">
          <img 
            src="/gallery/home-page/20.png" 
            className="upper" 
            width="100%" 
            alt="Hill outline"
            onError={(e) => { e.target.src = 'gallery/home-page/20.png'; }}
          />
          <img 
            width="100%" 
            className="position-absolute" 
            src="/gallery/contact/18_1.png" 
            alt="Mountain foothills"
            onError={(e) => { e.target.src = 'gallery/contact/18_1.png'; }}
          />
        </div>
      </section>
    </div>
  );
}
