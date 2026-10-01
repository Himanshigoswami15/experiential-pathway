import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import RajasthanPage from './RajasthanPage';
import ArtisticImmersionPage from './ArtisticImmersionPage';
import NorthIndiaPhotoPage from './NorthIndiaPhotoPage';
import HimalayanPhotoPage from './HimalayanPhotoPage';

const programDatabase = {
  rajasthan: {
    id: "rajasthan",
    title: "Rajasthan Program",
    subtitle: "Embark on an Extraordinary 10-Day Rajasthan Program: A Journey of Heritage, Adventure, and Cultural Immersion",
    duration: "10 Days",
    country: "INDIA",
    region: "Rajasthan (Jodhpur, Thar Desert, Jaipur, Ranthambore)",
    heroImg: "/gallery/programs/rajasthan.png",
    overviewParas: [
      "Embark on an extraordinary 10-day journey through Rajasthan, a land where history comes alive through majestic forts, colorful bazaars, and golden deserts. This immersive Rajasthan Program is crafted for travelers seeking an in-depth cultural experience, offering a harmonious blend of historical discovery, wilderness exploration, and local reciprocity.",
      "Your adventure begins in Jodhpur, the captivating Blue City, where the sheer grandeur of Mehrangarh Fort commands the horizon over bustling bazaars brimming with textiles and silver work. Delve into the city's living artistic heritage with hands-on artisan workshops, learning age-old block-printing and pottery traditions that have flourished for centuries.",
      "From Jodhpur, traverse into the golden expanse of the Thar Desert for an exhilarating expedition of camel safaris and luxury desert camping under starlit skies. As dusk falls over the undulating sand dunes, witness captivating Rajasthani folk performances with soulful melodies and timeless storytelling dances that celebrate valor and devotion.",
      "The voyage proceeds to Jaipur, the famed Pink City, where regal palaces and architectural brilliance take center stage. Explore the Amber Palace, marvel at the intricate lattice windows of Hawa Mahal, and craft your own keepsake in master-led artisan studios specializing in blue pottery and gemstone crafts.",
      "Beyond the palaces, immerse in the indigenous conservation culture of the Bishnoi community, pioneers in sustainable living and wildlife protection. Complete your adventure with an exhilarating wildlife safari in Ranthambore National Park, seeking out majestic Bengal tigers and diverse wildlife across ancient fortress ruins."
    ],
    experiences: [
      {
        title: "Jodhpur Blue City & Mehrangarh",
        img: "/gallery/india/40.png",
        desc: "Ascend the iconic citadel and wander through cobalt alleys, engaging with traditional textile and indigo artisans."
      },
      {
        title: "Thar Desert Starlit Expeditions",
        img: "/gallery/india/43.png",
        desc: "Traverse golden dunes on camelback, savor desert camp hospitality, and listen to Manganiyar folk melodies under open skies."
      },
      {
        title: "Jaipur Royal Architecture & Crafts",
        img: "/gallery/india/44.png",
        desc: "Explore Amber Palace, admire the Hawa Mahal facade, and participate in blue pottery and jewelry apprenticeships."
      },
      {
        title: "Bishnoi Stewardship & Tiger Safari",
        img: "/gallery/india/46.png",
        desc: "Connect with rural Bishnoi eco-communities and track majestic Bengal tigers on a game drive in Ranthambore."
      }
    ],
    itineraryDays: [
      { day: "Day 01 - 02", title: "Arrival in Jodhpur & The Blue Citadel", desc: "Welcome briefing, Mehrangarh Fort exploration, walking tour of the blue quarters, and introductory block-printing workshop." },
      { day: "Day 03 - 04", title: "Thar Desert Odyssey & Dunes Camping", desc: "Drive into the Thar Desert, camel caravan to secluded dunes, sunset campfire, folk musical performance, and desert star-gazing." },
      { day: "Day 05 - 06", title: "Bishnoi Village Life & Sustainable Ecology", desc: "Community engagement with Bishnoi conservationists, tree planting, traditional pottery masterclass, and rural dinner." },
      { day: "Day 07 - 08", title: "Jaipur Pink City & Architectural Wonders", desc: "Amber Palace excursion, Hawa Mahal, Jantar Mantar astronomical observatory, and gemstone craft apprenticeships." },
      { day: "Day 09", title: "Ranthambore Wildlife & Bengal Tiger Tracking", desc: "Dawn and afternoon open-top safari drives through Ranthambore National Park in search of Bengal tigers and wildlife." },
      { day: "Day 10", title: "Culinary Workshop & Celebration Banquet", desc: "Traditional Rajasthani cooking class, reflective group presentation, final celebration banquet, and farewell departure." }
    ]
  },
  artistic: {
    id: "artistic",
    title: "Artistic Immersion",
    subtitle: "Artistic Immersion and Crafts Workshops Across India",
    duration: "08 Days",
    country: "INDIA",
    region: "Rajasthan & Gujarat (Jaipur, Bagru, Sanganer)",
    heroImg: "/gallery/programs/artistic.png",
    overviewParas: [
      "Embark on an extraordinary 8-day expedition through the vibrant artistic heart of India, where crafts, heritage, and timeless techniques converge in an immersive visual arts laboratory.",
      "Designed for students, artists, and culture lovers, this journey provides direct studio access to multi-generational master craftsmen in hand-block printing, blue pottery, miniature painting, and natural indigo dyeing.",
      "Work side-by-side with national award-winning artisans, build a comprehensive creative portfolio, and explore how traditional heritage crafts harmonize with contemporary global design."
    ],
    experiences: [
      {
        title: "Bagru Natural Dyeing Guilds",
        img: "/gallery/india/44.png",
        desc: "Learn mud-resist dabu block printing and immerse fabrics in natural indigo dye vats alongside master artisans."
      },
      {
        title: "Jaipur Blue Pottery Apprenticeship",
        img: "/gallery/india/42.png",
        desc: "Master the unique quartz-based glaze and hand-painted Persian motifs that distinguish authentic Jaipur pottery."
      },
      {
        title: "Miniature Painting Masterclasses",
        img: "/gallery/india/45.png",
        desc: "Discover single-hair squirrel brushes and mineral pigments used to paint intricate court narratives for centuries."
      },
      {
        title: "Artisan Reciprocity & Exhibition",
        img: "/gallery/india/40.png",
        desc: "Host a collaborative pop-up exhibition celebrating both student pieces and traditional community creations."
      }
    ],
    itineraryDays: [
      { day: "Day 01 - 02", title: "Jaipur Foundations & Museum Immersion", desc: "Orientation, Anokhi Museum of Hand Printing tour, and raw material exploration in old city artisan bazaars." },
      { day: "Day 03 - 04", title: "Bagru Village Block Printing Apprenticeship", desc: "Intensive 2-day residency with master printers, cutting custom wooden blocks and printing continuous organic textiles." },
      { day: "Day 05 - 06", title: "Blue Pottery & Miniature Studio Labs", desc: "Hands-on molding, glazing, firing, and delicate brushwork training under award-winning craft families." },
      { day: "Day 07 - 08", title: "Curated Showcase & Final Critique", desc: "Student portfolio assembly, collaborative showcase with local artisans, and farewell banquet." }
    ]
  },
  "north-india-photo": {
    id: "north-india-photo",
    title: "North India Photo Program",
    subtitle: "Varanasi Dawn Ghats, Taj Mahal & Desert Visual Storytelling",
    duration: "10 Days",
    country: "INDIA",
    region: "Delhi, Agra, Varanasi, Jodhpur",
    heroImg: "/gallery/programs/north-india-photo.png",
    overviewParas: [
      "Capture the captivating spirit of North India under the guidance of acclaimed documentary photographers. From mystical dawn boat journeys on the sacred Ganges to the peerless symmetry of the Taj Mahal, every day offers unforgettable visual storytelling opportunities.",
      "Learn professional camera techniques, ethical documentary portraiture, and master lighting in historic palaces, colorful desert bazaars, and ancient alleyways.",
      "Each participant builds a curated photo essay, receiving daily constructive critique, technical feedback, and digital editing sessions."
    ],
    experiences: [
      {
        title: "Varanasi Dawn on the Ganges",
        img: "/gallery/india/41.png",
        desc: "Glide past sacred bathing ghats at first light, capturing timeless morning prayers and spiritual reflections."
      },
      {
        title: "Taj Mahal Golden Hour",
        img: "/gallery/india/45.png",
        desc: "Photograph the white marble monument from serene viewpoint angles across the Yamuna River at sunrise and sunset."
      },
      {
        title: "Jodhpur Cobalt Street Photography",
        img: "/gallery/india/40.png",
        desc: "Navigate narrow indigo passages, framing candid portraits, dynamic architectural angles, and vibrant bazaars."
      },
      {
        title: "Editorial Critique & Photobook",
        img: "/gallery/india/43.png",
        desc: "Daily sequencing and curation sessions concluding with a printed group photobook documenting the journey."
      }
    ],
    itineraryDays: [
      { day: "Day 01 - 02", title: "Delhi Urban Contrasts & Street Life", desc: "Old Delhi spice market street shoots, architectural framing at Humayun’s Tomb, and evening photo review." },
      { day: "Day 03 - 04", title: "Agra & The Timeless Taj Mahal", desc: "Dawn shoot at the Taj Mahal, Agra Fort geometry studies, and sunset reflections from Mehtab Bagh." },
      { day: "Day 05 - 07", title: "Varanasi: River, Ritual & Sacred Fire", desc: "Sunrise boat photography on the Ganges, alleyway environmental portraits, and dusk Ganga Aarti ceremonies." },
      { day: "Day 08 - 10", title: "Jodhpur Blue Citadel & Exhibition", desc: "Mehrangarh Fort golden hour shoots, indigo alley portraits, final photobook edit, and community critique." }
    ]
  },
  "himalayan-photo": {
    id: "himalayan-photo",
    title: "Himalayan Photo Expedition",
    subtitle: "High Mountain Passes, Sacred Monasteries & Astro-Photography",
    duration: "14 Days",
    country: "INDIA",
    region: "Ladakh & Himachal Pradesh (Leh, Nubra, Pangong Tso)",
    heroImg: "/gallery/india/43.png",
    overviewParas: [
      "Ascend into the breathtaking high-altitude wilderness of the Indian Himalayas on a 14-day photography expedition across dramatic glacial valleys, cobalt alpine lakes, and cliff-clinging Buddhist gompas.",
      "Explore Ladakh, the land of high mountain passes, capturing the stark beauty of the cold desert, ancient chortens, and vibrant monastic festivals rich with ceremonial masks and horns.",
      "With crystal-clear mountain atmospheres free from light pollution, participants master landscape composition, long-exposure astrophotography, and documentary portraiture among Himalayan communities."
    ],
    experiences: [
      {
        title: "Pangong Tso Alpine Reflections",
        img: "/gallery/india/43.png",
        desc: "Frame shifting turquoise colors of the world’s highest saltwater lake flanked by snowcapped Himalayan peaks."
      },
      {
        title: "Monastery Interiors & Portraits",
        img: "/gallery/india/41.png",
        desc: "Document morning Buddhist chants and timeless ritual ceremonies within centuries-old cliffside gompas."
      },
      {
        title: "High-Altitude Milky Way Astrophotography",
        img: "/gallery/about-page/transform/cross-2.png",
        desc: "Capture pristine night skies, illuminated prayer flags, and mountain silhouettes under zero light pollution."
      },
      {
        title: "Nubra Valley Sand Dunes & Bactrian Camels",
        img: "/gallery/india/40.png",
        desc: "Photograph the surreal juxtapositions of white sand dunes surrounded by towering glaciated mountain ranges."
      }
    ],
    itineraryDays: [
      { day: "Day 01 - 03", title: "Acclimatization in Leh & Indus Monasteries", desc: "Gradual altitude adjustment, Shanti Stupa sunset shots, and portraiture at Thiksey and Hemis Gompas." },
      { day: "Day 04 - 07", title: "Khardung La Pass & Nubra Valley", desc: "Cross one of Earth’s highest motorable passes, photograph double-humped camels on Hunder dunes, and capture Diskit Monastery." },
      { day: "Day 08 - 11", title: "Pangong Tso High Altitude Lakescape", desc: "Journey along the Changthang plateau, lakeside sunrise landscape studies, and night-sky astrophotography workshop." },
      { day: "Day 12 - 14", title: "Leh Market Street Photography & Final Gallery", desc: "Heritage Leh market candid street shoots, final photobook compilation, exhibition showcase, and departure." }
    ]
  }
};

