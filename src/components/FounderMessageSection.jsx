import React from 'react';

/**
 * FounderMessageSection
 * Exact 1:1 match to https://experientialpathways.com/index.html reference:
 * - think-part:
 *   - Float wavy contour line (.think-img-top: /gallery/home-page/13.png)
 *   - Landscape photo taking 70% width (.think-img: /gallery/home-page/25.png) with crisp rectangular framing
 *   - think-text (30% width) with "Message From" and "Our <br /> Founder" in Title Case serif typography (#756f4f)
 * - para-part:
 *   - Centered uppercase quote in "Times New Roman", Times, serif (#3b3500)
 *   - Signature: Sudarshan S. Deora (h4)
 *   - Flowing wavy line at bottom (.upper-image: /gallery/home-page/14.png)
 */
export default function FounderMessageSection() {
  return (
    <section 
      className="ep-founder-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        overflow: 'visible',
        marginTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)'
      }}
    >
      {/* 1. Think Part (70% Image on Left, 30% "Our Founder" on Right) */}
      <div 
        className="think-part"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '19px 0',
          position: 'relative',
          maxWidth: '1600px',
          margin: '0 auto'
        }}
      >
        {/* Floating Top Wavy Contour Line */}
        <img 
          src="/gallery/home-page/13.png" 
          alt="" 
          className="think-img-top"
          style={{
            position: 'absolute',
            top: '-15%',
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 3
          }}
          onError={(e) => { e.target.src = 'gallery/home-page/13.png'; }}
        />

        {/* 70% Wide Landscape Photo */}
        <img 
          src="/gallery/home-page/25.png" 
          alt="Experiential Pathways Landscape" 
          className="think-img"
          style={{
            width: '70%',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)'
          }}
          onError={(e) => { e.target.src = 'gallery/home-page/25.png'; }}
        />

        {/* 30% Right Text: "Message From" & "Our <br /> Founder" */}
        <div 
          className="think-text"
          style={{
            width: '30%',
            padding: '0 clamp(10px, 2vw, 30px)',
            textAlign: 'center',
            color: '#756f4f',
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden'
          }}
        >
          <p 
            style={{
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontSize: 'clamp(1.2rem, 1.8vw, 25px)',
              marginBottom: '-8px',
              color: '#756f4f',
              fontWeight: 400
            }}
          >
            Message From
          </p>

          <h2 
            style={{
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontSize: 'clamp(3.8rem, 7.5vw, 7.5rem)',
              lineHeight: 'clamp(4rem, 7.8vw, 8rem)',
              fontWeight: 700,
              color: '#756f4f',
              margin: 0,
              letterSpacing: '-0.01em'
            }}
          >
            Our <br />
            Founder
          </h2>
        </div>
      </div>

      {/* 2. Paragraph Part (Centered Quote & Founder Name) */}
      <div 
        className="para-part"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(1.5rem, 3.5vw, 3rem) clamp(1rem, 7vw, 8rem)',
          margin: '1.5rem auto 0 auto',
          maxWidth: '1440px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <p 
          style={{
            textAlign: 'center',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            fontSize: 'clamp(1.1rem, 1.7vw, 28px)',
            color: '#3b3500',
            lineHeight: 1.45,
            textTransform: 'uppercase',
            maxWidth: '1280px',
            margin: '0 auto 1.5rem auto',
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}
        >
          “Thoughtful reflections and heartfelt perspectives from our founder, principals, and educators who have seen how these journeys shape students’ confidence, character, and learning. Their experiences highlight the value of experiential travel, meaningful community engagement, and the lasting impact these programs have on young minds and the wider school community.”
        </p>

        {/* Wavy Upper Image floating between quote and signature */}
        <img 
          src="/gallery/home-page/14.png" 
          alt="" 
          className="upper-image"
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: 0,
            width: '100%',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1
          }}
          onError={(e) => { e.target.src = 'gallery/home-page/14.png'; }}
        />

        <div 
          className="wrap"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1.2rem',
            position: 'relative',
            zIndex: 4
          }}
        >
          <h4 
            style={{
              textAlign: 'center',
              color: '#3b3500',
              fontSize: 'clamp(1.5rem, 2.2vw, 34px)',
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontWeight: 700,
              margin: 0
            }}
          >
            Sudarshan S. Deora
          </h4>
        </div>
      </div>

      {/* Responsive Breakpoint Matching Live Site */}
      <style>{`
        @media (max-width: 991px) {
          .think-part {
            flex-direction: column !important;
            align-items: center !important;
          }
          .think-img {
            width: 100% !important;
          }
          .think-text {
            width: 100% !important;
            padding: 1.5rem 0 0 0 !important;
            text-align: center !important;
          }
          .think-text h2 {
            font-size: clamp(3.2rem, 12vw, 5.5rem) !important;
            line-height: clamp(3.5rem, 13vw, 5.8rem) !important;
          }
          .para-part {
            padding: 1.5rem 1rem !important;
            margin: 1rem 0 !important;
          }
          .para-part p {
            font-size: clamp(1rem, 3.5vw, 1.25rem) !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </section>
  );
}
