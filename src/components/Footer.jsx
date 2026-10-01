import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer
 * 1:1 reproduction of the reference screenshot and experientialpathways.com:
 * - Solid olive green background (#756f4f)
 * - Left column: White rectangular logo card + narrative tagline
 * - Right top: Horizontal quick links ("SCHOOL & GROUP TRIP", "Health & Safety", "Global Gap Year") + White "CONNECT WITH US" button
 * - Right columns: 3 organized columns ("About Us", "Destination", "Explore")
 * - Bottom row: "© 2026 Experiential Pathways. All Rights Reserved." + social media icon links
 */
export default function Footer() {
  return (
    <footer 
      className="ep-site-footer"
      style={{
        backgroundColor: '#756f4f',
        color: '#ffffff',
        padding: 'clamp(3.5rem, 5.5vw, 5rem) clamp(1.5rem, 4vw, 4.5rem) 1.8rem clamp(1.5rem, 4vw, 4.5rem)',
        fontFamily: "Georgia, 'Times New Roman', serif"
      }}
    >
      <div 
        style={{
          maxWidth: '1360px',
          margin: '0 auto'
        }}
      >
        {/* ==================== UPPER FOOTER WRAPPER ==================== */}
        <div 
          className="ep-footer-top-wrap"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'clamp(2.5rem, 6vw, 6.5rem)',
            flexWrap: 'wrap',
            paddingBottom: 'clamp(2.5rem, 4.5vw, 4rem)'
          }}
        >
          {/* Left Column: White Logo Card + Narrative */}
          <div 
            style={{
              flex: '1 1 320px',
              maxWidth: '430px'
            }}
          >
            {/* White Rounded Card for Logo */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '16px 28px',
                display: 'inline-block',
                marginBottom: '2rem',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.14)'
              }}
            >
              <img 
                src="/gallery/home-page/logo.png" 
                alt="Experiential Pathways" 
                style={{
                  height: 'clamp(76px, 8.5vw, 102px)',
                  width: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                  objectFit: 'contain'
                }}
                onError={(e) => { e.target.src = 'gallery/home-page/logo.png'; }}
              />
            </div>

            {/* Brand Narrative */}
            <p 
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(1.02rem, 1.25vw, 1.2rem)',
                lineHeight: 1.72,
                color: 'rgba(255, 255, 255, 0.94)',
                margin: 0,
                fontWeight: 400
              }}
            >
              The Experiential Pathways family is built on experiential learning, cultural immersion, Giving back to society, and investing in nature
            </p>
          </div>

          {/* Right Area: Top Quick Links + 3 Navigation Columns */}
          <div 
            style={{
              flex: '2 1 600px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(2.2rem, 3.5vw, 3.2rem)'
            }}
          >
            {/* Top Quick Links Bar with Connect Button */}
            <div 
              className="ep-footer-quick-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'clamp(10px, 1.8vw, 24px)',
                flexWrap: 'nowrap',
                width: '100%'
              }}
            >
              <div 
                className="ep-footer-links-group"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(10px, 1.8vw, 26px)',
                  flexWrap: 'nowrap',
                  flexShrink: 1
                }}
              >
                <Link 
                  to="/school-group"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(0.88rem, 1.12vw, 1.2rem)',
                    color: 'rgba(255, 255, 255, 0.95)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                    transition: 'color 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.95)'; }}
                >
                  SCHOOL & GROUP TRIP
                </Link>

                <Link 
                  to="/health"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(0.88rem, 1.12vw, 1.2rem)',
                    color: 'rgba(255, 255, 255, 0.95)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.95)'; }}
                >
                  Health & Safety
                </Link>

                <Link 
                  to="/gap-year"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(0.88rem, 1.12vw, 1.2rem)',
                    color: 'rgba(255, 255, 255, 0.95)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.95)'; }}
                >
                  Global Gap Year
                </Link>
              </div>

              {/* White Pill Button: CONNECT WITH US */}
              <Link 
                to="/contact"
                className="ep-footer-connect-btn"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#2b2707',
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)',
                  padding: '9px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f4eedb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                CONNECT WITH US
              </Link>
            </div>

            {/* 3 Categorized Navigation Columns */}
            <div 
              className="ep-footer-columns-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(1.5rem, 4vw, 5rem)'
              }}
            >
              {/* Column 1: About Us */}
              <div>
                <h4 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(1.25rem, 1.45vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 1.2rem 0'
                  }}
                >
                  About Us
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { label: 'Social Responsibility', path: '/social' },
                    { label: 'Health & Safety', path: '/health' },
                    { label: 'Transformative Experiential', path: '/transform' },
                    { label: 'Gap Year', path: '/gap-year' }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path}
                        style={{
                          color: 'rgba(255, 255, 255, 0.92)',
                          textDecoration: 'none',
                          fontSize: 'clamp(0.98rem, 1.15vw, 1.12rem)',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.target.style.color = '#ffffff'; e.target.style.textDecoration = 'underline'; }}
                        onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.92)'; e.target.style.textDecoration = 'none'; }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Destination */}
              <div>
                <h4 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(1.25rem, 1.45vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 1.2rem 0'
                  }}
                >
                  Destination
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { label: 'India', path: '/india' },
                    { label: 'Bhutan', path: '/bhutan' },
                    { label: 'Nepal', path: '/nepal' },
                    { label: 'Srilanka', path: '/sri-lanka' }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path}
                        style={{
                          color: 'rgba(255, 255, 255, 0.92)',
                          textDecoration: 'none',
                          fontSize: 'clamp(0.98rem, 1.15vw, 1.12rem)',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.target.style.color = '#ffffff'; e.target.style.textDecoration = 'underline'; }}
                        onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.92)'; e.target.style.textDecoration = 'none'; }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Explore */}
              <div>
                <h4 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(1.25rem, 1.45vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 1.2rem 0'
                  }}
                >
                  Explore
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'About us', path: '/about' },
                    { label: 'Destinations', path: '/destination' },
                    { label: 'Programs', path: '/rajasthan' },
                    { label: 'Contact Us', path: '/contact' }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path}
                        style={{
                          color: 'rgba(255, 255, 255, 0.92)',
                          textDecoration: 'none',
                          fontSize: 'clamp(0.98rem, 1.15vw, 1.12rem)',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.target.style.color = '#ffffff'; e.target.style.textDecoration = 'underline'; }}
                        onMouseLeave={(e) => { e.target.style.color = 'rgba(255, 255, 255, 0.92)'; e.target.style.textDecoration = 'none'; }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== BOTTOM ROW ==================== */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Copyright */}
          <p 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(0.85rem, 1vw, 0.94rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0
            }}
          >
            © 2026 Experiential Pathways. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem'
            }}
          >
            {[
              { icon: 'bi-facebook', href: 'https://facebook.com/experiential.pathways/', label: 'Facebook' },
              { icon: 'bi-instagram', href: 'https://www.instagram.com/experiential.pathways/', label: 'Instagram' },
              { icon: 'bi-linkedin', href: 'https://linkedin.com/in/experiential-pathways', label: 'LinkedIn' },
              { icon: 'bi-whatsapp', href: 'https://wa.me/09257001999', label: 'WhatsApp' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                style={{
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .ep-footer-quick-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.2rem !important;
          }
          .ep-footer-links-group {
            flex-wrap: wrap !important;
            gap: 0.8rem 1.4rem !important;
          }
          .ep-footer-columns-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 540px) {
          .ep-footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
