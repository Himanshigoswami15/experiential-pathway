import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const teamMembers = [
  {
    name: "SUDARSHAN SINGH DEORA",
    title: "FOUNDER & DIRECTOR",
    img: "/gallery/team/Sudarshan-Deora.webp",
    bio: "Sudarshan believes the best lessons aren't found in textbooks, but on the open road. With a unique blend of a Post-Grad in Hospitality and an Education degree from JNV University, he launched Experiential Pathways to bridge the gap between rigorous academics and real-world adventure.",
    more: "His professional DNA mixes high-stakes adventure, logistics and storytelling, having served as a Location Manager for film productions and a manager for luxury inbound travel before stepping into student travel in 2007. This means every program he designs for South Asia is executed with safety, cinematic precision and premium care. Sudarshan’s true mission? Leadership through discovery. He is dedicated to creating innovative, hands-on programs that transform students into confident leaders. Off the Clock: You’ll find him perfecting his swing on the cricket pitch or recharging with some classic country music. His Vision: Turning South Asia's landscapes into a vibrant, living classroom for the next generation."
  },
  {
    name: "DAVE DENNIS",
    title: "EXECUTIVE DIRECTOR, CORNERSTONE SAFETY GROUP",
    img: "/gallery/team/Daves.jpeg",
    bio: "Dave is co-founder and Executive Director of Cornerstone Safety Group, a membership-based risk management, medical, and mental health services company supporting travel and experiential education organizations globally with comprehensive risk management, medical protocols, and emergency response.",
    more: "With a master’s degree in risk management and 29 years experience in domestic and international operations, Dave has been the Vice President of Global Health and Safety at some of the industry’s largest companies, responded to thousands of incidents, and consulted for over 70 organizations."
  },
  {
    name: "DIVYA SP",
    title: "CEO",
    img: "/gallery/team/Divya.webp",
    bio: "Divya doesn’t just run a travel company; she builds bridges. After honing her expertise in conference and event management, Divya followed her passion for youth development into the field. She has personally led student expeditions across Southeast Asia and the Pacific, from the temples of Burma to the highlands of Fiji.",
    more: "Teachers love Divya for her meticulous attention to detail (honed during her Master's in Tourism Marketing), but students love her for her \"bubbly\" energy and legendary cooking skills. Whether designing a community service project in the Himalayas or sharing a meal with students around a campfire, Divya’s presence ensures every program is safe, educational, and—above all—inspiring."
  },
  {
    name: "DEEPTI",
    title: "BHUTAN HEAD - WOMEN EMPOWERMENT SPECIALIST",
    img: "/gallery/team/DV.webp",
    bio: "Deepti stands at the intersection of tradition and progress. With a lifelong dedication to preserving the world’s most pristine cultures, she leads our Bhutan division with a focus on \"Gross National Happiness\" in practice. Deepti’s mission is to ensure that student travel isn't just a visit, but a meaningful contribution to the Kingdom.",
    more: "By championing sustainable and responsible travel practices, she ensures that every expedition supports local livelihoods. Deepti is particularly passionate about female empowerment, intentionally designing programs that generate employment for local women and artisans. For teachers, Deepti is a vital link to the authentic heart of Bhutan."
  },
  {
    name: "KISHAN SINGH",
    title: "GROUPS MANAGER",
    img: "/gallery/team/Karan-S.webp",
    bio: "Kishan brings a unique blend of international business acumen and a deep-rooted passion for global exploration to the Experiential Pathways team. Originally from the historic \"Blue City\" of Jodhpur, Rajasthan, Kishan’s professional journey took him to Australia for Hospitality Management and the UK for his MBA. This global academic foundation allows him to manage complex group logistics with corporate precision and a world-class service standard.",
    more: "Having led and managed programs across India, Nepal, Tanzania, and the Balkans, Kishan is an expert in navigating diverse cultural landscapes. He is particularly dedicated to fostering intellectual growth in students, often leading discussions on global critical issues and sustainable solutions. For Kishan, travel is the ultimate tool for solving the challenges of tomorrow."
  },
  {
    name: "KOMAL PATEL",
    title: "PROGRAM LEADER SOUTH ASIA",
    img: "/gallery/team/Komal.webp",
    bio: "Komal is a specialist in outdoor education, bringing a rigorous academic approach to the field through the lens of experiential learning. With six years of experience as an Outdoor Faculty member at the prestigious TA Pai Management Institute (TAPMI), she excels at designing programs that bridge the gap between physical adventure and cognitive development.",
    more: "Her technical expertise is backed by professional certifications in Mountaineering, Skiing, and Experiential Learning Pedagogy. As a certified Wilderness First Responder, Komal ensures that safety is the foundation of every expedition. Having worked extensively with both top-tier schools and corporate sectors across South Asia, she is a master at facilitating leadership and teamwork in the great outdoors."
  },
  {
    name: "ABHIMANYU SINGH BHATI",
    title: "PROGRAM LEADER SOUTH ASIA",
    img: "/gallery/team/Abhimanyu-Singh-Bhati.webp",
    bio: "Abhimanyu is a true educator at heart. When he isn’t leading student programs, he is training young professionals at his own Management Academy. He believes that travel is the ultimate classroom and loves engaging students in discussions about local art, history, and culture.",
    more: "Whether he’s debating a football match or navigating a remote cultural site, Abhimanyu’s energy and commitment to safety (as a NOLS-certified Wilderness First Responder) make him an invaluable leader for any student expedition."
  },
  {
    name: "SHIVA SHARAN THAPA",
    title: "PROGRAM LEADER SOUTH ASIA",
    img: "/gallery/team/Shiv Sharan thapa_edited.webp",
    bio: "If there is one person who embodies the warmth of Himalayan hospitality, it is Shiva. Hailing from a beautiful village just outside Kathmandu, Shiva has spent more than a decade and a half sharing the beauty of his homeland with travelers. He lives by a simple but powerful belief: we can learn something valuable from everyone we meet.",
    more: "Teachers and students alike are drawn to Shiva’s social nature and his incredible talent as a Master Chef. Whether he is teaching a group how to fold the perfect momo or sharing stories about his life in Rayale, Shiva makes every student feel at home. As a father himself, he is passionate about building a better future through responsible travel and community service, making him an inspiring role model for any student group."
  },
  {
    name: "VINOD KUMAR",
    title: "PROGRAM LEADER SOUTH ASIA",
    img: "/gallery/team/Vinod Kumar.webp",
    bio: "In the world of outdoor education, Vinod is a force of nature. Known affectionately by students and colleagues as \"Yeti,\" he is legendary for his tireless energy and his ability to inspire groups in any environment. Whether he is leading a trek in Nepal or a cultural program in the Balkans, Vinod brings a level of enthusiasm that is truly infectious.",
    more: "Vinod isn't just an adventurer; he is a highly qualified teacher who has spent years as a Guest Instructor at India’s top mountaineering institutes (NIM and DMAS). Teachers appreciate his deep knowledge of IB program standards and his \"safety-first\" mindset. Students love him for his endless energy and his fascinating stories about the culture and history of India and Nepal. When you travel with Vinod, you aren't just taking a trip—you are learning from one of the most seasoned veterans in the industry."
  },
  {
    name: "HEMANT KUMAR SHAHI",
    title: "PROGRAM LEADER SOUTH ASIA",
    img: "/gallery/team/HemantKumarShahi",
    bio: "Born and raised in the shadow of the Dhauladhar Range in Dharamshala—the spiritual home of H.H. the Dalai Lama—Manu’s connection to the Himalayas is lifelong. After earning a degree in Geography in 1992, his academic curiosity evolved into a physical pursuit of the wilderness.",
    more: "Certified in both Basic and Advanced Mountaineering (1993) and Water Sports (1994), Manu has spent over three decades navigating the rugged landscapes of Northern India and Nepal. Since joining the Inbound family in 2005, he has specialized in leading cultural immersion and service-learning programs."
  },
  {
    name: "ANUJ",
    title: "HEAD LOGISTICS - BHUTAN & SRI LANKA",
    img: "/gallery/team/AV-image.webp",
    bio: "Anuj believes that the best classroom has no walls. As our Sri Lanka Head, he brings a fun-loving energy and a wealth of local knowledge to every itinerary he crafts. Anuj doesn't just plan trips; he creates unforgettable memories by diving deep into what makes Sri Lanka special—from its ancient ruins to its hidden culinary gems.",
    more: "His flair for storytelling and his \"unforgettable memory\" approach make him a favorite among educators who want their students to truly engage with a destination. Whether organizing a trek through a tea plantation or a cultural exchange in a local village, Anuj’s enthusiasm is infectious, ensuring every student returns home with a new perspective and a passion for global exploration."
  },
  {
    name: "YUVRAJ SINGH",
    title: "SOCIAL MEDIA MANAGER",
    img: "/gallery/team/element  - 2026-04-17T143426.822.png",
    bio: "Meet Yuvraj Singh, the Social Media Manager for Experiential Pathways, with a talent for crafting engaging content and growing vibrant online communities.",
    more: "With a passion for storytelling and digital marketing, Yuvraj expertly manages social media platforms, showcasing unique travel experiences, student adventures, Teen travel, Student Travel Programs and immersive learning journeys. Follow along as Yuvraj brings the world of experiential learning to life, connecting students to transformative opportunities across South Asia and beyond!"
  }
];

