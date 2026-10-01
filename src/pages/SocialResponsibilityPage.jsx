import React from 'react';
import FaqSection from '../components/FaqSection';

const socialPillars = [
  {
    title: "CORPORATE SOCIAL RESPONSIBILITY (CSR)",
    text: "At Experiential Pathways, we are committed to building an energy that guides our operations and ensures that we conduct our activities in a socially responsible manner. We believe in transparent and ethical practices, and we work with stakeholders to ensure socially responsible practices for community people. Our commitment is in every aspect. We're flexible and show sensitivity to social and culture and environmental based a single our work align with sustainable practice that promote.",
    img: "/gallery/about-page/social-responsibility/cross-1.png"
  },
  {
    title: "SUSTAINABLE PARTNERSHIPS FOR RESPONSIBLE TRAVEL",
    text: "You are not just taking a trip anymore. This is partnership style, a share connection about, sustainable where we can contribute to something positive that matters. Your money and decisions on this trip result. With the sustainable travel approach we share, we are and destinations. We are designing travel program for you to design your experience. This is also a part of how we build that relationship, bringing our partners together for impact and make connections more engaging.",
    img: "/gallery/about-page/social-responsibility/cross-2.png"
  },
  {
    title: "CREATING POSITIVE CHANGE THROUGH SUSTAINABLE TRAVEL",
    text: "At Experiential Pathways, our relationship with people for creating positive change. Our travel is not just making an eco-travel in an impact it can also when a travel is able to social and environmental and protect the land using involved in training of clients and the journey. Together, we are like new learning people to spend, this is the travel to respond to development sustainable experience in a real connecting, growing experience. this nature on what a sustainable and a sustainable world.",
    img: "/gallery/about-page/social-responsibility/cross-3.png"
  }
];

