import React from 'react';

/**
 * AboutPage (Our Story)
 * Exact 1:1 match to https://experientialpathways.com/about.html and user reference screenshots:
 * - 1. Hero: Snowy Himalayan mountains (/gallery/about-page/about.png) with EXPLORE / EXPERIENCE EVOLVE
 * - 2. About Hero Content: Pulled up by -10rem with torn paper overlay, /gallery/about-page/9.png, Story & Mission, and 3 Core Value Cards (30.png, 31.png, 32.png)
 * - 3. WORLD OUR WAY: Organic beige scooped cutout with /gallery/home-page/20.png curving down over olive green section, textured with hikers /gallery/about-page/33.png, WHO WE ARE, RETHINK THE WAY YOU TRAVEL, and two-column list box
 * - 4. OUR PHILOSOPHY: Overlapping village landscape photo (/gallery/about-page/35.png), giant ghost heading "OUR PHILOSOPHY", and 20.png background with philosophy text
 */
export default function AboutPage() {
  const cards = [
    {
      img: '/gallery/about-page/30.png',
      title: 'Global citizenship',
      desc: 'Empowering students to become the drivers of positive social change through sustainable collective action.'
    },
    {
      img: '/gallery/about-page/31.png',
      title: 'Experiential Learning',
      desc: 'Offering a powerful modality for infusing youth with the knowledge, passion, skills and relationships to encourage active citizenship'
    },
    {
      img: '/gallery/about-page/32.png',
      title: 'Global community',
      desc: 'Promoting a more equitable world where people feel inspired to work together in caring for each other and the planet.'
    }
  ];

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: '#4a4632', overflowX: 'hidden', backgroundColor: '#fcfaf2' }}>
      
      {/* =========================================================================
          1. HERO SECTION: EXPLORE / EXPERIENCE EVOLVE (Snowy Himalayan Mountains)
          ========================================================================= */}
      <section 
        className="about-hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'center',
          backgroundImage: 'url("/gallery/about-page/about.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center -50px',
          backgroundRepeat: 'no-repeat',
          paddingTop: 'clamp(5rem, 9vw, 7.5rem)',
          zIndex: 1
        }}
      >
        <div 
          className="container hero-content"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* EXPLORE Title */}
          <h1 
            style={{
              color: '#ffffff',
              fontSize: 'clamp(3.8rem, 8.5vw, 6.8rem)',
              lineHeight: 1,
              fontWeight: 800,
              fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.04em',
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase'
            }}
          >
            EXPLORE
          </h1>

          {/* EXPERIENCE EVOLVE Subtitle */}
          <p 
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)',
              fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.08em',
              fontWeight: 600,
              margin: 0,
              textTransform: 'uppercase'
            }}
          >
            EXPERIENCE EVOLVE <br />
            <span style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2, display: 'inline-block', marginTop: '0.25rem' }}>
              ↓
            </span>
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT HERO CONTENT: Story, Mission & 3 Feature Cards
          ========================================================================= */}
      <section 
        className="about-hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 'clamp(-5rem, -9vw, -10rem)',
          background: 'linear-gradient(to right, #e3e0cf, #f1f5f0)',
          paddingTop: 'clamp(4.5rem, 7vw, 7rem)',
          paddingBottom: 'clamp(4.5rem, 6.5vw, 6.5rem)'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
          {/* Top Row: Image on Left, Story & Mission on Right */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(2rem, 4.5vw, 5rem)',
              alignItems: 'center',
              marginBottom: 'clamp(3.5rem, 5.5vw, 5rem)'
            }}
          >
            {/* Left Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/gallery/about-page/9.png" 
                alt="Our Story" 
                style={{
                  width: '100%',
                  maxWidth: '560px',
                  borderRadius: '16px',
                  boxShadow: '0 16px 36px rgba(59, 53, 0, 0.16)',
                  display: 'block'
                }}
                onError={(e) => { e.target.src = 'gallery/about-page/9.png'; }}
              />
            </div>

            {/* Right Text Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* OUR STORY */}
              <div>
                <h2 
                  style={{
                    fontFamily: "'Cinzel', Georgia, serif",
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    color: '#3b3500',
                    margin: '0 0 0.8rem 0',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  OUR STORY
                </h2>
                <p 
                  style={{
                    fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
                    lineHeight: 1.85,
                    color: '#5f5863',
                    margin: 0
                  }}
                >
                  It started with like-minded people who had a passion for <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>travel and trusted</span> travel is essential for learning and being respectful to global communities. <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>The Experiential Pathways</span> family is built on experiential learning, cultural immersion, giving back to society, and investing in nature
                </p>
              </div>

              {/* OUR MISSION & VISION */}
              <div>
                <h2 
                  style={{
                    fontFamily: "'Cinzel', Georgia, serif",
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    color: '#3b3500',
                    margin: '0 0 0.8rem 0',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  OUR MISSION & VISION
                </h2>
                <p 
                  style={{
                    fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
                    lineHeight: 1.85,
                    color: '#5f5863',
                    margin: 0
                  }}
                >
                  The entire world is one single-family. Create <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>awareness and positive energy</span> amongst the travelers and respect all living beings equally. To create global leaders who are connected with shared humanity. Travel is recognized as a vital component of all education. To create travel as sustainable, unique, responsible which ultimately results in giving back to the local community.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Value Cards */}
          <div 
            className="cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(1.5rem, 2.5vw, 2rem)',
              justifyContent: 'center'
            }}
          >
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="box"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '2.2rem 1.6rem',
                  textAlign: 'center',
                  border: '1px solid rgba(117, 111, 79, 0.22)',
                  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(59, 53, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.06)';
                }}
              >
                <img 
                  src={c.img} 
                  alt={c.title} 
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    marginBottom: '1rem',
                    display: 'block'
                  }}
                  onError={(e) => { e.target.src = c.img.replace(/^\//, ''); }}
                />
                <h3 
                  style={{
                    fontFamily: "'Cinzel', Georgia, serif",
                    fontSize: '1.25rem',
                    lineHeight: '1.4',
                    color: '#3b3500',
                    textTransform: 'uppercase',
                    margin: '0 0 0.6rem 0',
                    fontWeight: 700
                  }}
                >
                  {c.title}
                </h3>
                <p 
                  style={{
                    fontSize: '0.94rem',
                    color: '#5f5863',
                    lineHeight: '1.6',
                    margin: 0
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WORLD OUR WAY SECTION (Exact 1:1 match to reference screenshot)
          ========================================================================= */}
      <section 
        className="world-way position-relative"
        style={{
          position: 'relative',
          backgroundColor: '#756f4f',
          overflow: 'hidden',
          paddingBottom: 'clamp(5.5rem, 8.5vw, 8.5rem)',
          zIndex: 1
        }}
      >
        {/* Background Hiker Mountain Texture (/gallery/about-page/33.png) */}
        <img 
          src="/gallery/about-page/33.png" 
          alt="" 
          className="about-upper-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.38,
            mixBlendMode: 'multiply'
          }}
          onError={(e) => { e.target.src = 'gallery/about-page/33.png'; }}
        />

        {/* Upper Beige Scoop Container (.plan-Journey) */}
        <div 
          className="plan-Journey"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            background: 'linear-gradient(to right, #e3e0cf, #f1f5f0)'
          }}
        >
          <div 
            className="heading"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 'clamp(380px, 58vh, 620px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: 'clamp(2rem, 5vw, 4rem) 1.5rem clamp(6.5rem, 13vw, 12rem) 1.5rem',
              overflow: 'hidden'
            }}
          >
            {/* The Olive Hill Swoop Cutout (/gallery/home-page/20.png) sitting at bottom: 0 */}
            <img 
              src="/gallery/home-page/20.png" 
              alt="" 
              className="upper-img position-absolute"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 1,
                display: 'block'
              }}
              onError={(e) => { e.target.src = 'gallery/home-page/20.png'; }}
            />

            {/* Display Title: WORLD OUR WAY inside the beige cutout scoop */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto' }}>
              <h2 
                style={{
                  fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
                  fontSize: 'clamp(3.8rem, 10.5vw, 7.5rem)',
                  lineHeight: 1.02,
                  color: '#756f4f',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  margin: 0
                }}
              >
                WORLD OUR <br /> WAY
              </h2>
            </div>
          </div>
        </div>

        {/* Lower Content inside the Olive Textured Section */}
        <div 
          className="content"
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1020px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#ffffff',
            padding: 'clamp(2.5rem, 5vw, 4.5rem) 1.5rem 0 1.5rem'
          }}
        >
          {/* WHO WE ARE */}
          <div className="text-wrap" style={{ margin: '0 0 clamp(2.5rem, 4vw, 3.5rem) 0' }}>
            <h2 
              style={{
                fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
                fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase'
              }}
            >
              WHO WE ARE
            </h2>
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                lineHeight: 1.85,
                color: '#f4f3ec',
                maxWidth: '940px',
                margin: '0 auto',
                fontWeight: 400
              }}
            >
              Experiential PATHWAYS is an Destination Management Company for student travel that specializes in service-learning, cultural immersion, experiential education programs and travelling sustainably for students and schools. Experiential Pathways is a company that inspires travelers to better know their world.
            </p>
          </div>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.28)', margin: '0 auto clamp(2.5rem, 4vw, 3.5rem) auto', maxWidth: '750px' }} />

          {/* RETHINK THE WAY YOU TRAVEL! */}
          <div className="text-wrap" style={{ margin: '0 0 clamp(2.5rem, 4vw, 3.5rem) 0' }}>
            <h2 
              style={{
                fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
                fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase'
              }}
            >
              RETHINK THE WAY YOU TRAVEL!
            </h2>
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                lineHeight: 1.85,
                color: '#f4f3ec',
                maxWidth: '940px',
                margin: '0 auto',
                fontWeight: 400
              }}
            >
              At Experiential PATHWAYS we offer exclusive student travel, Educators lead programs, private camp small group adventures, GAP year, internship programs and Family travel in South Asia. We invite you all to come and see the world our way, with our local staff and expert leaders at all the destinations. We redefine the art experiential travel with an incredible range programs under different categories.
            </p>
          </div>

          <div className="text-wrap" style={{ margin: '0 0 clamp(2.5rem, 4vw, 3.5rem) 0' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', lineHeight: 1.7, color: '#ffffff' }}>
              Having a travel buddy you trust makes a world of difference that’s where we come in. <br />
              <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Whether you’re planning your abroad trip.</span>
            </p>
          </div>

          {/* Two-Column List Box */}
          <div 
            className="list"
            style={{
              maxWidth: '940px',
              margin: '0 auto clamp(3rem, 5vw, 4.5rem) auto',
              backgroundColor: '#d1ceba',
              borderRadius: '16px',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.28)'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'clamp(1.2rem, 3vw, 2.5rem)',
                color: '#3b3500',
                fontFamily: "'Cinzel', 'Times New Roman', Georgia, serif",
                fontSize: 'clamp(1.15rem, 1.8vw, 1.6rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'left'
              }}
            >
              <ul style={{ listStyle: 'disc', paddingLeft: '1.75rem', margin: 0, lineHeight: 1.9 }}>
                <li>Adventure</li>
                <li>Cultural immersive</li>
                <li>Community Services</li>
                <li>Photography Trips and Workshops</li>
                <li>Language Immersions</li>
              </ul>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.75rem', margin: 0, lineHeight: 1.9 }}>
                <li>Rural Tourism</li>
                <li>Wildlife Conservation</li>
                <li>Adventure Travel</li>
                <li>Gap Year Programs</li>
                <li>Fairs and Festivals</li>
              </ul>
            </div>
          </div>

          {/* Bottom Paragraphs */}
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.5, margin: '0 0 1.25rem 0' }}>
              Programs that will help you absorb the local culture and flavour at your own pace
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)', lineHeight: 1.85, color: '#f4f3ec', margin: '0 0 1.25rem 0' }}>
              <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>EXPERIENTIAL PATHWAYS</span> brings out the joy, pleasure, and comfort in every destination. We are here with utmost affability and ensure your well-being throughout the trip. Our program leaders is ever ready to comply with your requirement of <span style={{ fontWeight: 'bold' }}>exploration, insight, and enticing experience</span> of an ideal trip.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)', lineHeight: 1.85, color: '#f4f3ec', margin: '0 0 1.25rem 0' }}>
              <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>EXPERIENTIAL PATHWAYS</span> was created from a collective mission to create a journey which dives deep in culture, community and create a sustainable impact on <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>global communities</span> that are special.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)', lineHeight: 1.85, color: '#f4f3ec', margin: 0 }}>
              The members of the core team at <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>EXPERIENTIAL PATHWAYS</span> are local program leaders. Our local staff are trained and understand the ingredients that make a <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>"Next Generation Leader"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR PHILOSOPHY SECTION
          ========================================================================= */}
      <section 
        className="philosophy text-center"
        style={{
          position: 'relative',
          backgroundColor: '#faf7ef',
          textAlign: 'center',
          paddingBottom: 'clamp(4rem, 6vw, 6rem)',
          overflow: 'visible',
          zIndex: 10,
          display: 'flow-root'
        }}
      >
        {/* Philosophy Mountain Village Photo (/gallery/about-page/35.png) Subtly Overlapping the Olive Green Background */}
        <div 
          className="container"
          style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 2.5vw, 2rem)', 
            position: 'relative', 
            zIndex: 20,
            overflow: 'visible'
          }}
        >
          <img 
            src="/gallery/about-page/35.png" 
            alt="Experiential Pathways Philosophy" 
            className="philosophy-img"
            style={{
              width: '100%',
              maxWidth: '1240px',
              borderRadius: '24px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              zIndex: 30,
              display: 'block',
              margin: 'clamp(-4.5rem, -6.5vw, -6rem) auto 0 auto',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onError={(e) => { e.target.src = 'gallery/about-page/35.png'; }}
          />
        </div>

        {/* Big Ghost Title: OUR PHILOSOPHY */}
        <h2 
          className="heading"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: 'clamp(3.5rem, 11vw, 7.5rem)',
            lineHeight: 1.05,
            color: '#cccbbe',
            fontWeight: 800,
            textTransform: 'uppercase',
            margin: 'clamp(1.5rem, 3vw, 2.5rem) 0 1.5rem 0',
            opacity: 0.75,
            letterSpacing: '0.04em'
          }}
        >
          OUR <br /> PHILOSOPHY
        </h2>

        {/* Philosophy Details Area with 20.png overlay background */}
        <div 
          className="about-plan plan-Journey position-relative"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
            padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem)',
            color: '#3b3500'
          }}
        >
          <div className="philosophy-content" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', lineHeight: 1.85, margin: '0 0 1.5rem 0', color: '#3b3500' }}>
              We truly believe that learning is constant and to evolve yourself there is no age <br />
              Traveling is all about exploring oneself and is the best tool to gain new perspectives and build skills for the future, which is through experiential learning.
            </p>

            <p style={{ fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', lineHeight: 1.85, margin: '0 0 2rem 0', color: '#3b3500' }}>
              We strongly believe in <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>"Time Philosophy"</span>, Time is only constant which keeps on changing. And in this fast-moving world we want to create learning beyond borders, cultural, community and genders.
            </p>

            <h4 
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                margin: '2rem 0 1rem 0',
                color: '#3b3500',
                textAlign: 'center'
              }}
            >
              Travel Differently
            </h4>

            <p style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', lineHeight: 1.85, margin: '0 0 1.5rem 0', color: '#5c5738' }}>
              As a company of seasoned travelers, we've experienced firsthand what a stressful and difficult experience it is to find reliable information about programs abroad. Our mission is to give you the knowledge and confidence to choose the right program for your next adventure, whether you want to <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>work in Bhutan, Nepal, teach in South Asia, India and SriLanka.</span>
            </p>

            <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)', lineHeight: 1.8, fontWeight: 600, color: '#3b3500', margin: '2rem 0 0 0' }}>
              Hence all our programs are based and custom for <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Students, Educators, <br className="d-none d-sm-block" /> GAP Year, Internships,</span> Study Abroad and Family travel.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Styles matching about.css */}
      <style>{`
        .philosophy {
          overflow: visible !important;
          position: relative !important;
          z-index: 10 !important;
          display: flow-root !important;
        }
        .philosophy-img {
          width: 100% !important;
          max-width: 1240px !important;
          margin-top: clamp(-4.5rem, -6.5vw, -6rem) !important;
          border-radius: 24px !important;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35) !important;
          display: block !important;
          position: relative !important;
          z-index: 30 !important;
        }
        @media (max-width: 992px) {
          .philosophy-img {
            margin-top: -4rem !important;
            border-radius: 20px !important;
          }
        }
        @media (max-width: 786px) {
          .philosophy-img {
            margin-top: -3.2rem !important;
            border-radius: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .philosophy-img {
            margin-top: -2.2rem !important;
            border-radius: 12px !important;
          }
        }
        @media (max-width: 580px) {
          .about-hero {
            background-image: url("/gallery/about-page/about1.png") !important;
            background-position: bottom center !important;
            min-height: 71vh !important;
            padding-top: 7rem !important;
          }
        }
        @media (max-width: 786px) {
          .world-way .content, .philosophy-content {
            width: 100% !important;
          }
          .list li {
            font-size: 1.05rem !important;
          }
        }
        @media (max-width: 480px) {
          .list {
            width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
}
