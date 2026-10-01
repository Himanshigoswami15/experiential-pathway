import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const destinationHierarchy = {
  india: {
    name: 'INDIA',
    link: '/india',
    programs: [
      { name: 'RAJASTHAN PROGRAM', link: '/rajasthan' },
      { name: 'ARTISTIC IMMERSION', link: '/artistic-immersion' },
      { name: 'NORTH INDIA PHOTO PROGRAM', link: '/north-india-photo-program' },
      { name: 'HIMALAYAN PHOTO EXPEDITION', link: '/himalayan-photo-expedition' }
    ]
  },
  nepal: {
    name: 'NEPAL',
    link: '/nepal',
    categories: [
      {
        name: 'SERVICE & ADVENTURE',
        programs: [
          { name: 'CULTURAL ADVENTURE & SERVICE', link: '/nepal-cultural-adventure' },
          { name: 'NEPAL: TREK, RAFT & SERVICE', link: '/nepal-trek-raft-service' },
          { name: 'NEPAL: SERVICE, CULTURE & ADVENTURE', link: '/nepal-service-culture-adventure' },
          { name: 'NEPALI VILLAGE LIFE', link: '/nepali-village-life' },
          { name: 'HIMALAYAN VILLAGE LIFE & ADVENTURE', link: '/himalayan-village-life' }
        ]
      },
      {
        name: 'SERVICE PROGRAMS',
        programs: [
          { name: 'NEPALI VILLAGE LIFE', link: '/nepali-village-life' },
          { name: 'NEPAL SUMMER SERVICE ADVENTURES', link: '/nepal-summer-service' },
          { name: 'NEPAL: A JOURNEY OF DISCOVERY AND SERVICE', link: '/nepal-discovery-service' }
        ]
      },
      {
        name: 'ADVENTURE PROGRAMS',
        programs: [
          { name: 'NEPAL ADVENTURE DISCOVERY AND SERVICE', link: '/nepal-adventure-discovery' },
          { name: 'NEPAL: SACRED PEAKS AND RAPIDS', link: '/nepal-sacred-peaks-rapids' },
          { name: 'POON HILL TREK', link: '/poon-hill-trek' },
          { name: 'DISCOVER NEPAL JOURNEY OF ADVENTURE AND CULTURE', link: '/nepal-discover-journey-adventure-culture' },
          { name: 'YETI EXPEDITION', link: '/nepal-yeti-expedition' }
        ]
      }
    ]
  },
  bhutan: {
    name: 'BHUTAN',
    link: '/bhutan',
    categories: [
      {
        name: 'CULTURAL IMMERSION PROGRAM',
        programs: [
          { name: 'BHUTAN: HIMALAYAN HARMONY', link: '/bhutan-himalayan-harmony' },
          { name: "TIGER'S NEST DISCOVERY", link: '/bhutan-dragons-nest-discovery' }
        ]
      },
      {
        name: 'BHUTAN ADVENTURE PROGRAMS',
        programs: [
          { name: 'BHUTAN CULTURAL ADVENTURE', link: '/bhutan-cultural-adventure' }
        ]
      }
    ]
  },
  srilanka: {
    name: 'SRI LANKA',
    link: '/sri-lanka',
    categories: [
      {
        name: 'CULTURAL AND IMMERSION PROGRAM',
        programs: [
          { name: 'SRI LANKA: WILDLIFE AND WAVES', link: '/sri-lanka-wildlife-waves' },
          { name: 'GEMS OF SRI LANKA', link: '/gems-of-sri-lanka' }
        ]
      },
      {
        name: 'COMMUNITY SERVICES',
        programs: [
          { name: 'SRI LANKA: COMMUNITY AND COASTLINE', link: '/sri-lanka-community-coastline' },
          { name: 'AN IMMERSIVE SRI LANKA EXPERIENCE', link: '/an-immersive-sri-lanka-experience' },
          { name: 'BEACHES & VILLAGES OF SRI LANKA', link: '/beaches-villages-of-sri-lanka' }
        ]
      },
      {
        name: 'ADVENTURE PROGRAMS',
        programs: [
          { name: 'SERENITY AND ADVENTURE: A SRI LANKAN', link: '/serenity-and-adventure-a-sri-lankan' },
          { name: 'OUTDOOR ADVENTURE OF SRI LANKA', link: '/outdoor-adventure-of-sri-lanka' },
          { name: 'HIGHLIGHTS OF SRI LANKA', link: '/highlights-of-sri-lanka' },
          { name: 'BEST OF SRI LANKA', link: '/best-of-sri-lanka' }
        ]
      }
    ]
  }
};

