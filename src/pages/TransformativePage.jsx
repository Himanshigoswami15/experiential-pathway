import React from 'react';
import FaqSection from '../components/FaqSection';

export default function TransformativePage() {
  const selCompetencies = [
    {
      title: "Compassion",
      desc: "Developing genuine empathy for diverse perspectives, recognizing systemic inequities, and feeling driven to contribute positively to communities."
    },
    {
      title: "Connection",
      desc: "Cultivating meaningful relationships with peers, local host families, mentors, and the wider natural environment across borders."
    },
    {
      title: "Critical Thinking & Ethical Decision-Making",
      desc: "Analyzing complex real-world situations, evaluating diverse perspectives, and making thoughtful, socially responsible choices."
    },
    {
      title: "Intercultural Competency",
      desc: "Navigating unfamiliar cultural landscapes with humility, deep respect, open curiosity, and effective cross-cultural communication."
    },
    {
      title: "Leadership & Self-Direction",
      desc: "Taking initiative, inspiring and collaborating with peers, taking ownership of tasks, and stepping confidently beyond comfort zones."
    },
    {
      title: "Resilience & Adaptability",
      desc: "Embracing setbacks as profound learning moments, managing ambiguity gracefully, and adapting effectively to changing conditions."
    },
    {
      title: "Lifelong Learning & Growth Mindset",
      desc: "Fostering perpetual curiosity, self-motivation, and the firm belief that intellect and capabilities grow through sustained effort."
    },
    {
      title: "Reflexivity",
      desc: "Reflecting critically upon one's own assumptions, societal positions, and the global reverberations of personal decisions."
    },
    {
      title: "Teamwork & Collective Purpose",
      desc: "Collaborating cohesively across diverse cohorts, constructively mediating friction, and channeling efforts toward shared community goals."
    }
  ];

  const activities = [
    "Internships",
    "Project-Based Learning",
    "Field Study Expeditions",
    "Service Learning",
    "Outdoor Wilderness Adventure",
    "Cultural Immersion"
  ];

  const stages = [
    { name: "1. Focus", desc: "Setting clear intentions and educational goals before stepping out." },
    { name: "2. Action", desc: "Immersive direct engagement in authentic real-world contexts." },
    { name: "3. Support", desc: "Continuous guidance from educators, mentors, and local experts." },
    { name: "4. Feedback", desc: "Structured assessments and peer perspectives in real time." },
    { name: "5. Debrief", desc: "Facilitated reflection translating raw experience into life wisdom." }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-transform">
        <div className="hero-banner-container">
          <img 
            src="/gallery/about-page/transform/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg.jpeg" 
            alt="Experiential Learning Journey" 
            className="hero-banner-img"
            onError={(e) => {
              e.target.src = 'gallery/about-page/transform/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg.jpeg';
            }}
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title-main">TRANSFORMATIVE EXPERIENTIAL</h1>
          <h2 className="hero-title-sub">LEARNING OPPORTUNITIES</h2>
          <p className="hero-intro-text">
            At Experiential Pathways, we believe in the transformative power of experiential learning, which serves as the cornerstone of all our educational travel programs. This approach is not just a teaching method for us; it's a dynamic way to foster active citizenship and personal growth in young people. Through student learning by doing, discovering, reflecting, and applying, we empower students to build critical life skills. Our programs offer real-world experiences that enhance communication skills, boost self-confidence, and strengthen decision-making abilities by encouraging students to tackle and solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Feature Section 1: Alternating Cross Content */}
      <section className="cross-feature-section">
        <div className="cross-feature-wrap">
          
          {/* Card 1: What is Experiential Learning? */}
          <div className="cross-card">
            <div className="cross-card-content">
              <h3 className="cross-card-title">WHAT IS AN EXPERIENTIAL LEARNING PROGRAM?</h3>
              <p className="cross-card-text">
                Experiential learning is a powerful educational approach emphasizing learning through direct experience. Rather than relying solely on traditional classroom instruction, our programs integrate hands-on exploration, reflection, and active experimentation to foster deeper understanding.
              </p>
              <p className="cross-card-text">
                Students first engage in concrete experiences, reflect on their observations, synthesize insights with existing knowledge, and apply newfound understanding to create a continuous cycle of personal growth.
              </p>

              {/* 5-Stage Cycle Pills */}
              <div className="stages-grid">
                {stages.map((stage, idx) => (
                  <div key={idx} className="stage-pill">
                    <div className="stage-name">{stage.name}</div>
                    <div className="stage-desc">{stage.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cross-card-img-wrap">
              <img 
                src="/gallery/about-page/transform/cross-1.png" 
                alt="Experiential Learning Cycle" 
                className="cross-card-img"
                onError={(e) => { e.target.src = 'gallery/about-page/transform/cross-1.png'; }}
              />
            </div>
          </div>

          {/* Card 2: Transformative Learning Opportunities (Reversed) */}
          <div className="cross-card reverse">
            <div className="cross-card-content">
              <h3 className="cross-card-title">DEEPENING KNOWLEDGE THROUGH HANDS-ON CHALLENGES</h3>
              <p className="cross-card-text">
                By immersing students in real-world environments, our programs challenge young leaders to think critically, communicate cross-culturally, and make informed choices that positively impact host communities and global ecosystems.
              </p>
              <p className="cross-card-text">
                Every itinerary is crafted to encourage curiosity, independence, and accountability. Participants return home equipped not just with memories, but with the confidence to navigate modern complexity.
              </p>
            </div>

            <div className="cross-card-img-wrap">
              <img 
                src="/gallery/about-page/transform/cross-2.png" 
                alt="Hands on Challenges" 
                className="cross-card-img"
                onError={(e) => { e.target.src = 'gallery/about-page/transform/cross-2.png'; }}
              />
            </div>
          </div>

          {/* Card 3: What is Extensive Experiential Learning? */}
          <div className="cross-card">
            <div className="cross-card-content">
              <h3 className="cross-card-title">WHAT IS EXTENSIVE EXPERIENTIAL LEARNING?</h3>
              <p className="cross-card-text">
                Extensive experiential learning represents deep, sustained engagement over extended durations. Students delve into complex ecological conservation, community-led infrastructure projects, and immersive linguistic studies where learning transcends episodic tours into true transformation.
              </p>
            </div>

            <div className="cross-card-img-wrap">
              <img 
                src="/gallery/about-page/social-responsibility/cross-1.png" 
                alt="Extensive Immersion" 
                className="cross-card-img"
                onError={(e) => { e.target.src = 'gallery/about-page/social-responsibility/cross-1.png'; }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Extensive Learning & SEL Competencies Section */}
      <section className="extensive-section" id="extensive">
        <div className="extensive-container">
          <div className="extensive-header">
            <h2 className="extensive-title">EXTENSIVE EXPERIENTIAL LEARNING ACTIVITIES</h2>
            <p className="extensive-intro">
              Extensive experiential learning connects classroom curricula with dynamic real-world environments. Through six foundational modes of experiential learning, participants explore their potential:
            </p>
          </div>

          {/* Activity Badges */}
          <div className="activities-strip">
            {activities.map((act, index) => (
              <span key={index} className="activity-badge">
                <i className="bi bi-compass"></i> {act}
              </span>
            ))}
          </div>

          {/* SEL Competencies Grid */}
          <h3 className="sel-section-title">
            Social & Emotional Learning (SEL) Competencies
          </h3>
          <div className="sel-grid">
            {selCompetencies.map((item, idx) => (
              <div key={idx} className="sel-card">
                <h4 className="sel-card-title">
                  <i className="bi bi-check2-circle" style={{ color: 'var(--accent-gold)' }}></i>
                  {item.title}
                </h4>
                <p className="sel-card-text">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="extensive-summary-box">
            By integrating these principles, our student travel programs prepare young people for active global citizenship and equip them with the resilience needed to navigate tomorrow's challenges.
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqSection />
    </main>
  );
}
