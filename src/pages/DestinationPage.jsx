import React from 'react';
import { useParams } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import IndiaPage from './IndiaPage';
import NepalPage from './NepalPage';
import BhutanPage from './BhutanPage';
import SriLankaPage from './SriLankaPage';

const destinationsData = {
  india: {
    name: "India",
    tagline: "A Land of Boundless Diversity, Ancient Heritage & Living Traditions",
    heroImg: "gallery/india/24.png",
    overview: "India is a captivating mosaic of ancient traditions, diverse ecosystems, and vibrant modern innovation. From the royal fortresses of Rajasthan to the serene foothills of the Himalayas, students encounter hands-on service learning, artisan immersion, and cultural exchange.",
    programs: [
      {
        title: "Rajasthan Heritage & Immersion",
        desc: "Explore the golden sands of the Thar Desert, royal palaces of Jodhpur and Jaipur, and engage directly in village community initiatives.",
        link: "/program/rajasthan",
        img: "gallery/india/40.png"
      },
      {
        title: "Artistic Immersion",
        desc: "Apprentice with master block-printers, miniature painters, and pottery artisans preserving centuries-old creative crafts.",
        link: "/program/artistic",
        img: "gallery/india/42.png"
      },
      {
        title: "North India Photo Program",
        desc: "Master environmental portraits, landscape photography, and storytelling across Varanasi, Agra, and Delhi.",
        link: "/program/north-india-photo",
        img: "gallery/india/41.png"
      },
      {
        title: "Himalayan Photo Expedition",
        desc: "Document dramatic mountain passes, ancient monastic communities, and alpine wilderness in high-altitude Ladakh and Himachal.",
        link: "/program/himalayan-photo",
        img: "gallery/india/43.png"
      }
    ]
  },
  nepal: {
    name: "Nepal",
    tagline: "Roof of the World, Spiritual Sanctuary & Wilderness Adventure",
    heroImg: "gallery/home-page/23_1.png",
    overview: "Nestled beneath the majestic Annapurna and Everest ranges, Nepal offers profound opportunities for community service, river rafting, ecological preservation, and Sherpa cultural immersion.",
    programs: [
      {
        title: "Nepal: Trek, Raft & Service",
        desc: "A thrilling tri-element expedition combining white-water rafting, mountain trekking, and school building community service.",
        link: "/nepal-trek-raft-service",
        img: "gallery/home-page/23_1.png"
      },
      {
        title: "Nepali Village Life & Homestay",
        desc: "Live with local families in rural villages, supporting sustainable agricultural initiatives and rural education.",
        link: "/nepali-village-life",
        img: "gallery/about-page/transform/cross-1.png"
      },
      {
        title: "Poon Hill Himalayan Trek",
        desc: "Ascend through rhododendron forests to catch breathtaking sunrises illuminating Dhaulagiri and Machapuchare.",
        link: "/poon-hill-trek",
        img: "gallery/about-page/transform/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg.jpeg"
      },
      {
        title: "Nepal Yeti Expedition",
        desc: "An intensive high-altitude leadership and wilderness resilience journey exploring pristine glacial valleys.",
        link: "/nepal-yeti-expedition",
        img: "gallery/home-page/20.png"
      }
    ]
  },
  bhutan: {
    name: "Bhutan",
    tagline: "The Kingdom of Gross National Happiness & Sacred Peaks",
    heroImg: "gallery/india/24.png",
    overview: "Bhutan measures progress not by gross domestic product, but by Gross National Happiness. Explore ancient cliffside dzongs, intact Buddhist monasteries, and pristine carbon-negative forests.",
    programs: [
      {
        title: "Bhutan: Himalayan Harmony",
        desc: "Discover the cultural philosophies of Bhutan, hiking to sacred monasteries and interacting with Buddhist monks and rural scholars.",
        link: "/bhutan-himalayan-harmony",
        img: "gallery/about-page/transform/cross-2.png"
      },
      {
        title: "Tiger's Nest Discovery (Paro Taktsang)",
        desc: "Hike to the world-renowned cliffside Tiger's Nest monastery, learning ancient architectural techniques and sacred folklore.",
        link: "/program/bhutan-dragons-nest-discovery",
        img: "gallery/about-page/9.png"
      },
      {
        title: "Bhutan Cultural Adventure",
        desc: "Experience traditional archery tournaments, organic farm-to-table culinary arts, and pristine valley hikes across Thimphu and Punakha.",
        link: "/program/bhutan-cultural-adventure",
        img: "gallery/home-page/11.png"
      }
    ]
  },
  srilanka: {
    name: "Sri Lanka",
    tagline: "The Pearl of the Indian Ocean: Wildlife, Waves & Heritage",
    heroImg: "gallery/about-page/transform/cross-1.png",
    overview: "From mist-covered central tea plantations and ancient rock fortresses like Sigiriya to wildlife safaris and coastal conservation, Sri Lanka is a tropical classroom of wonder.",
    programs: [
      {
        title: "Wildlife & Waves",
        desc: "Encounter wild elephants in Minneriya, blue whales off Mirissa, and learn sustainable coastal surf stewardship.",
        link: "/program/sri-lanka-wildlife-waves",
        img: "gallery/home-page/12.png"
      },
      {
        title: "Community & Coastline Service",
        desc: "Participate in sea turtle sanctuary rehabilitation, mangrove reforestation, and coastal village educational projects.",
        link: "/program/sri-lanka-community-coastline",
        img: "gallery/about-page/social-responsibility/cross-1.png"
      },
      {
        title: "An Immersive Sri Lanka Experience",
        desc: "Journey from ancient Anuradhapura temples to lush Kandy hill stations and colonial Galle Fort.",
        link: "/program/an-immersive-sri-lanka-experience",
        img: "gallery/about-page/31.png"
      }
    ]
  }
};