export default function SocialResponsibilityPage() {
  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: '#4a4632', backgroundColor: '#F8F7F4' }}>
      {/* ===== Hero Section matching experientialpathways.com/social.html ===== */}
      <section 
        className="hero-section about-subpage pb-5"
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: 'url("/gallery/india/24.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)'
        }}
      >
        <img 
          className="w-100" 
          src="/gallery/about-page/social-responsibility/Erwachsene.jpg.jpeg" 
          alt="Social Responsibility at Experiential Pathways" 
          style={{
            width: '100%',
            maxHeight: 'clamp(280px, 48vw, 680px)',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            display: 'block'
          }}
          onError={(e) => { e.target.src = 'gallery/about-page/social-responsibility/Erwachsene.jpg.jpeg'; }}
        />

        <div 
          className="container"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 5vw, 4rem) 1.25rem 0'
          }}
        >
          <div className="row">
            <div className="col-12" style={{ textAlign: 'center' }}>
              <h1 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: 'clamp(2rem, 4.4vw, 4.25rem)',
                  color: '#5d5721',
                  textAlign: 'center',
                  fontVariant: 'small-caps',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: '0 0 0.5rem 0'
                }}
              >
                SOCIAL RESPONSIBILITY AT
              </h1>
              <h1 
                className="mb-5"
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: 'clamp(2rem, 4.4vw, 4.25rem)',
                  color: '#5d5721',
                  textAlign: 'center',
                  fontVariant: 'small-caps',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: '0 0 clamp(2rem, 3.5vw, 3rem) 0'
                }}
              >
                EXPERIENTIAL PATHWAYS
              </h1>
              <p 
                className="text-center mx-lg-5 px-lg-5 mx-md-3 px-md-3 mx-sm-1 px-sm-1"
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  color: '#5d5721',
                  fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
                  lineHeight: 1.75,
                  maxWidth: '1050px',
                  margin: '0 auto',
                  textAlign: 'center'
                }}
              >
                At Experiential Pathways, we are deeply committed to a strong ethical framework that guides our operations and ensures that we conduct business in a socially responsible and sustainable manner. We believe in open, transparent communication with all our stakeholders—whether it's our valued customers, dedicated staff, local hotels, homestays, NGOs, or adventure partners across our travel destinations. This open dialogue is key to ensuring that our commitment to social responsibility is embedded in everything we do. We strive to operate with sensitivity to social, cultural, economic, and environmental issues, ensuring our work aligns with sustainable practices that promote responsible travel and positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Alternating Cross-Section matching social.html ===== */}
      <section 
        className="p-3" 
        style={{
          background: 'linear-gradient(to right, rgb(227, 224, 207), rgb(241, 245, 240))',
          padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1rem, 3vw, 2.5rem)'
        }}
      >
        <div 
          className="container-fluid m-auto cross-container"
          style={{
            maxWidth: '1240px',
            margin: '0 auto'
          }}
        >
          {socialPillars.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div 
                key={idx}
                className={`cross cross-row cross-${idx}`}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'clamp(2rem, 5vw, 4.5rem)',
                  margin: 'clamp(2.5rem, 5vw, 4.5rem) auto',
                  flexWrap: 'wrap'
                }}
              >
                {/* Content Column */}
                <div 
                  className="cross-content p-lg-3 p-md-1 p-sm-1"
                  style={{
                    flex: '1 1 480px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                  }}
                >
                  <h2 
                    style={{
                      fontFamily: "'Cinzel', Georgia, serif",
                      fontSize: 'clamp(1.3rem, 2vw, 1.85rem)',
                      color: 'rgb(59, 53, 0)',
                      fontWeight: 900,
                      letterSpacing: '0.06em',
                      lineHeight: 1.3,
                      marginBottom: '1rem'
                    }}
                  >
                    {item.title}
                  </h2>
                  <p 
                    style={{
                      fontFamily: "'Crimson Text', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
                      color: 'rgb(93, 87, 33)',
                      lineHeight: 1.8,
                      margin: 0
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Image Column */}
                <div 
                  className="cross-img"
                  style={{
                    flex: '1 1 400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{
                      width: '100%',
                      maxWidth: '460px',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      display: 'block'
                    }}
                    onError={(e) => { 
                      e.target.src = item.img.replace(/^\//, ''); 
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Sub-Section Banner */}
          <div 
            className="cross sub-section"
            style={{
              maxWidth: '960px',
              margin: 'clamp(3.5rem, 6vw, 5rem) auto 1.5rem auto',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className="sub-section-content" style={{ width: '100%' }}>
              <h2 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: 'clamp(1.35rem, 2.3vw, 2.1rem)',
                  color: 'rgb(59, 53, 0)',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  margin: '0 0 0.35rem 0',
                  lineHeight: 1.3
                }}
              >
                OUR EFFORTS GO BEYOND JUST OFFERING
              </h2>
              <h2 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: 'clamp(1.35rem, 2.3vw, 2.1rem)',
                  color: 'rgb(59, 53, 0)',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  margin: '0 0 1.25rem 0',
                  lineHeight: 1.3
                }}
              >
                SUSTAINABLE TRAVEL EXPERIENCES—
              </h2>
              <p 
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
                  color: 'rgb(93, 87, 33)',
                  lineHeight: 1.85,
                  margin: '0 auto',
                  maxWidth: '920px'
                }}
              >
                we aim to inspire others in the industry to follow suit, proving that its possible while creating a global impact. Just promoting sustainable, Social connection and less is our our core value. Join us on a transformative journey. At Experiential Pathways, we are committed to lead the way in sustainable travel and social responsibility, making a positive impact on the communities. Whether you are embarking on a gap year adventure or student travel program, you'll be part of a movement that supports responsible travel and strives to create a better, more sustainable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section matching reference structure ===== */}
      <FaqSection />

      {/* Responsive Styles matching about-subpage.css */}
      <style>{`
        @media (max-width: 900px) {
          .cross-row {
            flex-direction: column !important;
            margin: 2.5rem auto !important;
            gap: 1.75rem !important;
          }
          .cross-content {
            width: 100% !important;
          }
          .cross-img {
            width: 100% !important;
          }
          .cross-img img {
            max-width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
}
