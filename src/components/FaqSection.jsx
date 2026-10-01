import React, { useState } from 'react';

/**
 * FaqSection
 * Exact 1:1 match to reference screenshot and experientialpathways.com:
 * - Mountain landscape background (/gallery/home-page/23_1.png)
 * - Top wavy topological line (/gallery/home-page/13.png)
 * - Centered title: "FAQ'S - FREQUENTLY ASKED QUESTIONS" in deep olive serif
 * - 5 graduated warm-sand accordion items (#e9e5d6 -> #bdb490) with subtle drop shadows
 * - Smooth interactive accordion expansion with rotating "+" / "×" icon
 * - Bottom organic olive green hill cutout overlay (/gallery/home-page/20.png) with drop shadow, seamlessly joining the footer
 */
export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "How does Experiential Pathways organize school tours?",
      answer: "We work closely with schools to design customized itineraries that meet educational objectives."
    },
    {
      id: 2,
      question: "What should I consider when planning a school trip overseas with Experiential Pathways?",
      answer: "Consider the educational goals, student safety, budget, and cultural experiences you want to provide."
    },
    {
      id: 3,
      question: "Where can I go on a student trip with Experiential Pathways?",
      answer: "Our programs are designed for students of all ages, accompanied by trained educators and guides."
    },
    {
      id: 4,
      question: "What is service learning with Experiential Pathways?",
      answer: "Service learning combines community service with meaningful learning experiences."
    },
    {
      id: 5,
      question: "What programs do you offer at Experiential Pathways?",
      answer: "We offer gap year programs, cultural immersion, community service, and adventure travel."
    }
  ];

  const bgTints = [
    'rgb(233, 229, 214)', // #e9e5d6
    'rgb(224, 219, 197)', // #e0dbc5
    'rgb(214, 208, 180)', // #d6d0b4
    'rgb(204, 197, 163)', // #ccc5a3
    'rgb(189, 180, 144)'  // #bdb490
  ];

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      className="faq-section position-relative ep-faq-section"
      id="faq"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(to right, rgb(227, 224, 207), rgb(241, 245, 240))',
        backgroundImage: 'url("/gallery/home-page/18_1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
        paddingBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Top Wavy Topological Contour Line matching reference screenshot */}
      <img 
        src="/gallery/home-page/13.png" 
        alt="" 
        className="first-img position-absolute"
        style={{
          position: 'absolute',
          top: 'clamp(-4.5rem, -5.5vw, -3rem)',
          left: 0,
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
          display: 'block'
        }}
        onError={(e) => { e.target.src = 'gallery/home-page/13.png'; }}
      />

      {/* Main Content Container */}
      <div 
        className="faq-container"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
          padding: '0 1.25rem'
        }}
      >
        {/* Section Heading */}
        <h2 
          className="faq-heading"
          style={{
            fontFamily: "Georgia, 'Cinzel', serif",
            fontSize: 'clamp(1.75rem, 3.2vw, 2.7rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#3b3500',
            textAlign: 'center',
            letterSpacing: '0.04em',
            margin: '0 0 clamp(2.2rem, 3.8vw, 3rem) 0'
          }}
        >
          FAQ'S - FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* 5 Graduated Warm Sand Accordion Items */}
        <div 
          className="faq"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            const itemBg = bgTints[idx % bgTints.length];

            return (
              <div 
                key={item.id}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  backgroundColor: itemBg,
                  borderRadius: '10px',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.12)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: 'clamp(14px, 1.6vw, 18px) clamp(16px, 2.4vw, 24px)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: 'clamp(0.96rem, 1.15vw, 1.08rem)',
                      fontWeight: 700,
                      color: '#3b3500',
                      lineHeight: 1.35
                    }}
                  >
                    {item.question}
                  </span>

                  <span 
                    className="faq-icon"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 400,
                      color: '#3b3500',
                      lineHeight: 1,
                      display: 'inline-block',
                      transition: 'transform 0.28s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      flexShrink: 0
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div 
                    className="faq-answer"
                    style={{
                      padding: '0 clamp(16px, 2.4vw, 24px) clamp(14px, 1.6vw, 18px) clamp(16px, 2.4vw, 24px)',
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: '0.96rem',
                      lineHeight: 1.68,
                      color: '#3e3a2b',
                      borderTop: '1px solid rgba(59, 53, 0, 0.08)'
                    }}
                  >
                    <p style={{ margin: '10px 0 0 0' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Organic Olive Green Hill Cutout Overlay */}
      <img 
        src="/gallery/home-page/20.png" 
        alt="" 
        className="last-img"
        style={{
          width: '100%',
          height: 'auto',
          minHeight: '120px',
          objectFit: 'fill',
          display: 'block',
          marginTop: 'clamp(2.5rem, 4.5vw, 4rem)',
          marginBottom: '-3px',
          position: 'relative',
          zIndex: 2,
          filter: 'drop-shadow(0 -8px 22px rgba(45, 48, 25, 0.32))'
        }}
        onError={(e) => { e.target.src = 'gallery/home-page/20.png'; }}
      />
    </section>
  );
}
