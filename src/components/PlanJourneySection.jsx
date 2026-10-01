import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * PlanJourneySection
 * Exact 1:1 reproduction of the reference screenshot and https://experientialpathways.com/:
 * - Upper heading with watercolor mountain landscape background (/gallery/home-page/23_1.png)
 * - Authentic organic swooping olive green hill overlay (/gallery/home-page/20.png)
 * - Centered "PLAN YOUR JOURNEY" in Cinzel serif with subtitle and animated "Dive into the details below ↓"
 * - Lower section seamlessly continuing the rich olive green backdrop (#756f4e)
 * - 6 elegant white cards in a responsive 3-column desktop grid with subtle hover lift and smooth transitions
 */
export default function PlanJourneySection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const journeyCards = [
    {
      title: 'Discover Your Ideal Journey',
      desc: 'Answer a few quick questions to match your interests and age with the perfect student travel program.',
      link: '/contact'
    },
    {
      title: 'Student Travel Awards & Support',
      desc: 'Explore available scholarships and financial assistance that help make meaningful travel opportunities accessible to more students.',
      link: '/contact'
    },
    {
      title: 'Guided Group Air Travel',
      desc: 'Chaperoned group flights with dedicated staff support from departure to return.',
      link: '/contact'
    },
    {
      title: 'Student Safety Plans',
      desc: '24/7 supervision with clear emergency protocols and comprehensive safety measures.',
      link: '/health'
    },
    {
      title: 'Essential Travel Paperwork',
      desc: 'Easy guidance on passports, visas, health requirements, and travel documentation.',
      link: '/contact'
    },
    {
      title: 'Gap Year Programs',
      desc: 'Explore semester and year-long adventures designed for travel before or during college.',
      link: '/gap-year'
    }
  ];

  return (
    <section 
      className="ep-plan-journey-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        paddingTop: 'clamp(2.5rem, 4.5vw, 4rem)',
        overflow: 'visible'
      }}
    >
      {/* =========================================================================
          UPPER HEADING AREA: Centered Editorial Heading on Continuous Paper
          ========================================================================= */}
      <div 
        className="ep-plan-heading-area"
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(1.5rem, 3vw, 2.5rem) 1.5rem clamp(2.5rem, 4vw, 3.5rem) 1.5rem'
        }}
      >
        <div 
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Main Title: PLAN YOUR JOURNEY */}
          <h2 
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: 'clamp(2.4rem, 5.2vw, 4.3rem)',
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#3d4016',
              margin: '0 0 0.85rem 0'
            }}
          >
            PLAN YOUR JOURNEY
          </h2>

          {/* Subtitle */}
          <p 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(1rem, 1.35vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#5c5738',
              maxWidth: '740px',
              margin: '0 0 1.4rem 0',
              fontWeight: 500
            }}
          >
            Everything you need to choose the right trip from safety to flights <br className="d-none d-sm-block" />
            to scholarships.
          </p>

          {/* Dive into details callout */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              fontFamily: "'Cinzel', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#756f4e',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.12rem)'
            }}
          >
            <span>Dive into the details below</span>
            <span style={{ fontSize: '1.6rem', lineHeight: 1, marginTop: '2px' }}>
              ↓
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LOWER CARDS AREA: Flowing Seamlessly on Continuous Handmade Paper
          ========================================================================= */}
      <div 
        className="ep-plan-cards-container"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'transparent',
          padding: '0 clamp(1.25rem, 3.5vw, 3rem) clamp(4.5rem, 6.5vw, 6.5rem) clamp(1.25rem, 3.5vw, 3rem)'
        }}
      >
        <div 
          style={{
            maxWidth: '1260px',
            margin: '0 auto'
          }}
        >
          {/* 6-Card Responsive Grid */}
          <div 
            className="ep-plan-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              alignItems: 'stretch'
            }}
          >
            {journeyCards.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isDarkCard = idx % 2 === 1;

              return (
                <Link
                  key={idx}
                  to={card.link}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    backgroundColor: isDarkCard 
                      ? (isHovered ? '#443f1b' : '#3d3817') 
                      : '#ffffff',
                    borderRadius: '18px',
                    padding: 'clamp(2.2rem, 3.2vw, 3rem) clamp(1.8rem, 2.5vw, 2.4rem)',
                    boxShadow: isHovered 
                      ? '0 18px 38px -6px rgba(45, 48, 25, 0.18)' 
                      : (isDarkCard ? '0 8px 24px -4px rgba(45, 48, 25, 0.15)' : '0 8px 22px -4px rgba(45, 48, 25, 0.07)'),
                    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textDecoration: 'none',
                    height: '100%',
                    border: isDarkCard 
                      ? (isHovered ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.08)')
                      : (isHovered ? '1.5px solid rgba(115, 109, 63, 0.35)' : '1px solid rgba(115, 109, 63, 0.16)')
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: "'Cinzel', Georgia, serif",
                      fontSize: 'clamp(1.22rem, 1.45vw, 1.42rem)',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: isDarkCard ? '#ffffff' : '#3a3400',
                      margin: '0 0 1.1rem 0'
                    }}
                  >
                    {card.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      color: isDarkCard ? 'rgba(255, 255, 255, 0.92)' : '#524d3e',
                      margin: 0,
                      fontWeight: 400
                    }}
                  >
                    {card.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 992px) {
          .ep-plan-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 640px) and (max-width: 991px) {
          .ep-plan-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .ep-plan-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
