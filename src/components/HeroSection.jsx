import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * HeroSection Component
 * - Video covers 100% of the rounded frame edge-to-edge (JJ Elevate single frame style)
 * - Scaled to eliminate all letterboxing and ripped paper margins
 * - Top-right sound toggle button directly on the video
 * - High-impact 3-line headline with bold, high-contrast NOTEWORTHY accent color that suits the olive palette perfectly
 */
export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Toggle Video Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Sound
  const toggleSound = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section className="ep-hero-section" style={{
      position: 'relative',
      paddingTop: 'clamp(5.2rem, 8vw, 6.5rem)',
      paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
      backgroundColor: '#eae6d9',
      backgroundImage: 'url("/gallery/home-page/23_1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 1.5rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>

        {/* 1. Single Edge-to-Edge Video Showcase Frame (JJ Elevate Style) */}
        <div 
          onClick={togglePlay}
          className="ep-video-frame-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '880px',
            aspectRatio: '16 / 9',
            maxHeight: '420px',
            borderRadius: 'clamp(1rem, 2.5vw, 2.25rem)',
            overflow: 'hidden',
            backgroundColor: '#1c1b14',
            boxShadow: '0 24px 60px -10px rgba(58, 52, 0, 0.3)',
            border: '3px solid #ede3ab',
            marginBottom: 'clamp(1.5rem, 3.5vw, 2.8rem)',
            cursor: 'pointer',
            transition: 'transform 0.35s ease, box-shadow 0.35s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.008)';
            e.currentTarget.style.boxShadow = '0 32px 70px -12px rgba(58, 52, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 24px 60px -10px rgba(58, 52, 0, 0.3)';
          }}
        >
          {/* Video covering 100% of the frame with zoom to crop out any borders/torn paper */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.25)',
              transformOrigin: 'center center',
              display: 'block'
            }}
          >
            <source src="/assets/india video-BqUeY7-T.mp4" type="video/mp4" />
            <source src="/assets/nepalvideo_compress-BKG0amqc.mp4" type="video/mp4" />
            <source src="/assets/bhutan_compress-CccLzWC4.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>

          {/* Top-Right Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            title={isMuted ? "Unmute audio" : "Mute audio"}
            style={{
              position: 'absolute',
              top: '1.1rem',
              right: '1.25rem',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(58, 52, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(237, 227, 171, 0.75)',
              color: isMuted ? '#ffffff' : '#ffd166',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              fontSize: '1.15rem',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <i className={`bi ${isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}></i>
          </button>

          {/* Pause Overlay with Clean Play Badge */}
          {!isPlaying && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(28, 27, 20, 0.5)',
              backdropFilter: 'blur(2px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              color: '#ffffff',
              zIndex: 15
            }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#ede3ab',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                transition: 'transform 0.25s ease'
              }}>
                <i className="bi bi-play-fill" style={{ fontSize: '2.6rem', color: '#3a3400', marginLeft: '4px' }}></i>
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ede3ab' }}>
                Click to Play
              </span>
            </div>
          )}
        </div>

        {/* 2. Bold High-Impact Headline with High-Contrast Harmonious Accent Color */}
        <div style={{ maxWidth: '960px', marginBottom: '1.4rem' }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.45rem, 4.8vw, 4.3rem)',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            margin: 0
          }}>
            <span style={{ display: 'block', color: '#3a3400' }}>
              EXPERIENTIAL LEARNING FOR
            </span>
            <span style={{ 
              display: 'block', 
              color: '#3a3400', 
              letterSpacing: '-0.01em'
            }}>
              NOTEWORTHY
            </span>
            <span style={{ display: 'block', color: '#3a3400' }}>
              STUDENT JOURNEYS
            </span>
          </h1>
        </div>

        {/* 3. Subtext */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(0.92rem, 1.25vw, 1.25rem)',
          lineHeight: 1.65,
          color: '#3d3725',
          maxWidth: '780px',
          margin: '0 auto clamp(1.4rem, 2.5vw, 2.2rem) auto',
          fontWeight: 500
        }}>
          We design immersive cultural expeditions, gap year adventures, and service-learning pathways across India, Nepal, Bhutan, and Sri Lanka to inspire lifelong global leadership.
        </p>

        {/* 4. Action CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.85rem',
          flexWrap: 'wrap',
          marginBottom: '0'
        }}>
          <Link
            to="/school-group"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: 'clamp(11px, 2.2vw, 14px) clamp(22px, 3.5vw, 34px)',
              backgroundColor: '#3a3400',
              color: '#ffffff',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: 'clamp(0.88rem, 1vw, 1rem)',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              boxShadow: '0 12px 30px rgba(58, 52, 0, 0.25)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5d5721';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3a3400';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Programs <i className="bi bi-arrow-up-right" style={{ color: '#ede3ab' }}></i>
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(11px, 2.2vw, 14px) clamp(22px, 3.5vw, 34px)',
              backgroundColor: '#ffffff',
              color: '#3a3400',
              border: '2px solid #3a3400',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: 'clamp(0.88rem, 1vw, 1rem)',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3a3400';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(58, 52, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#3a3400';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
            }}
          >
            Plan Your Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
