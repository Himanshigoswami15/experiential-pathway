import React, { useState, useRef, useEffect } from 'react';
import { useAdminData } from '../context/AdminDataContext';

export default function HeroVideoManager({ showToast }) {
  const { data, updateHero } = useAdminData();
  const [form, setForm] = useState({
    videoUrl: data.hero.videoUrl || '',
    poster: data.hero.poster || '',
    headlineLine1: data.hero.headlineLine1 || 'EXPERIENCE',
    headlineAccent: data.hero.headlineAccent || 'SOUTH ASIA',
    headlineLine2: data.hero.headlineLine2 || 'THROUGH PURPOSE & ACTION',
    subheadline: data.hero.subheadline || '',
    fallbackUrls: [...(data.hero.fallbackUrls || [])]
  });

  const [previewMuted, setPreviewMuted] = useState(true);
  const [previewPlaying, setPreviewPlaying] = useState(true);
  const previewVideoRef = useRef(null);

  // Synchronize when data changes
  useEffect(() => {
    setForm({
      videoUrl: data.hero.videoUrl || '',
      poster: data.hero.poster || '',
      headlineLine1: data.hero.headlineLine1 || 'EXPERIENCE',
      headlineAccent: data.hero.headlineAccent || 'SOUTH ASIA',
      headlineLine2: data.hero.headlineLine2 || 'THROUGH PURPOSE & ACTION',
      subheadline: data.hero.subheadline || '',
      fallbackUrls: [...(data.hero.fallbackUrls || [])]
    });
  }, [data.hero]);

  // Video presets
  const videoPresets = [
    {
      title: 'India Expedition Video',
      url: 'https://experientialpathways.com/assets/india%20video-BqUeY7-T.mp4',
      localUrl: '/assets/india video-BqUeY7-T.mp4',
      poster: '/gallery/home-page/23_1.png',
      region: 'India'
    },
    {
      title: 'Nepal Mountain & Raft Video',
      url: 'https://experientialpathways.com/assets/nepalvideo_compress-BKG0amqc.mp4',
      localUrl: '/assets/nepalvideo_compress-BKG0amqc.mp4',
      poster: '/gallery/home-page/20.png',
      region: 'Nepal'
    },
    {
      title: 'Bhutan Himalayan Video',
      url: 'https://experientialpathways.com/assets/bhutan_compress-CccLzWC4.mp4',
      localUrl: '/assets/bhutan_compress-CccLzWC4.mp4',
      poster: '/gallery/india/24.png',
      region: 'Bhutan'
    },
    {
      title: 'Sri Lanka Coastal Video',
      url: 'https://experientialpathways.com/assets/srilanka_compress-CGoNqT_t.mp4',
      localUrl: '/assets/srilanka_compress-CGoNqT_t.mp4',
      poster: '/gallery/about-page/transform/cross-1.png',
      region: 'Sri Lanka'
    }
  ];

  const handleSelectPreset = (preset) => {
    setForm(prev => ({
      ...prev,
      videoUrl: preset.url,
      poster: preset.poster || prev.poster
    }));
    if (showToast) showToast(`Selected ${preset.title} preset!`);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateHero({
      videoUrl: form.videoUrl.trim(),
      poster: form.poster.trim(),
      headlineLine1: form.headlineLine1.trim(),
      headlineAccent: form.headlineAccent.trim(),
      headlineLine2: form.headlineLine2.trim(),
      subheadline: form.subheadline.trim(),
      fallbackUrls: form.fallbackUrls.filter(Boolean)
    });
    if (showToast) showToast('Hero section video and headline updated successfully!');
  };

  const togglePreviewPlay = () => {
    if (!previewVideoRef.current) return;
    if (previewVideoRef.current.paused) {
      previewVideoRef.current.play().catch(() => {});
      setPreviewPlaying(true);
    } else {
      previewVideoRef.current.pause();
      setPreviewPlaying(false);
    }
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title">
          <h1>Hero Section Video Manager</h1>
          <p>Change, preview, and customize the featured hero video and header display on the homepage.</p>
        </div>
        <button type="button" onClick={handleSave} className="adm-btn adm-btn-primary">
          <i className="bi bi-cloud-check-fill"></i> Save Hero Changes
        </button>
      </div>

      <div className="adm-grid-2">
        {/* Left Column: Live Video Player Preview */}
        <div>
          <div className="adm-card">
            <div className="adm-card-header">
              <h3><i className="bi bi-play-circle-fill text-warning"></i> Live Hero Preview</h3>
              <span className="adm-badge-count" style={{ background: '#10b981', color: '#fff' }}>
                {previewPlaying ? 'Playing' : 'Paused'}
              </span>
            </div>

            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)'
            }}>
              <video
                key={form.videoUrl}
                ref={previewVideoRef}
                src={form.videoUrl}
                poster={form.poster}
                autoPlay
                loop
                muted={previewMuted}
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={() => setPreviewMuted(!previewMuted)}
                title={previewMuted ? 'Unmute' : 'Mute'}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: previewMuted ? '#fff' : '#ffd166',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  zIndex: 10
                }}
              >
                <i className={`bi ${previewMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}></i>
              </button>

              {/* Play/Pause Overlay */}
              <button
                type="button"
                onClick={togglePreviewPlay}
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10
                }}
              >
                <i className={`bi ${previewPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                {previewPlaying ? 'Pause' : 'Play'}
              </button>
            </div>

            {/* Simulated Live Headline Display */}
            <div style={{
              marginTop: '1.25rem',
              padding: '1.25rem',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid var(--adm-border)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--adm-text-secondary)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
                Live Headline Preview
              </div>
              <h2 style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: '1.3rem',
                margin: '0 0 6px 0',
                color: 'var(--adm-text-primary)',
                lineHeight: 1.3
              }}>
                {form.headlineLine1}{' '}
                <span style={{ color: 'var(--adm-gold)', fontWeight: 800 }}>{form.headlineAccent}</span>{' '}
                {form.headlineLine2}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--adm-text-secondary)', margin: 0, lineHeight: 1.4 }}>
                {form.subheadline}
              </p>
            </div>
          </div>

          {/* Quick Preset Selector Cards */}
          <div className="adm-card">
            <div className="adm-card-header">
              <h3><i className="bi bi-collection-play-fill text-info"></i> Fast Presets from Assets</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--adm-text-secondary)', margin: '0 0 1rem 0' }}>
              Click any destination video preset to instantly set it as the active hero video:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {videoPresets.map((preset, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectPreset(preset)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: form.videoUrl === preset.url ? 'rgba(184, 134, 11, 0.1)' : '#ffffff',
                    border: form.videoUrl === preset.url ? '1px solid var(--adm-gold)' : '1px solid var(--adm-border)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: 'rgba(184, 134, 11, 0.12)',
                      color: 'var(--adm-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-camera-reels-fill"></i>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--adm-text-primary)' }}>{preset.title}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--adm-text-secondary)' }}>Region: {preset.region}</div>
                    </div>
                  </div>
                  {form.videoUrl === preset.url ? (
                    <span style={{ fontSize: '0.75rem', color: 'var(--adm-gold-dark)', fontWeight: 600 }}>Active</span>
                  ) : (
                    <button type="button" className="adm-btn adm-btn-secondary adm-btn-sm">
                      Apply
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Hero Video Settings Form */}
        <div>
          <form onSubmit={handleSave} className="adm-card">
            <div className="adm-card-header">
              <h3><i className="bi bi-gear-wide-connected text-warning"></i> Video &amp; Headline Settings</h3>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Primary Hero Video URL (MP4 / WebM / CDN)</label>
              <input
                type="text"
                className="adm-input"
                value={form.videoUrl}
                onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                placeholder="https://.../video.mp4 or /assets/video.mp4"
                required
              />
              <div className="adm-help-text">
                Direct URL to your active MP4 video file. You can enter a CDN link, uploaded video URL, or local path.
              </div>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Poster Image Fallback URL</label>
              <input
                type="text"
                className="adm-input"
                value={form.poster}
                onChange={(e) => setForm({ ...form, poster: e.target.value })}
                placeholder="/gallery/home-page/23_1.png"
              />
              <div className="adm-preset-pills">
                <span className="adm-preset-pill" onClick={() => setForm({ ...form, poster: '/gallery/home-page/23_1.png' })}>
                  Home 23_1.png
                </span>
                <span className="adm-preset-pill" onClick={() => setForm({ ...form, poster: '/gallery/india/24.png' })}>
                  India 24.png
                </span>
                <span className="adm-preset-pill" onClick={() => setForm({ ...form, poster: '/gallery/home-page/20.png' })}>
                  Nepal 20.png
                </span>
              </div>
            </div>

            <div style={{ height: '1px', background: 'var(--adm-border)', margin: '1.5rem 0' }}></div>

            <div className="adm-card-header" style={{ border: 'none', padding: 0, marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem' }}><i className="bi bi-type-h1"></i> Headline &amp; Subheadline Text</h3>
            </div>

            <div className="adm-grid-3" style={{ marginBottom: '1rem' }}>
              <div className="adm-form-group" style={{ margin: 0 }}>
                <label className="adm-label">Headline Prefix</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.headlineLine1}
                  onChange={(e) => setForm({ ...form, headlineLine1: e.target.value })}
                  placeholder="EXPERIENCE"
                />
              </div>

              <div className="adm-form-group" style={{ margin: 0 }}>
                <label className="adm-label">Gold Accent Text</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.headlineAccent}
                  onChange={(e) => setForm({ ...form, headlineAccent: e.target.value })}
                  placeholder="SOUTH ASIA"
                  style={{ color: '#d4af37', fontWeight: 'bold' }}
                />
              </div>

              <div className="adm-form-group" style={{ margin: 0 }}>
                <label className="adm-label">Headline Suffix</label>
                <input
                  type="text"
                  className="adm-input"
                  value={form.headlineLine2}
                  onChange={(e) => setForm({ ...form, headlineLine2: e.target.value })}
                  placeholder="THROUGH PURPOSE"
                />
              </div>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Subheadline Paragraph</label>
              <textarea
                className="adm-textarea"
                rows="3"
                value={form.subheadline}
                onChange={(e) => setForm({ ...form, subheadline: e.target.value })}
                placeholder="Description of journeys..."
              />
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                className="adm-btn adm-btn-secondary"
                onClick={() => setForm({
                  videoUrl: data.hero.videoUrl,
                  poster: data.hero.poster,
                  headlineLine1: data.hero.headlineLine1,
                  headlineAccent: data.hero.headlineAccent,
                  headlineLine2: data.hero.headlineLine2,
                  subheadline: data.hero.subheadline,
                  fallbackUrls: [...data.hero.fallbackUrls]
                })}
              >
                Reset Changes
              </button>
              <button type="submit" className="adm-btn adm-btn-primary">
                <i className="bi bi-check-circle-fill"></i> Save Hero Section
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