export default function ProgramDetailPage() {
  const { id: paramId } = useParams();
  const location = useLocation();

  // Normalize path to detect which program to render
  const pathClean = location.pathname.toLowerCase().replace(/^\//, '').replace(/\.html$/, '');

  let resolvedKey = 'rajasthan'; // Default
  if (paramId && programDatabase[paramId]) {
    resolvedKey = paramId;
  } else if (pathClean.includes('rajasthan')) {
    resolvedKey = 'rajasthan';
  } else if (pathClean.includes('artistic')) {
    resolvedKey = 'artistic';
  } else if (pathClean.includes('north-india') || pathClean.includes('photo-program')) {
    resolvedKey = 'north-india-photo';
  } else if (pathClean.includes('himalayan')) {
    resolvedKey = 'himalayan-photo';
  } else if (programDatabase[pathClean]) {
    resolvedKey = pathClean;
  }

  if (resolvedKey === 'rajasthan') {
    return <RajasthanPage />;
  }

  if (resolvedKey === 'artistic' || resolvedKey === 'artistic-immersion') {
    return <ArtisticImmersionPage />;
  }

  if (resolvedKey === 'north-india-photo' || resolvedKey === 'north-india-photo-program') {
    return <NorthIndiaPhotoPage />;
  }

  if (resolvedKey === 'himalayan' || resolvedKey === 'himalayan-photo' || resolvedKey === 'himalayan-photo-expedition') {
    return <HimalayanPhotoPage />;
  }

  const program = programDatabase[resolvedKey] || programDatabase.rajasthan;
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  return (
    <main 
      style={{ 
        backgroundImage: 'url("/gallery/india/24.png")',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        backgroundColor: '#fbf8ee',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        color: '#2b2707'
      }}
    >
      {/* ===== Hero Banner Image ===== */}
      <div 
        className="itinerary-hero" 
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          maxHeight: '520px',
          backgroundColor: '#3a3400'
        }}
      >
        <img 
          src={program.heroImg} 
          alt={program.title}
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '520px',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            e.target.src = '/gallery/programs/rajasthan.png';
          }}
        />
      </div>

      {/* ===== Elevated Editorial Content Box ===== */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1rem' }}>
          <div 
            className="itinerary-box p-4 p-md-5 rounded shadow position-relative z-1"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 15px 40px rgba(58, 51, 0, 0.12)',
              marginTop: '-50px',
              border: '1px solid rgba(117, 111, 79, 0.15)'
            }}
          >
            {/* Title & Subtitle */}
            <h1 
              className="main-heading mb-3 text-uppercase" 
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#3a3300',
                letterSpacing: '0.04em',
                lineHeight: 1.2
              }}
            >
              {program.title}
            </h1>

            <p 
              className="fs-4 fst-italic mb-4" 
              style={{
                color: '#756f4f',
                fontWeight: 600,
                lineHeight: 1.5,
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)'
              }}
            >
              {program.subtitle}
            </p>

            {/* Program Quick Specs Badges */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem 1.4rem',
                backgroundColor: '#f9f6ed',
                borderRadius: '10px',
                borderLeft: '4px solid #3a3300',
                marginBottom: '2.5rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#756f4f', display: 'block', fontWeight: 700 }}>Duration</span>
                <strong style={{ fontSize: '1rem', color: '#3a3300' }}>{program.duration}</strong>
              </div>
              <div style={{ borderLeft: '1px solid #e2ddc7', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#756f4f', display: 'block', fontWeight: 700 }}>Destination</span>
                <strong style={{ fontSize: '1rem', color: '#3a3300' }}>{program.country}</strong>
              </div>
              <div style={{ borderLeft: '1px solid #e2ddc7', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#756f4f', display: 'block', fontWeight: 700 }}>Region</span>
                <strong style={{ fontSize: '1rem', color: '#3a3300' }}>{program.region}</strong>
              </div>
              <div style={{ borderLeft: '1px solid #e2ddc7', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#756f4f', display: 'block', fontWeight: 700 }}>Style</span>
                <strong style={{ fontSize: '1rem', color: '#3a3300' }}>Experiential Travel</strong>
              </div>
            </div>

            {/* Editorial Overview Text */}
            <div className="text-content fs-5 lh-lg" style={{ color: '#4a4632', marginBottom: '3rem' }}>
              {program.overviewParas.map((para, i) => (
                <p key={i} style={{ marginBottom: '1.4rem', fontSize: '1.08rem', lineHeight: '1.85' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Key Experiences Grid */}
            <div style={{ marginBottom: '3.5rem' }}>
              <h2 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: '1.75rem',
                  color: '#3a3300',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  borderBottom: '2px solid #ede3ab',
                  paddingBottom: '0.6rem'
                }}
              >
                Key Experiences & Highlights
              </h2>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {program.experiences.map((exp, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#fbfaf4',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(117, 111, 79, 0.15)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(58, 51, 0, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)';
                    }}
                  >
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <img 
                        src={exp.img} 
                        alt={exp.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = '/gallery/india/40.png'; }}
                      />
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#3a3300', marginBottom: '0.5rem', fontWeight: 700 }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#5f5848', lineHeight: '1.6', margin: 0 }}>
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Expedition Outline */}
            <div style={{ marginBottom: '3.5rem' }}>
              <h2 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: '1.75rem',
                  color: '#3a3300',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  borderBottom: '2px solid #ede3ab',
                  paddingBottom: '0.6rem'
                }}
              >
                Expedition Itinerary
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {program.itineraryDays.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveDayIndex(idx === activeDayIndex ? -1 : idx)}
                    style={{
                      backgroundColor: idx === activeDayIndex ? '#f7f4ea' : '#ffffff',
                      borderRadius: '10px',
                      padding: '1.2rem 1.5rem',
                      border: '1px solid rgba(117, 111, 79, 0.2)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span 
                          style={{
                            backgroundColor: '#3a3400',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {item.day}
                        </span>
                        <h4 style={{ margin: 0, fontSize: '1.08rem', color: '#3a3300', fontWeight: 600 }}>
                          {item.title}
                        </h4>
                      </div>
                      <span style={{ fontSize: '1.2rem', color: '#756f4f', fontWeight: 700 }}>
                        {idx === activeDayIndex ? '−' : '+'}
                      </span>
                    </div>

                    {idx === activeDayIndex && (
                      <p style={{ marginTop: '0.8rem', marginBottom: 0, fontSize: '0.96rem', color: '#5f5848', lineHeight: '1.7', borderTop: '1px solid #e9e4d2', paddingTop: '0.8rem' }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Plan This Journey / CTA Banner */}
            <div 
              style={{
                backgroundColor: '#3a3400',
                color: '#ffffff',
                borderRadius: '14px',
                padding: '2.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(58, 51, 0, 0.25)'
              }}
            >
              <h3 
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  color: '#ede3ab',
                  marginBottom: '1rem',
                  fontWeight: 700
                }}
              >
                Plan Your {program.title}
              </h3>
              <p 
                style={{
                  fontSize: '1.05rem',
                  color: '#e4dfd0',
                  maxWidth: '780px',
                  margin: '0 auto 1.8rem',
                  lineHeight: '1.7'
                }}
              >
                Whether you are an educator designing a tailored student trip, an independent traveler seeking authentic cultural immersion, or planning a group adventure, our travel specialists are here to customize your exact itinerary and dates.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link 
                  to="/contact"
                  style={{
                    backgroundColor: '#ede3ab',
                    color: '#2b2707',
                    fontWeight: 700,
                    padding: '12px 32px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.18)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ede3ab'; }}
                >
                  Request Full Itinerary & Quote
                </Link>
                <Link 
                  to="/india"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #ede3ab',
                    color: '#ede3ab',
                    fontWeight: 700,
                    padding: '10px 28px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(237, 227, 171, 0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  Explore All India Programs
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FAQ Module ===== */}
      <FaqSection />
    </main>
  );
}
