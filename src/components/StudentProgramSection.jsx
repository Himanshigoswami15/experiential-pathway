import React, { useState } from 'react';

/**
 * StudentProgramSection
 * 1:1 match to reference screenshot and experientialpathways.com:
 * - Full watercolor background texture (/gallery/home-page/22.png)
 * - Centered title: "Customizable Student Travel Programs Designed for Schools"
 * - Subtitle: "Gap Year | Cultural Immersion | Community Service | Outdoor Learning"
 * - Complete narrative paragraph in Georgia serif
 * - Dark olive rounded pill bar with 4 stages: Program Design, Pre-Departure Phase, Travel Phase, Post-Travel Phase
 * - 4 elegantly styled cards with subtle top beige-gold gradient, circular/line icons, bold titles, and comprehensive descriptions
 */
export default function StudentProgramSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const programTabs = [
    { id: 0, img: '/gallery/home-page/8.png', title: 'Program Design' },
    { id: 1, img: '/gallery/home-page/7.png', title: 'Pre-Departure Phase' },
    { id: 2, img: '/gallery/home-page/6.png', title: 'Travel Phase' },
    { id: 3, img: '/gallery/home-page/5.png', title: 'Post-Travel Phase' }
  ];

  const cardsData = [
    {
      img: '/gallery/home-page/4.png',
      title: 'Health and Safety',
      desc: 'At Experiential Pathways, the health and safety of our participants are our top priorities. Our experienced guides and educators are extensively trained to provide impactful, culturally relevant experiential learning programs. From gap year programs to student travel across India, Bhutan, Nepal, Sri Lanka, and South Asia, we implement rigorous safety measures to ensure every journey is enriching and secure.'
    },
    {
      img: '/gallery/home-page/3.png',
      title: 'Thriving Network',
      desc: 'With a thriving network, dedicated experts, and innovative programs, Experiential Pathways ensures every student travel and gap year program is exceptional. Our exclusive experiential learning journeys across India, Bhutan, Nepal, Sri Lanka, and South Asia are tailored to provide unique and personalized experiences, as we never combine groups, making each trip truly one-of-a-kind.'
    },
    {
      img: '/gallery/home-page/2.png',
      title: 'Enriched Travel Experience',
      desc: 'Discover the essence of cultural immersion with Experiential Pathways, where our gap year programs, teen travel, and student travel journeys are designed to inspire. Enjoy exclusive access to local events, fairs, and festivals in India, Bhutan, Nepal, Sri Lanka, and South Asia, enhancing your experiential learning adventure. Our personalized programs ensure every traveler experiences meaningful connections and unforgettable moments.'
    },
    {
      img: '/gallery/home-page/1.png',
      title: 'Travel with Experts',
      desc: 'Experience destinations like never before with Experiential Pathways. Our team of dedicated travel experts brings in-depth knowledge and a unique understanding of India, Bhutan, Nepal, Sri Lanka, and South Asia, offering a fresh, insider perspective. Through our carefully designed gap year programs, teen travel, and student travel experiences, we blend experiential learning with immersive cultural connections, making every journey truly unforgettable.'
    }
  ];

  return (
    <section 
      className="ep-student-program-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        padding: 'clamp(3.5rem, 5.5vw, 5.5rem) clamp(1.25rem, 3.5vw, 3rem)',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* ==================== HEADING & SUBTITLE ==================== */}
        <div style={{ maxWidth: '1180px', margin: '0 auto 1.2rem auto' }}>
          <h2 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(2rem, 3.3vw, 3.15rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              color: '#837b51',
              margin: '0 0 0.85rem 0',
              letterSpacing: '-0.01em'
            }}
          >
            Customizable Student Travel Programs Designed for Schools
          </h2>

          <p 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(1.1rem, 1.45vw, 1.35rem)',
              color: '#89825b',
              fontWeight: 500,
              margin: '0 0 1.8rem 0',
              letterSpacing: '0.01em'
            }}
          >
            Gap Year | Cultural Immersion | Community Service | Outdoor Learning
          </p>
        </div>

        {/* ==================== COMPREHENSIVE NARRATIVE ==================== */}
        <div style={{ maxWidth: '1220px', margin: '0 auto clamp(2.5rem, 4.5vw, 3.8rem) auto' }}>
          <p 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(0.96rem, 1.12vw, 1.06rem)',
              lineHeight: 1.88,
              color: '#656048',
              margin: 0,
              fontWeight: 400
            }}
          >
            At Experiential Pathways, we understand that every school group is unique, with its own learning
            goals, interests, and travel requirements. That’s why we offer fully customizable student travel programs,
            including gap year programs, cultural immersion experiences, and experiential learning journeys tailored
            specifically to your group’s objectives. Our experienced Group Travel Coordinators work closely with
            schools and educational institutions to design personalized itineraries that fit your schedule, budget,
            and educational outcomes. Whether it’s a week-long trip or a long-term gap year program, we ensure each
            journey is meaningful, safe, and educational. Organizing a school group tour can feel overwhelming but
            with our streamlined, stress-free process, you’re never alone. From the initial consultation to post-trip
            feedback, our team supports you every step of the way. Whether you’re planning a community service
            project in Nepal, a cultural tour in India, or an outdoor adventure in Bhutan or Sri Lanka, Experiential
            Pathways ensures high-quality planning, complete safety, and unforgettable student experiences.
          </p>
        </div>

        {/* ==================== OLIVE PILL TABS BAR ==================== */}
        <div 
          className="ep-program-tabs-bar"
          style={{
            backgroundColor: '#756f4f',
            borderRadius: '15px',
            padding: '14px clamp(20px, 3.5vw, 55px)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1.8rem, 5vw, 85px)',
            maxWidth: '1080px',
            width: '100%',
            margin: '0 auto clamp(2.5rem, 4vw, 3.2rem) auto',
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.28), 0 4px 8px rgba(0, 0, 0, 0.15)',
            flexWrap: 'wrap'
          }}
        >
          {programTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 6px',
                  borderRadius: '10px',
                  transition: 'all 0.25s ease',
                  opacity: isActive ? 1 : 0.94,
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)'
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.opacity = '1'; 
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.opacity = isActive ? '1' : '0.94'; 
                  e.currentTarget.style.transform = isActive ? 'translateY(-2px)' : 'translateY(0)';
                }}
              >
                {/* Circular Icon with Authentic Cast Drop-Shadow */}
                <img 
                  src={tab.img} 
                  alt="" 
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.42))'
                  }}
                  onError={(e) => { e.target.src = tab.img.replace(/^\//, ''); }}
                />

                {/* Delicate Serif Heading Underneath */}
                <span 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(1.05rem, 1.3vw, 1.3rem)',
                    fontWeight: 400,
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.22)',
                    marginTop: '2px'
                  }}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==================== 4 FEATURE CARDS (BOXES) ==================== */}
        <div 
          className="ep-program-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '1340px',
            margin: '0 auto',
            alignItems: 'stretch'
          }}
        >
          {cardsData.map((card, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: 'linear-gradient(180deg, #d3cbb0 0%, #ede8d9 36%, #ffffff 76%, #ffffff 100%)',
                  borderRadius: '15px',
                  padding: '28px 20px 32px 20px',
                  boxShadow: isHovered 
                    ? '0 18px 32px rgba(0, 0, 0, 0.32), 0 6px 12px rgba(0, 0, 0, 0.16)' 
                    : '0 10px 18px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.12)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.65)'
                }}
              >
                {/* Circular Icon Outline */}
                <div style={{ marginBottom: '18px' }}>
                  <img 
                    src={card.img} 
                    alt={card.title}
                    style={{
                      width: '76px',
                      height: '76px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => { e.target.src = card.img.replace(/^\//, ''); }}
                  />
                </div>

                {/* Card Title */}
                <h3 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(1.25rem, 1.4vw, 1.42rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#3b3500',
                    margin: '0 0 14px 0',
                    maxWidth: idx === 2 ? '220px' : 'none'
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p 
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '0.88rem',
                    lineHeight: 1.62,
                    color: '#4a4637',
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 1199px) and (min-width: 768px) {
          .ep-program-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .ep-program-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .ep-program-tabs-bar {
            flex-direction: column !important;
            gap: 1.2rem !important;
            padding: 16px 20px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
