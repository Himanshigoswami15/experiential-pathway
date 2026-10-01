import React from 'react';
import FaqSection from '../components/FaqSection';

const healthSections = [
  {
    title: "ENSURING HEALTH AND SAFETY",
    text: "The health and safety of our participants is at the core of everything we do. Our team of experienced guides and educators have extensive training in order to deliver impactful, safe, and culturally relevant programming. We prioritize Student Travel Safety by implementing comprehensive risk management strategies, ensuring secure accommodations, and providing 24/7 support. We employ the following measures to ensure the health and safety of our participants remains at the forefront of everything that we do.",
    img: "/gallery/about-page/health/cross-1.jfif"
  },
  {
    title: "EXCEPTIONAL PROGRAM LEADERS",
    text: "We employ top-notch program leaders from diverse backgrounds, including outdoor educators, teachers, doctors, culinary experts, psychologists, paramedics, and more. Each brings unique skills and perspectives, enriching our trips. All leaders undergo comprehensive training covering our company's stringent policies and procedures. Additionally, they hold valid First Aid and CPR certificates, and many have Wilderness First Responder/Wilderness First Aid certifications, equipping them to handle emergencies in remote areas.",
    img: "/gallery/about-page/health/cross-2.jfif"
  },
  {
    title: "PROVEN PARTNERS",
    text: "We collaborate with partners who prioritize safety. Our rigorous assessments of facilities, personnel, and safety equipment ensure high standards. We maintain close relationships with hotels and vendors through regular visits and constant communication. Our community partners are like family, working together to enhance operations and provide the best experiences for travelers.",
    img: "/gallery/about-page/health/cross-3.jfif"
  },
  {
    title: "RISK MANAGEMENT",
    text: "We develop detailed risk management and evacuation plans for every program and session, continually updating protocols and contacts. We stay informed through local, national, and international authorities to assess and mitigate risks. We adapt plans and itineraries as needed, relying on local knowledge and maintaining constant vigilance. For remote areas, our staff are equipped with satellite phones for emergencies and daily check-ins, and every program includes medical kits with essential first aid supplies, including epinephrine for anaphylactic shock.",
    img: "/gallery/about-page/health/cross-4.jfif"
  },
  {
    title: "RISK MANAGEMENT COVID-19 SAFE TRAVEL",
    text: "We take the COVID-19 pandemic seriously, dedicating significant efforts to ensure our programs are COVID-safe. We monitor state and national guidelines, adhering to health department recommendations. COVID-safe plans and policies are shared with clients before travel.",
    img: "/gallery/about-page/health/cross-5.jfif"
  },
  {
    title: "CHILD PROTECTION POLICY",
    text: "All staff have relevant Working With Children Checks and are trained on our child protection policy to meet Australian Child Safe Standards. We understand the trust placed in us for youth development through experiential learning. While inherent risks exist, we prioritize the safety and protection of every student. From our Director to Program Leaders, we treat each student with care, providing a safe and supportive environment for personal growth.",
    img: "/gallery/about-page/health/cross-6.jfif"
  }
];

export default function HealthSafetyPage() {
  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: '#4a4632', backgroundColor: '#F8F7F4' }}>
      {/* ===== Hero Section: Mountain Rhododendron Panorama with Curved Cutout ===== */}
      <section 
        className="hero-section about-subpage position-relative"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#eae5d8'
        }}
      >
        <img 
          src="/gallery/about-page/health/hero.png" 
          alt="Health & Safety Hero" 
          style={{
            width: '100%',
            maxHeight: 'clamp(260px, 46vw, 620px)',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block'
          }}
          onError={(e) => { e.target.src = 'gallery/about-page/health/hero.png'; }}
        />
        
        {/* Centered Title Overlay matching reference */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.5rem',
            zIndex: 2,
            background: 'rgba(0, 0, 0, 0.15)'
          }}
        >
          <h1 
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: 0,
              textShadow: '2px 3px 8px rgba(0, 0, 0, 0.7)'
            }}
          >
            HEALTH & SAFETY
          </h1>
        </div>
      </section>

      {/* ===== Alternating Cross-Section: 6 Pillars of Health & Safety ===== */}
      <section 
        style={{
          background: 'linear-gradient(to right, rgb(227, 224, 207), rgb(241, 245, 240))',
          padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1rem, 4vw, 2.5rem)'
        }}
      >
        <div 
          className="container health m-auto cross-container"
          style={{
            maxWidth: '1240px',
            margin: '0 auto'
          }}
        >
          {healthSections.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div 
                key={idx}
                className={`cross-row cross-${idx}`}
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
                  className="cross-content"
                  style={{
                    flex: '1 1 480px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                  }}
                >
                  <h2 
                    className="section-title"
                    style={{
                      fontFamily: "'Cinzel', Georgia, serif",
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                      letterSpacing: '0.12em',
                      color: '#3b3500',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h2>
                  <p 
                    className="section-text"
                    style={{
                      fontFamily: "'Crimson Text', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 1.35vw, 1.25rem)',
                      lineHeight: 1.85,
                      color: '#5f5863',
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
                      maxWidth: '520px',
                      height: 'auto',
                      maxHeight: '380px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 12px 32px rgba(59, 53, 0, 0.12)',
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
            flex: 1 1 100% !important;
          }
          .cross-img {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
          .cross-img img {
            max-width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
}