export default function DestinationPage({ defaultDest }) {
  const params = useParams();
  const destKey = (params.id || defaultDest || 'india').toLowerCase();

  if (destKey === 'india') {
    return <IndiaPage />;
  }
  if (destKey === 'nepal') {
    return <NepalPage />;
  }
  if (destKey === 'bhutan') {
    return <BhutanPage />;
  }
  if (destKey === 'srilanka' || destKey === 'sri-lanka') {
    return <SriLankaPage />;
  }

  const dest = data?.destinations?.[destKey] || destinationsData[destKey] || destinationsData.india;
  const programsList = dest.itineraries || dest.programs || [];

  return (
    <main style={{ backgroundColor: '#fdfbf7', fontFamily: "'Poppins', sans-serif", color: '#4a4632' }}>
      {/* Hero */}
      <section style={{
        minHeight: '55vh',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("${dest.heroImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        padding: '6rem 1.5rem'
      }}>
        <h1 style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: 'clamp(3rem, 7vw, 5rem)',
          fontWeight: 800,
          color: '#ede3ab',
          letterSpacing: '0.08em',
          marginBottom: '0.8rem'
        }}>
          {dest.name}
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '750px', letterSpacing: '0.04em' }}>
          {dest.tagline}
        </p>
      </section>

      {/* Overview */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fcfaf2' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.4rem', color: '#3b3500', marginBottom: '1.5rem' }}>
            ABOUT {dest.name.toUpperCase()} EXPEDITIONS
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.85', color: '#5f5863', maxWidth: '950px', margin: '0 auto 4rem' }}>
            {dest.overview}
          </p>

          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '2rem', color: '#756f4f', marginBottom: '2.5rem' }}>
            FEATURED PROGRAMS & ITINERARIES
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            textAlign: 'left'
          }}>
            {programsList.map((prog, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(59, 53, 0, 0.08)',
                  border: '1px solid rgba(117, 111, 79, 0.15)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img 
                  src={prog.img} 
                  alt={prog.title} 
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/gallery/india/24.png'; }}
                />
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.3rem', color: '#3b3500', marginBottom: '0.8rem' }}>
                    {prog.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#5f5863', lineHeight: '1.65', marginBottom: '1.5rem', flex: 1 }}>
                    {prog.desc}
                  </p>
                  <a 
                    href={prog.link}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#3b3500',
                      color: '#ffffff',
                      padding: '0.65rem 1.4rem',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    EXPLORE ITINERARY →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
