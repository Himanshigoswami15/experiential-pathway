import React, { useState, useEffect } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4S5yXbHl1kMM1qxMzPKygriXzxvWHWamqEbEXIrHAxQCjI88WppBixOnXdyp9clDs/exec';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key]);
      }
      params.append('sheetName', 'Sheet2');

      await fetch(CONTACT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: params
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact submit error:', err);
      alert('There was an issue submitting your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ===== Banner Section ===== */}
      <section className="banner position-relative">
        <img 
          className="banner-img-desktop" 
          src="/gallery/contact/25.png" 
          alt="Contact Us Banner"
          onError={(e) => { e.target.src = 'gallery/contact/25.png'; }}
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
          <a href="tel:09257001999" className="contact-card">
            <img 
              src="/gallery/contact/113.png" 
              alt="Phone"
              onError={(e) => { e.target.src = 'gallery/contact/113.png'; }}
            />
            <p className="fw-bold">09257001999</p>
          </a>

          <a href="mailto:info@experientialpathways.com" className="contact-card">
            <img 
              src="/gallery/contact/114.png" 
              alt="Email"
              onError={(e) => { e.target.src = 'gallery/contact/114.png'; }}
            />
            <p className="fw-bold">info@experientialpathways.com</p>
          </a>

          <a href="https://wa.me/919257001999" target="_blank" rel="noopener noreferrer" className="contact-card">
            <img 
              src="/gallery/contact/115.png" 
              alt="WhatsApp / Phone"
              onError={(e) => { e.target.src = 'gallery/contact/115.png'; }}
            />
            <p className="fw-bold">09257001999</p>
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
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-uppercase">Your Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="fullName" 
                      id="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-uppercase">YOUR EMAIL</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-uppercase">SUBJECT</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="subject" 
                      id="subject" 
                      required 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-uppercase">YOUR MESSAGE (OPTIONAL)</label>
                    <textarea 
                      className="form-control" 
                      name="message" 
                      id="message" 
                      rows="6"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" id="submitBtn" disabled={submitting}>
                    {submitting ? "SENDING..." : "SUBMIT"}
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