export default function TeamPage() {
  const { data } = useAdminData();
  const members = (data?.teamMembers && data.teamMembers.length > 0)
    ? data.teamMembers.filter(m => m.active !== false)
    : teamMembers;

  const [expanded, setExpanded] = useState({});

  const toggleBio = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <main style={{ backgroundColor: '#F8F7F4', fontFamily: "'Poppins', sans-serif", color: '#4a4632', minHeight: '100vh' }}>
      {/* ===== Hero Section matching team.css ===== */}
      <section 
        className="team-hero"
        style={{
          backgroundImage: 'url("/gallery/home-page/23_1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '52vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          padding: '6rem 1.5rem 4rem 1.5rem'
        }}
      >
        {/* Soft atmospheric white overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.42)',
            zIndex: 1
          }} 
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 
            style={{
              color: '#3b3500',
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              fontWeight: 800,
              fontFamily: "'Cinzel', Georgia, serif",
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              margin: '0 0 0.5rem 0'
            }}
          >
            Meet Our Team
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              color: '#5f5863',
              letterSpacing: '0.03em',
              margin: 0
            }}
          >
            The dedicated educators and expedition leaders behind every pathway
          </p>
        </div>
      </section>

      {/* ===== Team Section matching team.html & team.css ===== */}
      <section 
        className="team-section"
        style={{ 
          padding: 'clamp(3.5rem, 6vw, 5.5rem) clamp(1rem, 4vw, 2.5rem)',
          backgroundColor: '#F8F7F4'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <h2 
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
                color: '#3b3500',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '1.25rem'
              }}
            >
              PASSIONATE EDUCATORS & EXPEDITION LEADERS
            </h2>
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.22rem)',
                lineHeight: 1.8,
                color: '#5f5863',
                maxWidth: '920px',
                margin: '0 auto'
              }}
            >
              We are driven by a deep conviction that experiential learning through travel transforms students into empathetic, capable global citizens.
            </p>
          </div>

          {/* Responsive Team Grid */}
          <div 
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(1.8rem, 2.5vw, 2.5rem)',
              maxWidth: '1240px',
              margin: '0 auto'
            }}
          >
            {members.map((member, idx) => {
              const isExpanded = !!expanded[idx];
              return (
                <div
                  key={idx}
                  className="team-member"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0dfd5',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(59, 53, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(59, 53, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 53, 0, 0.06)';
                  }}
                >
                  {/* Photo Wrapper */}
                  <div 
                    className="team-img-wrapper"
                    style={{
                      width: '100%',
                      height: '380px',
                      overflow: 'hidden',
                      backgroundColor: '#eae5d8'
                    }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      onError={(e) => {
                        // Fallback without leading slash or default fallback
                        if (e.target.src.includes('/gallery/')) {
                          e.target.src = member.img.replace(/^\//, '');
                        } else {
                          e.target.src = '/gallery/about-page/9.png';
                        }
                      }}
                    />
                  </div>

                  {/* Info Area */}
                  <div 
                    className="team-info"
                    style={{
                      padding: '1.8rem 1.6rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1
                    }}
                  >
                    <h3 
                      className="team-name"
                      style={{
                        fontFamily: "'Cinzel', Georgia, serif",
                        fontSize: 'clamp(1.25rem, 1.5vw, 1.45rem)',
                        fontWeight: 700,
                        color: '#3b3500',
                        margin: '0 0 0.35rem 0',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {member.name}
                    </h3>

                    <p 
                      className="team-title"
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#756f4f',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        margin: '0 0 1rem 0'
                      }}
                    >
                      {member.title}
                    </p>

                    <div 
                      className="team-bio"
                      style={{
                        fontSize: '0.94rem',
                        lineHeight: 1.7,
                        color: '#5f5863',
                        flexGrow: 1
                      }}
                    >
                      <span>{member.bio}</span>
                      {isExpanded && (
                        <span style={{ display: 'inline', marginTop: '0.5rem' }}>
                          {' '}{member.more}
                        </span>
                      )}
                    </div>

                    {member.more && (
                      <button
                        onClick={() => toggleBio(idx)}
                        className="read-more-btn"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#3b3500',
                          fontWeight: 700,
                          cursor: 'pointer',
                          padding: '0.75rem 0 0 0',
                          fontSize: '0.88rem',
                          textAlign: 'left',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          outline: 'none'
                        }}
                      >
                        {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