/**
 * Navbar component matching exactly the hanging olive bar from experientialpathways.com
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [progDropdownOpen, setProgDropdownOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(null);

  const aboutRef = useRef(null);
  const destRef = useRef(null);
  const progRef = useRef(null);

  const aboutTimeoutRef = useRef(null);
  const destTimeoutRef = useRef(null);
  const progTimeoutRef = useRef(null);

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  const handleDestEnter = () => {
    if (destTimeoutRef.current) clearTimeout(destTimeoutRef.current);
    setDestDropdownOpen(true);
  };
  const handleDestLeave = () => {
    destTimeoutRef.current = setTimeout(() => {
      setDestDropdownOpen(false);
    }, 150);
  };

  const handleProgEnter = () => {
    if (progTimeoutRef.current) clearTimeout(progTimeoutRef.current);
    setProgDropdownOpen(true);
  };
  const handleProgLeave = () => {
    progTimeoutRef.current = setTimeout(() => {
      setProgDropdownOpen(false);
    }, 150);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (destRef.current && !destRef.current.contains(event.target)) {
        setDestDropdownOpen(false);
      }
      if (progRef.current && !progRef.current.contains(event.target)) {
        setProgDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (destTimeoutRef.current) clearTimeout(destTimeoutRef.current);
      if (progTimeoutRef.current) clearTimeout(progTimeoutRef.current);
    };
  }, []);

  const closeAll = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (destTimeoutRef.current) clearTimeout(destTimeoutRef.current);
    if (progTimeoutRef.current) clearTimeout(progTimeoutRef.current);
    setAboutDropdownOpen(false);
    setDestDropdownOpen(false);
    setProgDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-fixed-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1200,
      backgroundColor: 'transparent',
      pointerEvents: 'none'
    }}>
      <div 
        className="navbar-inner-wrapper"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1rem',
          pointerEvents: 'auto'
        }}
      >
        <nav className="ep-navbar-nav">
          {/* Main Links Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '0.8rem',
            flexWrap: 'wrap'
          }} className="d-none d-lg-flex">
            
            {/* HOME */}
            <Link 
              to="/" 
              onClick={closeAll}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.90rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ede3ab'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              HOME
            </Link>

            {/* ABOUT US ▾ */}
            <div 
              style={{ position: 'relative' }} 
              ref={aboutRef}
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                onClick={() => {
                  setAboutDropdownOpen(!aboutDropdownOpen);
                  setDestDropdownOpen(false);
                  setProgDropdownOpen(false);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.90rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ede3ab'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                ABOUT US ▾
              </button>
              <div 
                className="nav-dropdown-bridge"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  minWidth: '240px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.16)',
                  listStyle: 'none',
                  padding: '8px 0',
                  zIndex: 1300,
                  opacity: aboutDropdownOpen ? 1 : 0,
                  visibility: aboutDropdownOpen ? 'visible' : 'hidden',
                  transform: aboutDropdownOpen ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                  pointerEvents: aboutDropdownOpen ? 'auto' : 'none'
                }}
              >
                <Link to="/about" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#2b2707', textDecoration: 'none', fontSize: '0.86rem' }}>Our Story</Link>
                <Link to="/team" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#2b2707', textDecoration: 'none', fontSize: '0.86rem' }}>Our Team</Link>
                <Link to="/health" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#2b2707', textDecoration: 'none', fontSize: '0.86rem' }}>Health & Safety</Link>
                <Link to="/social" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#2b2707', textDecoration: 'none', fontSize: '0.86rem' }}>Social Responsibility</Link>
                <Link to="/transform" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#3a3400', fontWeight: 700, textDecoration: 'none', fontSize: '0.86rem', backgroundColor: '#f5f2e6' }}>Transformative Experiential</Link>
              </div>
            </div>

            {/* DESTINATION ▾ */}
            <div 
              className="dest-dropdown-wrapper" 
              ref={destRef}
              onMouseEnter={handleDestEnter}
              onMouseLeave={handleDestLeave}
            >
              <button
                onClick={() => {
                  setDestDropdownOpen(!destDropdownOpen);
                  setAboutDropdownOpen(false);
                  setProgDropdownOpen(false);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.90rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ede3ab'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                DESTINATION ▾
              </button>

              {/* Tier 1: Countries Menu */}
              <div 
                className="dest-tier1-menu"
                style={{
                  opacity: destDropdownOpen ? 1 : 0,
                  visibility: destDropdownOpen ? 'visible' : 'hidden',
                  transform: destDropdownOpen ? 'translateY(0)' : 'translateY(-6px)',
                  pointerEvents: destDropdownOpen ? 'auto' : 'none'
                }}
              >
                {Object.entries(destinationHierarchy).map(([key, data]) => (
                  <div key={key} className="dest-country-item">
                    <Link
                      to={data.link}
                      onClick={closeAll}
                      className="dest-country-link"
                    >
                      <span>{data.name}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, marginLeft: '16px', color: '#1a1a1a' }}>›</span>
                    </Link>

                    {/* Tier 2: Flyout (Direct Programs OR Categories) */}
                    <div className="dest-tier2-flyout">
                      <div className="dest-tier2-card">
                        {data.programs ? (
                          data.programs.map((prog, pIdx) => (
                            <Link
                              key={pIdx}
                              to={prog.link}
                              onClick={closeAll}
                              className="dest-program-link"
                            >
                              {prog.name}
                            </Link>
                          ))
                        ) : (
                          data.categories?.map((cat, cIdx) => (
                            <div key={cIdx} className="dest-program-trigger">
                              <div className="dest-program-trigger-row">
                                <span>{cat.name}</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, marginLeft: '16px', color: '#1a1a1a' }}>›</span>
                              </div>

                              {/* Tier 3: Programs List Flyout */}
                              <div className="dest-tier3-flyout">
                                <div className="dest-tier3-card">
                                  {cat.programs.map((prog, pIdx) => (
                                    <Link
                                      key={pIdx}
                                      to={prog.link}
                                      onClick={closeAll}
                                      className="dest-program-link"
                                    >
                                      {prog.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROGRAMS ▾ */}
            <div 
              style={{ position: 'relative' }} 
              ref={progRef}
              onMouseEnter={handleProgEnter}
              onMouseLeave={handleProgLeave}
            >
              <button
                onClick={() => {
                  setProgDropdownOpen(!progDropdownOpen);
                  setAboutDropdownOpen(false);
                  setDestDropdownOpen(false);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.90rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ede3ab'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                PROGRAMS ▾
              </button>
              <div 
                className="nav-dropdown-bridge"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  minWidth: '220px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.16)',
                  padding: '8px 0',
                  zIndex: 1300,
                  opacity: progDropdownOpen ? 1 : 0,
                  visibility: progDropdownOpen ? 'visible' : 'hidden',
                  transform: progDropdownOpen ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                  pointerEvents: progDropdownOpen ? 'auto' : 'none'
                }}
              >
                <Link to="/gap-year" onClick={closeAll} style={{ display: 'block', padding: '9px 18px', color: '#2b2707', textDecoration: 'none', fontSize: '0.86rem' }}>GAP - YEAR</Link>
              </div>
            </div>

            {/* SCHOOL & GROUP TRIP */}
            <Link 
              to="/school-group" 
              onClick={closeAll}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.90rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ede3ab'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              SCHOOL & GROUP TRIP
            </Link>

            {/* CONTACT */}
            <Link 
              to="/contact" 
              onClick={closeAll}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.90rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ede3ab'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile View Top Bar: Logo on Left + Hamburger on Right */}
          <div 
            className="d-lg-none w-100 d-flex justify-content-between align-items-center"
            style={{ padding: '2px 0' }}
          >
            <Link 
              to="/" 
              onClick={closeAll}
              style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              aria-label="Experiential Pathways Home"
            >
              <div style={{
                backgroundColor: '#ffffff',
                padding: '4px 10px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
              }}>
                <img 
                  src="/gallery/home-page/logo.png" 
                  alt="Experiential Pathways" 
                  style={{
                    height: 'clamp(28px, 4.5vw, 36px)',
                    width: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => { e.target.src = 'gallery/home-page/logo.png'; }}
                />
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '1.8rem',
                cursor: 'pointer',
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div 
              className="d-lg-none w-100 ep-mobile-drawer"
            >
              {/* HOME */}
              <Link 
                to="/" 
                onClick={closeAll} 
                style={{
                  color: '#ffffff',
                  padding: '10px 8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  letterSpacing: '0.04em',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                HOME
              </Link>
              
              {/* Mobile About Accordion */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)} 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    padding: '10px 8px',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>ABOUT US</span>
                  <span style={{ fontSize: '0.85rem' }}>{mobileAboutOpen ? '▴' : '▾'}</span>
                </button>
                {mobileAboutOpen && (
                  <div style={{ paddingLeft: '1rem', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Link to="/about" onClick={closeAll} style={{ color: '#ede3ab', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem' }}>Our Story</Link>
                    <Link to="/team" onClick={closeAll} style={{ color: '#ede3ab', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem' }}>Our Team</Link>
                    <Link to="/health" onClick={closeAll} style={{ color: '#ede3ab', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem' }}>Health & Safety</Link>
                    <Link to="/social" onClick={closeAll} style={{ color: '#ede3ab', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem' }}>Social Responsibility</Link>
                    <Link to="/transform" onClick={closeAll} style={{ color: '#ffffff', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>Transformative Experiential</Link>
                  </div>
                )}
              </div>

              {/* Mobile Destinations Accordion */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button 
                  onClick={() => setMobileDestOpen(!mobileDestOpen)} 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    padding: '10px 8px',
                    width: '100%',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>DESTINATIONS</span>
                  <span style={{ fontSize: '0.85rem' }}>{mobileDestOpen ? '▴' : '▾'}</span>
                </button>
                {mobileDestOpen && (
                  <div style={{ paddingLeft: '0.8rem', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(destinationHierarchy).map(([key, data]) => (
                      <div key={key} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Link 
                            to={data.link} 
                            onClick={closeAll} 
                            style={{ color: '#ede3ab', padding: '6px 4px', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.03em' }}
                          >
                            {data.name}
                          </Link>
                          <button
                            onClick={() => setMobileCountryOpen(mobileCountryOpen === key ? null : key)}
                            aria-label={`Toggle ${data.name} programs`}
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: 'none',
                              color: '#ffffff',
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              padding: '4px 10px',
                              borderRadius: '4px'
                            }}
                          >
                            {mobileCountryOpen === key ? '▴' : '▾'}
                          </button>
                        </div>
                        {mobileCountryOpen === key && (
                          <div style={{ paddingLeft: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px', background: 'rgba(0,0,0,0.22)', borderRadius: '6px', padding: '8px 10px', marginTop: '6px' }}>
                            {data.programs ? (
                              data.programs.map((p, idx) => (
                                <Link 
                                  key={idx} 
                                  to={p.link} 
                                  onClick={closeAll} 
                                  style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.82rem', padding: '4px 0', borderBottom: idx < data.programs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                                >
                                  {p.name}
                                </Link>
                              ))
                            ) : (
                              data.categories?.map((cat, cIdx) => (
                                <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '4px' }}>
                                  <span style={{ fontSize: '0.74rem', color: '#c7be8e', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{cat.name}:</span>
                                  {cat.programs.map((p, idx) => (
                                    <Link key={idx} to={p.link} onClick={closeAll} style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.82rem', padding: '3px 0 3px 8px' }}>
                                      {p.name}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PROGRAMS (GAP - YEAR) */}
              <Link 
                to="/gap-year" 
                onClick={closeAll} 
                style={{
                  color: '#ffffff',
                  padding: '10px 8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  letterSpacing: '0.04em',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                PROGRAMS (GAP - YEAR)
              </Link>

              {/* SCHOOL & GROUP TRIP */}
              <Link 
                to="/school-group" 
                onClick={closeAll} 
                style={{
                  color: '#ffffff',
                  padding: '10px 8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  letterSpacing: '0.04em',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                SCHOOL & GROUP TRIP
              </Link>

              {/* CONTACT */}
              <Link 
                to="/contact" 
                onClick={closeAll} 
                style={{
                  color: '#ffffff',
                  padding: '10px 8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  letterSpacing: '0.04em'
                }}
              >
                CONTACT
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
