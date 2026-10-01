import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SecondFeatureSection Component
 * Exactly reproduces the 4 cards from experientialpathways.com/index.html:
 * - 4 portrait rounded white cards with soft drop-shadow
 * - Direct 3D coin badge icons (11.png, 12.png, 10.png, 9.png)
 * - Exact serif typography and color (#756f4f)
 * - Exact titles and descriptions matching the reference webpage screenshot
 */
export default function SecondFeatureSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();

  const cardsData = [
    {
      img: '/gallery/home-page/11.png',
      alt: 'Explore Teen Travel Programs',
      title: 'Explore Teen Travel Programs',
      desc: 'Browse 80+ life-changing summer programs for high school students',
      link: '/school-group'
    },
    {
      img: '/gallery/home-page/12.png',
      alt: 'Flights & Travel Information',
      title: 'Flights & Travel Information',
      desc: 'Group flights, chaperoned travel, and logistics FAQ',
      link: '/school-group'
    },
    {
      img: '/gallery/home-page/10.png',
      alt: 'Program Pricing & Dates',
      title: 'Program Pricing & Dates',
      desc: "See costs, payment plans, and what's included in tuition.",
      link: '/school-group'
    },
    {
      img: '/gallery/home-page/9.png',
      alt: 'Safety Standards & 24/7 Supervision',
      title: 'Safety Standards & 24/7 Supervision',
      desc: 'Learn how experiential keeps students safe with industryleading protocols.',
      link: '/safety'
    }
  ];

  return (
    <section 
      className="ep-second-section tags"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 5
      }}
    >

      {/* 4 Cards Container */}
      <div 
        style={{
          position: 'relative',
          zIndex: 5,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem) clamp(3.5rem, 5vw, 5rem) clamp(1rem, 2vw, 2rem)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div 
          className="tag-cards"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 'clamp(18px, 2.2vw, 28px)',
            width: '100%',
            maxWidth: '1180px'
          }}
        >
          {cardsData.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                className="card"
                onClick={() => card.link && navigate(card.link)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: isHovered
                    ? '0 16px 28px rgba(0, 0, 0, 0.28), 0 4px 10px rgba(0, 0, 0, 0.08)'
                    : '0 10px 18px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.05)',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  padding: '32px 22px 28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  width: '250px',
                  maxWidth: '260px',
                  minWidth: '220px',
                  flex: '1 1 230px',
                  boxSizing: 'border-box',
                  border: 'none',
                  overflow: 'hidden'
                }}
              >
                {/* 3D Coin Badge Icon */}
                <img
                  src={card.img}
                  alt={card.alt}
                  width="70"
                  height="70"
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'contain',
                    display: 'block',
                    marginBottom: '10px',
                    transition: 'transform 0.28s ease',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onError={(e) => {
                    e.target.src = card.img.replace(/^\//, '');
                  }}
                />

                {/* Card Title */}
                <div
                  className="card-heading"
                  style={{
                    fontFamily: '"Times New Roman", Times, Georgia, serif',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    lineHeight: '1.25',
                    color: '#756f4f',
                    margin: '10px 0',
                    textAlign: 'center'
                  }}
                >
                  {card.title}
                </div>

                {/* Card Description */}
                <div
                  className="card-p"
                  style={{
                    fontFamily: '"Times New Roman", Times, Georgia, serif',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    color: '#5f5863',
                    margin: 0,
                    textAlign: 'center'
                  }}
                >
                  {card.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
